$(document).ready(function(){


    var questioncheck =false;
    var input1check = false;
    var input2check = false;
    var input3check = false;
    var input4check = false;

     var questiontxt;
     var input1txt;
     var input2txt;
     var input3txt;
     var input4txt;

     $("#btn").hide();
     $("#select").hide();

     function show()
     {
        $("#btn").show();
        $("#select").show();
     }
     function control()
     {
         if(questioncheck&&input1check&&input2check&&input3check&&input4check)
         {
             return true;
         }
         else
         return false;
     }
     function empty()
     {
       $("#question").prop("disabled",false);
       $("#input1").prop("disabled",false);
       $("#input2").prop("disabled",false);
       $("#input3").prop("disabled",false);
       $("#input4").prop("disabled",false);

       $("#question").val("");
       $( "#input1").val("");
       $( "#input2").val("");
       $( "#input3").val("");
       $( "#input4").val("");
       $("#select").empty();

       $("#btn").hide();

       $("#select").hide();

     }
     function sendQuestion(question,ans1,ans2,ans3,ans4,rans)
     {
         $.ajax({
         type:"post",
         url:"http://localhost:7000/soru",
         data:{
             question:question,
             input1: ans1,
             input2: ans2,
             input3: ans3,
             input4: ans4,
             ransewer:rans },
         success: function(Responddata){
            console.log(Responddata);
         },
 
        });
     }

     $( "#question").focusout(function() {
        $("#btn").hide();
        $("#select").hide();
        if($("#question").val()!= "")
        {
            questioncheck = true;
            questiontxt = $("#question").val();
            $("#question").prop("disabled",true);

        }
        if(control())
        {
           show();

        }
      });
     $( "#input1").focusout(function() {
        $("#btn").hide();
        $("#select").hide();
        if($("#input1").val()!= "")
        {
            input1check = true;
            input1txt = $("#input1").val();
            $("#select").append("<option>"+$("#input1").val()+"</option>");
            $("#input1").prop("disabled",true);

        }
        if(control())
        {
           show();

        }
      });
     $( "#input2").focusout(function() {
        $("#btn").hide();
        $("#select").hide();
        if($("#input2").val()!= "")
        {
            input2check = true;
            input2txt = $("#input2").val();
            $("#select").append("<option>"+$("#input2").val()+"</option>");
            $("#input2").prop("disabled",true);

        }
        if(control())
        {
           show();

        }
      });
     $( "#input3").focusout(function() {
        $("#btn").hide();
        $("#select").hide();
        if($("#input3").val()!= "")
        {
            input3check = true;
            input3txt = $("#input3").val();
            $("#select").append("<option>"+$("#input3").val()+"</option>");
            $("#input3").prop("disabled",true);

        }
        if(control())
        {
           show();

        }
      });
    $( "#input4").focusout(function() {
        $("#btn").hide();
        $("#select").hide();
        if($("#input4").val()!= "")
        {
            input4check = true;
            input4txt = $("#input4").val();
            $("#select").append("<option>"+$("#input4").val()+"</option>");
            $("#input4").prop("disabled",true);

        }
        if(control())
        {
           show();

        }
      });
     $("#btn").click(function(){
        sendQuestion(questiontxt,input1txt,input2txt,input3txt,input4txt,$("#select").val());
        empty();
     });
});