export const setting = {
  language: {
    kr: {
      id: 1,
      label: 'Korean',
      index: 'KR',
    },
    en: {
      id: 2,
      label: 'English',
      index: 'EN',
    },
  },
};

export const pageUrl = {
  index: '/',
  home: '/home',
  auth: {
    index: '/auth',
    signIn: '/auth/login',
    signUp: '/auth/join',
    signOut: '/auth/logout',
    resetPassword: '/auth/reset/password',
  },
  error: {
    index: '/error',
    server: '/error/500',
    notFound: '/error/404',
  },
};

export const navigation = [
  {
    path: pageUrl.home,
    text: 'Home',
  },
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/user',
    text: 'User',
  },
  {
    path: '/test',
    text: 'Test',
  },
];
