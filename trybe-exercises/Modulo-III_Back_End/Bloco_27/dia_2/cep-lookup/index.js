require('dotenv').config();
const express = require("express");
const app = express();
const { findCep, createCep } = require('./controllers/cep');
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/cep', createCep);

app.get('/cep/:cep', findCep);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});



app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });

