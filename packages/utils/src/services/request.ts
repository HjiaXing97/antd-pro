import axios from "axios";
import type { AxiosInstance } from "axios";
import type { devAxiosRequestConfig } from "./type";

class RequestService {
  instance: AxiosInstance;

  constructor(config: devAxiosRequestConfig) {
    this.instance = axios.create(config);

    /**
     * @description: 请求拦截器
     */
    this.instance.interceptors.request.use(
      (res) => res,

      (error) => error,
    );

    /**
     * @description: 响应拦截器
     */
    this.instance.interceptors.response.use(
      (res) => res,
      (error) => error,
    );

    /**
     * @description: 自定义请求拦截器
     */
    this.instance.interceptors.request.use(
      config?.interceptors?.requestSuccessFn,
      config?.interceptors?.requestFailureFn,
    );

    /**
     * @description: 自定义响应拦截器
     */
    this.instance.interceptors.response.use(
      config?.interceptors?.responseSuccessFn,
      config?.interceptors?.responseFailureFn,
    );
  }

  request<T = any>(config: devAxiosRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(config: devAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: devAxiosRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }
}

export default RequestService;
