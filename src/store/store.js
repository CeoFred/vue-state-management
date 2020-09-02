import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import * as modules from './modules/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules
});