const express = require('express');
const app = express();
require('dotenv').config({path: __dirname + '/.env'})

app.get('/', (req, res)=> {
    res.send("Welcome to the homepage BAY-BEE");
})

// A microservice for subnetting test
app.get('/subnet/microservice', (req, res)=> {
    res.json({
        response: "Hello this is a subnetting microservice"
    });
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
});


