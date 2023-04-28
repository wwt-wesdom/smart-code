import {defineAsyncComponent} from 'vue'
// 默认A文件夹文件自动注册全局组件
export default {
  install(app) {
    // import.meta.glob是vite的api
    // import.meta.globEager新的vite版本已弃用
    const components = import.meta.glob('../components/**/*.vue')
    // 遍历组件模块实现自动注册
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的 name
      let keys =  key.split('/')
      const componentName = keys[keys.length - 1].split('.')[0]
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}

