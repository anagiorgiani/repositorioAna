const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

const PORT = process.env.PORT || 3000;
app.listen( PORT , () => {
  console.log("App listening on port 3000!");
});