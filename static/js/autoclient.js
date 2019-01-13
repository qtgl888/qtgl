if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone) {
    var h = window.location.href.toLocaleLowerCase();
    if (h.indexOf("/mobile") == -1 && browser.isValid) {
        //if (h.indexOf(".html") != -1) {
        //    /*
        //    h = h.replace("http://", "");
        //    var arr = h.split("/");
        //    var shref = "http://";
        //    shref = shref + arr[0]
        //    for (var i = 1; i < arr.length; i++)
        //    {
        //         if (i == 1)
        //         {
        //            shref = shref+"/mobile/" + arr[i]
        //          }else
        //            shref = shref + "/" + arr[i]
        //    }
        //    window.location=shref;
        //  */
        //} else {
        //    var u = window.location.href;
        //    var d = window.location.origin;
        //    var rerulr = u.replace(d, d + "/mobile");
        //    window.location = rerulr;
        //}
        var u = window.location.href;
        var d = window.location.origin;
        var rerulr = d + "/mobile"; //u.replace(d, d + "/mobile");
        window.location = rerulr;
    }
}