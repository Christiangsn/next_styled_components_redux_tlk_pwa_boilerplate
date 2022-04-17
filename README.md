<div align="center">

<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/everton-dgn/next_styled_components_redux_tlk_pwa_boilerplate?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/next_styled_components_redux_tlk_pwa_boilerplate?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/next_styled_components_redux_tlk_pwa_boilerplate?color=yellow&style=plastic)
</div>

<h1 align="center">Boilerplate Completo e atualizado com Next.js, Typescript Styled-Components, Testes, Redux Toolkit e PWA</h1>

<br />

# :memo: Sobre o Projeto

Este projeto é um boilerplate completo, constantemente atualizado, configurado nos mínimos detalhes para servir de base para projetos profissionais do mais alto nível.

<br />

---

# :pushpin: Conteúdos

* [Tecnologias](#monocle_face-tecnologias)
* [Features](#triangular_flag_on_post-features)
* [Estrutura de Diretórios e Arquivos](#card_file_box-estrutura-de-diretórios-e-arquivos)
* [Pré-Requisitos](#white_check_mark-pré-requisitos)
* [Como instalar e executar o projeto](#question-como-instalar-e-executar-o-projeto)
  * [Clonar Repositório](#clonar-repositório)
  * [Instalar Dependências](#instalar-dependências)
  * [Inciar Ambiente de Desenvolvimento](#inciar-ambiente-de-desenvolvimento)
  * [Gerar Build de Produção](#gerar-build-de-produção)
  * [Inciar Ambiente de Produção](#inciar-ambiente-de-produção)
  * [Executar Testes](#executar-testes)
  * [Executar Testes em Modo Watch](#executar-testes-em-modo-watch)
  * [Inciar Storybook em Modo de Desenvolvimento](#inciar-storybook-em-modo-de-desenvolvimento)
  * [Gerar Build de Produção do Storybook](#gerar-build-de-produção-do-storybook)
  * [Executar lints](#executar-lints)
* [Autor](#technologist-autor)

<br />

---

# :monocle_face: Tecnologias

⚛ Next.js

🔥 TypeScript

💅 Styled-Components

🗂 Redux Toolkit e Redux-Persist

🚩 Lints: ESlint, Prettier, EditorConfig, Commitlint e Typecheck

✅ Jest 

🐙 React Testing Library

📝 Storybook

📱 PWA

<br />

---

# :triangular_flag_on_post: Features

- [x] Projeto responsivo;

- [x] Acessível para navegação sem mouse e para leitores de tela;

- [x] Hooks personalizados para:
  - [x] animação na montagem e desmontagem de componentes;
  - [x] renderização condicional de componentes por breakpoints;

- [x] Tema criado com styled-componentes sem uso de provider;

- [x] Gerenciamento de estado global configurado e abstraído para total desacoplamento do Redux com o projeto;

- [x] Persistência de dados;

- [x] 100% de cobertura nos testes;
  
- [x] PWA instalável;

<br />

---

# :card_file_box: Estrutura de Diretórios e Arquivos

<br>

<details>
  <summary>Clique para mostrar estrutura completa</summary>

```
  project
  .
  ├── .husky
  ├── .jest
  |   ├── matchMediaMock.ts
  |   ├── nextDynamicMocks.ts
  |   ├── nextImageMocks.tsx
  |   └── setup.ts
  ├── .storybook
  |   ├── main.js
  |   ├── preview.js
  |   └── preview-head.html
  ├── componentGenerator
  |   ├── templates
  |   |   ├── component.tsx.hbs
  |   |   ├── stories.mdx.hbs
  |   |   ├── stories.tsx.hbs
  |   |   ├── styles.ts.hbs
  |   |   ├── test.tsx.hbs
  |   |   └── types.ts.hbs
  |   └── plopfile.js
  ├── public
  |   ├── iconsPwa     
  |   ├── imgs   
  |   ├── favicon.png   
  |   └── manifest.json
  ├── src
  |   ├── __mocks__
  |   |   ├── index.tsx
  |   |   └── nextRouter.ts
  |   ├── components
  |   |   ├── atoms
  |   |   |   ├── Button
  |   |   |   |   ├── __mocks__
  |   |   |   |   |   └── exemploMock.ts 
  |   |   |   |   ├── __tests__  
  |   |   |   |   |   └── Button.test.tsx          
  |   |   |   |   ├── storybook
  |   |   |   |   |   ├── stories.mdx
  |   |   |   |   |   └── stories.tsx
  |   |   |   |   ├── index.tsx
  |   |   |   |   ├── styles.ts
  |   |   |   |   └── types.ts
  |   |   |   ├── ErrorBoundary
  |   |   |   ├── HeadPage
  |   |   |   ├── RenderTextByBreakpoint
  |   |   |   ├── Svg
  |   |   |   |   ├── Logo  
  |   |   |   |   |   └── index.tsx
  |   |   |   |   ├── index.ts   
  |   |   |   |   └── types.ts   
  |   |   |   └── TitleSection
  |   |   ├── molecules
  |   |   |   └── TitleAnimation
  |   |   ├── organisms
  |   |   └── index.tsx
  |   ├── hooks
  |   |   ├── useAnimationRender
  |   |   ├── useRenderingByWindowSize
  |   |   |   ├── __mocks__
  |   |   |   |   └── exemploMock.ts 
  |   |   |   ├── __tests__  
  |   |   |   |   └── useAnimationRender.test.tsx          
  |   |   |   ├── index.ts
  |   |   |   └── types.ts
  |   |   └── index.ts
  |   ├── pages
  |   |   ├── _error
  |   |   ├── inicio
  |   |   |   ├── __mocks__
  |   |   |   |   └── exemploMock.ts  
  |   |   |   ├── __tests__ 
  |   |   |   |   └── inicio.test.tsx          
  |   |   |   ├── index.page.tsx
  |   |   |   └── styles.ts
  |   |   ├── pagina_exemplo
  |   |   ├── pagina_exemplo2
  |   |   ├── _app.page.tsx
  |   |   ├── _document.page.tsx
  |   |   └── index.page.tsx
  |   ├── store
  |   |   ├── exampleSimple
  |   |   |   ├── index.ts
  |   |   |   ├── types.ts
  |   |   |   └── useExampleSimple.ts
  |   |   ├── exampleWithPayload
  |   |   |   ├── index.ts
  |   |   |   ├── types.ts
  |   |   |   └── useExampleWithPayload.ts
  |   |   ├── configStore.ts
  |   |   ├── index.ts
  |   |   ├── persistConfig.ts
  |   |   └── rootState.ts
  |   ├── styles
  |   |   └── GlobalStyles.ts
  |   ├── templates
  |   |   ├── Default
  |   |   |   ├── __mocks__
  |   |   |   |   └── exemploMock.ts 
  |   |   |   ├── __tests__  
  |   |   |   |   └── Default.test.tsx          
  |   |   |   ├── index.tsx
  |   |   |   ├── styles.ts
  |   |   |   └── types.ts
  |   |   ├── Error
  |   |   ├── Example
  |   |   └── index.ts
  |   ├── theme
  |   |   ├── animations.ts
  |   |   ├── breakpoints.ts
  |   |   ├── colors.ts
  |   |   ├── index.ts
  |   |   ├── spacings.ts
  |   |   ├── typographies.ts
  |   |   └── windowSizes.ts
  |   ├── types
  |   |   ├── page.d.ts
  |   |   └── styled-components.d.ts
  |   └── utils
  |       ├── tests
  |       |   └── provider.tsx
  |       └── index.ts
  ├── .commitlintrc
  ├── .editorconfig
  ├── .eslintignore
  ├── .eslintrc
  ├── .gitattributes
  ├── .gitignore
  ├── .prettierignore
  ├── .pretierrc
  ├── jest.config.js
  ├── LICENSE
  ├── next.config.js
  ├── next-env.d.ts
  ├── package.json
  ├── README.md
  └── tsconfig.json
```

</details>

<br>

---

# :white_check_mark: Pré-Requisitos

- node (última versão lts)

- yarn ou npm

<br />

---

# :question: Como instalar e executar o projeto

## Clonar Repositório

```bash
git clone https://github.com/everton-dgn/next_styled_components_redux_tlk_pwa_boilerplate.git
```

## Instalar Dependências

```bash
yarn
```

## Inciar Ambiente de Desenvolvimento

```bash
yarn dev
```

Disponível em http://localhost:3000

## Gerar Build de Produção

```bash
yarn build
```

## Inciar Ambiente de Produção

```bash
yarn start
```

Disponível em http://localhost:3000

## Executar Testes

```bash
yarn test
```

## Executar Testes em Modo Watch

```bash
yarn test:w
```

## Inciar Storybook em Modo de Desenvolvimento

```bash
yarn sb
```

Disponível em http://localhost:6006

## Gerar Build de Produção do Storybook

```bash
yarn build-sb
```

## Executar lints

```bash
yarn lint
```

```bash
yarn next:lint
```

```bash
yarn typecheck
```

<br />

---

# :technologist: Autor

Feito por [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://www.youtube.com/c/ProgramadordeSucesso

:link: Site: https://programadordesucesso.com
