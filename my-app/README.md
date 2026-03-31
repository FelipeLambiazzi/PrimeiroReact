# 🚀 Cadastro de Produtos com React

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-purple?logo=vite)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)

Aplicação desenvolvida em **React + Vite** com foco em prática de **useState**, **useEffect**, **props** e **componentização**, evoluindo para um projeto com interações mais próximas de uma aplicação real.

## ✨ Funcionalidades

* 📦 Cadastro de produtos
* ✏️ Edição de produtos
* ❌ Remoção com confirmação em modal
* 🔍 Busca por nome
* 💾 Persistência com `localStorage`
* ⏳ Simulação de carregamento com `useEffect` + `setTimeout`
* 💬 Feedback visual ao usuário
* 💰 Formatação de preço em real
* 🖼️ Exibição de imagem do produto

## 🧠 Conceitos aplicados

### `useState`

Gerenciamento de:

* lista de produtos
* dados do formulário
* estado de edição
* busca
* mensagem de feedback
* modal de confirmação

### `useEffect`

Utilizado para:

* simular o carregamento inicial dos produtos
* salvar automaticamente a lista no `localStorage`

### `props`

Comunicação entre componentes:

* envio de dados e funções do `App` para os componentes filhos

### Componentização

```text
App
│
├── ProductForm
├── ProductList
│   └── ProductCard
├── AlertMessage
├── Loading
└── ConfirmModal
```

## 🛠️ Tecnologias utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3

## 📁 Estrutura do projeto

```text
src/
  components/
    ProductForm.jsx
    ProductList.jsx
    ProductCard.jsx
    AlertMessage.jsx
    Loading.jsx
    ConfirmModal.jsx
  App.jsx
  App.css
  main.jsx
```

## ▶️ Como executar o projeto

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npm run dev
```

Acesse no navegador:

```text
http://localhost:5173
```

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para consolidar fundamentos do React por meio de uma aplicação de cadastro de produtos com campos obrigatórios de:

* nome
* preço
* descrição

Além disso, o componente `ProductCard` recebe via props:

* `name`
* `price`
* `image`
* `description`

## 🚀 Diferenciais implementados

* persistência no navegador sem backend
* edição reutilizando o mesmo formulário
* confirmação antes da remoção
* interface mais próxima de um CRUD real
* código modular e reutilizável

## 🔮 Próximas melhorias

* integração com API real
* filtros mais avançados
* autenticação
* testes automatizados
* deploy final em produção

## 👨‍💻 Autor

**Felipe Gabriel Lambiazzi**

* Em transição para desenvolvimento de software
* Focado em Frontend
* Estudando React, Angular e Backend

LinkedIn:
https://www.linkedin.com/in/felipe-gabriel-lambiazzi-734861140/

## 📌 Considerações finais

Projeto desenvolvido para demonstrar domínio prático de conceitos essenciais do React, com foco em organização, reutilização de componentes e evolução progressiva da complexidade da aplicação.
