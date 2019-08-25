$(document).ready(function(){
    $("#firstOption").hide();
    $("#secondOption").hide();
    $("#thirdOption").hide();
    $("#fourthOption").hide();
    $("#question").hide();
    var  realanswer;
    var score=0;
    var totalquestions=5;
    var count=1;
    var uname;
    

    $("#loginbtn").click(function(){
        var username= $("#adi").val();
        uname =$("#adi").val();
         var userpas= $("#sifre").val();
     
        $.ajax({
            type:"post",
            url:"http://localhost:7000/user",
            data:{
                usernameserver:username,
                userpasserver:userpas
                 },
            success: function(Responddata){
               if(Responddata=="Success")
               {
                   console.log(Responddata);
                   sorucek();
                   userOk();
               }
               else if(Responddata=="Not Success"){
                console.log(Responddata);
               }
            }
    
           });
    
     });

     function userOk()
     {
        $("#firstOption").show();
        $("#secondOption").show();
        $("#thirdOption").show();
        $("#fourthOption").show();
        $("#question").show();

        $("#adibaslik").hide();
        $("#adi").hide();
        $("#sifre").hide();
        $("#sifrebaslik").hide();
        $("#loginbtn").hide();
     }
    
     function sorucek()
     {
         if(count<=totalquestions){
             count = count+1;
            $.ajax({
                type:"get",
                url:"http://localhost:7000/getQuestion",
                success: function(data){
                    $("#firstOption").text(data[0].ans1);//soru vt adı
                    $("#secondOption").text(data[0].ans2);
                    $("#thirdOption").text(data[0].ans3);
                    $("#fourthOption").text(data[0].ans4);
                    $("#question").text(data[0].soru);
                    realanswer =data[0].rans;
                   console.log(data);
                }
               });
         }
         else{
            InsertUserScore(uname,score);
            $("#firstOption").hide();
            $("#secondOption").hide();
            $("#thirdOption").hide();
            $("#fourthOption").hide();
            $("#question").hide();
         }
       

     }
     
     function InsertUserScore(username,userscore)
     {
         $.ajax({
            type:"post",
                url:"http://localhost:7000/addscore",
                data:{
                    usernameserver:username,
                    userscoreserver:userscore
                },
                success: function(data){
                   console.log("eklendi");
                },
        
        });
    }
    
    $("#firstOption").click(function(){
        if( $("#firstOption").text()== realanswer)
        {
            score=score+1;
        }
        sorucek();
    });
    $("#secondOption").click(function(){
        if( $("#secondOption").text()== realanswer)
        {
            score=score+1;
        }
        sorucek();
    });
    $("#thirdOption").click(function(){
        if( $("#thirdOption").text()== realanswer)
        {
            score=score+1;
        }
        sorucek();
    });
    $("#fourthOption").click(function(){
        if( $("#fourthOption").text()== realanswer)
        {
            score=score+1;
        }
        sorucek();
    });
     
});