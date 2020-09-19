var jwt = require("jwt-simple");
var moment = require("moment");
var secret = process.env.SECRET;

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.authorization) {
    console.log("No se encontró la cabezera de autorización");
    return res.status(403).send({ message: "Forbiden." });
  } else {
    var token = req.headers.authorization.replace(/['"]+/g, "");
    try {
      var payload = jwt.decode(token, secret);
      if (payload.exp > moment().unix()) {
        return res.status(401).send({
          message: "Token expired",
        });
      }
    } catch (ex) {
      return res.status(404).send({
        message: "Token invalid",
      });
    }
    req.user = payload;
    next();
  }
};
