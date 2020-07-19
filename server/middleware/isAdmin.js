module.exports = {
  isAdmin: (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      next();
    } else {
      res.status(401).send("User must be Admin");
    }
  }
};
