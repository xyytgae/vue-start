// Vue.component('my-input', {
//   props: ['value'],
//   template: `<label>
//   名前：
//   <input type="text" v-model="internalValue"/>
// </label>`,
//   computed: {
//     internalValue: {
//       get() {
//         return this.value;
//       },
//       set(newValue) {
//         if (this.value !== newValue) {
//           this.$emit('input', newValue);
//         }
//       },
//     },
//   },
// });

// Vue.component('my-input', {
//   props: ['value'],
//   template: `<label>
//   名前：
//   <input
//     type="text" v-bind:value="value"
//     v-on:input="$emit('input', $event.target.value)" />
// </label>`,
// });

// Vue.component('my-input', {
//   props: ['name'],
//   model: {
//     props: 'name',
//     event: 'change',
//   },
//   template: `<label>
//   名前：
//   <input
//     type="text" v-bind:value="name"
//     v-on:input="$emit('change', $event.target.value)" />
// </label>`,
// });

Vue.component('my-input', {
  props: ['value'],
  template: `<label>
  名前：
  <input
    type="text" v-bind:value="value"
    v-on:input="$emit('update:value', $event.target.value)" />
</label>`,
});

new Vue({
  el: '#app',
  data: {
    message: '',
  },
  methods: {},
  computed: {},
});
