// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Componente principal da aplicação
import './index.css';     // Importa os estilos globais

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Onde o React renderiza o conteúdo
);
