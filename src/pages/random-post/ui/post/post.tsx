import styles from './post.module.scss';

type PostProps = {
  title: string;
};

const Post = ({ title }: PostProps) => {
  if (!title) return null;

  return (
    <div className={styles.container}>
      <p className={styles.content}>{title}</p>
    </div>
  );
};

export default Post;
