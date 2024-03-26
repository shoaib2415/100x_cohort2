const { Admin } = require("../db/index");

function adminMiddleware(req, res, next) {
  const adminname = req.headers.adminname;
  const password = req.headers.password;
  Admin.findOne({
    adminname: adminname,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesnt exist",
      });
    }
  });
}

module.exports = adminMiddleware;
