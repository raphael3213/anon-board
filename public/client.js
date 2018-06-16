// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  $.ajax({
  type:'GET',
    url:'/all',
    datatype:'json',
    success: function(data){
    
    console.log(data);
    
    }
  
  })
  
})()