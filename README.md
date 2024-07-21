<h1>Projeto FreshMarket 🛒</h1>
<p>O objetivo desta aplicação foi desenvolver um carrinho de compras para o marketplace FreshMarket, utilizando uma combinação de tecnologias avançadas para garantir desempenho e facilidade de manutenção. A base principal da aplicação foi construída com React, complementada pelo Vite para uma experiência de desenvolvimento rápida e eficiente. Para a estilização do frontend, empregamos Sass, garantindo um design moderno e responsivo. O gerenciamento de pacotes foi realizado com o Yarn, otimizando a instalação e atualização das dependências.

A comunicação com a API foi facilitada pelo Axios, enquanto o backend foi desenvolvido utilizando Express, permitindo a criação de um servidor robusto e escalável. A integração com o banco de dados MySQL garantiu uma armazenagem eficiente e segura dos dados. Para garantir a interoperabilidade do frontend e backend, utilizamos o middleware Cors.

Os testes foram realizados com Jest, assegurando a confiabilidade do código e a detecção de bugs. Além disso, Babel foi empregado para transpilar o código JavaScript, garantindo compatibilidade com diferentes navegadores e ambientes. Esta combinação de tecnologias proporcionou uma base sólida e eficiente para o desenvolvimento do carrinho de compras do FreshMarket.</p>

<h1>Sobre o Banco de Dados (MySql) 💾</h1>
<li>O mesmo esta utilizando o <strong><a href=https://www.clever-cloud.com/>Clever Cloud</a></strong> como host para o Banco de Dados, fora do local.</li>
<li>O mesmo pode ser reproduzindo localmente por meio do MySQL Workbench. No documento "database.sql" contém as informações para sua construção.</li>
<li>Dentro do VsCode foi utilizado o <strong>SQLTools</strong> como suporte para verificar a conexão com o BD.</li>
(https://github.com/user-attachments/assets/bf95dc67-2918-4de5-af1e-20009dc2cd64)


<h1>Tecnologias ⚙️</h1>
<li>React</li>
<li>Vite</li>
<li>Sass</li>
<li>Yarn</li>
<li>Axios</li>
<li>Express</li>
<li>Jest</li>
<li>Cors</li>
<li>MySQL</li>
<li>Babel</li>
<li>Node</li>

<h1>Iniciando o Projeto 🛠️</h1>
<h2>Frontend</h2>
<li>Para que possa rodar o frontend é necessário inserir no terminal o comando:</li>
<p><strong>➡︎ npm run dev</strong></p>
<p>Ele informará o link de acesso</p>

<h2>Backend</h2>
<li>Para que possa rodar o backend (onde contém a conexão com o BD MySql) é necesário realizar os seguintes comandos:</li>
<p>Apontar para a pasta onde contém o backend:</p>
<p><strong>➡︎ cd src</strong></p>
<p>Em seguida realizar o comando para rodar o arquivo "server.js":</p>
<p><strong>➡︎ node server.js</strong></p>

<h1>Iniciando os testes com o JEST🧪</h1>
<li>Para iniciar os teste com o Jest, digite no terminal o comando:</li>
<p><strong>➡︎ npm test</strong></p>
<p>Ele irá rodar um banco de dados local com o MySQL</p>
