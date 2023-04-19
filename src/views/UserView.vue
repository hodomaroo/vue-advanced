<template>
  <div class="user-form">
    <table>
      <tr>
        <th class="title" colspan="2">{{ user.id }}</th>
        <!-- <th class="title" colspan="2">{{ 유저.id }}</th> -->
      </tr>
      <tr>
        <td>Karma :</td>
        <td class="karma">{{ userData.karma }}</td>
      </tr>
      <tr>
        <td>생성일자 :</td>
        <td class="created">{{ userData.created }}</td>
      </tr>
      <tr>
        <td>Karma :</td>
        <td class="link">
          <a :href="`${userData.about}`">소개</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  created() {
    // console.log(this.$route.params.user);
    this.fetch_user(this.$route.params.user);
  },

  computed: {
    ...mapState(["userData"]),
    ...mapState({ user: "userData" }),
  },

  methods: {
    ...mapActions({ fetch_user: "FETCH_USER" }),
  },
};
</script>

<style scoped>
.user-form {
  background: white;
  border: solid #42b883 5px;
  border-radius: 20px;
  width: 50%;
  height: 700px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;

  flex-direction: column;
}

.user-form td {
  color: gray;
  margin-top: 20px;
}
.title {
  font-size: 20px;
  font-weight: bolder;
}
</style>
