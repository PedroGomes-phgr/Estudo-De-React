# 🚀 Mini Blog

Uma aplicação web de blog desenvolvida com React e Firebase, permitindo autenticação de usuários, criação, edição e exclusão de posts, além de buscas por tags.

## ✨ Funcionalidades

- Cadastro de usuários
- Login e Logout
- Autenticação com Firebase
- Criação de posts
- Edição de posts
- Exclusão de posts
- Dashboard para gerenciamento dos posts
- Busca de posts por tags
- Rotas protegidas
- Interface responsiva

## 🛠️ Tecnologias Utilizadas

### Front-end

- React
- React Router DOM
- CSS Modules

### Back-end

- Firebase Authentication
- Firebase Firestore

### Ferramentas

- Git
- GitHub
- Vercel

## 📚 Conceitos Aplicados

- Componentização
- Hooks do React
  - useState
  - useEffect
  - useContext
- Custom Hooks
- Gerenciamento de Estado
- Manipulação de Formulários
- Rotas Protegidas
- Integração com Firebase
- Banco de Dados NoSQL

## 📂 Estrutura do Projeto

```bash
src/
├── components/
├── context/
├── hooks/
├── pages/
├── firebase/
├── App.js
└── index.js
```

## ⚙️ Como Executar

### Clone o repositório

```bash
git clone https://github.com/PedroGomes-phgr/Estudo-De-React.git
```

### Acesse a pasta do projeto

```bash
cd 10_MINIBLOG/miniblogg
```

### Instale as dependências

```bash
npm install
```

### Configure o Firebase

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_KEY=sua_api_key
REACT_APP_AUTH_DOMAIN=seu_auth_domain
REACT_APP_PROJECT_ID=seu_project_id
REACT_APP_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_APP_ID=seu_app_id
```

### Execute o projeto

```bash
npm start
```

A aplicação ficará disponível em:

```txt
http://localhost:3000
```

## 🎯 Objetivo

O projeto foi desenvolvido para praticar conceitos fundamentais e intermediários do React, além da integração com o Firebase para autenticação e armazenamento de dados.

## 🚀 Melhorias Futuras

- Dark Mode
- Sistema de comentários
- Sistema de curtidas
- Perfil de usuário
- Upload de imagens com Firebase Storage
- Paginação de posts
- Filtros avançados

## 👨‍💻 Autor

**Pedro Henrique Gomes Rodrigues**

- GitHub: https://github.com/PedroGomes-phgr

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
