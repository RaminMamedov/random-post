import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page.tsx';
import RandomPostPage from '../pages/random-post/ui/random-post-page.tsx';
import Layout from '@shared/ui/layout/layout.tsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import { routes } from '@shared/routes';
import LandingPage from '@pages/landing/landing-page.tsx';
import NavigationPage from '@pages/navigation-page/navigation-page.tsx';
import VacanciesPage from '@pages/navigation-page/vacancies/vacancies-page.tsx';
import CandidatesPage from '@pages/navigation-page/candidates/candidates-page.tsx';
import EventsPage from '@pages/navigation-page/events/events-page.tsx';
import ClientsPage from '@pages/navigation-page/clients/clients-page.tsx';
import PartnersPage from '@pages/navigation-page/partners/partners-page.tsx';

function App() {
  return (
    <Routes>
      <Route path={routes.main.path} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={routes.randomPost.path} element={<RandomPostPage />} />
        <Route path={routes.landing.path} element={<LandingPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
