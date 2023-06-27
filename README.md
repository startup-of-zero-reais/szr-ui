# Startup of zero reais UI Kit

Você pode encontrar o storybook com a documentação do pacote em:

https://startup-of-zero-reais.github.io/szr-ui/

# Pacotes

Os pacotes encontrados nesse repositório se tratam de todo o design system e
da configuração de desenvolvimento.

- [:file_folder: Docs/](./packages/docs/)
- [:file_folder: React/](./packages/react/)
- [:file_folder: Tokens/](./packages/tokens/)
- [:file_folder: EslintConfig/](./packages/eslint-config/)
- [:file_folder: TsConfig/](./packages/ts-config/)

# Desenvolvendo

Os componentes ficam no pacote `react` a documentação/_storybook_ ficam no pacote `docs`.

Isso para que a documentação e eventuais outros tipos de documentação fiquem isolados do bundle do pacote de componentes

O pacote de `tokens` serve para abstrair as configurações de cores, tamanhos, fontes, etc.

Quanto aos pacotes `eslint-config` e `ts-config` são bases de configurações compartilhadas entre todos os pacotes

# Executando local

Certifique-se de ter instalado o NodeJS v16.

```sh
// using nvm
nvm install lts/gallium && \
nvm use 16
```

Certifique-se de ter o storybook na versão correta também

```sh
npm i -g storybook@^6.5
```

Em seguida, execute a instalação dos pacotes com o comando `npm i` na raiz do projeto.

Por fim, executar o comando `npm run dev` deve ser o suficiente para que você consiga executar o projeto localmente

# Contribuindo

Contribuições são sempre bem-vindas!

Veja `contribuindo.md` para saber como começar.

Por favor, siga o `código de conduta` desse projeto.