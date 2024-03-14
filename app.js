var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.js');
var loginRouter = require('./routes/login.js');
var viewOrderRouter = require('./routes/vieworder.js');
var orderRouter = require('./routes/order.js');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/viewOrder', viewOrderRouter);
app.use('/order', orderRouter);
var router = express.Router();

module.exports = app;
