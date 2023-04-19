<template>
  <h2>News</h2>
  <div class="news-holder">
    <li
      class="news-item-holder"
      v-for="newsItem in this.$store.state.news"
      :key="newsItem.id"
    >
      <div class="news-item-title">{{ newsItem.title }}</div>

      <a :href="newsItem.url">URL</a>

      <router-link
        :to="`/user/${newsItem.user}`"
        :class="{ unclickable: !newsItem.user }"
        >{{ newsItem.user ? newsItem.user : "Unknown" }}</router-link
      >
    </li>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
h2 {
  border-bottom: 1px solid green;
  width: 20%;
  margin-left: 20px;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 15px;
}

.news-holder {
  text-align: left;
  display: flex;
  flex-direction: column;
}

.news-item-title.news-item-title {
  font-size: 15px;
  width: 60%;
}

.news-item-holder a {
  font-size: 15px;
  width: 20%;
  text-decoration: none;
  color: black;
}

.unclickable {
  pointer-events: none;
}

.news-item-holder {
  display: flex;
  padding-left: 20px;
  flex-direction: row;
  border-bottom: solid gray 1px;

  height: 50px;
  line-height: 50px;
}
</style>
