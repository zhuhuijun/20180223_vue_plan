export const getters = {
    isShow(state) {
      var ret = Boolean(state.lists.length);
      console.info(ret);
      return ret;
    }
  };
  