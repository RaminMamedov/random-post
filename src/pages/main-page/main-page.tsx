import styles from './main-page.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <h1 className={styles.mainPageHeader}>Главная страница</h1>
      <p className={styles.mainPageText}>
        Это тестовое приложение на React + Vite. Используйте навигацию выше,
        чтобы перейти к просмотру случайного поста.
      </p>
    </div>
  );
};

export default MainPage;
