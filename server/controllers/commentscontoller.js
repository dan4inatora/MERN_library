const mongoose = require('mongoose');
const Comment = require('../models/commentmodel');


module.exports.comment = (req, res, next) => {
    console.log(req.user);
    const {title, text} = req.body;
    const comment = new Comment();
    comment.sender = req.user.name;
    comment.title = title;
    comment.text = text;
    comment.save((err, doc) => {
        if(!err){
            res.send(doc);
        }
    })
}