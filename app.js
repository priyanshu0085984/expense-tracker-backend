const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/homeRoute');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',homeRouter);

module.exports = app;