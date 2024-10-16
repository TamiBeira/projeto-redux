# Projeto ReduxApp

Este projeto foi desenvolvido com **React**, **Redux**, **Axios** e **Vite**. Ele tem como objetivo demonstrar as funcionalidades do Redux, permitindo que o usuário faça login com seu nome e e-mail, e seja redirecionado para um painel onde pode cadastrar e excluir endereços.

## Estrutura do Projeto

A organização do projeto é feita de forma modular para facilitar o entendimento do fluxo do Redux e o gerenciamento de estado.

### Estrutura de diretórios:

```bash
.
├── index.html
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx                # Componente principal
│   ├── components/
│   │   └── header/            # Componente Header com seu estilo
│   │       ├── header.module.css
│   │       └── index.jsx
│   ├── index.css              # Estilos globais
│   ├── main.jsx               # Ponto de entrada da aplicação
│   ├── pages/
│   │   ├── address/           # Página de gerenciamento de endereços
│   │   │   ├── address.module.css
│   │   │   └── index.jsx
│   │   ├── Home/              # Página inicial (home) após o login
│   │   │   ├── home.module.css
│   │   │   └── index.jsx
│   │   └── Login/             # Página de login
│   │       ├── index.jsx
│   │       └── login.module.css
│   ├── redux/                 # Diretório responsável pelo Redux e Sagas
│   │   ├── root-reducer.js    # Combina todos os reducers
│   │   ├── sagas.js           # Configura todos os Sagas
│   │   ├── store.js           # Configuração da store do Redux
│   │   └── user/              # Slices e Sagas relacionados ao usuário
│   │       ├── saga.js
│   │       └── slice.js
└── vite.config.js             # Configurações do Vite
```

### Principais Arquivos:

-   **App.jsx**: Componente raiz da aplicação.
-   **main.jsx**: Arquivo de inicialização da aplicação.
-   **redux/**: Contém a configuração do Redux e os Sagas.
    -   **store.js**: Configura a store do Redux.
    -   **root-reducer.js**: Combina todos os reducers.
    -   **sagas.js**: Configura todos os Sagas para a aplicação.
    -   **user/slice.js**: Define o slice para o gerenciamento de estado do usuário.
    -   **user/saga.js**: Sagas para operações assíncronas relacionadas ao usuário.
-   **pages/**: Contém as páginas principais da aplicação:
    -   **Login**: Página de login onde o usuário entra com nome e e-mail.
    -   **Home**: Página inicial que exibe após o login.
    -   **Address**: Página onde o usuário pode adicionar e excluir endereços.

## Tecnologias Utilizadas

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **Redux**: Gerenciamento de estado centralizado.
-   **Redux-Saga**: Middleware para tratar efeitos colaterais (operações assíncronas) no Redux.
-   **Axios**: Cliente HTTP para fazer requisições.
-   **Vite**: Ferramenta de build moderna e rápida para desenvolvimento.
-   **React Router DOM**: Gerenciamento de rotas.
-   **LocalForage**: Biblioteca para armazenamento local offline.

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/TamiBeira/projeto-redux.git
cd projeto-redux
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador e acesse `http://localhost:5173/` para visualizar a aplicação.

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Gera a build otimizada para produção.
-   `npm run preview`: Visualiza a build de produção em um servidor local.

## Acesso à Aplicação

Você pode acessar a aplicação online através do link: [projeto-redux-zeta.vercel.app](https://projeto-redux-zeta.vercel.app)
