import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import Vant from 'vant'
import 'vant/lib/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.config.productionTip = false
app.use(router)
app.use(Vant)
app.use(Antd)
app.mount("#app")
