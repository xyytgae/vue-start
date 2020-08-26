export default {
  namespaced: true,
  state: {
    updated: new Date().toTimeString(),
  },
  mutations: {
    setUpdated(state) {
      state.updated = new Date().toTimeString();
    },
  },
  getters: {
    localUpdated(state) {
      return state.updated;
    },
    hoge(state, getters, rootState) {
      return rootState.hoge;
    },
  },
  actions: {
    hogeAction(context) {
      context.commit('hoge', null, { root: true });
    },
  },
};
