const pageWidth = 375;
const link = '/dist/src/marketing/index.html#/index';
const basicComp = [
  {title: '图片', type: '1', icon: 'icona-bianzu19'},
  {title: '文本', type: '2', icon: 'icona-wenzi_text43x'},
  {title: '富文本', type: '16', icon: 'icona-bianzu8'},
  {title: '按钮', type: '3', icon: 'iconqiehuananniu_switch-button'},
  {title: '透明按钮', type: '15', icon: 'icona-bianzu22'},
  {title: '底部悬浮', type: '4', icon: 'icona-bianzu23'},
  {title: '锚点', type: '5', icon: 'icona-huabanbeifen6'},
  {title: '锚点copy', type: '5', icon: 'icona-huabanbeifen6'},
];

const complexComp = [
  {title: '基金理财', type: '17', icon: 'icona-huabanbeifen7'},
];

const fieldOptions = [
  {label: '文本', value: 'text'},
  {label: '手机号', value: 'phone'},
  {label: '时间', value: 'time'},
  {label: '多选', value: 'multiple '},
  {label: '单选', value: 'single'},
];

const defaultPageViewList = [
  {
    id: getUuid(),
    active: true,
    list: [{
      id: getUuid(),
      selected: false,
      type: '0',
      title: '页面',
      pageTitle: '页面1',
      bgType: 'bgColor',
      bgColor: '',
      bgImg: ''
    }],
  }
];

const fontSizeOptions = [12, 14, 16, 20, 22, 24, 26, 30, 32, 34, 36, 38, 40];

// 根据组件type 映射设置属性组件名，
const componentSetNameMap = {
  '0': 'setPage',
  '1': 'setImg',
  '2': 'setText',
  '3': 'setBtn',
  '4': 'setBottomBtn',
  '5': 'setAnchorPoint',
  '6': 'setVideo',
  '7': 'setAudio',
  '8': 'setForm',
  '9': 'setImageCarousel',
  '10': 'setMarquee',
  '11': 'setService',
  '12': 'setDynamicNumber',
  '13': 'setCountDown',
  '14': 'setPanel',
  '16': 'setRichText',
  '17': 'setFundManagement',
};

// 根据组件type 映射组件名，
const componentCNameMap = {
  '1': 'cImg',
  '2': 'cText',
  '3': 'cBtn',
  '4': 'cBottomBtn',
  '5': 'cAnchorPoint',
  '6': 'cVideo',
  '7': 'cAudio',
  '8': 'cForm',
  '9': 'cImageCarousel',
  '10': 'cMarquee',
  '11': 'cService',
  '12': 'cDynamicNumber',
  '13': 'cCountDown',
  '14': 'cPanel',
  '15': 'cTransparentBtn',
  '16': 'cRichText',
  '17': 'cFundManagement',
};

function getUuid() {
  let seed = Date.now() + (Math.random()*1000000).toFixed(2); // 随机生成一个id
  return 'market' + '_' + seed;
}

// 事件参数集合
function getEventParams() {
  return {
    id: getUuid(),
    show: true,
    event: 'link',
    eventType: 'click',
    conditions: '', // 条件
    link: '',  // 链接
    imgPopLink: '', // 图片弹窗链接
    page: '', // 页面
    protocol: '', // 协议
    textPopTitle: '', // 文字弹窗标题
    textPopContent: '', // 文字弹窗内容-富文本
    popTitle: '',
    popContent: '',
    btnNum: '0',
    imgUrl: '', // 图片弹窗图片
    service: 'phone',
    serviceNum: '',
    point: '', // 锚点id
  }
}


// 公共参数集合
function getCustomParams() {
  return {
    alignment: 'left',
    selected: false,
    moving: false,
    top: 0, // 定位
    left: 0,
    sortTop: 0,
    sortLeft: 0,
    rTop: 0, // 相对高度
    rLeft: 0,
    rRight: 0,
    rBottom: 0,
    lockAspectRatio: false, // 锁定宽高比
    positionType: '1', // 位置
    layoutType: '1', // 布局
    zIndex: 0,  // 层级
    zIndexType: '', // 层级类型, 1：置于顶层，2、置于底层，3：上移一层，4：下移一层
  }
}

function getComponent(type) {
  let result = {};
  switch (type) {
    case '1':
      result = Object.assign({}, {
        id: getUuid(),
        title: '图片',
        type: '1',
        src: '',
        width: 375,
        height: 200,
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '2':
      result = Object.assign({}, {
        id: getUuid(),
        title: '文本',
        type: '2',
        text: '请输入文字',
        color: '#333',
        fontSize: 16,
        bgType: 'bgColor',
        bgImg: '',
        bgColor: '#fff',
        width: 180,
        height: 46,
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '16':
      result = Object.assign({}, {
        id: getUuid(),
        title: '富文本',
        type: '16',
        text: '请输入',
        bgType: 'bgColor',
        bgImg: '',
        bgColor: '#fff',
        width: 180,
        height: 46,
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '3':
      result = Object.assign({}, {
        id: getUuid(),
        title: '按钮',
        type: '3',
        text: '按钮',
        btnType: '1', // 1， 普通按钮， 2，文字按钮，3, 图片按钮
        color: '#ffffff',
        fontSize: 16,
        bgColor: '#f91d1d',
        radius: 23,
        width: 345,
        height: 46,
        bgImg: '',
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '15':
      result = Object.assign({}, {
        id: getUuid(),
        title: '透明按钮',
        type: '15',
        text: '透明按钮',
        width: 200,
        height: 46,
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '4':
      result = Object.assign({}, {
        id: getUuid(),
        title: '底部悬浮',
        type: '4',
        text: '底部悬浮',
        btnType: '1', // 1， 普通按钮， 2，文字按钮，3, 图片按钮
        color: '#fff',
        fontSize: 16,
        bgColor: '#F91D1D',
        radius: 0,
        width: pageWidth,
        height: 64,
        bgImg: '',
        eventParams: getEventParams(),
        click: true,
        firstScreenShow: true,
      }, getCustomParams());
      break;
    case '5':
      result = Object.assign({}, {
        id: getUuid(),
        title: '锚点',
        name: '锚点',
        width: pageWidth,
        height: 45,
        type: '5',
        click: false,
      }, getCustomParams());
      break;
    case '6':
      result = Object.assign({}, {
        id: getUuid(),
        title: '视频',
        type: '6',
        url: '//1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
        poster: '',
        width: '296px',
        height: '',
        click: false,
      }, getCustomParams());
      break;
    case '7':
      result = Object.assign({}, {
        id: getUuid(),
        title: '音频',
        type: '7',
        url: 'https://www.w3school.com.cn/i/horse.ogg',
        width: '296px',
        height: '50px',
        click: false,
      }, getCustomParams());
      break;
    case '8':
      result = Object.assign({}, {
        id: getUuid(),
        title: '表单',
        type: '8',
        fieldList: [
          {title: '', type: '文本', value: '', checkBoxValue: [], placeholder: '请输入提示文字', options: [{value: '1'}]}
        ],
        btnType: 'fillet',
        borderColor: '#006EFF',
        textColor: '',
        inputHeight: '30',
        btnName: '按钮',
        btnBgColor: '#006EFF',
        btnTextColor: '#fff',
        btnHeight: '40',
        bgType: 'bgColor',
        bgColor: '',
        bgImg: '',
        width: '296px',
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '9':
      result = Object.assign({}, {
        id: getUuid(),
        title: '图片轮播',
        type: '9',
        interval: 2,
        urlList: [],
        width: '296px', // 相对宽度
        eventParamsList: [],
        bgType: 'bgColor',
        bgImg: '',
        bgColor: '',
        click: true,
      }, getCustomParams());
      break;
    case '10':
      result = Object.assign({}, {
        id: getUuid(),
        title: '跑马灯',
        type: '10',
        direction: 'row', //方向
        textList: [
          {text: '请输入你要轮播的内容'}
        ],
        height: '50px',
        width: '296px', // 相对宽度
        color: '',
        fontSize: '12px',
        bgType: 'bgColor',
        bgColor: '',
        bgImg: '',
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
    case '11':
      result = Object.assign({}, {
        id: getUuid(),
        title: '咨询客服',
        type: '11',
        btnType: 'fillet',
        height: '50px',
        width: '296px', // 相对宽度
        phone: '',
        color: '#fff',
        fontSize: '12px',
        bgType: 'bgColor',
        bgColor: '#006EFF',
        bgImg: '',
        click: false,
      }, getCustomParams());
      break;
    case '12':
      result = Object.assign({}, {
        id: getUuid(),
        title: '动态数字',
        type: '12',
        text: '已有0人参加活动',
        currNum: 0,
        begin: 10,
        end: 1000,
        time: 1, // 数字变动时间间隔
        number: 100, // 每次变动的幅度
        direction: 'increase', // 递增递减
        height: '50px',
        width: '296px', // 相对宽度
        numColor: '#F5DA0C', // 数字颜色
        textColor: '', // 文字颜色
        numFontSize: '12px',
        textFontSize: '12px',
        bgType: 'bgColor',
        bgColor: '',
        bgImg: '',
        click: false,
      }, getCustomParams());
      break;
    case '13':
      result = Object.assign({}, {
        id: getUuid(),
        title: '倒计时',
        type: '13',
        time: '',
        timeFormat: ['天', '时', '分', '秒'],
        height: '50px',
        width: '296px', // 相对宽度
        numColor: '', // 数字颜色
        unitColor: '', // 单位颜色
        numFontSize: '12px',
        unitFontSize: '12px',
        bgType: 'bgColor',
        bgColor: '',
        numBgColor: '',
        bgImg: '',
        click: false,
      }, getCustomParams());
      break;
    case '14':
      result = Object.assign({}, {
        id: getUuid(),
        title: '折叠面板',
        type: '14',
        show: true,
        btnType: 'text',
        arrowColor: '', // 箭头颜色
        titleText: '请输入文字',
        contentText: '请输入文字',
        titleImg: '',
        contentImg: '',
        click: false,
      }, getCustomParams());
      break;
    case '17':
      result = Object.assign({}, {
        id: getUuid(),
        title: '基金理财',
        type: '17',
        cardType: '1', // 1， 样式1， 2，样式2，3, 自定义收益
        productId: '',
        productName: '基金产品名称',
        subtitle: '副标题',
        label: [
          {name: '标签', color: '#F91D1D'}
        ],
        showValue: '',
        showValueKey: '',
        incomeFontSize: 32,
        width: pageWidth - 30,
        height: 274,
        bgType: 'bgColor',
        bgImg: '',
        bgColor: '#fff',
        productTypes: [],
        btnStyle: {
          text: '立即查看',
          inner: true,
          btnType: '1', // 1， 普通按钮， 2，文字按钮，3, 图片按钮
          color: '#ffffff',
          fontSize: 12,
          bgColor: '#F91D1D',
          radius: 21,
          width: 289,
          height: 42,
          bgImg: '',
        },
        eventParams: getEventParams(),
        click: true,
      }, getCustomParams());
      break;
  }
  return result;
}

/**
 * 格式化时间
 */
function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return '';
  return ''
  // return moment(date).format(format)
}

/**
 * 格式化电话号码
 * @param phone
 * @return {string}
 */
function resetPhone(phone) {
  let str = String(phone);
  let len = str.length;
  let prev, next;
  if (len >= 7) {
    prev = str.slice(-len, -7);
    next = str.slice(-3);
    str = prev + "****" + next
  } else if (len < 7 && len >= 6) {
    prev = str.slice(-len, -4);
    next = str.slice(-2);
    str = prev + "**" + next
  }
  return str
}

function stringifyData(item) {
  return JSON.stringify(item)
}

function sortList(list, type1) {
  list.sort((a, b) => a[type1] - b[type1]);
  return list;
}

function getNum(str) {
  return str ? Number(str) : 0;
}

const customToolbar = [
  [{'header': 1}], // 标题h1
  [{'header': 2}], // 标题h2
  ['bold'], // 加粗
  ['italic'], // 斜体
  ['underline'], // 下划线
  ['strike'], // 贯穿线
  [{'color': []}], // 颜色
  [{'background': []}], // 背景色
  [{'list': 'ordered'}], // 列表
  [{'list': 'bullet'}], // 序号
  [{'align': 'left'}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}], // 居中
];

function formatImgUrl(url) {
  if (!url) return '';
  if (url.indexOf('http') >= 0) return url;
  if (url.indexOf('/tzt-managesystem') === 0) return url;
  return '/tzt-managesystem' + url
}

const enableStatusOptions = [
  {label: '启用', value: 0},
  {label: '禁用', value: 1}
];


export default {
  pageWidth,
  link,
  basicComp,
  complexComp,
  fieldOptions,
  defaultPageViewList,
  fontSizeOptions,
  componentSetNameMap,
  componentCNameMap,
  getUuid,
  getComponent,
  getEventParams,
  formatDate,
  resetPhone,
  customToolbar,
  formatImgUrl,
  stringifyData,
  sortList,
  getNum,
  enableStatusOptions,
}
