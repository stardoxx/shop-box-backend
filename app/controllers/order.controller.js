const db = require('../models');
const Order = db.orders;
const Cart = db.carts;

exports.checkOut = async(req, res) => {
    const items = await Cart.find({email: req.body.email});
    // console.log(items);
    // res.send(items);
    await Cart.deleteMany({email: req.body.email});
    //const deleted = 

    Order.insertMany(items)
    .then(order => {
        res.send(order);
    })
    .catch(err => {
        res.send({ error: err.message });
    })


};

exports.showAllOrders = async(req,res) => {
    const orders = await Order.find({email: req.body.email});
    res.send(orders);
};