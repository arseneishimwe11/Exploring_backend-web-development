const mongoose = require('mongoose')
require("dotenv").config({path: "./.env"})

const dbConnecting = async () => {
    const connect = mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    try {
        if(connect){
            console.log("Successfully connected to the database!");
        }else{
            console.log("Failed to connect to the database")
        }
    } catch (error) {
        console.log(error);
    }
    
}
module.exports = dbConnecting;

/* 
*Note that this file may be included in the models folder
*/