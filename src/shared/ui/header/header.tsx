import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { routes } from '@shared/routes';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link to={routes.main.getLink()} className={styles.navLink}>
          {routes.main.linkText}
        </Link>
        {' | '}
        <Link to={routes.randomPost.getLink()} className={styles.navLink}>
          {routes.randomPost.linkText}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
