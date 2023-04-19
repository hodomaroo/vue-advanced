<template>
  <svg-base :iconColor="gray">
    <world-low></world-low>
  </svg-base>
  <div
    id="lay"
    class="popup"
    :style="{
      position: 'absolute',
      display: countryName ? 'block' : 'None',
      left: mousePos.x - 30 + 'px',
      top: mousePos.y + 30 + 'px',
    }"
  >
    {{ countryName }}
  </div>
</template>

<script>
import WorldLow from "../assets/WorldLow.vue";
import SvgBase from "@/components/SvgBase.vue";
import { mapState } from "vuex";

export default {
  components: { WorldLow, SvgBase },
  computed: {
    ...mapState(["mousePos", "countryName"]),
  },
};
</script>

<style scoped>
.popup {
  border: solid 2px red;
  background: white;
  color: black;
  font-size: 20px;
}
</style>
