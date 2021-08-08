module.exports = app => {
    const carts = require('../controllers/cart.controller');

    var router = require('express').Router();

    // create a new user       
    router.post('/',carts.addToCart);
    router.get('/',carts.showAllCarts);
    router.patch('/',carts.incQuantity);
    router.delete('/',carts.removeFromCart);
    app.use('/carts',router);




}