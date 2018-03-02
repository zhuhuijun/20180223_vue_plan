import * as Types from './types';

/**
 * 行为的提交
 * @type {{[[Types.ADD_PLAIN]]: (function({commit: *}, *))}}
 */
export const actions = {
  //list代表添加的内容
  [Types.ADD_PLAIN]({commit}, list) {
    //list {time,date,comment}
    let plan = {
      avator: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=621215856,3110381572&fm=58',
      name: 'zhuhj',
      ...list
    };
    commit(Types.ADD_PLAIN, plan);
  },
  /**
   *
   * @param commit 增加时间
   * @param n
   */
  [Types.ADD_TOTALTIME]({commit}, n) {
    commit(Types.ADD_TOTALTIME, n);
  },
  /**
   * 移除计划
   * @param commit
   */
  [Types.REMOVE_PLAN]({commit}, list) {
    commit(Types.REMOVE_PLAN, list);
  },
  /**
   * 减少总时间
   * @param commit
   * @param n
   */
  [Types.REMOVE_TOTALTIME]({commit}, n) {
    commit(Types.REMOVE_TOTALTIME, n);
  }
}
