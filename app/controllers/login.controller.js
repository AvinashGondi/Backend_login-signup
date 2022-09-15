const db = require("../models");
const Signup = db.signup;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const loginData = {
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  // Save Tutorial in the database
  Signup.create(loginData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Some error occured while signing up (email alredy taken)" ||
          "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.query.email;
  const pass = req.query.password;
  Signup.findByPk(id)
    .then((data) => {
      if (data) {
        if (data.password == pass) {
          data = {
            status: true,
            createdAt: data["dataValues"]["createdAt"],
            updatedAt: data["dataValues"]["updatedAt"],
          };
          res.send(data);
        } else {
          res.status(401).send({
            status: false,
            message: `Incorrect Password`,
          });
        }
      } else {
        res.status(404).send({
          status: false,
          message: `Cannot find Login data with email=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while Login with id=" + id,
      });
    });
};
