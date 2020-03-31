const mongoose = require('mongoose');
const User = require('../models/usersmodel');
const passport = require('passport');

module.exports.register = (req, res, next) => {
    const {email, name, password, isAdmin} = req.body;
    const user = new User();
    user.name = name;
    user.password = password;
    user.email = email;
    user.isAdmin = isAdmin;
    user.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            if(err.code == 11000){
                res.status(422).send('Duplicate email');
            }
            else{
                //res.send(err);
                return next(err);
            }
        }
    }) 
}

module.exports.login = async(req, res, next) => {
    await passport.authenticate('local', {session : true}, async(err, user, info) => {
        if(err) {
            return res.status(400).json(err);
        }
        else if(user){
            try{
                await req.logIn(user, err => {
                    if(err){
                        return next(err);
                    }
                })
                console.log(req.session);
                return res.status(200).send({user});
            }
            catch(err){
                return next(err);
            }
        }
        else{
            return res.status(404).json(info);
        }
    })(req, res, next);
}

  





