var express=require('express');

const app = express();


app.get("/",function(req,res){

res.sendfile( "index.html");
});

app.get("/registration",function(req,res){
    res.sendfile("registration.html");

});
app.listen(3000,function(req,res){
    console.log("server is working on port 3000")
});

    