

const roleBaseAccessControl = (allowedRoles = []) =>{
    return async (req, res, next)=>{
        try{

            const userRole = Number(req?.user?.role);
            console.log("Checking role:", userRole, "Allowed:", allowedRoles);
            if(!req.user || !allowedRoles){
                return res.status(403).json({
                    success: false,
                    msg: "You do not have permission to access this resource!"
                });
            }

            return next();


        }catch(e){
            return res.status(500).json({
                success: false,
                msg: "Something went wrong while checking permissions!"
            });

        }
    }
}


module.exports = roleBaseAccessControl;