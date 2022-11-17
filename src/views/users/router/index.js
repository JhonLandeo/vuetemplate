export default
{
    path: '/crear-usuario',
    name: 'crear-usuario',
    component: () => import('@/views/users/views/principal.vue'),
    meta: {
      pageTitle: 'Crear usuario',
      breadcrumb: [
        {
          text: 'Crear usuario',
          active: true,
        },
      ],
    }
}