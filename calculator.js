

const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
    // __dirname is used to loacte the directory 
});

app.post("/",function(req,res){
    console.log(req.body);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1+n2;

    res.send("your result is "+ result);
})

app.get("/BMI",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/BMI",function(req,res){
    var weight =  parseFloat(req.body.weight);
    var height =  parseFloat(req.body.height);
    var result = weight/(height*height);
    res.send("your BMI is " + result);
});







app.listen(3000,function(){
    console.log("server is running at 3000")
});