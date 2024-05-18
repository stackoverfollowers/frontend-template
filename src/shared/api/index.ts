import { createRequestFx } from './create-request-fx';

export const createInternalRequestFx = createRequestFx({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withTokenInHeaders: true,
});

export const createCommonRequestFx = createRequestFx({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-API-KEY': import.meta.env.API_TOKEN ?? '',
  },
});
