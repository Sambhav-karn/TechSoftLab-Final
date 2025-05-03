let express = require('express');

const webRoute = require('./web/webRoute');
const userAuthRoute = require('./user/userAuthRoute');
let mainRoute = express.Router();


mainRoute.use("/web", webRoute)  //http://localhost:8000/web
mainRoute.use("/client", userAuthRoute)
module.exports=mainRoute;