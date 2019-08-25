$(document).ready(function(){
 
    
    function kullaniciekle(username,userpas)
     {
         $.ajax({
         type:"post",
         url:"http://localhost:7000/kullaniciekle",
         data:{
             username:username,
             userpas: userpas,
            },
         success: function(Responddata){
            console.log(Responddata);
         },
 
        });
     }
     $("#EKLEbtn").click(function(){
         var username = $("#aditxt").val();
         var userpas = $("#sifretxt").val()
        kullaniciekle(username,userpas);
     });
});