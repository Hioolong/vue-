// 导入axios和api
import axios from 'axios';
import apiconfig from '../js/api-config.js';

export default function (to,from,next) {
    axios.get(apiconfig.islogin).then(res => {
        let islogin = res.data.code == 'logined';
        let topage = to.name;
        // 如果要跳转到登录页面
        if(topage == 'l'){
            if(islogin){
                // 已经登录了
                next('/');
            }else{
                next();//允许访问
            }
        }else if(topage != 'l'){//跳转到其他页面
            if(islogin){
                next();//已经登录允许访问
            }else{
                next('/login');//如果没有登录就跳转到登录页面
            }
        }
    })
}