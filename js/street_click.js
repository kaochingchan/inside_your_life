
var vendor_visited = 0;
var flyer_visited = 0;

$("#vendor").on("click",function(){
    console.log("1");
    $(this).removeClass("scale_anime");
    vendor_visited = 1;//放進news被點擊時會觸發到的函式裡面
})

$("#flyer").on("click",function(){
    console.log("2");
    $(this).removeClass("scale_anime");
    flyer_visited = 1;//放進doc2被點擊時會觸發到的函式裡面
})


$()

$(document).click(function(){
    if(vendor_visited + flyer_visited === 2){
        //讓中間的螢幕亮
        $("#miner").addClass("scale_anime");
        $("#miner").css("cursor","pointer")
    }

})


$("#miner").click(function(){
    $(this).removeClass("scale_anime");
})
