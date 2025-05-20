import express from 'express';

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('✅ MCP Server is running!');
});

app.listen(PORT, () => {
  console.log(`✅ MCP Server is running on port ${PORT}`);
});
