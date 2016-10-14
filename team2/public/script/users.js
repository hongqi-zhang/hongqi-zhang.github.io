$.ajax({
    method: "get",
    url: "/finddata"
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
        tr.append("<td><button class='del' data_email='" + data[i].email + "'>删除</button></td>")

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
                url: "/insertdata",
                data: data
            }).done(function (data) {
                showdata(data);
            })
            return false;
        })
    }else{
        $(".ts").html("内容不能为空")
    }


})


$("table tbody").delegate(".del", "click", function () {
    var email = $(this).attr("data_email");
    var condition = {"email": email};
    if (confirm("是否删除此条数据？")) {
        $.ajax({
            "method": "post",
            "url": "/removedata",
            "data": condition
        }).done(function (data) {
            showdata(data);
        })
    }
})
