<template>
  <section class="edit-activity-common">
    <div style="margin: 30px">
      <!--主体部分-->
      <div class="content">
        <!--左侧组件列表-->
        <left @handleDrag="handleDrag"></left>
        <!--中间预览模块-->
        <div class="c-center">
          <div class="view-page">
            <div class="view-page-center my-container">
              <span class="size-width">宽度：375px</span>
              <span class="size-height">高度：667px</span>
              <!--位置信息辅助工具，受overflow影响，放在外层-->
              <template v-if="editItem && editItem.moving && editItem.type !== '4'">
                <div class="position-info" :style="getPositionStyle">
                  <div>X：{{editItem.left}}</div>
                  <div>Y：{{editItem.top}}</div>
                  <div>宽：{{editItem.width}}</div>
                  <div>高：{{editItem.height}}</div>
                </div>
              </template>
              <!--右侧操作栏-->
              <template>
                <div class="undo-box">
                  <span @click="execute('undo')"
                        class="icona-huabanbeifen16 fz16 iconfont"
                        :class="[!history.canUndo ? 'cl-eee' : 'c888']"></span>
                  <span @click="execute('redo')"
                        class="icona-huabanbeifen15 fz16 iconfont"
                        :class="[!history.canRedo ? 'cl-eee' : 'c888']"></span>
                  <span @click="deleteItem"
                        class="icona-66666 fz16 iconfont"
                        :class="[!showDelete ? 'cl-eee' : 'c888']"></span>
                </div>
              </template>
              <div :class="pageTitleStyle"
                   class="view-page-center-title"
                   @click="selectComp(activePageView.list[0])">
                <span class="fz18 c333 fontB view-page-center-title-text">
                  {{activePageView.list[0].pageTitle}}
                </span>
              </div>
              <div class="clear-scroll scroll-box"
                   id="components-father-box">
                <div style="height: 10000px; position: relative; overflow-y: scroll"
                     :style="pageStyle"
                     @dragenter.prevent
                     @dragover.prevent
                     @drop="drop"
                     id="dropBox"
                     class="clear-scroll background-cover">
                  <shape v-for="(item, index) in dragAbleList"
                         style="position: absolute;"
                         class="activeCompInteract"
                         :key="item.id"
                         :data-index="index"
                         @mousedown.native="selectComp(item)"
                         :id="item.id"
                         :compStyle="item">
                    <component
                            style="pointer-events: none"
                            :is="getComponentName(item)"
                            :item="item">
                    </component>
                  </shape>
                </div>
              </div>
              <!--底部悬浮-->
              <div v-if="bottomBtnList.length > 0"
                   style="position:absolute;bottom: 0; left: 0; right: 0; height: 100px; overflow: hidden">
                <shape v-for="(item, index) in bottomBtnList"
                       style="position:absolute; bottom: 0"
                       class="activeBottomCompInteract"
                       :key="item.id"
                       :data-index="index"
                       @mousedown.native="selectComp(item)"
                       :id="item.id"
                       :compStyle="item">
                  <c-bottom-btn style="pointer-events: none"
                                :item="item">
                  </c-bottom-btn>
                </shape>
              </div>
            </div>
          </div>
          <!--多页面-新增页面-->
          <div class="add-page-view fs-12">
            <div v-for="(item, index) in pageViewList"
                 class="add-page-view-item"
                 @click="selectPageView(index)"
                 :class="[item.active ? 'active' : '']">{{item.list[0].pageTitle}}
            </div>
            <span class="add-page-view-item add" @click="addPageView">
              <i class="tzt-icon-plus"></i>
            </span>
          </div>
        </div>
        <!--右边设置属性-->
        <right ref="compRight" class="bgfff" :editItem="editItem" :activityId="leafletId"></right>
      </div>
      <!--底部按钮-->
      <div class="pb30">
        <el-button :loading="saveLoading" type="primary" @click="save(0)">保存</el-button>
        <el-button @click="activeStep = 1">上一步</el-button>
        <el-button :loading="previewLoading" @click="preview">预览</el-button>
      </div>

      <!--预览-->
      <!-- <preview-page :key="Date.now()" type="1" :leafletId="leafletId" :visiable.sync="previewVisible"></preview-page>-->

      <!--离开确认弹窗-->
      <el-dialog
              title="系统提示"
              :visible.sync="goBackPop"
              :before-close="closeGoBackPop"
              :close-on-click-modal="false"
              width="25%">
        <div class="c-flex align-items-center">
          <i class="tzt-icon-warning" style="font-size: 36px; color: #f7ba2a"></i>
          <span class="ml-10">您有更改尚未保存，是否确认离开？</span>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="next()">确 定</el-button>
          <el-button @click="closeGoBackPop">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </section>
</template>

<script>
  import HistoryStack from '../config/history';
  import config from '../config/config'

  import indexMixin from '../mixin/index';
  import compPositionMixin from '../mixin/compPositionMixin';
  import left from "../components/addOrEditTemplate/left";
  import right from "../components/addOrEditTemplate/right";
  import shape from '../components/shape/index'

  import cImg from "../components/editActivityCommmon/comp/cImg";
  import cText from "../components/editActivityCommmon/comp/cText";
  import cBtn from "../components/editActivityCommmon/comp/cBtn";
  import cAnchorPoint from "../components/editActivityCommmon/comp/cAnchorPoint";
  import cBottomBtn from "../components/editActivityCommmon/comp/cBottomBtn";
  import cTransparentBtn from "../components/editActivityCommmon/comp/cTransparentBtn";
  import cRichText from "../components/editActivityCommmon/comp/cRichText";

  export default {
    name: "Home",
    components: {
      left,
      right,
      shape,

      cImg,
      cText,
      cBtn,
      cAnchorPoint,
      cBottomBtn,
      cTransparentBtn,
      cRichText,
    },
    provide() {
      return {
        options: this.pointOptions,
        pageOptions: this.pageOptions,
        app: this
      }
    },
    mixins: [indexMixin, compPositionMixin],
    data() {
      return {
        stepData: ['填写基本信息', '编辑页面'],
        activeStep: 2,
        form: {
          leafletName: '',
          remarks: '',
          link: '',
        },
        formRules: {
          leafletName: [{required: true, message: '请输入页面（组）名称', trigger: 'blur'}],
        },
        pageViewList: JSON.parse(JSON.stringify(config.defaultPageViewList)),
        copyPageViewList: JSON.stringify(config.defaultPageViewList), // 保存一份用于对比是否更改
        history: new HistoryStack(10000),
        editItem: null,
        unOrReDo: false,
        // 锚点列表
        pointOptions: {
          list: []
        },
        // 页面列表
        pageOptions: {
          list: []
        },
        saveLoading: false,
        previewLoading: false,
        previewVisible: false,
        goBackPop: false,
        next: null,
        scrollHeight: 0,
        changed: false,
        currentComp: null,
        leafletId: '',
      }
    },
    computed: {
      /**
       * 计算是否显示删除按钮
       */
      showDelete() {
        if (this.editItem) {
          if (this.editItem.type === '0') {
            return this.pageViewList.length > 1
          } else {
            return true;
          }
        } else {
          return false;
        }
      },

      /**
       * 当前选中的页面
       */
      activePageView() {
        return this.pageViewList.find(item => item.active);
      },

      /**
       * 获取中间可拖动元素列表
       */
      dragAbleList() {
        return this.pageViewList.find(item => item.active).list.filter(item => item.type !== '4' && item.type !== '0');
      },

      /**
       * 获取底部悬浮可拖动元素列表
       */
      bottomBtnList() {
        return this.pageViewList.find(item => item.active).list.filter(item => item.type === '4');
      },

      getPositionStyle() {
        // 76, 106 为定位元素的实际宽高
        // 64 导航栏高度
        return {
          top: this.editItem.top + 64 - 106 - this.scrollHeight + 'px',
          left: this.editItem.left - 76 + 'px'
        }
      },

      pageStyle() {
        let params = this.activePageView.list[0];
        if (params.bgType === 'bgColor') {
          return {
            backgroundColor: params.bgColor
          }
        }
        return {
          backgroundImage: this.getBgImg(params.bgImg)
        }
      },

      pageTitleStyle() {
        return this.activePageView.list[0].selected ? 'comp-active' : ''
      }
    },
    created() {
      this.leafletId = this.$route.query.leafletId; // 活动id
      this.editOrAddtype = this.$route.query.type; // 页面类型，编辑/新增
    },
    mounted() {
      // 初始化拖拽
      this.initInteract();
      this.initBottomInteract();
      // 监听页面滑动的距离，组件下落时计算Y值
      this.handleScroll = () => {
        this.scrollHeight = document.querySelector('.scroll-box').scrollTop;
      };
      window.addEventListener("scroll", this.handleScroll, true);
      document.onkeydown = ((e) => {
        if (e.code === 'Delete' && this.showDelete) {
          this.deleteItem();
        } else {
          this.handelKeyDown(e.code, e)
        }
      });
    },
    methods: {
      /**
       * 下一步
       */
      nextStep() {
        this.$refs.infoForm.validate(valid => {
          if (valid) {
            this.activeStep = 2
          }
        })
      },

      /**
       * 页面属性设置获取动态组件的名称
       */
      getComponentName(item) {
        if (item.type === '4') return '';
        return config.componentCNameMap[item.type];
      },

      /**
       * 表单验证
       * 验证页面标题
       */
      checkPageTitle(value) {
        if (!value) {
          this.$message.error('页面标题不能为空');
          return false;
        } else if (value.length < 2) {
          this.$message.error('页面标题至少两个字符');
          return false;
        } else if (value.length > 10) {
          this.$message.error('页面标题最多10个字符');
          return false;
        }
        return true;
      },


      /**
       * 查找当前页面中最大的ZIndex值
       */
      getCurrentMaxZIndex(type) {
        // type === '4' 底部悬浮
        let source = type === '4' ? this.activePageView.list : this.dragAbleList;
        let list = [...source];
        if (type === '4') {
          list = list.slice(1);
        } else {
          this.bottomBtnList.forEach(item => item.zIndex += 1)
        }
        list.sort((a, b) => a.zIndex - b.zIndex);
        return list[list.length - 1].zIndex;
      },

      /**
       * 左侧拖拽事件
       */
      handleDrag(dragType) {
        this.dragType = dragType
      },

      /**
       * 父容器监听下落
       */
      drop(e) {
        this.handleAddComp(e);
      },

      /**
       * 添加组件
       */
      handleAddComp(e, index) {
        let cl = document.getElementById('dropBox').getBoundingClientRect();
        let item = config.getComponent(this.dragType);
        // type === '4' 底部悬浮
        if (this.bottomBtnList.length === 3 && item.type === '4') {
          this.$message.error('最多添加3个底部悬浮按钮');
          return;
        }
        item.top = parseInt((e.clientY - cl.y).toString());
        item.left = (config.pageWidth - item.width) / 2;
        if (index !== null && index !== undefined) {
          this.activePageView.list.splice(index, 0, item);
        } else {
          this.activePageView.list.push(item);
        }
        item.zIndex = this.getCurrentMaxZIndex(item.type) + 1;
      },

      /**
       * 初始化history-记录每一次变动的数据
       */
      intRecord() {
        this.history.record(this.stringifyData(this.pageViewList));
      },

      /**
       * 执行撤销还原操作
       */
      execute(cmd) {
        if ((cmd === 'undo' && !this.history.canUndo) || (cmd === 'redo' && !this.history.canRedo)) {
          return
        }
        this.unOrReDo = true;
        let snapshot = null;
        switch (cmd) {
          case 'undo':
            snapshot = this.history.undo();
            break;
          case 'redo':
            snapshot = this.history.redo();
            break;
          case 'clear':
            this.history.clear();
            break;
        }
        if (snapshot) {
          this.pageViewList = JSON.parse(snapshot);
        } else {
          this.pageViewList = JSON.parse(this.copyPageViewList);
        }
        setTimeout(() => {
          this.unOrReDo = false;
        }, 100)
      },

      /**
       * 删除操作
       */
      deleteItem() {
        // type === 0 选中的是页面标题即页面
        if (!this.editItem || Object.keys(this.editItem).length === 0) return;
        if (this.editItem.type === '0') {
          if (this.pageViewList.length > 1) {
            this.pageViewList = this.pageViewList.filter(item => !item.active);
            this.pageViewList[0].active = true;
          }
        } else {
          this.activePageView.list = this.activePageView.list.filter(item => item.id !== this.editItem.id);
        }
      },

      /**
       * 选择要编辑的模块
       */
      selectComp(comp) {
        // type = 4 底部悬浮
        this.source = comp.type === '4' ? this.bottomBtnList : this.dragAbleList;
        this.pageViewList.forEach(item => {
          item.list.forEach(sItem => sItem.selected = false)
        });
        comp.selected = true;
        // 重置右侧tab
        this.$refs.compRight.activeIndex = '1';
        this.$nextTick(() => {
          this.getRelativePosition();
        })
      },

      /**
       * 添加页面
       */
      addPageView() {
        let length = this.pageViewList.length;
        if (length >= 5) {
          this.$message.error('最多添加5个页面');
          return;
        }
        this.pageViewList.forEach(item => {
          item.active = false
        });
        this.pageViewList.push({
          active: true,
          id: config.getUuid(),
          list: [{
            id: config.getUuid(),
            type: '0',
            selected: false,
            title: '页面',
            pageTitle: '页面' + (length + 1),
            bgType: 'bgColor',
            bgColor: '',
            bgImg: ''
          }]
        });
      },

      /**
       * 多页面之间切换
       */
      selectPageView(selectIndex) {
        this.pageViewList.forEach((item, index) => {
          item.active = index === selectIndex;
        });
        document.querySelector('.scroll-box').scrollTo(0, 0)
      },

      /**
       * 关闭路由退出确认弹窗
       */
      closeGoBackPop() {
        this.goBackPop = false;
        this.next(false);
      },

      /**
       * 提交前做表单验证
       */
      formValidate() {
        let list = this.pageViewList;
        let result = true;
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          result = this.checkPageTitle(item.list[0].pageTitle);
          if (!result) {
            break;
          }
        }
        return result;
      },

      /**
       * 清空选中的组件的选中状态
       */
      clearSelectComp(content) {
        content = JSON.parse(JSON.stringify(content));
        content.forEach(item => {
          item.list.forEach(sItem => sItem.selected = false)
        });
        return content;
      },

      /**
       * 预览
       */
      preview() {
        this.save(this.editOrAddtype === 'edit' ? '' : 1)
      },

      /**
       * 保存
       */
      save(type) {
        if (!this.formValidate()) {
          return;
        }
        let content = this.clearSelectComp(this.pageViewList);
        console.log(content);
      }
    },
    watch: {
      pageViewList: {
        deep: true,
        handler(newValue, oldValue) {
          let content = this.clearSelectComp(this.pageViewList);
          // 判断是否有修改
          this.changed = this.copyPageViewList !== JSON.stringify(content);
          // 找出选中的组件
          this.editItem = this.activePageView.list.find(item => item.selected);
          if (!this.unOrReDo) {
            this.intRecord();
          }
          // 获取当前页面上所有的锚点
          this.pointOptions.list = this.activePageView.list.reduce((pre, item) => {
            if (item.title === '锚点') {
              pre.push({label: item.name, value: item.id})
            }
            return pre;
          }, []);
          // 获取所有页面
          this.pageOptions.list = this.pageViewList.reduce((pre, item) => {
            if (item.id !== this.activePageView.id) {
              pre.push({label: item.list[0].pageTitle, value: item.id});
            }
            return pre;
          }, []);
        }
      }
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll, true)
    },
    beforeRouteLeave(to, from, next) {
      if (!this.changed || to.path === '/login') {
        next();
      } else {
        this.next = next;
        this.goBackPop = true;
      }
    }
  }
</script>

<style scoped>

</style>
