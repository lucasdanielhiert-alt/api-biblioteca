// 1. Importação das dependências
const express = require('express');
const cors = require('cors');

// 2. Inicialização do App (Monolito)
const app = express();
const PORTA = 3000; // Porta onde o servidor vai rodar

// 3. Configuração dos Middlewares
app.use(cors()); // Habilita CORS para qualquer origem (essencial para testes de frontend separado)
app.use(express.json()); // Habilita o recebimento de JSON (boas práticas, mesmo não usando no GET)

// 4. Rota GET de Boas-Vindas
app.get('/', (requisicao, resposta) => {
    // Lógica do Controller (simples)
    const mensagem = {
        saudacao: 'Olá, Engenheiro!',
        mensagem: 'Bem-vindo à sua API REST monolítica construída com Node + Express + CORS.',
        status: 'API Online',
        timestamp: new Date().toISOString()
    };

    // Retorna JSON com status 200 (OK)
    resposta.status(200).json(mensagem);
});

// 5. Inicialização do Servidor
app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando furiosamente em http://localhost:${PORTA}`);
    console.log(`📡 Pressione CTRL + C para encerrar.`);
});