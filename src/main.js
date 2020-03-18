import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/Home.vue'),
    redirect: '/1',
    children: [
      {
        path: ':id',
        name: 'shader-view',
        component: () => import('@/ShaderView.vue'),
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
