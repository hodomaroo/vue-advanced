import { createStore, mapState } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  state: {
    news: [],
    userData: undefined,
    jobs: [],
    countryName: undefined,
    mousePos: { x: undefined, y: undefined },
    asks: [],
    item: undefined,
  },

  mutations,
  actions,
});
