
var news_visited = 0;
var doc2_visited = 0;

$("#news").on("click",function(){
    console.log("1");
    $(this).removeClass("scale_anime");
    news_visited = 1;//放進news被點擊時會觸發到的函式裡面
})

$("#doc2").on("click",function(){
    console.log("2");
    $(this).removeClass("scale_anime");
    doc2_visited = 1;//放進doc2被點擊時會觸發到的函式裡面
})


$()

$(document).click(function(){
    if(news_visited + doc2_visited === 2){
        //讓中間的螢幕亮
        $("#doc1").addClass("scale_anime");
    }

})


$("#doc1").click(function(){
    $(this).removeClass("scale_anime");
})
