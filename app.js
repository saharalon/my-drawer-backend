const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const diagram = require('./routes/diagram');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://my-drawer.saharalon.now.sh");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/health-check', (req, res, next) => res.sendStatus(200));
app.use('/api/diagrams', diagram);

module.exports = app;
