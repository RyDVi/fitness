/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FITNESS_SERVER_URL: string;
  readonly VITE_GOOGLE_URL: string;
  readonly VITE_GOOGLE_OAUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
