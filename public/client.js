// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  $.ajax({
  type:'GET',
    url:'/all',
    datatype:'json',
    success: function(data){
   var arrx=[];
      data.forEach(function(ele)
                   {
        var str="";
        var strx="";
        var stry="";
        
        var arr=[];
        var mstr="";
        var smstr="";
        arr.push("<div id='repl'>")
        var k=0;      
      ele.replies.forEach(function(rep,ind){
    
      k=ind+1;
        str="<p>"+k+")"+rep.comment+"<p>";
        strx="<input type='hidden' name='rname' value="+rep.comment+">";
        stry="<input type='submit' value='delete'>"
var str1="<form action='delrep' method='get'>"+str+"<input name='tid' type='hidden' value="+ele.id+">"+strx+"<label for='reppassword'>Password:</label>"+ "<input name='reppassword' type='text'>"+stry+"</form>";
  console.log("what up")
        arr.push(str1);
      
      })
        arr.push("</div>")
        
       var kstr=arr.join('');
       // console.log(arr)
        //if(arr.length!=0){kstr=}
        
        var fstr="<input type='hidden' name='tid' value="+ele.id+">";
        var sdstr="<form action='addrep' method='post'><textarea name='reply' placeholder='reply....'></textarea>"+fstr+"<input type='submit' value='reply'></form>'"
        var arry=[ "<div id='booker'>",
           "<h3>Id:",ele.id,"</h3>",
           "<h3>Thread:",
           ele.content,"</h3>","<form action='delthread' method='post'>",fstr,"<label for='thrpassword'>Password:</label>","<input name='thrpassword' type='text'>","<input type='submit' value='delete thread'></form>",
          "<br>",sdstr, "<h3>Replies:",
           "</h3>",kstr,
            "</div>"
      ];
        
     arrx.push(arry.join(''));
      }
                  
                  
                  )
    
    
     $("#threads").html(arrx.join(''));
    
    console.log(data);
    
    }
  
  })
  
})()