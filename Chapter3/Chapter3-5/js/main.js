Vue.config.keyCodes = {
  'no-change': 29,
};

new Vue({
  el: '#app',
  data: {
    result: '－',
    name: '匿名',
    pos: {
      left: 0,
      top: 0,
    },
    show: false,
  },
  methods: {
    onsubmit: function (e) {
      if (!confirm('送信しても良いですか？')) {
        e.preventDefault();
        return;
      }
    },
    onclick: function (e) {
      this.result = Math.floor(Math.random() * 100) + 1;
    },
    onParentClick: function (e) {
      console.log('#parent run...');
    },
    onMyClick: function (e) {
      console.log('#my run...');
    },
    onChildClick: function (e) {
      console.log('#child run...');
    },
    clear: function () {
      this.name = '';
    },
    help: function () {
      window.alert('氏名（漢字）を入力してください');
    },
    onleftclick: function () {
      this.show = false;
    },
    onrightclick: function (e) {
      this.pos = {
        top: e.pageY + 'px',
        left: e.pageX + 'px',
      };
      this.show = true;
    },
  },
  computed: {},
});
