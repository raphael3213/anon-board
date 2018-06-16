var mongoose=require('mongoose');

var threadSchema=mongoose.Schema({

content:{

type:String,default:"new thread"
},
  password:String,
  replies:Array



})
module.exports=mongoose.model('thread',threadSchema);