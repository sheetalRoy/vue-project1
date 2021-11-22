import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      users: [],
      token:null,
      iserror: false
    };
  },
  mutations,
  actions,
  getters
};
