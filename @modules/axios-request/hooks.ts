import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";
import { RequestError, RequestType } from "./types";

export const AxiosContext = React.createContext<Record<string, AxiosInstance>>(
  {} as any
);

export function useAxiosContext(key: string) {
  const context = React.useContext(AxiosContext);
  if (!context) {
    throw new Error("AxiosContext is not available");
  }
  return context[key];
}

export function useAxiosRequest<D = any, R = any, E = any>({
  initial,
  config,
  key,
}: {
  initial: D;
  config: (data: D) => AxiosRequestConfig<D>;
  key: string;
}): RequestType<D, R, E> {
  const axiosInstance = useAxiosContext(key);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<E | null>();
  const [data, setData] = React.useState<D>(initial);
  const [response, setResponse] = React.useState<AxiosResponse<R>>();
  const request = React.useCallback(
    async (requestData?: D) => {
      setLoading(true);
      setError(null);
      return axiosInstance
        .request<D, AxiosResponse<R>>(config(requestData || data))
        .then(
          (response) => {
            setLoading(false);
            setResponse(response);
            return response;
          },
          (error: RequestError<E>) => {
            setLoading(false);
            setError(error.data);
            throw error.data;
          }
        );
    },
    [axiosInstance, config, data]
  );
  return {
    request: request as RequestType<D, R, E>["request"],
    data,
    setData,
    error,
    response,
    loading,
  };
}
