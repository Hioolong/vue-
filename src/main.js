import Vue from 'vue';//导入vue
import rootComponent from './component/App.vue';//导入根组件
new Vue({
    el:"#app",
    render(createElement){
        return createElement(rootComponent);//渲染根组件
    }
})
