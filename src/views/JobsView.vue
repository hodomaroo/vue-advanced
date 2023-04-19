<template>
  <div class="title">JOBS</div>
  <hr class="div-line" />
  <li class="job-item" v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </li>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    console.log("CREATE");
    this.FETCH_JOBS();
  },

  computed: {
    ...mapState(["jobs"]),
  },

  methods: {
    ...mapActions(["FETCH_JOBS"]),
  },
};
</script>

<style scoped>
.title {
  margin-top: 20px;
  font-size: 20px;
}

.job-item {
  list-style-type: none;
}

.div-line {
  margin-top: 10px;
  border: 0;
  border-top: 5px #42b883 dashed;
  height: 5px;
  width: 40%;
}
</style>
