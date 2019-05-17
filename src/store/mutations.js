import * as types from './mutation-types';
export default {
  //视窗高度
  [types.SET_WINDOWHEIGHT] (state, height) {
    state.windowHeight = height;
  },
  //设置地点
  [types.SET_ADDRESS] (state, address) {
    state.address = address;
  },
  [types.SET_HEIGHT] (state, height) {
    state.height = height;
  }
}