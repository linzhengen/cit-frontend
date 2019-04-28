import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App';
import router from '@/router';
import store from '@/store/index';
import { sync } from 'vuex-router-sync';
import plugins from '@/plugins';
import VeeValidate, { Validator } from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import * as filters from '@/filters';
import {
  Table,
  TableColumn,
} from 'element-ui';
import 'font-awesome/scss/font-awesome.scss';
import '@/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueApollo);
Vue.use(plugins);
Vue.use(VeeValidate);
Vue.use(Table);
Vue.use(TableColumn);

// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Validator.localize('zh-TW', zhTW);
sync(store, router, { moduleName: 'route' });


const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    link: new HttpLink({ uri: process.env.VUE_APP_API_URL }),
    cache: new InMemoryCache(),
  }),
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
