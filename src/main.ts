import {createApp} from 'vue'
// import './style.css'
import components from './components/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'
import './assets/css/custom-icon.css'
import './assets/css/custom.min.css'
import App from './App.vue'

createApp(App)
    .use(ElementPlus)
    .use(components)
    .mount('#app')
