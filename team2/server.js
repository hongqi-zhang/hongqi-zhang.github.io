var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({"extended":false}));
var path = require("path");
var session = require("express-session");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(session({
    "secret":"hello",
    "cookie":{maxAge:600 * 1000}

}))
var usershandle = require("./my_modules/usershandle")
var studentshandle = require("./my_modules/studentshandle")
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","jade");
app.listen(2000,function(){
    console.log("服务器已经启动")
})
app.get("/",function(req,res){
    var info = req.query.info
    res.render("login",{showinfo:info});
})

app.post("/form",function(req,res){
    usershandle.checkuser(req.body,function(data){
        if(data === 0){

            res.redirect("/?info=用户名错误")
        }else if(data === 1){

            res.redirect("/?info= 密码错误")
        }else{
            req.session.email = req.body.email
            res.redirect("/users")

        }
    })

})
app.get("/finddata",function(req,res){
    usershandle.finddata(function(data){

        res.send(data)
    })

})
app.get("/finddatas",function(req,res){
    studentshandle.finddatas(function(data){

        res.send(data)
    })

})

app.post("/male",function(req,res){
    studentshandle.male(req.body,function(data){

        res.send(data)
    })

})
app.post("/female",function(req,res){
    studentshandle.female(req.body,function(data){

        res.send(data)
    })

})
app.post("/bubble",function(req,res){
    studentshandle.bubble(req.body,function(data){
        res.send(data)
    })
})
app.post("/removedata",function(req,res){
    usershandle.removedata(req.body,function(data){
        res.send(data);
    })
})
app.post("/removedatas",function(req,res){
    studentshandle.removedatas(req.body,function(data){
        res.send(data);
    })
})

app.get("/users",function(req,res){
    if(req.session.email){
        var info="用户"+req.session.email+"已登录";
        res.render("users",{userinfo:info})
    }else{
        res.redirect("/")
    }

})
app.get("/students",function(req,res){
    if(req.session.email){
        var info="用户"+req.session.email+"已登录";
        res.render("students",{userinfo:info})
    }else{
        res.redirect("/")
    }

})

app.get("/students",function(req,res){
    res.render("students")
})


app.post("/insertdata",function (req,res) {
    usershandle.insertdata(req.body,function(data){
        res.send(data);
    })
})
app.get("/users",function(req,res){
    res.render("users")
})
app.post("/insertdatas",function (req,res) {
    studentshandle.insertdatas(req.body,function(data){
        res.send(data);
    })
})