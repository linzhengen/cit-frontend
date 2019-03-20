import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import router from '@/router';
import store from '@/store/index';
import { sync } from 'vuex-router-sync';
import plugins from '@/plugins';
import VeeValidate from 'vee-validate';
import VueGoodTablePlugin from 'vue-good-table';

import 'font-awesome/scss/font-awesome.scss';
import '@/scss/app.scss';
import 'vue-good-table/dist/vue-good-table.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(plugins);
Vue.use(VeeValidate);
Vue.use(VueGoodTablePlugin);

sync(store, router, { moduleName: 'route' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
