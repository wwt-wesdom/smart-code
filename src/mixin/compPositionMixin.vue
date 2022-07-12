<template>
  
</template>

<script>
  import interact from 'interactjs'
  import config from '../config/config'; // 页面宽度，静态属性
  const {pageWidth, stringifyData, sortList} = config;
  export default {
    name: "compPositionMixin",
    data() {
      return {}
    },
    computed: {},
    methods: {
      stringifyData,
      sortList,
      /**
       * 拖拽事件配置
       */
      initInteract() {
        const that = this;
        interact('.activeCompInteract')
            .resizable({
              // resize from all edges and corners
              edges: {left: true, right: true, bottom: true, top: true},
              square: true,
              preserveAspectRatio: true,
              listeners: {
                move(event) {
                  that.handleEleMove(event)
                },
                end() {
                  that.handleEleMoveEnd();
                }
              },
              modifiers: [
                // keep the edges inside the parent
                interact.modifiers.restrictEdges({
                  outer: 'parent'
                }),

                // minimum size
                interact.modifiers.restrictSize({
                  min: {width: 50, height: 45}
                })
              ],
              inertia: true
            })
            .draggable({
              // enable inertial throwing
              inertia: true,
              // keep the element within the area of it's parent
              modifiers: [
                interact.modifiers.restrictRect({
                  restriction: 'parent',
                  endOnly: true
                }),
                interact.modifiers.snapSize({
                  targets: [interact.snappers.grid({x: 4, y: 4})],
                }),
              ],
              // enable autoScroll
              autoScroll: true,

              listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
                end(event) {
                  // 移动结束，向上吸附
                  that.adsorptionPosition();
                  that.editItem.moving = false;
                }
              }
            });

        function dragMoveListener(event) {
          let target = event.target;
          // keep the dragged position in the data-x/data-y attributes
          let x = (that.editItem.left || 0) + event.dx || 0;
          let y = (that.editItem.top || 0) + event.dy || 0;
          that.editItem.left = Number(Number(x).toFixed(0));
          that.editItem.top = Number(Number(y).toFixed(0));
          that.editItem.layoutType = '';
          // 拖动时实时改变相对位置信息
          that.setCompMoved();
          that.getRelativePosition();
        }

        // this function is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener
      },

      /**
       * 底部悬浮拖拽事件配置
       */
      initBottomInteract() {
        const that = this;
        interact('.activeBottomCompInteract')
            .resizable({
              // resize from all edges and corners
              edges: {left: true, right: true, bottom: false, top: true},
              square: true,
              preserveAspectRatio: true,
              listeners: {
                move(event) {
                  that.handleEleMove(event)
                },
                end() {
                  that.handleEleMoveEnd();
                }
              },
              modifiers: [
                // keep the edges inside the parent
                interact.modifiers.restrictEdges({
                  outer: 'parent'
                }),

                /*interact.modifiers.snapSize({
                  targets: [ interact.snappers.grid({ x: 4, y: 4 }) ],
                }),*/

                // minimum size
                interact.modifiers.restrictSize({
                  min: {width: 50, height: 45}
                })
              ],
              inertia: true
            })
            .draggable({
              // enable inertial throwing
              inertia: true,
              // keep the element within the area of it's parent
              modifiers: [
                interact.modifiers.restrictRect({
                  restriction: 'parent',
                  endOnly: true
                }),
                interact.modifiers.snapSize({
                  targets: [interact.snappers.grid({x: 1, y: 1})],
                }),
              ],
              // enable autoScroll
              autoScroll: true,

              listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
                end(event) {
                  // 移动结束，向上吸附
                  that.adsorptionPosition();
                  that.editItem.moving = false;
                }
              }
            });

        // 底部悬浮按钮
        function dragMoveListener(event) {
          let target = event.target;
          // keep the dragged position in the data-x/data-y attributes
          let x = (that.editItem.left || 0) + event.dx || 0;
          that.editItem.left = Number(x.toFixed(0));
          // that.editItem.top = Number(y.toFixed(0));
          that.editItem.layoutType = '';
          // 拖动时实时改变相对位置信息
          that.setCompMoved();
          that.getRelativePosition();
        }

        // this function is used later in the resizing and gesture demos
        window.dragMoveListener = dragMoveListener
      },

      /**
       * 元素改变大小时处理函数
       */
      handleEleMove(event) {
        if (this.editItem.type === '17') return;
        let x = (this.editItem.left || 0);
        let y = (this.editItem.top || 0);
        let width = event.rect.width.toFixed(0);
        let height = event.rect.height.toFixed(0);
        if (this.editItem.lockAspectRatio) {
          let {left, top, right, bottom} = event.edges;
          let ratio = Number((this.editItem.width / this.editItem.height).toFixed(3));
          if ((left && top && !right && !bottom)
              || (!left && !top && right && !bottom)) {
            // 左上角 左，右
            x += event.deltaRect.left;
            y += Number((event.deltaRect.left / ratio).toFixed(0));
            this.editItem.width = width * 1;
            this.editItem.height = Number((width / ratio).toFixed(0));
          } else if (!left && top && right && !bottom) {
            // 右上角 true
            x = null;
            y += event.deltaRect.top;
            this.editItem.height = height * 1;
            this.editItem.width = Number((height * ratio).toFixed(0));
          } else if (left && !top && !right && bottom) {
            // 左下角 true
            x += event.deltaRect.left;
            y = null;
            this.editItem.width = width * 1;
            this.editItem.height = Number((width / ratio).toFixed(0));
          } else if ((!left && !top && right && bottom) || (!left && !top && !right && bottom)) {
            // 右下角， 下
            x += Number((event.deltaRect.top * ratio).toFixed(0));
            y += event.deltaRect.top;
            this.editItem.height = height * 1;
            this.editItem.width = Number((height * ratio).toFixed(0));
          } else if ((!left && top && !right && !bottom)) {
            // 上
            x = null;
            y += event.deltaRect.top;
            this.editItem.height = height * 1;
            this.editItem.width = Number((height * ratio).toFixed(0));
          } else if (left && !top && !right && !bottom) {
            // 左
            x += event.deltaRect.left;
            y = null;
            this.editItem.width = width * 1;
            this.editItem.height = Number((width / ratio).toFixed(0));
          }
        } else {
          x += event.deltaRect.left;
          y += event.deltaRect.top;
          this.editItem.width = width * 1;
          this.editItem.height = height * 1;
        }
        this.setRatioLeftTop(x, y);
        this.getRelativePosition()
      },

      setRatioLeftTop(x, y) {
        if (x) this.editItem.left = Number(Number(x).toFixed(0));
        if (y) this.editItem.top = Number(Number(y).toFixed(0));
      },

      /**
       * 元素拖动改变大小结束后处理函数
       */
      handleEleMoveEnd() {
        if (this.editItem.lockAspectRatio) {
          let ratio = Number((this.editItem.width / this.editItem.height).toFixed(2));
          if (this.editItem.width > pageWidth) {
            this.editItem.width = pageWidth - this.editItem.left;
            this.editItem.height = Number((this.editItem.width / ratio).toFixed(0));
          }
        }
      },

      /**
       * 获取当前元素的相对位置，四个位置，left,top,right,bottom
       * 1、判断当前元素是否有重叠，上下重叠，左右重叠
       * 2、上下有重叠才会产生左右重叠，若上下重叠，判断左右是否重叠
       */
      getRelativePosition() {
        if (!this.editItem) return;
        this.editItem.sortTop = this.editItem.top + this.editItem.height;
        this.editItem.sortLeft = this.editItem.left + this.editItem.width;
        let list = [...this.source];
        this.getRelativeLeft(list);
        this.getRelativeTop(list);
        this.getRelativeRight(list);
        this.getRelativeBottom(list);
      },

      /**
       * 计算当前组件的上下左右
       * 计算left: 看当前元素前一项是否有数据且在x轴有重叠，有数据但是x轴没有重叠，指针+1
       */
      getRelativeLeft(list) {
        list = this.sortList(list, 'sortLeft');
        let currIndex = list.findIndex(item => item.id === this.editItem.id);
        let currItem = list[currIndex];
        if (currIndex === 0) {
          currItem.rLeft = currItem.left;
          return;
        }
        // 当当前项的与其前一项上下没有重叠，或者左右有重叠时，指针往前移动，获取移动后的项，重新和当前项做比较
        while (currIndex >= 0) {
          let preItem = list[currIndex - 1] || {};
          let rLeft = currItem.left - (preItem.left + preItem.width);
          let rTop = 0;
          if (currItem.top <= preItem.top) {
            rTop = Math.abs(currItem.top - preItem.top) - currItem.height;
          } else {
            rTop = Math.abs(currItem.top - preItem.top) - preItem.height;
          }
          if (rTop >= 0 || rLeft < 0) {
            // 上下没有重叠，且左右重叠则直接忽略
            currIndex--;
          } else {
            if (currIndex === 0) {
              currItem.rLeft = currItem.left;
            } else {
              currItem.rLeft = currItem.left - preItem.left - preItem.width;
            }
            break;
          }
        }
      },

      getRelativeTop(list) {
        list = this.sortList(list, 'sortTop');
        let currIndex = list.findIndex(item => item.id === this.editItem.id);
        let currItem = list[currIndex];
        if (currIndex === 0) {
          currItem.rTop = currItem.top;
          return;
        }
        // 当当前项的与其前一项上下没有重叠，或者左右有重叠时，指针往前移动，获取移动后的项，重新和当前项做比较
        while (currIndex >= 0) {
          let preItem = list[currIndex - 1] || {};
          // 判断是否上下重叠 rTop < = 0 则重叠
          let rTop = currItem.top - (preItem.top + preItem.height);
          let rLeft = 0;
          if (currItem.left <= preItem.left) {
            rLeft = Math.abs(currItem.left - preItem.left) - currItem.width;
          } else {
            rLeft = Math.abs(currItem.left - preItem.left) - preItem.width;
          }
          if (rLeft >= 0 || rTop < 0) {
            // 上下没有重叠，或者左右重叠则直接忽略
            currIndex--;
          } else {
            if (currIndex === 0) {
              currItem.rTop = currItem.top;
            } else {
              currItem.rTop = currItem.top - preItem.top - preItem.height;
            }
            break;
          }
        }
      },

      getRelativeRight(list) {
        list = this.sortList(list, 'sortLeft');
        let currIndex = list.findIndex(item => item.id === this.editItem.id);
        let currItem = list[currIndex];
        if (currIndex === list.length - 1) {
          currItem.rRight = pageWidth - Number(currItem.left) - currItem.width;
          return;
        }
        // 当当前项的与其前一项上下没有重叠，或者左右有重叠时，指针往前移动，获取移动后的项，重新和当前项做比较
        while (currIndex <= list.length - 1) {
          let nextItem = list[currIndex + 1] || {};
          let rRight = nextItem.left - (currItem.left + currItem.width);
          let rTop = 0;
          if (currItem.top <= nextItem.top) {
            rTop = Math.abs(currItem.top - nextItem.top) - currItem.height;
          } else {
            rTop = Math.abs(currItem.top - nextItem.top) - nextItem.height;
          }
          if (rTop >= 0 || rRight < 0) {
            // 上下有没有重叠，或者左右重叠则直接忽略
            currIndex++;
          } else {
            if (currIndex === list.length - 1) {
              currItem.rRight = pageWidth - Number(currItem.left) - currItem.width;
            } else {
              currItem.rRight = rRight;
            }
            break;
          }
        }
      },

      getRelativeBottom(list) {
        list = this.sortList(list, 'sortTop');
        let currIndex = list.findIndex(item => item.id === this.editItem.id);
        let currItem = list[currIndex];
        if (currIndex === list.length - 1) {
          currItem.rBottom = -1;
          return;
        }
        // 当当前项的与其前一项上下没有重叠，或者左右有重叠时，指针往前移动，获取移动后的项，重新和当前项做比较
        while (currIndex <= list.length - 1) {
          let nextItem = list[currIndex + 1] || {};
          let rTop = nextItem.top - (currItem.top + currItem.height);
          let rLeft = 0;
          if (currItem.left <= nextItem.left) {
            rLeft = Math.abs(currItem.left - nextItem.left) - currItem.width;
          } else {
            rLeft = Math.abs(currItem.left - nextItem.left) - nextItem.width;
          }
          if (rLeft >= 0 || rTop < 0) {
            // 上下有没有重叠，且左右重叠则直接忽略
            currIndex++;
          } else {
            if (currIndex === list.length - 1) {
              currItem.rBottom = -1;
            } else {
              currItem.rBottom = rTop;
            }
            break;
          }
        }
      },

      /**
       * 移动结束后做吸附效果
       */
      adsorptionPosition(left = 8, top = 8, right = 8, bottom = 8) {
        if (this.editItem.rTop <= top && this.editItem.rTop !== 0) {
          this.editItem.top = this.editItem.top - this.editItem.rTop;
        }
        if (this.editItem.rLeft <= left && this.editItem.rLeft !== 0) {
          this.editItem.left = this.editItem.left - this.editItem.rLeft;
        }
        if (this.editItem.rRight <= right && this.editItem.rRight !== 0) {
          this.editItem.left = this.editItem.left + this.editItem.rRight;
        }
        if (this.editItem.rBottom <= bottom && this.editItem.rBottom !== -1) {
          this.editItem.top = this.editItem.top + this.editItem.rBottom;
        }
        this.getRelativePosition()
      },

      /**
       * 设置移动模块的moving属性
       */
      setCompMoved() {
        this.pageViewList.forEach(item => {
          item.list.forEach(sItem => sItem.moving = false)
        });
        this.editItem.moving = true;
      },

      /**
       * 处理键盘事件(通过键盘调整位置)
       */
      handelKeyDown(code, e) {
        if (!this.editItem) return;
        let comp = this.editItem;
        if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(code)) {
          e.preventDefault()
        }
        switch (code) {
          case 'ArrowRight':
            if ((comp.left + comp.width) < pageWidth) {
              comp.left++
            }
            break;
          case 'ArrowLeft':
            if (comp.left > 0) {
              comp.left--
            }
            break;
          case 'ArrowUp':
            if (comp.top > 0) {
              comp.top--
            }
            break;
          case 'ArrowDown':
            comp.top++;
            break;
        }
        this.getRelativePosition();
      },
    },
  }
</script>

<style scoped>

</style>
