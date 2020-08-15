new Vue({
  el: '#app',
  data: {
    message: '',
    // path: 'http://www.web-deli.com/image/linkbanner_l.gif',
    path: './images/_wings.jpg',
    result: '',
    screenX: 0,
    screenY: 0,
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  },
  computed: {},
  methods: {
    onmouseenter: function () {
      this.path = 'http://www.web-deli.com/image/home_chara.gif';
    },
    onmouseleave: function () {
      this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
    },
    // onclick: function (e) {
    //   console.log(e);
    //   // this.message = new Date().toLocaleString();
    // },
    onmousein: function (e) {
      this.result += 'Enter:' + e.target.id + '<br />';
    },
    onmouseout: function (e) {
      this.result += 'Leave:' + e.target.id + '<br />';
    },
    onerror: function () {
      this.path = './images/noimage.jpg';
    },
    onmousemove: function (e) {
      this.screenX = e.screenX;
      this.screenY = e.screenY;
      this.pageX = e.pageX;
      this.pageY = e.pageY;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
    },
    onclick: function (message, e) {
      console.log(message);
      console.log(e);
    },
  },
});
