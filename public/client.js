// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  $.ajax({
  type:'GET',
    url:'/all',
    datatype:'json',
    success: function(data){
   
      data.forEach(function(ele)
                   {
        var str="";
        var k=0;      
      ele.replies.forEach(function(rep,ind){
      
      k=ind+1;
        str="<p>"+ind+")"+rep.comment+"<p>"
      
      })
      
      }
                  
                  
                  )
    
    
    
    
    console.log(data);
    
    }
  
  })
  
})()