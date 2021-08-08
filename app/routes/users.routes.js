module.exports = app =>{

    const users = require('../controllers/user.controller');
    
    var router = require('express').Router();

    // create a new user       
    router.post('/',users.createUser);
    router.get('/',users.findAllUsers);

    app.use('/users',router);


}