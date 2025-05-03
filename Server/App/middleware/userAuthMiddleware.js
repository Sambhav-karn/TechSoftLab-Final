const jwt = require("jsonwebtoken");

const userTokenVerification = async(req, res, next)=>{
    try{

        let token = req.body?.token || req.query?.token || req.headers["authorization"];
        if(!token){
            let resObj ={
                status: false,
                msg: "A token is required for authentication",
            }
            res.send(resObj);
        };

        if(typeof token == "string" && token.startsWith("Bearer ")){
            token = token.split(" ")[1];
        }

        const decodeData = jwt.verify(token, process.env.TOKENKEY);
        req.user = decodeData;

        next();

    }catch(e){
        res.send("Token Verify Error", e)
    }
}


module.exports = userTokenVerification;