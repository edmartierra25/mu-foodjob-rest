const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users.js');
const loginRouter = require('./routes/login.js');
const viewOrderRouter = require('./routes/vieworder.js');
const orderRouter = require('./routes/orders.js');
const restaurantsRouter = require('./routes/restaurants.js');
const menusRouter = require('./routes/menus.js');
const cartRouter = require('./routes/cart.js');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/viewOrder', viewOrderRouter);
app.use('/orders', orderRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/menus', menusRouter);
app.use('/cart', cartRouter);

module.exports = app;
