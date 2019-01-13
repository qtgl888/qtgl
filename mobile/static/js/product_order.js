function setCookie() {
    var str = $.cookie("data");
    if (str == null || str == "") {
        var sendJson = [];
    }
    else {
        var sendJson = JSON.parse(str);

    }
    var j = 0;
    sendJson = eval(sendJson);
    if (str != null || str != "") {
        for (i = 0; i < sendJson.length; i++) {
            for (var id in sendJson[i]) {
                if ($("#m_goods_id").val() == sendJson[i].id) {
                    // sendJson[i].num=  parseInt(sendJson[i].num)+  parseInt($("#goods_quantity").val());
                    j++;
                    break;
                }
            }

        }
    }
    if (j > 0) {
        layer.confirm('你已购买过该产品', {
            btn: ['去结算', '继续购买'] //按钮
        }, function () {
            location.href = '/Order.aspx?id=' + $("#m_goods_id").val();
        }, function () {
            return;
        });
    }
    else {
        var json = new Object();
        json.id = $("#m_goods_id").val();
        json.num = $("#goods_quantity").val();
        json.ProName = $(".p_title h1").text();
        json.Path = $("#bigImg")[0].src;
        json.price = $("#price").text();
        sendJson.push(json);



        var data = JSON.stringify(sendJson);
        $.cookie("data", data, { path: '/' });

        layer.confirm('购物车加入成功', {
            btn: ['去结算', '继续购买'] //按钮
        }, function () {

            location.href = '/Order.aspx?id=' + $("#m_goods_id").val();
        }, function () {

        });
    }
}
function CartAdd_Detail() {
    var str = $.cookie("data");
    if (str == null || str == "") {
        var sendJson = [];
    }
    else {
        var sendJson = JSON.parse(str);

    }
    var j = 0;
    sendJson = eval(sendJson);
    if (str != null || str != "") {
        for (i = 0; i < sendJson.length; i++) {
            for (var id in sendJson[i]) {
                if ($("#m_goods_id").val() == sendJson[i].id) {
                    // sendJson[i].num=  parseInt(sendJson[i].num)+  parseInt($("#goods_quantity").val());
                    j++;
                    break;
                }
            }

        }
    }
    if (j > 0) {
        layer.confirm('你已购买过该产品', {
            btn: ['去结算', '继续购买'] //按钮
        }, function () {
            location.href = '/Order.aspx?id=' + $("#m_goods_id").val();
        }, function () {
            return;
        });
    }
    else {
        var json = new Object();
        json.id = $("#m_goods_id").val();
        json.num = $("#goods_quantity").val();
        json.ProName = $(".p_title h1").text();
        json.Path = $("#bigImg")[0].src;
        json.price = $("#price").text();
        sendJson.push(json);



        var data = JSON.stringify(sendJson);
        $.cookie("data", data, { path: '/' });

        location.href = '/Order.aspx?id=' + $("#m_goods_id").val();
    }

}

$(function () {
    $(".current img").click();
})
