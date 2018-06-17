// server.js
// where your node app starts

// init project
var schema=require('./models/thread')

var express = require('express');
var app = express();
var board;
var mongoose=require('mongoose');
var threads;
    //mongoose.model('thread',schema);
var bp=require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

mongoose.connect(process.env.SECRET,function(err){

if(err){console.log(err)}
  
  console.log("mongoose connected")

})

app.use(express.static('public'));



// http://expressjs.com/en/starter/basic-routing.html
app.get("/:board", function (req, response) {
  
  threads=mongoose.model(req.params.board,schema);
  board=req.params.board;
  console.log(req.params)
  console.log("hello again");
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/postthread',function(req,res,next){
  board=req.params.board;
  console.log(board);
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
  newThread.id=Math.round(Math.random()*10000000);
  newThread.save(function(err){
                 
                 if(err){console.log(err)}
  
  res.redirect('/'+board);
                 
                 })

})


app.post('/delthread',function(req,res,next){

console.log(req.body)
  var tid=Number(req.body.tid);
  var password=req.body.thrpassword;
  
  threads.findOne({id:tid},function(err,docs){
  
  if(err){console.log(err)}
    
    if(docs.password==password){
    
    threads.deleteOne({id:tid},function(err){
    
      if(err){console.log(err)}
    else{
    
    res.redirect('/');
    }
        
    })
    
    }
    
    else{
    
    res.json({error:"wrong password"});
    }
  
  })


})



app.get('/'+board+'/all',function(req,res,next){


threads.find({},function(err,data){


res.json(data);
})

})


app.post('/addrep',function(req,res,next){

console.log(req.body);
  var reply=req.body.reply;
  var tid=Number(req.body.tid);
  var password1=req.body.reppassword;
  var obj={comment:reply,password:password1};
  
  threads.findOne({id:tid},function(err,docs){
    
  if(err){console.log(err)}
    
    docs.replies.push(obj);
    docs.save(function(err){if(err){console.log(err)
                                   
                                   
                                   }
                           res.redirect('/');
                           
                           })
    
  
  })

})

app.post('/delrep',function(req,res,next){

console.log(req.body)

})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
