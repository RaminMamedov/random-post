import { useState, useCallback, useRef } from 'react';
import { fetchRandomPost } from '../api/post-api.ts';

export const useRandomPost = () => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const abortControllerRef = useRef<AbortController | null>(null);

  const getPost = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setLoading(true);
    setError('');

    try {
      const resultObject = await fetchRandomPost();
      if (!resultObject) return;

      const { result } = resultObject;
      abortControllerRef.current = new AbortController();

      setTitle(result.title);
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setError('Ошибка при загрузке поста. Попробуйте еще раз.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { title, loading, error, getPost };
};
