<template>
  <svg
    @mousemove="landMousemoveEvent"
    xmlns="http://www.w3.org/2000/svg"
    :view-box="viewBox"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <slot></slot>
  </svg>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    viewBox: { type: String, default: "-169.6 -55.55 500 300" },
    iconName: { type: String, default: "" },
    width: { type: [Number, String], default: 1050 },
    height: { type: [Number, String], default: 700 },
    iconColor: { type: String, default: "currentColor" },
  },

  computed: {
    ...mapState(["countryName", "mousePos"]),
  },
  methods: {
    ...mapActions({ landMousemoveEvent: "WORLD_MOUSEMOVE_EVENT" }),
  },
};
</script>
<style>
.land:hover {
  fill: v-bind(iconColor);
}
</style>
