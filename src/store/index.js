import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state =  {
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
