import axios, {AxiosInstance, AxiosResponse, CancelToken, CancelTokenSource} from 'axios';
import {IApiClient, IAPIConfig} from '@data';

export class ApiClient implements IApiClient {
  private client: AxiosInstance;

  constructor({baseURL, timeout}: IAPIConfig) {
    this.client = axios.create({
      baseURL,
      timeout,
    })
  }

  get = async <T>(url: string, token?: CancelToken): Promise<AxiosResponse<T>> => {
    return this.client.get(url, {cancelToken: token});
  };

  post = async <T>(url: string, params: Record<string, string>, token?: CancelToken): Promise<AxiosResponse<T>> => {
    return this.client.post(url, params, {cancelToken: token});
  };

  source = (): CancelTokenSource => axios.CancelToken.source();
}
