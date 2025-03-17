export const routes = {
  main: {
    getLink: () => '/',
    path: '/',
    linkText: 'Главная',
  },
  randomPost: {
    getLink: () => '/random-post',
    path: '/random-post',
    linkText: 'Рандомный пост',
  },
  landing: {
    getLink: () => '/landing',
    path: '/landing',
    linkText: 'Лендинг',
  },
};
