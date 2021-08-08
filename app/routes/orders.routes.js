module.exports = app =>{
  
    const orders = require('../controllers/order.controller');
    
    var router = require('express').Router();

    // create a new user       
    router.post('/',orders.checkOut);
    router.get('/',orders.showAllOrders);
    
    app.use('/orders',router);

    
};