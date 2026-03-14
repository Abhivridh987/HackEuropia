const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

//Middleware

const logData = (req,res,next)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    next();
}

app.use(logData);
app.get('/', (req,res)=>{
    console.log('Home Page');
    res.status(200).json({
        status:200,
        message : 'Welcome to Home Page'
    })
})
app.listen(port, (req,res)=>{
    console.log('Server Connected to port 3000')
})