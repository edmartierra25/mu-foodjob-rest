const express = require('express');
const router = express.Router();
const menus = require('../data/menus.json');

router.get('/', (req, res) => {
  const { restaurant_id } = req.query;

  if (restaurant_id) {
    return res.status(200).json(menus.filter(menu => menu.restaurant_id === parseInt(restaurant_id)));
  }

  res.status(200).json(menus);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const restaurant = menus.find(restaurant => restaurant.id === parseInt(id));
  res.status(200).json(restaurant);
});

module.exports = router;