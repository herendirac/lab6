const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); //access img, css, js files in public folder

//route
app.get("/", function(req,res){
    // res.send(`<h1>it works!</h1>`);
    res.render("index.html")
});

app.get("/mercury", function(req,res){
    // res.send(`<h1>This is Mercury</h1>`);
    res.render("mercury.ejs")
});

app.get("/venus", function(req,res){
    res.render("venus.ejs");
});

app.get("/mars", function(req,res){
    res.render("mars.ejs");
});

app.get("/earth", function(req,res){
    res.render("earth.ejs");
})

//server listener
// app.listen("8080", "0.0.0.0", function(){
//     console.log("Express Server is Running...")
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...")
});