import { SWRConfiguration } from 'swr';
import { fetcher } from '@utils/fetcher.utility';

export const SWRDefaultConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 60000, // 1 minute
  focusThrottleInterval: 5000, // 5 seconds
  errorRetryCount: 3, // Retry failed requests up to 3 times
  errorRetryInterval: 5000, // Retry every 5 seconds
};

export const defaultRequestConfig: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include', // Include cookies in requests
};
