
const routes = [
  {
    path: '/',
    component: () => import('layouts/landingPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/profile/:id', component: () => import('pages/profilePreview.vue') },
      { path: '/todoList', component: () => import('pages/todoList.vue') },
      { path: '/aboutUs', component: () => import('pages/aboutUs.vue') },
      { path: '/energyAudit', component: () => import('pages/energyAudit.vue') },
      { path: '/emars', component: () => import('pages/emars.vue') },
      { path: '/awarenessTraining', component: () => import('pages/awarenessTraining.vue') },

      { path: '/lottieTesting', component: () => import('pages/lottieTesting.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
