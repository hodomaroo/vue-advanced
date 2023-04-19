<template>
  ItemView

  <div>{{ item }}</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.fetch_item(this.$route.params.id);
  },
  methods: {
    ...mapActions({ fetch_item: "FETCH_ITEM" }),
  },

  computed: {
    ...mapState(["item"]),
  },
};
</script>

<style></style>
