const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'shopping_cart',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/cart', (req, res) => {
  pool.query('SELECT * FROM cart', (error, results) => {
    if (error) {
      console.error('Erro ao buscar itens do carrinho:', error);
      res.status(500).json({ message: 'Erro ao buscar itens do carrinho' });
    } else {
      res.json(results);
    }
  });
});

app.post('/cart', (req, res) => {
  const { name, category, price, quantity } = req.body;
  const sql = 'INSERT INTO cart (name, category, price, quantity) VALUES (?, ?, ?, ?)';
  pool.query(sql, [name, category, price, quantity], (error, result) => {
    if (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
      res.status(500).json({ message: 'Erro ao adicionar item ao carrinho' });
    } else {
      const newItem = { id: result.insertId, name, category, price, quantity };
      res.json(newItem);
    }
  });
});

app.put('/cart/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, price, quantity } = req.body;
  const sql = 'UPDATE cart SET name = ?, category = ?, price = ?, quantity = ? WHERE id = ?';
  pool.query(sql, [name, category, price, quantity, id], (error, result) => {
    if (error) {
      console.error('Erro ao atualizar item do carrinho:', error);
      res.status(500).json({ message: 'Erro ao atualizar item do carrinho' });
    } else {
      res.json({ id, name, category, price, quantity });
    }
  });
});

app.delete('/cart/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM cart WHERE id = ?';
  pool.query(sql, [id], (error, result) => {
    if (error) {
      console.error('Erro ao deletar item do carrinho:', error);
      res.status(500).json({ message: 'Erro ao deletar item do carrinho' });
    } else {
      res.json({ message: 'Item deletado com sucesso' });
    }
  });
});

// Testes utilizando Jest e Supertest
describe('API Tests', () => {
  afterAll(async () => {
    // Limpar ou restaurar o estado do banco de dados após os testes
    await pool.end();
  });

  it('deve buscar todos os itens do carrinho', async () => {
    const res = await request(app).get('/cart');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('deve adicionar um novo item ao carrinho', async () => {
    const newItem = {
      name: 'produto',
      category: 'categoria',
      price: 50,
      quantity: 1
    };

    const res = await request(app).post('/cart').send(newItem);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toEqual(newItem.name);
  });

  it('deve atualizar um item no carrinho', async () => {
    const newItem = {
      name: 'produto',
      category: 'categoria',
      price: 50,
      quantity: 1
    };

    const addRes = await request(app).post('/cart').send(newItem);
    const updatedItem = {
      name: 'produto atualizado',
      category: 'categoria atualizada',
      price: 100,
      quantity: 2
    };

    const updateRes = await request(app).put(`/cart/${addRes.body.id}`).send(updatedItem);
    expect(updateRes.statusCode).toEqual(200);
    expect(updateRes.body.name).toEqual(updatedItem.name);
  });

  it('deve excluir um item do carrinho', async () => {
    const newItem = {
      name: 'produto',
      category: 'categoria',
      price: 50,
      quantity: 1
    };

    const addRes = await request(app).post('/cart').send(newItem);
    const deleteRes = await request(app).delete(`/cart/${addRes.body.id}`);
    expect(deleteRes.statusCode).toEqual(200);
    expect(deleteRes.body).toHaveProperty('message', 'Item deletado com sucesso');
  });
});
