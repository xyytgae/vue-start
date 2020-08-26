import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../components/Article.vue';
import Hoge from '../components/Hoge.vue';
import Signin from '../components/Signin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      isRequestAuth: true,
    },
  },
  {
    path: '/article/:aid',
    name: 'Article',
    component: Article,
  },
  {
    path: '/hoge',
    name: 'hoge',
    component: Hoge,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return { selector: to.hash };
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
});

let isAuthed = function() {
  return !!sessionStorage['authed'];
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.isRequestAuth) && !isAuthed()) {
    next({ path: '/signin', query: { path: to.fullPath } });
  } else {
    next();
  }
});

export default router;
