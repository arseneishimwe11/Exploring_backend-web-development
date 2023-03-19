function username(req,res,next){
    if(!req.user.name) return res.send('access denied').status(403)
    next()
}
module.exports = username;