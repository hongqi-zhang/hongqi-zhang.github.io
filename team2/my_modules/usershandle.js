var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mystudent";

function finddata(next){
    MongoClient.connect(url,function (err,db) {

        db.collection("users").find().toArray(function(err,docs){
            next(docs);
            db.close();
        })
    })
}


function insertdata(options,next){
    MongoClient.connect(url,function (err,db) {
        var condition = {"email":options.email};
        db.collection("users").find(condition).toArray(function(err,docs){
            if(docs.length==0 ){
                db.collection("users").insertOne(options,function(){
                    finddata(function(data){
                        next(data);
                        db.close();
                    })

                })

            }
        })

    })
}

function checkuser(options,next){
    //0 用户名不存在
    //1 密码错误
    //2 登录成功
    MongoClient.connect(url,function(err,db){
        var condition = {"email":options.email};
        db.collection("users").find(condition).toArray(function(err,docs){

            db.close();
            if(docs.length == 0){
                next(0);
            }else if(docs[0].password === options.password){
                next(2);
            }else {
                next(1);
            }
        })
    })
}
function updatedata(condition,options,next){
    MongoClient.connect(url,function(err,db){
        db.collection("users").updateOne(condition,options,function(){
            next();
            db.close()
        })
    })
}

function removedata(condition,next){
    MongoClient.connect(url,function (err,db) {
        db.collection("users").removeOne(condition,function(){
            finddata(function(data){
                next(data);
            })
            db.close();
        })
    })
}
module.exports = {
    finddata: finddata,
    insertdata: insertdata,
    removedata: removedata,
    updatedata: updatedata,
    checkuser: checkuser
}