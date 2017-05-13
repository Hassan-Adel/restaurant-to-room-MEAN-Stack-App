module.exports = function(req, res, next) {
    //check 
    if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};