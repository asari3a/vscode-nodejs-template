tsconfig.base.json

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

tsconfig.json

```json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": ".",
    "outDir": "./dist",
    "target": "ES2020",
    "module": "nodenext"
  },
  "include": ["app/*.ts", "event/*.ts"]
}
```
