const express = require('express');
const router = express.Router();
const orders = require('../data/orders.json');

router.get('/', (req, res) => {
  const { restaurant_id } = req.query;

  if (restaurant_id) {
    return res.status(200).json(orders.filter(orders => orders.restaurant_id === parseInt(restaurant_id)));
  }

  res.status(200).json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const restaurant = orders.find(restaurant => restaurant.id === parseInt(id));
  res.status(200).json(restaurant);
});

module.exports = router;