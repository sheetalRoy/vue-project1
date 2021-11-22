export default {
  setlogin(){
    console.log('login success')
  },
  setUserDetails(state, payload){
    state.users.push(payload);
    console.log(state.users)
  },
  setToken(state, payload){
    state.users.token = payload.token
    console.log(state.token)
  },
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};