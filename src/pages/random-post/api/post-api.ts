import { api } from '@shared/api/api.ts';
import { getRandomNumber } from '@shared/utils/get-random-number.ts';
import { handleApiError } from '@shared/utils/handle-api-error.ts';

interface Post {
  id: number;
  title: string;
  body: string;
}

export async function fetchRandomPost(): Promise<
  { result: Post; abortRequest: () => void } | undefined
> {
  const randomId = getRandomNumber(1, 100);
  const controller = new AbortController();

  try {
    const response = await api.get<Post>(`/posts/${randomId}`, {
      signal: controller.signal,
    });

    if (!response.data?.title) {
      return undefined;
    }

    return { result: response.data, abortRequest: () => controller.abort() };
  } catch (error) {
    handleApiError(error, controller);
    return undefined;
  }
}
