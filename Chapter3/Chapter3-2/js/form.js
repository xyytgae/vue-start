new Vue({
  el: '#app',
  data: {
    myName: '匿名',
    pet: 'いぬ',
    agree: true,
    os: ['Windows', 'macOS'],
    // os: '',
    unit: {},
    message: '',
    temperature: 0,
    memo: '',
    mails: [],
  },
  computed: {},
  methods: {
    onchange: function () {
      console.log('入力値は「' + this.memo + '」です。');
    },
    // onchange: function () {
    //   console.log(this.temperature.toFixed(1));
    // },

    // onchange: function () {
    //   let that = this;
    //   let fl = this.$refs.upfile.files[0];
    //   let data = new FormData();
    //   data.append('upfile', fl, fl.name);
    //   fetch('upload.php', {
    //     method: 'POST',
    //     body: data,
    //   })
    //     .then(function (response) {
    //       return response.text();
    //     })
    //     .then(function (text) {
    //       that.message = text;
    //     })
    //     .catch(function (error) {
    //       window.alert('Error: ' + error.message);
    //     });
    // },

    // onchange: function () {
    //   console.log(this.unit.name + ':' + this.unit.size);
    // },
  },
});
