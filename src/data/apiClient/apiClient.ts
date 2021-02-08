import axios, {AxiosInstance, AxiosResponse} from 'axios';

interface IAPIConfig {
  baseURL: string;
  timeout: number;
}

export interface IApiClient {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, params: Record<string, string>) => Promise<AxiosResponse<T>>;
}

export class ApiClient implements IApiClient {
  private client: AxiosInstance;

  constructor({baseURL, timeout}: IAPIConfig) {
    this.client = axios.create({
      baseURL,
      timeout,
    })
  }

  get = async <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.client.get(url);
  };

  post = async <T>(url: string, params: Record<string, string>): Promise<AxiosResponse<T>> => {
    return this.client.post(url, params);
  };
}
