require('dotenv').config();
const express         = require('express');
const app             = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const path            = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const logger          = require('morgan');
app.use(logger('dev'));

const bodyParser      = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./resources'));

app.listen(process.env.PORT || 8000);