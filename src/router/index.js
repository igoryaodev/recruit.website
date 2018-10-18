import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const importFile = file => () => import(`@/views${file}/index.vue`);
const routeMap = [
  {
    path: '/home',
    name: 'Home',
  },
];
routeMap.forEach(item => {
  item.component = importFile(item.path);
});


export default new Router({
  routes: routeMap,
});
