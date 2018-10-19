import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const importFile = file => () => import(`@/views${file}/index.vue`);
const routeMap = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/home',
    name: 'Home',
  },
];
routeMap.forEach(item => {
  if(item.path ==== '/') {
    item.component = importFile('/home')
  } else {
    item.component = importFile(item.path);
  }
});

export default new Router({
  routes: routeMap,
});