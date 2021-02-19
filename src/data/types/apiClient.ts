import {AxiosResponse, CancelToken, CancelTokenSource} from 'axios';

export interface IAPIConfig {
  baseURL: string;
  timeout: number;
}

export interface IApiClient {
  get: <T>(url: string, token?: CancelToken) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, params: Record<string, string>, token?: CancelToken) => Promise<AxiosResponse<T>>;
  source: () => CancelTokenSource;
}
