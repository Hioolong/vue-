// 导入第三方库
import Vue from 'vue';//导入vue
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';

//启用路由
Vue.use(VueRouter);
// 启用elementUI
Vue.use(ElementUI);

// 导入路由配置
import routerConfig from './route'; //写一个目录，会自动寻找index.js

//导入根组件
import rootComponent from './component/App.vue';

// 导入全局样式
import './less/index.less';

// 导入配置后的axios和api,并注入到vue原型里，将来在实例中通过this.来调用
import axios from './js/axios-config.js';
import api,{domain} from './js/api-config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$domain = domain;
// 设置全局导航守卫
import routerGuard from './route/guard.js';
const vueRouter = new VueRouter(routerConfig);
vueRouter.beforeEach(routerGuard);

new Vue({
    el:"#app",
    render(createElement){
        return createElement(rootComponent);//渲染根组件
    },
    router: vueRouter
})
