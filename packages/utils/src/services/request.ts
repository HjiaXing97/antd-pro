import axios from "axios";
import type { AxiosInstance, CreateAxiosDefaults } from "axios";

class RequestService {
  instance: AxiosInstance;
  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error,
    );
  }
}
