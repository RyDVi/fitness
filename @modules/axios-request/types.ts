import { AxiosResponse } from "axios";

export type RequestType<D = any, R = any, E = any> = {
  data: D;
  setData: (data: D) => void;
  error?: E | null;
  request: (data?: D) => Promise<AxiosResponse<R>>;
  response?: AxiosResponse<R>;
  loading: boolean;
};

export interface RequestError<T = any> {
  data: T | null;
  message: string;
  code?: string | number;
  isCancel: boolean;
}
