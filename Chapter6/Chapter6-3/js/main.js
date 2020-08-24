Vue.use(VeeValidate, {
  locale: 'ja',
  fastExit: false,
  dictionary: {
    ja: {
      messages: {
        required: function (field, param) {
          return field + 'を入力してください';
        },
      },
      attributes: {
        name: '氏名',
        age: '年齢',
        sex: '性別',
      },
    },
  },
});

let MyUtil = {
  install: function (Vue, options) {
    Vue.filter('trim', function (value) {
      if (typeof value !== 'string') {
        return value;
      }
      return value.trim();
    });
  },
};

Vue.use(MyUtil);

new Vue({
  el: '#app',
  created: function () {
    this.$validator.extend('ngword', {
      getMessage(field, args) {
        return field + 'で「' + args + '」は利用できない単語です。';
      },
      validate(value, args) {
        return args.every(function (arg) {
          return value.indexOf(arg) === -1;
        });
      },
    });
  },
  data: {
    str: ' WINGS Project ',
  },
  methods: {},
  computed: {},
});
