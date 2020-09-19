const User = require("../models/user");

module.exports.logIn = async (req, res) => {
  let result = await User.findOne(req.body);
  result.token = "token generado";
  result
    .save()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};

module.exports.register = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};

module.exports.logOut = async (req, res) => {
  let result = await User.findOne(req.body);
  result.token = null;
  result
    .save()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "Error en la petición", detail: error });
    });
};
