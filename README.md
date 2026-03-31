# 🚀 Cadastro de Produtos com React

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-purple?logo=vite)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Deploy](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)

Aplicação desenvolvida em **React + Vite**, com foco em consolidação de conceitos fundamentais como **useState, useEffect, props e componentização**, evoluindo para um projeto com comportamento próximo a aplicações reais.

---

## ✨ Funcionalidades

* 📦 Cadastro de produtos
* ✏️ Edição de produtos
* ❌ Remoção com confirmação (modal)
* 🔍 Busca por nome
* 🏷️ Filtro por categoria
* 💾 Persistência com localStorage
* ⏳ Simulação de carregamento (useEffect + setTimeout)
* 💬 Feedback visual ao usuário
* 💰 Formatação de moeda (R$)

---

## 🧠 Conceitos aplicados

### 🔹 useState

Gerenciamento de:

* Lista de produtos
* Dados do formulário
* Estado de edição
* Filtros
* Mensagens
* Modal

---

### 🔹 useEffect

* Simulação de carregamento inicial
* Persistência automática no localStorage

---

### 🔹 Props

Comunicação entre componentes:

* Envio de dados e funções do componente principal (`App`) para os filhos

---

### 🔹 Componentização

```id="tree1"
App
│
├── ProductForm
├── ProductList
│   └── ProductCard
├── AlertMessage
├── Loading
└── ConfirmModal
```

Separação clara de responsabilidades, facilitando manutenção e reutilização.

---

## 🛠️ Tecnologias utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3

---

## 📁 Estrutura do projeto

```id="tree2"
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

---

## ▶️ Como executar o projeto

```bash id="cmd1"
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# Entrar na pasta
cd seu-repo

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

Acesse:

```id="cmd2"
http://localhost:5173
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de evoluir de um CRUD simples para uma aplicação com:

* Estado mais complexo
* Interações reais de usuário
* Organização profissional
* Simulação de fluxo de aplicação real

---

## 🚀 Diferenciais implementados

* Persistência de dados sem backend (localStorage)
* UX melhorada com modal de confirmação
* Filtros combinados (busca + categoria)
* Edição dinâmica reutilizando o formulário
* Código modular e reutilizável

---

## 🔮 Próximas melhorias

* Integração com API real
* Context API ou Redux
* Autenticação de usuário
* Testes automatizados
* UI com Tailwind ou Material UI

---

## 👨‍💻 Autor

**Felipe Gabriel Lambiazzi**

* 💼 Em transição para desenvolvimento de software
* 🚀 Focado em Frontend (React / Angular)
* 📚 Estudando Backend e arquitetura

🔗 LinkedIn: https://www.linkedin.com/in/felipe-gabriel-lambiazzi-734861140/

---

## 📌 Considerações finais

Projeto desenvolvido para demonstrar domínio prático de conceitos essenciais do React, com foco em clareza, organização e evolução progressiva da complexidade da aplicação.
