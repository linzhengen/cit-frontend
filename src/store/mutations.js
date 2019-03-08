/**
 * メニュー表示・非表示の切り替え
 * @param  {Object} state
 * @param  {Boolean} isShow
 */
/* eslint-disable import/prefer-default-export */
export const CHANGE_BURGER = (state, isShow) => {
  state.menuBurger = isShow;
};
