Vue.filter('trim', function (value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.trim();
});

Vue.filter('nl2br', function (value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/\r?\n/g, '<br />');
});

Vue.filter('truncate', function (value, len = 10, omit = '...') {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.legth <= len) {
    return value;
  } else {
    return value.substring(0, len) + omit;
  }
});

Vue.filter('abs', function (value) {
  return Math.abs(value);
});

Vue.filter('number', function (value, dec = 0) {
  return value.toFixed(dec);
});

new Vue({
  el: '#app',
  data: {
    str: ' WINGS Project ',
    memo: '',
    value: -150.3486,
  },
  methods: {},
  computed: {},
});
