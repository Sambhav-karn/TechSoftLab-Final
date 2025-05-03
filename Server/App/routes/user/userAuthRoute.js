let express = require("express");
const { registerUser, loginClient } = require("../../controller/auth/userAuthController");
const userTokenVerification = require("../../middleware/userAuthMiddleware");
const roleBaseAccessControl = require("../../middleware/userAuthRoleAccess");
const { ClientRegisterValidator, ClientLoginValidator } = require("../../middleware/userAuthValidator");

let userAuthRoute = express.Router();

userAuthRoute.post("/create", userTokenVerification, roleBaseAccessControl([0]), ClientRegisterValidator, registerUser);
// userAuthRoute.post("/create", ClientRegisterValidator, registerUser);
userAuthRoute.post("/login", ClientLoginValidator,loginClient)
module.exports = userAuthRoute


//http://localhost:8000/client/create