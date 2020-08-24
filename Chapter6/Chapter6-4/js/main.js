let dataLoggable = {
  mounted: function () {
    console.log(this.$data);
  },
};

Vue.component('my-comp', {
  data: function () {
    return {
      current: new Date(),
    };
  },
  template: `<div>現在時刻：{{ current }}</div>`,
  mixins: [dataLoggable],
});

Vue.config.optionMergeStrategies.tags = function (toVal, fromVal) {
  if (!toVal) {
    toVal = [];
  }
  if (!fromVal) {
    fromVal = [];
  }
  return fromVal.concat(toVal);
};

let tagin = {
  tags: ['tag', 'strategy'],
};

Vue.component('my-comp', {
  tags: ['component', 'sample'],
  template: `<div>{{ $options.tags }}</div>`,
  mixins: [tagin],
});

Vue.mixin({
  created: function () {
    let { title, keyword, description } = this.$data;
    if (title) {
      document.title = title;
    }
    if (keyword) {
      document
        .querySelector("meta[name='keyword']")
        .setAttribute('content', keyword);
    }
    if (description) {
      document
        .querySelector("meta[name='description']")
        .setAttribute('content', description);
    }
  },
});

Vue.component('my-mix', {
  template: `<div>Global Mix-In!!</div>`,
  data: function () {
    return {
      title: 'グローバルミックスイン',
      keyword: 'mixin, vuejs, component',
      description: 'アプリ全体に適用されるミックスインの例です。',
    };
  },
});

new Vue({
  el: '#app',
  data: {},
  methods: {},
  computed: {},
});
