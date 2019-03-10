import Vue from 'vue';
import Vuex from 'vuex';

import state from '@/store/state';
import * as getters from '@/store/getters';
import * as mutations from '@/store/mutations';
import * as actions from '@/store/actions';
import * as modules from '@/store/modules';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const plugins = [];

const store = new Vuex.Store({
  state, getters, actions, mutations, modules, plugins, strict,
});

export default store;
