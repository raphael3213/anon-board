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
        var str1="<form action='delrep' method='get'><input name='tid' type='hidden' value="+ele.id+"><label for='reppassword>Password:</label>'"+ "<input name='reppassword' type='text'>"+"</form>";
        var arr=[];
        arr.push("<div id='repl'>")
        var k=0;      
      ele.replies.forEach(function(rep,ind){
      
      k=ind+1;
        str="<p>"+ind+")"+rep.comment+"<p>";
        
        
      
      })
      
      }
                  
                  
                  )
    
    
    
    
    console.log(data);
    
    }
  
  })
  
})()