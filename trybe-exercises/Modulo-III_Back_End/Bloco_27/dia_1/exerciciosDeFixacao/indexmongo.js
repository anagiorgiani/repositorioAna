const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { getAll, getByAuthorId, findById, create, isValid } = require('./modelsmongo/books')


app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await findById(id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(books);
});

app.get("/books", async (req, res) => {
  const { author_id } = req.query; 
  const books = (author_id) ? await getByAuthorId(author_id) : await getAll();
  res.status(200).json(books);
});



app.get("/books", async (_req, res) => {
  const books = await getAll();
  res.status(200).json(books);
});

app.post('/books', async(req, res) => {
  const { title, author_id }= req.body;
  if(!isValid(title, author_id)) return res.status(400).json({message: "Dados Inválidos"});
  await create(title, author_id);
  res.status(200).json({message: " Criado com sucesso"})
});



app.listen(port, () => console.log("Ouvindo"));
