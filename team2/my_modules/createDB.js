var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mystudent";

// MongoClien.connect(url,function (err,db) {
//     var arr = [
//         {"number":"001","name":"zhangsan","age":10,"achievement":75, "sex":"male"},
//         {"number":"002","name":"lisi","age":11,"achievement":80,"sex":"male"},
//         {"number":"003","name":"wangwu","age":12,"achievement":85,"sex":"male"},
//         {"number":"004","name":"xiaoming","age":13,"achievement":95,"sex":"male"},
//         {"number":"005","name":"xiaoqiang","age":14,"achievement":90,"sex":"male"}
//     ]
//     db.collection("student").insertMany(arr,function(){
//         db.close();
//     })
// })
// MongoClien.connect(url,function (err,db) {
//     var marr=[
//         {"email":"111@qq.com","username":"aaa","password":"111"},
//         {"email":"222@qq.com","username":"bbb","password":"222"},
//         {"email":"333@qq.com","username":"ccc","password":"333"},
//         {"email":"444@qq.com","username":"ddd","password":"444"},
//         {"email":"555@qq.com","username":"eee","password":"555"}
//     ]
//
//     db.collection("users").insertMany(marr,function(){
//         db.close();
//     })
// })
MongoClien.connect(url,function(err,db){
    db.collection("users").find().toArray(function(err,docs){
        console.log(docs)
    })
})
