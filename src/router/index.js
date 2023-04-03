import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import People from '@/views/People.vue';
import Character from '@/views/Character.vue';
// import Search from '@/views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;