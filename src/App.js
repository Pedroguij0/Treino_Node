// src/App.js
import React from 'react';
import CadastroUser from './createuser';  // Importe o componente de cadastro
import './App.css';

function App() {
  return (
    <div className="App">
      <CadastroUser />  {/* Renderiza o formulário de cadastro */}
    </div>
  );
}

export default App;
