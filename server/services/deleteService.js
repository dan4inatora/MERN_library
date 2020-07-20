module.exports = (req, res, next, type) => {
  const {id} = req.body;
  type.deleteOne({_id:id}, function (err, data) {
    if (err) res.send(err);
    else{
      res.send(data);
    }
  })
}