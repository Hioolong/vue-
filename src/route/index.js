import LoginComponent from '../component/login/Login.vue';
import AdminComponent from '../component/admin/Admin.vue';

export default {
    routes: [
        // 登录
        { name: 'l', path: '/login', component: LoginComponent},
        // 首页
        { name: 'h', path: '/', component: AdminComponent,children:[

        ]}
    ]
}