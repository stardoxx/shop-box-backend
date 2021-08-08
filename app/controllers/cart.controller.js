const db = require('../models');
const Cart = db.carts;

exports.addToCart = (req,res) => {

    

    const cart = new Cart({
        item: req.body.item,
        email: req.body.email,
        price: req.body.price,
        quantity: req.body.quantity,
        productId: req.body.productId,
    });

    //save cart 
    cart.save(cart)
        .then((data) =>{
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message: err.message || 'error while adding to cart'
            });
        });


};

// whole cart schema 
exports.showAllCarts = (req, res) => {


    Cart.find({email: req.body.email})
        .then((carts) =>{
            res.send(carts);
        })
        .catch((err) =>{
            res.status(500).send({
                message: err.message || 'error while showing all carts'
            });
        });


};

// increment quantity
exports.incQuantity = (req, res) => {

    

    Cart.findOneAndUpdate({
        $and: [{productId : req.body.productId},{ email : req.body.email}]
    },{$inc : {quantity : req.body.quantity}})
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || 'error while updating quantity',
        });
    });



};

exports.removeFromCart = (req, res) => {


    Cart.findOneAndDelete({
        $and: [{productId : req.body.productId},{ email : req.body.email}]
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || 'error while updating quantity',
        });
    });


};