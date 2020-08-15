// Vue.component('my-hello', {
//   props: ['yourName'],
//   template: `<div>こんにちは、{{ yourName }}さん！</div>`,
// });

Vue.component('my-counter', {
  props: ['init'],
  template: `<div>現在値は{{ current }}です！
    <input type="button" @click="onclick" value="増やす" /></div>`,
  data: function () {
    return {
      current: this.init,
    };
  },
  methods: {
    onclick: function () {
      this.current++;
    },
  },
});

// Vue.component('my-hello', {
//   template: `<div title="result" class="main">こんにちは、Vue.js！</div>`,
// });

Vue.component('my-hello', {
  props: {
    yourName: {
      type: String,
      required: true,
    },
  },
  template: `<div>こんにちは、{{ yourName }}さん！</div>`,
});

Vue.component('my-counter', {
  props: ['step'],
  template: `<button type="button" @click="onclick">{{ step }}</button>`,
  methods: {
    onclick: function () {
      this.$emit('plus', Number(this.step));
    },
  },
});

Vue.component('my-child', {
  data() {
    return {
      message: '',
    };
  },
  template: `<p>子:{{ message }}</p>`,
  mounted() {
    this.$parent.message = '子から設定';
  },
});

new Vue({
  el: '#app',
  data: {
    current: 0,
    message: '',
  },
  methods: {
    onplus: function (e) {
      this.current += e;
    },
  },
  mounted() {
    this.$refs.child.message = '親から設定';
  },
  computed: {},
});
