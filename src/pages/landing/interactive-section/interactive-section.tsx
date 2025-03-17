import { useInput } from '@shared/hooks/useInput.ts';
import Input from '@shared/ui/input/input.tsx';
import Button from '@shared/ui/button/button.tsx';
import styles from './interactive-section.module.scss';
import AlertIcon from '@assets/alert-icon.tsx';

const InteractiveSection = () => {
  const { value, isLoading, handleChange, handleSubmit } = useInput();

  return (
    <section className={styles.interactiveSection}>
      <h4 className={styles.interactiveSectionTitle}>Интерактив?</h4>
      <form onSubmit={handleSubmit} className={styles.interactiveSectionForm}>
        <Input
          placeholder="Введите текст"
          value={value}
          onChange={handleChange}
          className={styles.interactiveSectionInput}
        />
        <Button
          type="submit"
          isLoading={isLoading}
          className={styles.interactiveSectionButton}
        >
          Вывести текст в alert
          <AlertIcon size={18} />
        </Button>
      </form>
    </section>
  );
};

export default InteractiveSection;
