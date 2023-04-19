import {
  fetchAsksList,
  fetchJobsList,
  fetchNewsList,
  fetchUser,
  fetchItem,
} from "../api/index.ts";

export default {
  FETCH_ASKS({ commit }) {
    fetchAsksList()
      .then(({ data }) => commit("SET_ASKS", data))
      .catch((err) => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((err) => console.log(err));
  },

  FETCH_NEWS(context) {
    fetchNewsList().then((response) => {
      context.commit("SET_NEWS", response.data);
    });
  },
  FETCH_USER(context, userName) {
    //   console.log(userName);
    fetchUser(userName).then((response) => {
      context.commit("SET_USER", response.data);
    });
  },

  FETCH_JOBS({ commit }) {
    fetchJobsList().then(({ data }) => {
      commit("SET_JOBS", data);
    });
  },
  WORLD_CLICK_EVENT(context, value) {
    console.log(value.target.__vnode.props.title);
  },

  WORLD_MOUSEOVER_EVENT(context, value) {
    context.commit("SET_OVER_LAND", value.target.__vnode.props.title);
  },
  WORLD_MOUSELEAVE_EVENT(context) {
    context.commit("SET_LEAVE_LAND");
  },

  WORLD_MOUSEMOVE_EVENT(context, value) {
    context.commit("SET_POS", [value.x, value.y]);
  },
};
