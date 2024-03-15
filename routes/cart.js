const express = require('express');
const router = express.Router();
const cart = require('../data/cart.json');
const menus = require('../data/menus.json');

router.get('/', (req, res) => {
  const { user_id } = req.query;
  const newCartData = cart.map(cart => {
    const { name, imageUrl, restaurant_id } = menus.find(menu => menu.id === cart.product_id);
    return {
      ...cart,
      name,
      imageUrl,
      restaurant_id
    }
  });

  if (user_id) {
    return res.status(200).json(newCartData.filter(cart => cart.user_id === parseInt(user_id)));
  }

  return res.status(200).json(newCartData);
});

router.post('/', (req, res) => {
  const { user_id, product_id, count } = req.body;

  const existingCartItem = cart.find(item => item.user_id === user_id && item.product_id === product_id);
  if (existingCartItem) {
    existingCartItem.count = count;
  } else {
    cart.push({
      user_id,
      product_id,
      count
    });
  }

  return res.status(200).json({
    user_id,
    product_id,
    count
  });
});

module.exports = router;