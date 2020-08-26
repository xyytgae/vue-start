<template>
  <span>記事コード：{{ aid }}</span>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      aid: 0,
    };
  },
  created() {
    this.aid = this.$route.params.aid;
  },
  watch: {
    $route(to) {
      this.aid = to.params.aid;
    },
  },
};
</script>
