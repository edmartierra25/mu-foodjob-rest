const express = require('express');
const router = express.Router();
const restaurants = require('../data/restaurants.json');

router.get('/', (req, res) => {
  res.status(200).json(restaurants);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id));
  res.status(200).json(restaurant);
});

module.exports = router;