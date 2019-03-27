import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import router from '@/router';
import store from '@/store/index';
// import { sync } from 'vuex-router-sync';
import plugins from '@/plugins';
import VeeValidate, { Validator } from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueGoodTablePlugin from 'vue-good-table';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import 'font-awesome/scss/font-awesome.scss';
import '@/scss/app.scss';
import 'vue-good-table/dist/vue-good-table.css';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueApollo);
Vue.use(plugins);
Vue.use(VeeValidate);
Vue.use(VueGoodTablePlugin);

Validator.localize('zh-TW', zhTW);
// sync(store, router, { moduleName: 'route' });

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: new HttpLink({ uri: process.env.VUE_APP_API_URL }),
    cache: new InMemoryCache(),
  }),
});

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
}).$mount('#app');
