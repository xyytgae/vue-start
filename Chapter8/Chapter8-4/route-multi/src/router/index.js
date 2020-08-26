import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../components/Article.vue';
// import Main from '../components/Main.vue';
import Page from '../components/Page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Main',
  //   components: {
  //     default: Main,
  //     sub: Article,
  //   },
  // },
  {
    path: '/article/:aid',
    name: 'Article',
    component: Article,
    props: true,
    children: [
      {
        path: 'pages/:page_num',
        name: 'page',
        component: Page,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
