import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
// 如果你的改了push还是没有生效，可以考虑改replace方法
// 修改路由replace方法,阻止重复点击报错
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
//1通过vue.use(插件)，安装插件
Vue.use(Router)
//3导出路由对象
export default new Router({
  //2配置路径和组件的映射关系
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }

  ],
  //将模式变成 history 使url看着更舒服
  mode: 'history'
})
