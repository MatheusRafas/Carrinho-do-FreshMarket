-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS shopping_cart;

-- Seleciona o banco de dados
USE shopping_cart;

-- Criação da tabela `cart`
CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);
