import Vue from 'vue';
import Vuex from 'vuex';
import {getStorage} from './local';
Vue.use(Vuex);
const state =getStorage||  {
  totalTime: 0,
  lists: []
};
import {actions} from "./actions";
import {mutations} from "./mutations";
import {getters} from "./getters";

export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
