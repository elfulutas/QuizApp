var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var id=1;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"elif",
    database:"quiz"
});
con.connect(function(err){
    if(err)
    console.log(err);
    console.log("connected");
});
var server = app.listen(7000,function(){
    console.log("node server is running")
 });


 
 app.get("/sortuser", function(req,res){
     query = "SELECT username,score FROM score ORDER BY score DESC";
     con.query(query,function(err,result){
        console.log(result);
        res.json(result);
    });
 });
app.post('/user',function(req,res){
     var username =req.body.usernameserver;
     var userpas = req.body.userpasserver;
     query="SELECT * FROM user WHERE username=? AND userpas=?";
     var values =[username,userpas];
    con.query(query,values,function(err,result){
        if(result.length!=0){
          res.end("Success");
          console.log("success");
        }
        else
        {
            res.end("Not Success");
        }
        });   
     });

app.get('/getQuestion',function(req,res){
    query="SELECT * FROM soru WHERE idsoru="+id;
    con.query(query,function(err,result){
    console.log(result);
    id =id+1;
    res.json(result);
});
});

app.post('/soru',function(req,res){
    var soru= req.body.question;
    var ans1 = req.body.input1;
    var ans2 = req.body.input2;
    var ans3 = req.body.input3;
    var ans4 = req.body.input4;
    var rans = req.body.ransewer;
    query = "INSERT INTO soru (soru,ans1,ans2,ans3,ans4,rans) VALUES(?,?,?,?,?,?)"
    values = [soru,ans1,ans2,ans3,ans4,rans];
    con.query(query,values,function(err,result){
        console.log(soru+" "+ans1+" "+ans2+" "+ans3+" "+ans4+" "+rans);
        console.log(result);
        res.end("ok");    
    });
});

app.post('/kullaniciekle',function(req,res){
    var username= req.body.username;
    var userpas = req.body.userpas;
    query = "INSERT INTO user (username,userpas) VALUES(?,?)"
    var values = [username,userpas];
    con.query(query,values,function(err,result){
        console.log(username+" "+userpas);
        console.log(result);
        res.end("ok");    
    });
});

app.post('/addscore',function(req,res){
    var username= req.body.usernameserver;
    var score = req.body.userscoreserver;
    query = "INSERT INTO score (username,score) VALUES(?,?)"
    var values = [username,score];
    con.query(query,values,function(err,result){
        console.log(result);
        res.end("ok");    
    });
});


