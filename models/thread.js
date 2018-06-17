var mongoose=require('mongoose');

var threadSchema=mongoose.Schema({

  id:Number,
content:{

type:String,default:"new thread"
},
  password:String,
  replies:Array



})
module.exports=threadSchema;
  //mongoose.model('thread',threadSchema);