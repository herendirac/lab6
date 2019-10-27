const express = require ("express");
const app = express();
app.engine('html',require('ejs').renderFile);
app.use(express.static("public")); // access images,css,js


//routes... get or host
app.get("/", function(req,res){
    
    //res.send("hello");
    res.render("index.html");
    
//MERCURY   
} );
app.get("/mercury",function(req,res)
{
    //console.log("In Mercury route");
    res.send("<h1>Mercury planet<h1>");
    res.render("mercury.html");
    
});
//VENUS
app.get("/venus",function(req,res)
{
    res.send("<h1>Venus planet<h1>");
    res.render("venus.ejs");
});
//MARS
app.get("/mars",function(req,res)
{
    res.send("<h1>Mars planet<h1>");
    res.render("mars.ejs");
});
//EARTH
app.get("/earth",function(req,res)
{
    res.send("<h1>Earth planet<h1>");
    res.render("earth.ejs");
});

//server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server in running...");
})