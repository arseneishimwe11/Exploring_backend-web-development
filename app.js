const dbConnecting = require('./config/connectingdb');





//Needed packages
const express = require('express')
const _ = require('lodash')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const bodyParser = require('body-parser')
const config = require('config')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if(!config.get("jwtPrivateKey")){
    console.log('JWT PRIVATE KEY NOT DEFINED')
    process.exit(1)
}

app.get('/',(req,res)=>{
    res.send("Welcome!")
})

app.listen(process.env.PORT,()=> console.log(`App running on port ${process.env.PORT}`))