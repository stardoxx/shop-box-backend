const db = require('../models');
const User = db.users;

//create a new user
exports.createUser = (req,res) => {
    //validate request
    if(!req.body.name && !req.body.email && !req.body.password) {
        res.send(400).send({message: 'incorrect input'});
        return;
    }

    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    user.save(user)
        .then(data => {res.send(data);})
        .catch(err =>{
            res.status(500).send({
                message: err.message |'error while creating a new user'
            });
        });



};

//retrive all users from the database
exports.findAllUsers = (req,res) => {

    User.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'some error while finding users'
            });
        });

};

// //find a particular user
// exports.findOneUser = (req,res) => {

// };