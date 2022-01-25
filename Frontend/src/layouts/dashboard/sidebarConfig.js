export const sidebarUnauthenticated = [
  {
    title: 'home',
    path: '/welcome',
  },
  {
    title: 'register',
    path: '/register',
  },
  {
    title: 'login',
    path: '/login',
  },
];

export const sidebarAuthenticated = [
  {
    title: 'dashboard',
    path: '/dashboard',
  },
  {
    title: 'students',
    children: [
      {
        title: 'list',
        path: '/students'
      },
      {
        title: 'add student',
        path: '/students/add'
      }
    ]
  },
];

