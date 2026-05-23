# Vite.js

## インストール

```sh
pnpm --filter web add -D vite @vitejs/plugin-react
```

## 設定ファイル

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## クライアントに後悔する環境変数値

`src/vite-env.d.ts`を作成し、VITE_プレフィックスで始まる環境変数を設定する。

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPAM: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```
