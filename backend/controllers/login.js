exports.verifyAdmin = (req,res,next) =>{
    const ref_no = req.body.ref_no;
    const username = req.body.username;
    const password  = req.body.password;
    if(ref_no === 'admin123' && username==='admin' && password==='admin'){
        res.json({message:"ok"});
    }else{
        res.json({message:"invalid"});
    }
}

exports.verifyPatient = (req,res,next) =>{
    const ref_no = req.body.ref_no;
    const username = req.body.username;
    const password  = req.body.password;
    if(password==='user' && ref_no==='6969696969'){
        res.json({message:"ok"});
    }else{
        res.json({message:"invalid"});
    }
}