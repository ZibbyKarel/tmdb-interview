import Axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from 'axios';

const API_TOKEN = process.env.API_TOKEN;

export const AXIOS_INSTANCE = Axios.create({
  headers: {
    Accept: 'application/json',
  },
});

AXIOS_INSTANCE.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (API_TOKEN) {
      config.headers.set('Authorization', `Bearer ${API_TOKEN}`);
    }

    config.headers.set('Accept', 'application/json');

    return config;
  },
  async (error) => Promise.reject(error)
);

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);
};

// Keep the current generated client working until the next Orval regeneration.
export const customFetch = <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> => {
  return customInstance<T>(
    {
      url,
    },
    options
  );
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
