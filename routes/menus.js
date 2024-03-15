const express = require('express');
const router = express.Router();
const menus = require('../data/menus.json');
const restaurants = require('../data/restaurants.json');

router.get('/', (req, res) => {
  const { restaurant_id } = req.query;

  if (restaurant_id) {
    return res.status(200).json(menus.filter(menu => menu.restaurant_id === parseInt(restaurant_id)));
  }

  res.status(200).json(menus);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const newMenuData = menus.map(menu => {
    const { address } = restaurants.find(restaurant => restaurant.id === menu.restaurant_id);
    return {
      ...menu,
      address
    }
  });
  console.log(newMenuData, "newMenuData", newMenuData.find(menu => menu.id === parseInt(id)));
  const menu = newMenuData.find(menu => menu.id === parseInt(id));
  res.status(200).json(menu);
});

module.exports = router;