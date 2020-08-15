Vue.component('my-hello', {
  props: ['yourName'],
  template: `<div>こんにちは、<slot>ゲスト</slot>
  さん！</div>`,
});

Vue.component('my-slot', {
  template: `<div>
  <header>
    <slot name="header">DEFAULT HEADER</slot>
  </header>
  <div>
    <slot>DEFAULT MAIN</slot>
  </div>
  <footer>
    <slot name="footer">DEFAULT FOOTER</slot>
  </footer>
</div>`,
});

Vue.component('my-book', {
  data() {
    return {
      book: {
        isbn: '978-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門 ',
        price: 2000,
        publish: '日経BP',
      },
    };
  },
  template: `<div>
  <slot v-bind:book="book">{{book.title}}（{{book.publish}}）</slot>
</div>`,
});

new Vue({
  el: '#app',
  data: {},
  methods: {},
  computed: {},
});
