module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define("signup", {
      userName: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }


    });
    return Signup;

    // const Login = sequelize.define()
  };
