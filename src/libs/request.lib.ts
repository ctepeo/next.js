import { defaultRequestConfig } from '@/configs/request.config';

const request = {
  get: async () => {},
  post: async () => {},
  put: async () => {},
  patch: async () => {},
  delete: async () => {},
  head: async () => {},
  options: async () => {},
};

export const apiRequest = {
  get: async (params) => {
    return request.get(params);
  },
  post: async (params) => {
    return request.post(params);
  },
  put: async (params) => {
    return request.put(params);
  },
  patch: async (params) => {
    return request.patch(params);
  },
  delete: async (params) => {
    return request.delete(params);
  },
  head: async (params) => {
    return request.head(params);
  },
  options: async (params) => {
    return request.options(params);
  },
};

export const requestFetcher = async (url: string, requestConfig: Record<string, unknown>) => {
  //const resource = url.startsWith('/') ? `${getApiDomain()}${url}` : url;

  console.log('SWR Fetcher', { url });
  return fetch(url, {
    ...defaultRequestConfig,
    ...requestConfig,
  }).then(async (res) => {
    const json = await res.json();

    if (!res.ok) {
      throw {
        ...new Error('An error occurred while fetching the data.'),
        error: json.error.error,
        message: json.error.message,
        status: res.status,
        info: json,
      };
    }

    console.log('SWR Fetcher', { url, data: json, response: res });
    return json;
  });
};
