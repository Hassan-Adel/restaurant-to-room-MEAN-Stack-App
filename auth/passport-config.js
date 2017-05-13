module.exports = function() {
  var passport = require('passport');
  var passportLocal = require('passport-local');
  var bcrypt = require('bcrypt');
  var userService = require('../services/user-service');

  //Calling authenticate in a route will cause it to look for a username by default
  //so if we want to keep our input name in our html (login)form email
  //we can pass an option with a username field property that we set to email
  passport.use(new passportLocal.Strategy({
    usernameField: 'email'
  }, function(email, password, next) {
    userService.findUser(email, function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, null);
      }
      bcrypt.compare(password, user.password, function(err, same) {
        if (err) {
          return next(err);
        }
        if (!same) {
          next(null, null);
        }
        next(null, user);
      });
    });
  }));
  //serialize user to the session .. no error because this should only be called when we find a vaild user
  passport.serializeUser(function(user, next) {
    next(null, user.email);
  });
  //deserialize user from the session
  passport.deserializeUser(function(email, next) {
    userService.findUser(email, function(err, user) {
      next(err, user);
    });
  });
};
