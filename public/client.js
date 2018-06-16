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
        var strx="";
        var stry="";
        var arr=[];
        arr.push("<div id='repl'>")
        var k=0;      
      ele.replies.forEach(function(rep,ind){
      
      k=ind+1;
        str="<p>"+k+")"+rep.comment+"<p>";
        strx="<input type='hidden' name=rname value="+rep.comment+">";
        stry="<input type='submit'>"
var str1="<form action='delrep' method='get'>"+str+"<input name='tid' type='hidden' value="+ele.id+">"+strx+"<label for='reppassword>Password:</label>'"+ "<input name='reppassword' type='text'>"+stry+"</form>";

        arr.push(str1);
      
      })
      
      }
                  
                  
                  )
    
    
    
    
    console.log(data);
    
    }
  
  })
  
})()