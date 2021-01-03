
const subnetting = require('./subnetting.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

require('dotenv').config({path: __dirname + '/.env'})

app.use(bodyParser.urlencoded({extended: false}));

//Serve app homepage
app.get('/', (req, res)=> {
    res.send("Welcome to the homepage BAY-BEE");
})

app.post('/api/subnetting/findOnceCIDR', (req,res) => {
    let numHosts = parseInt(req.body.numHosts);
    let networkBits = req.body.networkBits;
    
    let CIDRNotation = subnetting.findCIDRNotation(numHosts, networkBits);
    console.log(`Finding CIDR for one subnet with ${numHosts} hosts and ${networkBits} network bits` );
    res.json({
        CIDRNotation: CIDRNotation
    })
});

// A microservice for subnetting test
app.get('/api/subnetting', (req, res)=> {
    res.json({
        response: "Hello this is a subnetting microservice"
    });
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT);
});


