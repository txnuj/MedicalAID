exports.getUser = (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;
    const adminId = req.body.adminId;
    console.log(username,password,adminId);
    res.status(201).json({
        message:"data received"
    });
};