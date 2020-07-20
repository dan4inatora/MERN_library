const User = require('../models/usersmodel');

function register(req, res, next){  
   const { email, name, password, isAdmin } = req.body;
    const user = new User();
    user.name = name;
    user.password = password;
    user.email = email;
    user.isAdmin = isAdmin;
    user.save((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        if (err.code == 11000) {
          res.status(422).send("Duplicate email");
        } else {
          //res.send(err);
          return next(err);
        }
      }
    })
}

module.exports = register;