/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPAM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
