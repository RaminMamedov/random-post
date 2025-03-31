import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation-page.module.scss';
import { NavigationLevel1, NavigationLevel2 } from '@shared/types/types.ts';
import { generateNavigationListWithPermissions } from '@shared/utils/generate-navigation.ts';
import { navigationList } from '@shared/routes/navigation-config.ts';
import { checkHasUserPermission } from '@shared/utils/check-permissions.ts';

const NavigationPage = () => {
  const [navigation, setNavigation] = useState<NavigationLevel1[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await generateNavigationListWithPermissions(
        navigationList,
        checkHasUserPermission,
      );
      setNavigation(result);
    };

    fetch();
  }, []);

  return (
    <div className={styles.navigationPage}>
      <h1 className={styles.pageTitle}>Навигация</h1>
      {navigation.map((level1) => (
        <div key={level1.name} className={styles.level1}>
          <h2>{level1.text}</h2>
          {level1.children.map((level2: NavigationLevel2) => (
            <div key={level2.name} className={styles.level2}>
              <h3>{level2.text}</h3>
              <ul className={styles.level3}>
                {level2.children.map((route) => (
                  <li key={route.path}>
                    <Link to={route.getLink()}>{route.linkText}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavigationPage;
