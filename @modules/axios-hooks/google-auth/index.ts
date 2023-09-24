import {} from 'axios';
import { createRequestInstance, getCsrfConfig } from '..';

export const googleAxiosInstance = createRequestInstance(
    getCsrfConfig(import.meta.env.VITE_SERVER_URL),
    true
  );

