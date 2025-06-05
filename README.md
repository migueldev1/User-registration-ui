# Frontend - Cadastro de Usuários

Este é o frontend de uma aplicação de cadastro de usuários, desenvolvida com **React + Vite**. Ele se comunica com uma API backend (Node.js + Express + MongoDB) para listar, cadastrar, editar e excluir usuários.

## 📸 Demonstração

![image](https://github.com/user-attachments/assets/9654c904-e68f-46fe-993b-780069bd63ba)


## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- CSS

## 📁 Organização do projeto

Este repositório contém **apenas o frontend** da aplicação.  
O backend está disponível aqui: [Repositório do backend](https://github.com/migueldev1/user-registration-api)

## 🔧 Como executar o frontend

1. **Clone o repositório:**

```bash
git clone https://github.com/migueldev1/user-registration-ui
```

2. Instale as dependências:

```env
npm install
```

3. Crie um arquivo .env na raiz do projeto, com a URL da sua API:

```ini
VITE_API_URL=http://localhost:3000
```
4. Gere o cliente do prisma:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
npm run dev
```

A API estará rodando em http://localhost:3000
