
module.exports = function(app) {
    // /logger is where the login info is entered
    app.post("/logger", function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      if (username && password) {
        db.User.findOne({
          where: {
            username: username,
            password: password
          }
        }).then(function(data) {
          var user;
          if (data !== null) {
            user = data.dataValues;
          }
  
          if (data === null) {
            return res.render("invalidIDPage");
          }
  
          if (user.username === username && user.password === password) {
            req.session.loggedin = true;
            req.session.username = username;
            // redirects to login page
            return res.redirect("/login");
          } else {
            return res.render("invalidIDPage");
          }
          res.end();
        });
      } else {
        return res.render("invalidIDPage");
        res.end();
      }
    });
  };
  