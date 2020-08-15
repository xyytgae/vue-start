new Vue({
  el: '#app',
  data: {
    attrs: {
      size: 20,
      maxlength: 14,
      required: true,
    },
    text: '皆さん、こんにちは！',
    attr: 'width',
    size: 100,
    message: `<h3>WINGSプロジェクト</h3>
    <img src="https://www.web-deli.com/image/linkbanner_l.gif" alt="ロゴ" />`,
    name: '匿名',
    color: {
      backgroundColor: 'Aqua',
      color: 'Red',
    },
    size: {
      fontSize: '1.5em',
    },
    url: 'https://wings.msn.to/',
    color: true,
    isChange: true,
    colorClass: 'color',
    frameClass: 'frame',
  },
  methods: {},
  computed: {},
});
