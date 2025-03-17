import styles from './random-post-page.module.scss';
import { useRandomPost } from '../model/use-random-post.ts';
import Post from './post/post.tsx';
import Button from '@shared/ui/button/button.tsx';

const RandomPostPage = () => {
  const { title, loading, error, getPost } = useRandomPost();

  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>Random Post</h1>
      <Button
        className={styles.randomPostPageButton}
        onClick={getPost}
        disabled={loading}
      >
        {loading ? 'Загрузка...' : 'Получить'}
      </Button>
      {error && <p className={styles.error}>{error}</p>}
      {title && <Post title={title} />}
    </div>
  );
};

export default RandomPostPage;
