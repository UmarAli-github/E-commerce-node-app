const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop');


router.get('/', shopController.getIndex);

router.get('/products', shopController.getShopProducts);

router.get('/products/:productId', shopController.getProductID);

router.post('/cart', shopController.postCart);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);




module.exports = router;