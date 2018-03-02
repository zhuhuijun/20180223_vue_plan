import * as Types from './types';
import {setStorage} from "./local";
export const mutations = {
  /**
   * 处理action中添加的计划
   * @param state 代表当前容器中的状态
   * @param plan
   */
  [Types.ADD_PLAIN](state, plan) {
    state.lists.push(plan);
    console.info(plan);
    setStorage(state);
  },
  /**
   * 增加总时间
   * @param state
   * @param n
   */
  [Types.ADD_TOTALTIME](state, n) {
    state.totalTime += parseInt(n);
    setStorage(state);

  },
  /**
   * 减少时间
   * @param state
   * @param n
   */
  [Types.REMOVE_TOTALTIME](state, n) {
    state.totalTime -= parseInt(n);
    setStorage(state);

  },
  /**
   * 移除计划
   * @param state
   * @param obj
   */
  [Types.REMOVE_PLAN](state, obj) {
    state.lists = state.lists.filter(item => item != obj);
    setStorage(state);
  }
};
