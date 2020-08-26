<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="onclick">トップへ</button>
  </div>
</template>


<script>
export default {
  methods: {
    onclick() {
      this.$router.push("/");
    },
  },
};
</script>