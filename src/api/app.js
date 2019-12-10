const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controllers/use');

const app = express();

app.use(bodyParser.json());
app.use('/user', user);

module.exports = app;
