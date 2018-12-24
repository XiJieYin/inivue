// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入iview -- 全部导入
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//iview 国际化
import locale from 'iview/dist/locale/ja-JP';
//定制主题
import '../my-theme/dist/iview.css';
Vue.use(iView, {
  transfer: true,
  size: 'large',
  locale
});

//按需导入iview --现在不用了
// import { Button, Table } from 'iview';
// Vue.component('Button', Button);
// Vue.component('Table', Table);
//iview 国际化
// import lang from 'iview/dist/locale/en-US';
// configure language
// locale(lang);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
