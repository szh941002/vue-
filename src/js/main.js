// 导入vue库
import Vue from 'vue' ;
// 导入根组件
import AppComponent from '../component/App.vue' ;

// 渲染组件
new Vue({
    el : '#app',
    render(createElement){
        return createElement(AppComponent)
    }
});