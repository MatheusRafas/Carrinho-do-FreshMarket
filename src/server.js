const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Middleware para parsear corpos de requisição JSON
app.use(bodyParser.json());

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'matheus',
  password: '12345',
  database: 'shopping_cart'
});

// Conectar ao MySQL
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  }
});

// Exemplo de rota GET para buscar todos os itens do carrinho
app.get('/cart', (req, res) => {
  connection.query('SELECT * FROM cart', (error, results) => {
    if (error) {
      console.error('Erro ao buscar itens do carrinho:', error);
      res.status(500).json({ message: 'Erro ao buscar itens do carrinho' });
    } else {
      res.json(results);
    }
  });
});

// Exemplo de rota POST para adicionar um item ao carrinho
app.post('/cart', (req, res) => {
  const { name, category, price, quantity } = req.body;
  const sql = 'INSERT INTO cart (name, category, price, quantity) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, category, price, quantity], (error, result) => {
    if (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
      res.status(500).json({ message: 'Erro ao adicionar item ao carrinho' });
    } else {
      const newItem = { id: result.insertId, name, category, price, quantity };
      res.json(newItem);
    }
  });
});

// Exemplo de rota PUT para atualizar um item do carrinho
app.put('/cart/:id', (req, res) => {
    const itemId = req.params.id;
    const { name, category, price, quantity } = req.body;
    const sql = 'UPDATE cart SET name = ?, category = ?, price = ?, quantity = ? WHERE id = ?';
    connection.query(sql, [name, category, price, quantity, itemId], (error, result) => {
      if (error) {
        console.error('Erro ao atualizar item do carrinho:', error);
        res.status(500).json({ message: 'Erro ao atualizar item do carrinho' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: `Item ${itemId} atualizado com sucesso` });
        } else {
          res.status(404).json({ message: `Item ${itemId} não encontrado` });
        }
      }
    });
});
  
// Exemplo de rota DELETE para deletar um item do carrinho
app.delete('/cart/:id', (req, res) => {
    const itemId = req.params.id;
    const sql = 'DELETE FROM cart WHERE id = ?';
    connection.query(sql, [itemId], (error, result) => {
      if (error) {
        console.error('Erro ao deletar item do carrinho:', error);
        res.status(500).json({ message: 'Erro ao deletar item do carrinho' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: `Item ${itemId} deletado com sucesso` });
        } else {
          res.status(404).json({ message: `Item ${itemId} não encontrado` });
        }
      }
    });
});
  

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });