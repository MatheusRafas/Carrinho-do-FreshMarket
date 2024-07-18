import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear corpos de requisição JSON
app.use(bodyParser.json());

// Configuração da conexão com o MySQL
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'shopping_cart',
  port: 3306
});

// Exemplo de rota GET para buscar todos os itens do carrinho
app.get('/cart', async (req, res) => {
  try {
    const [results] = await connection.query('SELECT * FROM cart');
    res.json(results);
  } catch (error) {
    console.error('Erro ao buscar itens do carrinho:', error);
    res.status(500).json({ message: 'Erro ao buscar itens do carrinho' });
  }
});

// Exemplo de rota POST para adicionar um item ao carrinho
app.post('/cart', async (req, res) => {
  const { name, category, price, quantity } = req.body;
  const sql = 'INSERT INTO cart (name, category, price, quantity) VALUES (?, ?, ?, ?)';
  try {
    const [result] = await connection.query(sql, [name, category, price, quantity]);
    const newItem = { id: result.insertId, name, category, price, quantity };
    res.json(newItem);
  } catch (error) {
    console.error('Erro ao adicionar item ao carrinho:', error);
    res.status(500).json({ message: 'Erro ao adicionar item ao carrinho' });
  }
});

// Rota PUT para atualizar um item do carrinho
app.put('/cart/:id', async (req, res) => {
  const itemId = req.params.id;
  const { name, category, price, quantity } = req.body;
  const sql = 'UPDATE cart SET name = ?, category = ?, price = ?, quantity = ? WHERE id = ?';
  try {
    const [result] = await connection.query(sql, [name, category, price, quantity, itemId]);
    if (result.affectedRows > 0) {
      res.json({ message: `Item ${itemId} atualizado com sucesso` });
    } else {
      res.status(404).json({ message: `Item ${itemId} não encontrado` });
    }
  } catch (error) {
    console.error('Erro ao atualizar item do carrinho:', error);
    res.status(500).json({ message: 'Erro ao atualizar item do carrinho' });
  }
});

// Rota DELETE para deletar um item do carrinho
app.delete('/cart/:id', async (req, res) => {
  const itemId = req.params.id;
  const sql = 'DELETE FROM cart WHERE id = ?';
  try {
    const [result] = await connection.query(sql, [itemId]);
    if (result.affectedRows > 0) {
      res.json({ message: `Item ${itemId} deletado com sucesso` });
    } else {
      res.status(404).json({ message: `Item ${itemId} não encontrado` });
    }
  } catch (error) {
    console.error('Erro ao deletar item do carrinho:', error);
    res.status(500).json({ message: 'Erro ao deletar item do carrinho' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
