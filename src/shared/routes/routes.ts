export const routes = {
  main: {
    name: 'main',
    getLink: () => '/',
    path: '/',
    linkText: 'Главная',
  },
  randomPost: {
    name: 'randomPost',
    getLink: () => '/random-post',
    path: '/random-post',
    linkText: 'Рандомный пост',
  },
  landing: {
    name: 'landing',
    getLink: () => '/landing',
    path: '/landing',
    linkText: 'Лендинг',
  },
  navigation: {
    name: 'navigation',
    getLink: () => '/navigation',
    path: '/navigation',
    linkText: 'Навигация',
  },
};
