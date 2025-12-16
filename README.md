# 🛒 Carrinho do FreshMarket

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/version-0.0.0-blue" alt="Version">
</p>

Carrinho do FreshMarket é uma aplicação fullstack para gerenciamento de carrinho de compras, desenvolvida com React, Vite, Express e MySQL. O projeto oferece uma experiência moderna, responsiva e eficiente para usuários e desenvolvedores.

---

## ✨ Principais Recursos

- Adição, remoção e atualização de itens no carrinho
- Resumo de compra com cálculo automático
- Integração com banco de dados MySQL (remoto ou local)
- Backend robusto com Express.js
- Frontend moderno com React e Sass
- Testes automatizados com Jest

---

## 🚀 Como começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) local ou acesso ao banco remoto

### Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/SeuUsuario/Carrinho-do-FreshMarket.git
   cd Carrinho-do-FreshMarket
   ```
2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
3. Configure o banco de dados:
   - Edite o arquivo `.env` com as credenciais do seu banco MySQL
   - Para rodar localmente, use o script `database.sql` para criar o banco e a tabela:
     ```sh
     mysql -u root -p < database.sql
     ```

### Rodando o projeto

#### Frontend
```sh
npm run dev
# ou
yarn dev
```
Acesse [http://localhost:5173](http://localhost:5173) no navegador.

#### Backend (Nele contém o BD)
```sh
cd src
node server.js
```
O backend estará disponível em [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

Execute os testes automatizados com:
```sh
npm test
# ou
yarn test
```
Os testes utilizam um banco de dados local MySQL.

---

## Sobre o Banco de Dados (MySql) 💾
<li>O mesmo esta utilizando o <strong><a href=https://www.clever-cloud.com/>Clever Cloud</a></strong> como host para o Banco de Dados, fora do local.</li>
<li>O mesmo pode ser reproduzindo localmente por meio do MySQL Workbench. No documento "database.sql" contém as informações para sua construção.</li>
<li>Dentro do VsCode foi utilizado o <strong>SQLTools</strong> como suporte para verificar a conexão com o BD.</li>
(https://github.com/user-attachments/assets/bf95dc67-2918-4de5-af1e-20009dc2cd64)

---

## 🛠️ Tecnologias e Bibliotecas

- React 18
- Vite
- Express.js
- MySQL
- Sass
- Axios
- Jest
- Babel
- Cors
- Node

---

## 📚 Onde obter ajuda

- Consulte a documentação do [React](https://react.dev/)
- Veja a [documentação do Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://dev.mysql.com/doc/)
- Para dúvidas ou sugestões, abra uma issue neste repositório

---

## 👥 Contribuição e Manutenção

Este projeto é mantido por Matheus Rafael.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](./LICENSE) para mais informações.

