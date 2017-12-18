// 导入登录页面和首页的组件
import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';
// 导入admin的子组件  商品组件
import GoodsContentListComponent from '../component/admin/goods/content/GoodsContentList.vue';
import GoodsContentAddComponent from '../component/admin/goods/content/GoodsContentAdd.vue';
import GoodsContentEditComponent from '../component/admin/goods/content/GoodsContentEdit.vue';

// 定义admin的子组件
let adminChildren = [
    { name: 'gcl', path: 'goods/content/list', component: GoodsContentListComponent},
    { name: 'gca', path: 'goods/content/add', component: GoodsContentAddComponent},
    { name: 'gce', path: 'goods/content/edit', component: GoodsContentEditComponent}
]
export default {
    routes: [
        // 登录
        { name: 'l', path: '/login', component: LoginComponent},
        // 首页
        { name: 'h', path: '/', component: AdminComponent,children:adminChildren}
    ]
}