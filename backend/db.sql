CREATE DATABASE crud_example;
USE crud_example;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

SELECT * FROM users