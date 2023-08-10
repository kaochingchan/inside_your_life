$(document).ready(function(){
    $(window).on('load',function () {
        var theWindow = $(window),
            $bg = $("#bg"),
            aspectRatio = 1920 / 1080;

        function resizeBg() {

            if ((theWindow.width() / theWindow.height()) >= aspectRatio) {
                console.log("0");
                //vh為主
            } else {
                $('body').css({"width":"100%","height":"100vh"});
                $("#container").css({"width":"100%","height":"100vh"});
                $("#back","#front").each(function(){
                    $(this).addClass("vh");
                })

                console.log("1");
                //vh為主
            }
        }
        theWindow.resize(function () {
            resizeBg();
        }).trigger("resize");
    });
})