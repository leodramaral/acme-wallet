1. Certifique-se de ter o Node.js e o pnpm instalado:

`npm install -g pnpm`

2. Crie a pasta do projeto e inicie o pnpm

`pnpm init`

3. Crie um arquivo chamado pnpm-workspace.yaml na raiz
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

4. Instale o turbo repo

`pnpm add turbo -Dw`

5. Criar o backend Nest.JS

```bash
cd apps
# Se você tem o nest-cli instalado globalmente:
nest new api --package-manager pnpm
# Se não tiver, use: npx @nestjs/cli new api --package-manager pnpm
```

6. Criar o frontend

```bash
pnpm create vite web --template react-ts
```

7. Configurar o turbo repo
Volte a raiz do monorepo e crie o arquivo `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "out/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "test": {}
  }
}
```

8. Ajustar o `package.json` na raiz

```javascript
{
    {
        "name": "acme-wallet",
        "packageManager": "pnpm@10.28.2",
        "scripts": {
            "dev": "turbo dev",
            "build": "turbo build",
            "lint": "turbo lint",
            "test": "turbo test"
        },
        "devDependencies": {
            "turbo": "^2.8.3"
        }
    }
}
```

9. Compartilhando configurações
- crie a pasta `mkdir -p packages/tsconfig`
- crie um `packages/tsconfig/package.json`
```json
{
    {
        "name": "@repo/tsconfig",
        "version": "0.0.0",
        "private": true
    }
}
```
- crie um `packages/tsconfig/base.json` com as regras de TS

10. instale as dependências
`pnpm init`

11. Ajuste o `package.json` do Nest
Adicione `"dev": "nest start --watch"` 

12. Rode a aplicação
`pnpm dev`
