const {validationResult} = require("express-validator");
const userAuthModel = require("../../model/auth/userAuthModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


const registerUser  = async(req, res)=>{
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                success:false,
                msg:"Validation Failed",
                errors:error.array()
            });
        }

        const {clientName, clientEmail, clientPhone, clientPassword, clientRole} = req.body;
        const isExistUser = await userAuthModel.findOne({clientEmail}).limit(1);
        if(isExistUser){
            return res.status(400).json({
                success: false,
                msg: "Email Already Exist",
            });
        }   

        const hashPassword = await bcrypt.hash(clientPassword,10);
        const user = new userAuthModel({
            clientName,
            clientEmail,
            clientPhone,
            clientPassword : hashPassword,
            clientRole
        });

        const userData = await user.save();
        return res.status(200).json({
            success: true,
            msg: "Register Successfully !",
            data: userData
        });

    }catch(e){
        return res.status(500).json({
            success: false,
            msg: e.message
        });
    }


};

const generateAccessToken = async (user)=>{
    return jwt.sign(
        {id:user._id, email: user.clientEmail, role: user.clientRole},
        process.env.TOKENKEY,
        {expiresIn:"2h"}
    );
};

const loginClient = async(req, res)=>{
    try{

        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                success: false,
                msg: "Validation Error",
                errors: error.array()
            });
        }

        const {clientEmail, clientPassword} = req.body;
        console.log("Login Request Received:", { userEmail, userPassword });

        const userData = await userAuthModel.findOne({clientEmail});
        if(!userData){
            return res.status(400).json({
                success: false,
                msg: "Email & Password is Incorrect"
            });
        }

        const isPasswordMatch = await bcrypt.compare(clientPassword, userData.clientPassword);
        console.log("Password Match:", isPasswordMatch);    
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                msg: "Email & Password is Incorrect"
            });
        }

        const accessToken = await generateAccessToken(userData);
        return res.status(200).json({
            success: true,
            msg: "Login Successfully!",
            accessToken: accessToken,
            tokenType: "Bearer",
            data: userData
        });


    }catch(e){
        return res.status(500).json({
            success: false,
            msg: e.message
        });
    }
};

module.exports = {registerUser, loginClient};