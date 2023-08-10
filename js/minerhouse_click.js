var newspaper_visited = 0;
var bill_visited = 0;

$("#newspaper").on("click",function(){
    console.log("1");
    $(this).css("animation","none");
    newspaper_visited = 1;//放進news被點擊時會觸發到的函式裡面
})

$("#bill").on("click",function(){
    console.log("2");
    $(this).css("animation","none");
    bill_visited = 1;//放進doc2被點擊時會觸發到的函式裡面
})


$(document).click(function(){
    if(newspaper_visited + bill_visited === 2){
        //讓中間的螢幕亮
        $("#miner").css("animation","scale_shine 1.5s infinite");
    }

})


$("#miner").click(function(){
    $(this).css("animation","none");
    $(this).css("cursor","pointer");
})
