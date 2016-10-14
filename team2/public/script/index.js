$("#male").click(function () {
    $.ajax({
        method: "post",
        url: "/male",

    }).done(function (data) {

        showdata(data);

    })

})

$("#achievement").click(function(){
    $.ajax({
        method:"post",
        url:"/bubble"
    }).done(function(data){
        showdata(data)
    })
})
$("#female").click(function () {
    $.ajax({
        method: "post",
        url: "/female",

    }).done(function (data) {

        showdata(data);

    })

})
$.ajax({
    method: "get",
    url: "/finddatas"
}).done(function (data) {
    showdata(data);
})

function showdata(data) {
    $("table tbody").empty();
    for (var i in data) {
        var tr = $("<tr>");
        for (var j in data[i]) {
            var td = $("<td>");
            td.text(data[i][j]);
            tr.append(td);
        }
        tr.append("<td><button class='del' data_num='" + data[i].number + "'>删除</button></td>")
        tr.append("<td><button class='updateData' data_num='" + data[i].number + "'>修改</button></td>")
        $("table tbody").append(tr);
    }
}

$("input").blur(function(){
    var value=$(this).val();
    if(value){
        $("#myform").submit(function () {
            var data = $(this).serialize();

            $.ajax({
                method: "post",
                url: "/insertdatas",
                data: data
            }).done(function (data) {
                showdata(data);
            })
            return false;
        })
    }else{
        $(".sts").html("内容不能为空")
    }
})
$("#myupform").submit(function () {
    var data = $(this).serialize();

    $.ajax({
        method: "post",
        url: "/insertdatas",
        data: data
    }).done(function (data) {
        showdata(data);
    })
    return false;
})


$("table tbody").delegate(".del", "click", function () {
    var number = $(this).attr("data_num");
    var condition = {"number": number};
    if (confirm("是否删除此条数据？")) {
        $.ajax({
            "method": "post",
            "url": "/removedatas",
            "data": condition
        }).done(function (data) {
            showdata(data);
        })
    }
})
$("table tbody").delegate(".updateData", "click", function () {
    var number = $(this).attr("data_num");
    var condition = {"number": number};
    if (confirm("是否修改此条数据？")) {
        $("#myupform").css("display","block")
        $(".number").val(number).attr("readonly","readonly")
        $.ajax({
            "method": "post",
            "url": "/removedatas",
            "data": condition
        }).done(function (data) {
            showdata(data);
        })
    }
})


