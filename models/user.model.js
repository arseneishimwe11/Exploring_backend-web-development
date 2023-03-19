const mongoose = require('mongoose')
const Joi = require('joi');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const config  =require('config');

let User = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:344,
            minlength:2
        },
        Age:{
            type:String,
            required:true,
            maxlength:344,
            minlength:5
        }
    }
)
User.methods.generateAuthToken  = function(){
    const jwt = jwt.sign(
        {
            _id:this.id,
            name:this.name,
            email:this.email
        },
        config.get('jwtPrivateKey')
    );
    return jwt;
}
function validateUser(user){
    const schema = {
        name:Joi.string().max(344).min(3).required(),
        age:Joi.string().max(344).min(3).required()
    };
    return Joi.validate(user,schema)
}
module.exports = mongoose.model("User",User);
module.exports.validate = validateUser;