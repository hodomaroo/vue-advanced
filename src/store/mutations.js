export default {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASKS(state, asks) {
    state.asks = asks;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_USER(state, userData) {
    state.userData = userData;
  },
  SET_ITEM(state, itemData) {
    state.item = itemData;
  },
  SET_OVER_LAND(state, value) {
    state.countryName = value;
  },
  SET_LEAVE_LAND(state) {
    state.countryName = "";
  },
  SET_POS(state, position) {
    state.mousePos = { x: position[0], y: position[1] };
  },
};
