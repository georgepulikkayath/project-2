var uvalue;
$(document).ready(function(){
    debugger
   
    uvalue = sessionStorage.getItem("uid");

    $.get("/api/history/" + uvalue).then(function (data){
        
        console.log("tripdetails"+JSON.stringify(data,null,4));
        var str="";  
          for(i=0;i<data.length;i++){
            str+="<br>" 
            str+="<div>";
            
            str+="<h3 class='text-primary'>Trip to: "+data[i].destination+"</h3>";
            str+="<p class='font-weight-bold'>Start Date: "+data[i].startDate+"</p>";
            str+="<p class='font-weight-bold'>End Date: "+data[i].endDate+"</p>";
            str+="</div>"
            str+="<hr>"
          }
          $("#div-booked").append(str);
      });
})