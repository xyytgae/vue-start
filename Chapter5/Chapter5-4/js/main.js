// Vue.component('my-hello', {
//   template: '#my-hello',
//   data: function () {
//     return {
//       name: 'Vue.js',
//     };
//   },
// });

Vue.component('my-hello', {
  data: function () {
    return {
      name: 'Vue.js',
    };
  },
});

Vue.component('my-loading', {
  props: ['type'],
  render: function (h) {
    switch (this.type) {
      case 'text':
        return h('p', '...Now loading...');
      case 'image':
        return h('img', {
          attrs: {
            src: 'loading.gif',
            alt: 'loading',
          },
        });
      default:
        console.error('type属性はimage、textいずれかで設定してください');
        return null;
    }
  },
});

Vue.component('my-random', {
  functional: true,
  props: ['min', 'max'],
  render: function (h, context) {
    let min = context.props.min;
    let max = context.props.max;
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return h('p', result);
  },
});

new Vue({
  el: '#app',
  data: {},
  methods: {},
  computed: {},
});
