import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  },
  state() {
    return {
      userId: 'c3',
      isLogin: false
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isLoggedIn(state){
      return state.isLogin;
    }
  }
});

export default store;