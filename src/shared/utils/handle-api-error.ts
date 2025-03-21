import axios from 'axios';

export function handleApiError(
  error: unknown,
  controller?: AbortController,
): null {
  if (axios.isCancel(error) || controller?.signal.aborted) {
    console.info('Request was aborted');
    return null;
  }

  if (axios.isAxiosError(error)) {
    switch (error.response?.status) {
      case 400:
        console.error('Bad request. Please check your input.');
        break;
      case 404:
        console.error('Resource not found.');
        break;
      case 500:
        console.error('Internal server error. Try again later.');
        break;
      default:
        console.error('An unexpected error occurred:', error.message);
    }
  } else {
    console.error('Network error or unknown error:', error);
  }

  return null;
}
