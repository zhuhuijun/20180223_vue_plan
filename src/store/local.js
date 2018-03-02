export const setStorage = function (data) {
  localStorage.setItem('list', JSON.stringify(data));
};
export const getStorage = function () {
  var ret = localStorage.getItem('list');
  return JSON.parse(ret);
};

