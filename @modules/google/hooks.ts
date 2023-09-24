import { useAxiosRequest } from "@modules/axios-request";
import { GOOGLE_CONTEXT_KEY } from "./constants";

export function useGoogleAxiosRequest<D = any, R = any, E = any>(
  options: Omit<Parameters<typeof useAxiosRequest>[0], "key">
) {
  return useAxiosRequest<D, R, E>({ ...options, key: GOOGLE_CONTEXT_KEY } as any);
}

export * from "./fitness/hooks";
