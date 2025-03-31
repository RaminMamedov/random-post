import { NavigationLevel1, Route } from '@shared/types/types.ts';

export const routes: Record<string, Route> = {
  vacancies: {
    name: 'vacancies',
    path: 'vacancies',
    getLink: () => '/vacancies',
    linkText: 'Вакансии',
  },
  candidates: {
    name: 'candidates',
    path: 'candidates',
    getLink: () => '/candidates',
    linkText: 'Кандидаты',
  },
  events: {
    name: 'events',
    path: 'events',
    getLink: () => '/events',
    linkText: 'События',
  },
  clients: {
    name: 'clients',
    path: 'clients',
    getLink: () => '/clients',
    linkText: 'Клиенты',
  },
  partners: {
    name: 'partners',
    path: 'partners',
    getLink: () => '/partners',
    linkText: 'Партнеры',
  },
};

export const navigationList: NavigationLevel1[] = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [routes.vacancies, routes.candidates],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
];
