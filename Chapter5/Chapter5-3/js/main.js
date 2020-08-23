new Vue({
  el: '#app',
  data: {
    flag: true,
    id: 0,
    panels: [
      'WINGSプロジェクトは、ライター山田祥寛が代表を務める執筆コミュニティです。2005年5月、「有限会社 WINGSプロジェクト」として法人化を果たしたのを機に、ますます質の高い情報を読者の方々にお届けしてまいります。',
      '山田祥寛著作の書籍に関するFAQ情報、書籍訂正情報の総覧です（書籍個別ページからご提供しているページと同一の内容です）。Q＆A掲示板をご使用の前に、必ず本ページの内容をご確認ください。',
      '環境設定については、ページ上部「サーバサイド環境構築設定」にて最新の情報をご提供しております。ご質問の前に、こちらもあわせて参照いただきますよう、ご協力をお願いいたします。',
    ],
    todo: '',
    items: [
      'A書籍の構成案作成',
      'X記事の著者校正',
      '今月締の請求書作成',
      'WINGSメンバーの面接',
    ],
  },
  methods: {
    onclick1: function () {
      this.flag = !this.flag;
    },
    onclick2: function () {
      this.id = (this.id + 1) % this.panels.length;
    },
    onenter: function (el, done) {
      Velocity(el, { opacity: 1 }, { duration: 2000, complete: done });
    },
    onleave: function (el, done) {
      Velocity(el, { opacity: 0 }, { duration: 2000, complete: done });
    },
    onadd: function () {
      this.items.unshift(this.todo);
      this.todo = '';
    },
    onremove: function () {
      let that = this;
      this.items = this.items.filter(function (value) {
        return value !== that.todo;
      });
      this.todo = '';
    },
    onsort: function () {
      this.items.sort();
    },
  },
  computed: {},
});
