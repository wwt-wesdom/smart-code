<template>
  <div class="right clear-scroll">
    <div class="nav-box">
            <span @click="handleNavSelect('1')" class="nav-item"
                  :class="[activeIndex === '1' ? 'nav-item-active' : '']">{{editItem && editItem.title || '样式'}}属性</span>
      <span @click="handleNavSelect('2')"
            class="nav-item ml-10"
            :class="[activeIndex === '2' ? 'nav-item-active' : '']"
            :style="{color: tabbarColor}">点击事件</span>
    </div>
    <div class="comp-attributes">
      <div v-show="activeIndex === '1'">
        <div v-if="editItem" class="fs-12">
          <!--页面属性-->
<!--          <component :key="editItem.id" :is="componentSetName" v-model="editItem"></component>-->
          <component :key="editItem.id" :is="componentSetName" v-on="editItem"></component>
          <!--通用属性-->
          <basic-settings v-if="editItem.type !== '0'"
                          v-on="editItem"
                          @layoutTypeChange="layoutTypeChange"
                          @zIndexTypeChange="zIndexTypeChange">
          </basic-settings>
        </div>
        <div v-else class="empty-comp">请选择组件</div>
      </div>
      <!--事件处理-->
      <div v-show="activeIndex === '2'">
        <div v-if="editItem">
          <event :compTitle="editItem.title" :activityId="activityId" v-model="editItem.eventParams"></event>
        </div>
        <div v-else class="empty-comp">请选择组件</div>
      </div>
    </div>
  </div>
</template>

<script>
  import backgroundSet from '../backgroundSet/backgroundSet'
  import config from '../../config/config';
  import event from "../event/event";
  import setPage from "../editActivityCommmon/setComp/setPage";
  import setImg from "../editActivityCommmon/setComp/setImg";
  import setText from "../editActivityCommmon/setComp/setText";
  import setBtn from "../editActivityCommmon/setComp/setBtn";
  import setBottomBtn from "../editActivityCommmon/setComp/setBottomBtn";
  import setAnchorPoint from "../editActivityCommmon/setComp/setAnchorPoint";
  import setRichText from "../editActivityCommmon/setComp/setRichText";
  import basicSettings from "../editActivityCommmon/setComp/basicSettings";

  const {pageWidth} = config;
  export default {
    name: "right",
    components: {
      event,
      backgroundSet,
      setPage,
      setImg,
      setText,
      setBtn,
      setBottomBtn,
      setAnchorPoint,
      setRichText,
      basicSettings,
    },
    inject: ['app'],
    data() {
      return {
        activeIndex: '1',
      }
    },
    props: {
      editItem: {
        require: true,
        default: undefined,
      },
      activityId: {
        type: String,
        require: true,
        default: '',
      },
    },
    computed: {
      /**
       * 页面属性设置获取动态组件的名称
       */
      componentSetName() {
        if (this.editItem) {
          return config.componentSetNameMap[this.editItem.type]
        } else {
          return '';
        }
      },

      /**
       * 计算tabbar栏颜色
       */
      tabbarColor() {
        return this.editItem && !this.editItem.click ? '#999' : '#333'
      },
    },
    created() {

    },
    update() {

    },
    mounted() {

    },
    methods: {
      /**
       * 右方tabbar栏切换
       */
      handleNavSelect(val) {
        if (this.editItem && !this.editItem.click) {
          return;
        }
        this.activeIndex = val
      },


      /**
       * 布局变动处理
       */
      layoutTypeChange(type) {
        if (type === '1') {
          this.editItem.left = (pageWidth - this.editItem.width) / 2
        } else if (type === '2') {
          this.editItem.left = 0
        } else if (type === '3') {
          this.editItem.left = pageWidth - this.editItem.width
        } else if (type === '4') {
          this.editItem.top = 0
        }
      },

      /**
       * 组件层级变动监听
       * 层级类型1：置于顶层，2、置于底层，3：上移一层，4：下移一层
       */
      zIndexTypeChange(type) {
        let source = this.editItem.type === '4' ? this.app.bottomBtnList : this.app.dragAbleList;
        let list = [...source];
        list.sort((a, b) => a.zIndex - b.zIndex);
        let first = list[0];
        let end = list[list.length - 1];
        let currIndex = list.findIndex(item => item.id === this.editItem.id);
        let curr = list[currIndex];
        let next = list[currIndex + 1];
        let pre = list[currIndex - 1];
        if (type === '1') {
          curr.zIndex = end.zIndex + 1;
        } else if (type === '2') {
          // 1 2 3 4
          // 2 3 3 4
          // 2 3 1 4
          // 1 2 3 4
          for (let i = 0; i < currIndex; i++) {
            list[i].zIndex += 1;
          }
          curr.zIndex = first.zIndex - 1;
        } else if (type === '3') {
          // 1 2 3 4
          // 1 2 4 3
          // 1 2 3 4
          if (next) {
            let zIndex = curr.zIndex;
            curr.zIndex = next.zIndex;
            next.zIndex = zIndex;
          }
        } else if (type === '4') {
          if (pre) {
            let zIndex = curr.zIndex;
            curr.zIndex = pre.zIndex;
            pre.zIndex = zIndex;
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
