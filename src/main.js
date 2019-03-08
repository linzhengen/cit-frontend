import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import { sync } from 'vuex-router-sync';
import plugins from '@/plugins';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ja';

import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/scss/font-awesome.scss';
import '@/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(plugins);
Vue.use(ElementUI, { locale });

sync(store, router, { moduleName: 'route' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
