import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page.tsx';
import RandomPostPage from '../pages/random-post/ui/random-post-page.tsx';
import Layout from '@shared/ui/layout/layout.tsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import { routes } from '@shared/routes';

function App() {
  return (
    <Routes>
      <Route path={routes.main.path} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={routes.randomPost.path} element={<RandomPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
