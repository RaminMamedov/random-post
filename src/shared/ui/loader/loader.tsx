import styles from './loader.module.scss';
import classNames from 'classnames';

type LoaderProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Loader = ({ size = 'medium', className }: LoaderProps) => {
  return <div className={classNames(styles.loader, styles[size], className)} />;
};

export default Loader;
