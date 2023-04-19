<template>
  <div class="title">ASKS</div>
  <hr class="div-line" />

  <div class="first-row ask-holder">
    <div class="ask-title">제목</div>
    <small>작성자</small>
    <small>작성 시간</small>
  </div>
  <div v-for="ask in asks" :key="ask.id" class="ask-holder">
    <router-link class="ask-title" :to="`/asks/${ask.id}`">{{
      ask.title
    }}</router-link>
    <small>{{ ask.user }}</small>
    <small>{{ ask.time_ago }}</small>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.fetch_asks();
  },

  computed: {
    ...mapState(["asks"]),
  },

  methods: {
    ...mapActions({ fetch_asks: "FETCH_ASKS" }),
  },
};
</script>

<style scoped>
.ask-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: left;
  border-bottom: solid #42b883 1px;
  padding: 8px 0;
  color: black;
}

.ask-holder * {
  width: 25%;
  text-decoration: none;
}
.ask-holder .ask-title {
  width: 50%;
}
.ask-holder:not(.first-row) .ask-title {
  color: black;
}
.title {
  margin-top: 20px;
  font-size: 20px;
}
.div-line {
  margin-top: 10px;
  border: 0;
  border-top: 5px #42b883 dashed;
  height: 5px;
  width: 40%;
}

.first-row * {
  font-weight: bold;
  font-size: 20px;
  color: #42b883;
}
</style>
