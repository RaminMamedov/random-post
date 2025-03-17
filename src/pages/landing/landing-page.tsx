import styles from './landing-page.module.scss';
import CardsSection from '@pages/landing/cards-section/cards-section.tsx';
import InteractiveSection from '@pages/landing/interactive-section/interactive-section.tsx';
import IntroductionSection from '@pages/landing/introduction-section/introduction-section .tsx';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <IntroductionSection />
      </section>

      <section className={styles.section}>
        <CardsSection />
      </section>

      <section className={styles.section}>
        <InteractiveSection />
      </section>
    </div>
  );
};

export default LandingPage;
