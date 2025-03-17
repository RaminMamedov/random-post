import { ChangeEvent, FormEvent, useState } from 'react';

export const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value) return;

    setIsLoading(true);
    setTimeout(() => {
      alert(value);
      setValue('');
      setIsLoading(false);
    }, 500); // Имитация запроса
  };

  return { value, isLoading, handleChange, handleSubmit };
};
