// 导入登录页面和首页的组件
import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';

// 定义admin的子组件
// 导入商品组件
import GoodsRouteConfig from './goods.js';
let adminChildren = [...GoodsRouteConfig];
export default {
    routes: [
        // 登录
        { name: 'l', path: '/login', component: LoginComponent},
        // 首页
        { name: 'h', path: '/', component: AdminComponent,children:adminChildren}
    ]
}