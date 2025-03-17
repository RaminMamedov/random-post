import Card from '@shared/ui/card/card.tsx';
import styles from './cards-section.module.scss';

const CardsSection = () => {
  return (
    <section className={styles.cardsSection} id="second-screen">
      <h2 className={styles.cardsSectionTitle}>Смотрите какие карточки</h2>
      <div className={styles.cardsContainer}>
        <Card title="Карточка 1" content="Контент карточки" />
        <Card title="Карточка 2" content="Контент карточки" />
      </div>
    </section>
  );
};

export default CardsSection;
