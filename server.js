// server.js
// where your node app starts

// init project
var threads=require('./models/thread')
var express = require('express');
var app = express();
var mongoose=require('mongoose');
var bp=require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

mongoose.connect(process.env.SECRET,function(err){

if(err){console.log(err)}
  
  console.log("mongoose connected")

})

app.use(express.static('public'));



// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/postthread',function(req,res,next){

  var content=req.body.content;
  var password=req.body.password;
  console.log(req.body);
  if(content=='')
  {
  res.json({error:"No content specified"});
  
  }
  var newThread=new threads;
  newThread.content=content;
  newThread.password=password;
  
  newThread.save(function(err){
                 
                 if(err){console.log(err)}
  
  
                 
                 })

})


app.get('/all',function(res,req,next){


threads.find({},function(err,data){


res.json(data);
})

})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
