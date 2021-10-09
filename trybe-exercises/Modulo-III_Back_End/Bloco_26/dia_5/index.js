const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const router = require('./router');
app.use('/user', router);


app.listen(3000, () => console.log('Run server http://localhost:3000'));