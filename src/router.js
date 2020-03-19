import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
    redirect: '/1',
    children: [
      {
        path: ':id',
        name: 'shader-view',
        component: () => import('@/components/ShaderView.vue'),
        props: true,
      },
    ],
  },
];

export default new VueRouter({
  routes,
})
