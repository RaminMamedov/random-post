import classNames from 'classnames';
import styles from './card.module.scss';

type CardProps = {
  title: string;
  content: string;
  className?: string;
};

const Card = ({ title, content, className }: CardProps) => {
  return (
    <div className={classNames(styles.card, className)}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{content}</p>
    </div>
  );
};

export default Card;
