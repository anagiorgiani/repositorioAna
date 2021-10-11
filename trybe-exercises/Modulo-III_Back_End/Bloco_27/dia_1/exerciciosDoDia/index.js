const express = require("express");
const app = express();
const PORT = 3002;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const rescue = require('express-rescue');

const { create, getAllUser, getById, updatedUser, deleteUser } = require("./models/users");
const { validateEmail, validatePassword, validateName } = require('./validate');

app.get('/users/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const userId = await getById(id);
  if(!userId) res.status(400).json({ message: 'Not Found'})
  res.status(200).json(userId);
}));

app.put('/users/:id',validateEmail, validatePassword, validateName, rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body; 
  const newUser = await updatedUser(id, { firstName, lastName, email, password });
  res.status(200).json(newUser);
}));


app.post('/users', validateEmail, validatePassword, validateName, rescue(async (req, res) => {
  const { id, firstName, lastName, email } = req.body;
  const created = await create(id, firstName, lastName, email)
  res.status(201).json(created)
}));


app.get('/users', rescue(async (_req, res) => {
  const users = await getAllUser();
  if(!users) res.status(200).json([]);
  res.status(200).json(users)
}));

app.delete('/users/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const deleteUse = await deleteUser(id);
  res.status(200).json(deleteUse)
}));



app.listen(PORT, () => {
  console.log('Online');
});
