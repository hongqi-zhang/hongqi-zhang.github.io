var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mystudent";
function finddatas(next){
    MongoClient.connect(url,function (err,db) {

        db.collection("student").find().toArray(function(err,docs){
            next(docs);
            db.close();
        })
    })
}



function insertdatas(options,next){
    MongoClient.connect(url,function (err,db) {
        var condition = {"number":options.number};
        db.collection("student").find(condition).toArray(function(err,docs){
            if(docs.length==0 ){
                db.collection("student").insertOne(options,function(){
                    finddatas(function(data){
                        next(data);
                        db.close();
                    })

                })

            }
        })

    })
}
function updatedatas(condition,options,next){
    MongoClient.connect(url,function(err,db){
        db.collection("student").updateOne(condition,options,function(){
            next();
            db.close()
        })
    })
}

function removedatas(condition,next){
    MongoClient.connect(url,function (err,db) {
        db.collection("student").removeOne(condition,function(){
            finddatas(function(data){
                next(data);
            })
            db.close();
        })
    })
}
function male(options,next){
    MongoClient.connect(url,function(err,db){
        var sex=options.sex
        var condition={sex:"male"}
        db.collection("student").find(condition).toArray(function(err,docs){
            next(docs)
        })
    })
}
function female(options,next){
    MongoClient.connect(url,function(err,db){
        var sex=options.sex
        var condition={sex:"female"}
        db.collection("student").find(condition).toArray(function(err,docs){
            next(docs)
        })
    })
}

function bubble(options,next){
    MongoClient.connect(url,function(err,db){
        db.collection("student").find().toArray(function (err,docs) {
            var len=docs.length;
            for(var i=len;i>=2;i--){
                for(var j=0;j<i-1;j++){
                    if(docs[j].achievement>docs[j+1].achievement){
                        var temp=docs[j];
                        docs[j]=docs[j+1];
                        docs[j+1]=temp;
                    }
                }
            }
            next(docs)
        })
    })
}
module.exports={
    finddatas:finddatas,
    insertdatas:insertdatas,
    removedatas:removedatas,
    updatedatas:updatedatas,
    male:male,
    female:female,
    bubble:bubble
}