var express = require('express');
var app = express();
app.use( express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.setHeader("Cache-Control", "public, max-age=2592000");
  res.render('./src/index.ejs',{active:'yarisma'});
});

app.get('/kayit',function(req,res){
  res.render('./src/kayit.ejs',{active:'kayit'})
});

app.get('/sss',function(req,res){
  res.render('./src/sss.ejs',{active:'sss'})
});

app.get('/contact',function(req,res){
  res.render('./src/contact.ejs',{active:'contact'});
});

// NOT AVAILABLE ROUTES
app.get('*',function(req,res){
  res.render("./src/errorPage.ejs",{active:''});
});

app.listen(3003,function(){
  console.log("Server started on port 3003");
});
