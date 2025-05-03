const express = require('express');
const userAuth = require('./userAuth'); // ✅ No destructuring

const webRoute = express.Router();

webRoute.use("/user", userAuth);

//http://localhost:8000/web/user

module.exports = webRoute;
