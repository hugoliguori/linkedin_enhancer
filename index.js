// index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint para testar se o servidor está online
app.get('/', (req, res) => {
  res.send('✅ MCP Server is online');
});

// Endpoint principal para agentes
app.post('/agent', (req, res) => {
  console.log('📨 Requisição recebida do agente:', req.body);

  // Aqui você pode incluir lógica para processar entrada
  const response = {
    reply: '🧠 Resposta gerada pelo servidor MCP',
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor MCP ativo na porta ${PORT}`);
});
