$(document).ready(function(){

    $.ajax({ 
        url:"http://localhost:7000/sortuser",
        type:"get",
     
        success:function(data){
            console.log(data);  
            $("#usertable") .append("<thead><th>User</th><th>Score</th></thead>");
            $.each(data,function(key,value){
                console.log(value.username + "--->" +value.score )
                $("#usertable") .append("<tr>"+
                "<td>"+value.username+"</td>"+
                "<td>"+value.score+"</td>"+
                "</tr>");
                
            });
        } 
    }); 

});