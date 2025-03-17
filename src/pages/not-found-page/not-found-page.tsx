import styles from './not-found-page.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.notFoundHeader}>404 - Страница не найдена</h1>
      <p className={styles.notFoundText}>
        К сожалению, такой страницы не существует.
      </p>
    </div>
  );
};

export default NotFoundPage;
