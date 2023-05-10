import {createApp} from 'vue'
import router from './router/index.js'
import ElementUI from 'element-plus';
import * as ElIcons from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/index.css';


import App from './App.vue'


const app = createApp(App)

for(const name in ElIcons){
    app.component(name, ElIcons[name]);
}

app.use(ElementUI)
app.config.productionTip = false

app.use(router)

app.mount('#app')
