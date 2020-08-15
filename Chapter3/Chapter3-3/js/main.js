new Vue({
  el: '#app',
  data: {
    show: true,
    holiday: '',
    pay: 'credit',
    books: [
      {
        isbn: '978-4-7981-5757-3',
        title: 'JavaScript逆引きレシピ',
        price: 2800,
      },
      {
        isbn: '978-4-8399-6644-7',
        title: 'たのしいラズパイ電子工作ブック',
        price: 1900,
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '3ステップでしっかり学ぶ Python入門',
        price: 2480,
      },
      {
        isbn: '978-4-7981-5382-7',
        title: '独習C# 新版',
        price: 3600,
      },
    ],
    book: {
      isbn: '978-4-7981-5757-3',
      title: 'JavaScript逆引きレシピ',
      price: 2800,
    },
    songs: [
      {
        title: '赤とんぼ',
        lyrics: '夕焼け小焼けの赤とんぼ...',
        composer: '山田耕作',
      },
      {
        title: '荒城の月',
        lyrics: '春高楼の花の宴 巡る盃影さして...',
        composer: '瀧廉太郎',
      },
      {
        title: 'どんぐりころころ',
        lyrics: 'どんぐりころころ どんぶりこ...',
        composer: '梁田貞',
      },
      {
        title: '七つの子',
        lyrics: '烏 なぜ啼くの 烏は山に...',
        composer: '本居長世',
      },
    ],
    list: ['赤パジャマ', '青パジャマ', '黄パジャマ'],
  },
  methods: {
    onclick: function () {
      // this.list[1] = '茶パジャマ';
      // Vue.set(this.list, 1, '茶パジャマ');
      this.list.shift();
    },
  },
  computed: {
    expensiveBooks: function () {
      return this.books.filter(function (b) {
        return b.price >= 2500;
      });
    },
  },
});
