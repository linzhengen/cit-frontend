/* eslint-disable import/prefer-default-export */
export const toggleBurger = ({ commit }, isShow) => {
  commit('CHANGE_BURGER', isShow);
};
