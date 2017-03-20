const express         = require('express');
const app             = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', './views');

const path            = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const logger          = require('morgan');
app.use(logger('dev'));

const bodyParser      = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const methodOverride  = require('method-override');
app.use(methodOverride('_method'));

const session         = require('express-session');
app.use(session({
  secret: 'I need a job!',
  resave: false,
  saveUnitialized: true
}));

app.use('/', require('./resources'));

app.listen(process.env.PORT || 8000);