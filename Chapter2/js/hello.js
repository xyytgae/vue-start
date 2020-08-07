let app = new Vue({
  el: '#app',
  data: {
    message: '皆さんこんにちは',
    url: 'https://wings.msn.to/',
    flag: false,
    email: 'Y-Suzuki@example.com',
    // current: new Date().toLocaleString(),
    current: new Date(),
    author: {
      name: '山田',
    },
    name: '',
    upperName: '',
  },
  computed: {
    localEmailC: function () {
      return this.email.split('@')[0].toLowerCase();
    },
    randomc: function () {
      return Math.random();
    },
  },
  created: function () {
    this.delayFunc = _.debounce(this.getUpper, 2000);
    // this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  watch: {
    name: function (newValue, oldValue) {
      this.delayFunc();
    },
  },
  methods: {
    getUpper: function () {
      this.upperName = this.name.toUpperCase();
    },
    localEmailM: function () {
      return this.email.split('@')[0].toLowerCase();
    },
    onclick: function () {
      this.current = new Date().toLocaleString();
    },
    randomm: function () {
      return Math.random();
    },
  },
  // beforeCreate() {
  //   console.log('beforeCreate...');
  // },
  // created() {
  //   console.log('created...');
  // },
  // beforeMount() {
  //   console.log('beforeMount...');
  // },
  // mounted() {
  //   console.log('mounted...');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate...');
  // },
  // updated() {
  //   console.log('Updated...');
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy...');
  // },
  // destroyed() {
  //   console.log('destroyed...');
  // },

  // let that = this;
  // this.timer = setInterval(function () {
  //   Vue.set(that.author, 'company', 'WINGSプロジェクト');
  // }, 3000);
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {
    Vue.set(this.author, 'company', 'WINGSプロジェクト');
    let that = this;
    this.$nextTick().then(function () {
      console.log(that.$el.textContent.includes(that.author.company));
    });
  },
});
// setTimeout(function () {
//   app.$destroy();
// }, 3000);
