import { Outlet } from 'react-router-dom';
import Header from '@shared/ui/header/header.tsx';
import style from './layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.mainLayout}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
