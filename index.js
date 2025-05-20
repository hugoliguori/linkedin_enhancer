// index.js
import express from 'express';
import fetch from 'node-fetch'; // Se estiver no Node.js < 18, adicione 'node-fetch' como dependência

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Teste de vida
app.get('/', (req, res) => {
  res.send('✅ MCP Server is online');
});

// Endpoint para buscar perfil do LinkedIn via Agent.ai
app.post('/linkedin-profile', async (req, res) => {
  const { linkedin_url } = req.body;

  if (!linkedin_url) {
    return res.status(400).json({ error: 'linkedin_url é obrigatório' });
  }

  try {
    const response = await fetch('https://api.agent.ai/linkedin/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.AGENT_AI_API_KEY // Você deve configurar essa variável no Render
      },
      body: JSON.stringify({ linkedin_url })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error('Erro ao buscar perfil do LinkedIn:', err);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor MCP ativo na porta ${PORT}`);
});
