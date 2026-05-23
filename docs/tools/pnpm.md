# pnpm

## ワークスペースの作成方法

`pnpm-workspace.yaml`の`packages`にワークスペースとして登録したいフォルダを追加する。

`src/fuga/piyo`をパッケージ登録したい場合

```yaml
packages:
- "hoge"
- "src/fuga/piyo"
```

ワークスペースとして登録したいフォルダを作成し、`package.json`を作る。

```json
{
    "name": "hoge",
    "private": true
}
```

プロジェクトルートで、`pnpm install`を実行する。

## ワークスペースへのパッケージインストール方法

```sh
pnpm --filter hoge add react react-dom
pnpm --filter hoge add -D vite @vitejs/plugin-react
```

## ワークスペースないのスクリプトを実行する方法

```sh
pnpm --filter hoge dev
```
