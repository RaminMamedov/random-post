import Button from '@shared/ui/button/button.tsx';
import styles from './introduction-section.module.scss';
import EyeIcon from '@assets/eye-icon.tsx';

const IntroductionSection = () => {
  return (
    <section className={styles.introductionSection}>
      <h1 className={styles.introductionSectionTitle}>Исправленная страница</h1>
      <p className={styles.introductionSectionText}>В ней нет смысла</p>
      <Button
        as="a"
        href="#second-screen"
        className={styles.introductionSectionButton}
      >
        Перейти дальше <EyeIcon size={18} />
      </Button>
    </section>
  );
};

export default IntroductionSection;
