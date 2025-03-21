import styles from './random-post-page.module.scss';
import { useRandomPost } from '../model/use-random-post.ts';
import Post from './post/post.tsx';

const RandomPostPage = () => {
  const { title, loading, error, getPost } = useRandomPost();

  return (
    <div className={styles.container}>
      <h2 className={styles.postTitle}>Random Post</h2>
      <button className={styles.button} onClick={getPost} disabled={loading}>
        {loading ? 'Загрузка...' : 'Получить'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
      {title && <Post title={title} />}
    </div>
  );
};

export default RandomPostPage;
