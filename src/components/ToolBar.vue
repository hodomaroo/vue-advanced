<template>
  <div class="header" @click="navClickEvent">
    <router-link class="nav-bar" to="/news">News</router-link> |
    <router-link class="nav-bar" to="/asks">Asks</router-link> |
    <router-link class="nav-bar" to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    navClickEvent: function () {
      console.log("navigation Clicked!");
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 20px;
  background: #42b883;
  display: flex;
  padding: 8px;
  color: white;
  align-items: center;
  justify-content: center;
}
.header .router-link-exact-active {
  cursor: pointer;
  font-weight: bolder;
}
.header a {
  color: white;
  padding: 0 5px 0;
}
</style>
