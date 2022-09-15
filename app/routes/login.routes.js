module.exports = app => {
    const signup = require("../controllers/login.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/signup", signup.create);
    // Retrieve all Tutorials
    // app.use('/api/login', router);

    router.get("/login", signup.findOne);

    return router;
  };