import React from "react";
import axios from "axios";

const CadastroUser = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nome = formData.get('nome');
        const email = formData.get('email');

        try{
            const response = await axios.post('http://localhost:3005/createuser', {nome, email});
            e.target.reset();
        }
        catch(error){
            alert(error.message);
        };
    };

    return (
        <div className="Forms">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Digite seu nome" required className="inputs"/>
                <input type="email" name="email" placeholder="Digite seu melhor email" required className="inputs"/>
                <button type="submit" className="botao">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUser;