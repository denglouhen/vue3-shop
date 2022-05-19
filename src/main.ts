import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import 'animate.css/animate.compat.css'
import {Button, Icon, Swipe, SwipeItem} from "vant";
import WOW from "wow.js";

const app = createApp(App)
app.use(Button).use(Icon).use(Swipe).use(SwipeItem);
app.use(store)
app.use(router)

app.config.globalProperties.$wow = WOW;
app.mount('#app');
