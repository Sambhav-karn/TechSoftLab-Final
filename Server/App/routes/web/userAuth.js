const express = require('express');
const { sendEnq } = require('../../controller/web/enqController');
const userAuthRoute = require('../user/userAuthRoute');

const userAuth = express.Router();

userAuth.post("/enq", sendEnq);
//http://localhost:8000/web/user/cweb

module.exports = userAuth; // ✅ Default export
