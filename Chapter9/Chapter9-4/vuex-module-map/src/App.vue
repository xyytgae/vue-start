<template>
  <div id="app">
    メイン：{{ mainUpdated }}
    <br />
    サブ：{{ subUpdated }}
    <br />
    <input type="button" value="更新" @click="onclick" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('main');

export default {
  name: 'App',
  computed: mapState({
    mainUpdated() {
      return this.$store.state.main.updated;
    },
    subUpdated() {
      return this.$store.state.sub.updated;
    },
    updated: (state) => state.main.updated,
  }),
  methods: {
    onclick() {
      this.setUpdated();
    },
    ...mapMutations(['setUpdated']),
    // setUpdated() {
    //   this.$store.commit("main/setUpdated");
    //   this.$store.commit("sub/setUpdated");
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
