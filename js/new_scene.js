// 對話框


//變數設定  //這裡有很多要改成你的id命名--------------------------------------------
var $profilePic = $(".character");//對話框角色頭像
var $name = $(".name");//對話框角色名字
var $content = $(".content");//對話框文字內容
var btn_y_visited = 0
var $heading = $("#heading");
var $interactive_img = $(".interactive_img")
var $next = $("#next");

var chapter;
var profilePic;
var main = "主角";
var mainPic = "../image/character/main.png";
var narrator = " "; // for narration
var supRole;
var choice = -1;
var clickItem_dialogSwitch;
var clickItemName;
var interactive_img_location;
var storyboard_click = 1;


var lineCount_interactive = 0;
var lineCheck_array_main = new Array();
var lineCheck_array_supRole = new Array();

var tl_fade = gsap.timeline({ default: { duration: 1.5 } });
tl_fade.fromTo("#fade_out", { opacity: 0 }, { duration: 1, opacity: 1 });

var end_fade = gsap.timeline({ default: { duration: 1 } });
end_fade.from("#end_bg", { opacity: 0, duration: 1, delay: 1.5 });

var endroll = gsap.timeline({ default: { duration: 5 } });
endroll.from("#end", { opacity: 0, duration: 5 });

var end_anime = gsap.timeline({ default: { duration: 6 } });
end_anime.from(".end_anime_1", { duration: 1, y: 80, delay: 2, opacity: 0 });
end_anime.to(".end_anime_1", { duration: 1, y: -80, delay: 2, opacity: 0 });

var play_btn_anime = gsap.timeline({ default: { duration: 1 } });
play_btn_anime.from("#play_again", { opacity: 0, duration: 0.5, scale: 0, delay: 6 });

var choice_tl = gsap.timeline({ default: { duration: 1 } });
choice_tl.to("#choice", { opacity: 1, duration: 1 });

endroll.progress(0).pause()
end_anime.progress(0).pause()
play_btn_anime.progress(0).pause()
choice_tl.progress(0).pause()
tl_fade.progress(0).pause()

function chapter_end_by_dialogue(a) {
    switch (a) {
        case "firstChapter":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene2_1_mine.html'", 4000);
            break;
        case "secondChapter":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene2_2_mine.html'", 4000);
            break;
        case "secondChapter_2":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene3_office.html'", 4000);
            break;
        case "thirdChapter":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene4_hackerhome.html'", 4000);
            break;
        case "storyboard_true":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene6_minerhouse_t.html'", 4000);
            break;
        case "storyboard_false":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene6_minerhouse_f.html'", 4000);
            break;

        case "theEnd_t":
        case "theEnd_f":

            $("#end").css("display", "flex");
            console.log("endroll played.")
            endroll.play(0);
            setTimeout(function () {
                console.log("文字播放")
                end_anime.play(0);
            }, 5000)
            end_anime.progress(1).pause();
            setTimeout(function () {
                console.log("文字消失")
                $(".end_anime_1").css("display", "none")
            }, 11000);
            setTimeout(function () {
                play_btn_anime.play(0);
            }, 5000);

            break;

        default:
            console.log("Should end with conversation!")
    }

}

function chapter_end_by_interactive(a) {
    switch (a) {
        case "#doc1":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            setTimeout("javascript:location.href='../html/scene5_store.html'", 4000);
            break;

        case "#telephone":
            console.log("結束章節");
            $("#end_bg").css("display", "flex")
            end_fade.play(0);
            break;

        default:
            console.log("Should end with interactive item!")
    }
}

function lineCheck(a) {

    if (lineCheck_array_main.every((x) => x !== a) === false) {
        $name.html(main);
        console.log("放入主要角色名稱")
        $profilePic.css("background-image", "url(" + mainPic + ")");
        console.log("放入主要角色圖片")
    } else if (lineCheck_array_supRole.every((x) => x !== a) === false) {
        $name.html(supRole);
        console.log("放入輔助角色名稱")
        $profilePic.css("background-image", "url(" + profilePic + ")");
        console.log("放入輔助角色圖片")
    } else {
        $name.empty();
        console.log("放入旁白名稱：" + $name.html())
        $profilePic.css("background-image", "url()");
        console.log("放入旁白圖片")
    }
};

function clickItemCheck(a) {
    switch (a) {
        case "#flyer":
            interactive_img_location = "../image/interact_detail/flyer_detail.png"
            return "廣告傳單";

        case "#vendor":
            interactive_img_location = "../image/interact_detail/vendor_detail.png"
            return "販賣機";

        case "#minecart":
            interactive_img_location = "../image/interact_detail/minecraft_detail.png"
            return "礦車";

        case "#helmet":
            interactive_img_location = "../image/interact_detail/helmet_detail.png"
            return "頭盔";

        case "#rule":
            interactive_img_location = "../image/interact_detail/rule_detail.png"
            return "規則";

        case "#news":
            interactive_img_location = "../image/hacker_home/news.png"
            return "網路新聞";

        case "#doc1":
            interactive_img_location = "../image/hacker_home/doc1.png"
            return "資料二";//故意寫反

        case "#doc2":
            interactive_img_location = "../image/hacker_home/doc2.png"
            return "資料一";//故意寫反

        case "#telephone":
            interactive_img_location = "../image/interact_detail/telephone_detail.png"
            return "公共電話";

        case "#bill":
            interactive_img_location = "../image/miner_home/bill.png"
            return "繳費單";

        case "#newspaper":
            interactive_img_location = "../image/interact_detail/newspaper_detail.png"
            return "報紙";
        default:
        //
    }
}




$.getJSON("../js/text.json", function (data) {//確認檔案位置與命名-------------------------

    switch ($("title").html()) { // all the title name should be more formal
        case "prologue":
            chapter = "prologue";
            profilePic = "";
            break;

        case "firstChapter":
            chapter = "firstChapter";
            profilePic = "";
            lineCheck_array_main = [4, 10, 13, 19];
            daiLogue("#miner", ".oldone");
            interact('#flyer', '.interactive_item');
            interact('#vendor', '.interactive_item');
            break;

        case "secondChapter":
            chapter = "secondChapter";
            profilePic = "../image/character/old_miner.png";
            supRole = "老礦工";
            lineCheck_array_main = [1, 3];
            lineCheck_array_supRole = [0, 2, 4, 5];
            daiLogue('#oldminer', '.oldone');
            interact('#minecart', '.interactive_item');
            interact('#helmet', '.interactive_item');
            interact('#rule', '.interactive_item');
            break;

        case "secondChapter_2":
            chapter = "secondChapter_2";
            profilePic = "../image/character/boss.png";
            supRole = "老闆";
            lineCheck_array_main = [1, 3];
            lineCheck_array_supRole = [0, 2, 4];
            daiLogue('#boss', '.oldone');
            break;

        case "thirdChapter":
            chapter = "thirdChapter";
            profilePic = "../image/character/assist.png";
            main = "老闆";
            mainPic = "../image/character/boss.png";
            supRole = "助理";
            lineCheck_array_main = [2, 5, 8, 11, 13];
            lineCheck_array_supRole = [3, 6, 10, 14];
            daiLogue('#boss', '.oldone');
            break;

        case "forthChapter":
            interact('#news', '.interactive_item');
            interact('#doc1', '.interactive_item');
            interact('#doc2', '.interactive_item');
            break;

        case "fifthChapter":
            chapter = "fifthChapter";
            profilePic = "../image/character/hacker.png";
            supRole = "hacker";
            lineCheck_array_main = [2, 5, 9, 11, 13, 15];
            lineCheck_array_supRole = [10, 12, 14, 16];
            choice = 16;
            interact('#telephone', '.interactive_item');
            break;

        case "storyboard_true":
            chapter = "storyboard_true";
            console.log(chapter)
            break;

        case "storyboard_false":
            chapter = "storyboard_false"
            break;

        case "theEnd_t":
            chapter = "theEnd_t";
            profilePic = "";
            supRole = "";
            lineCheck_array_main = [2];
            daiLogue("#miner", ".oldone")
            interact('#bill', '.interactive_item');
            interact('#newspaper', '.interactive_item');
            break;

        case "theEnd_f":
            chapter = "theEnd_f";
            profilePic = "";
            supRole = "";
            lineCheck_array_main = [6];
            daiLogue("#miner", ".oldone")
            interact('#bill', '.interactive_item');
            interact('#newspaper', '.interactive_item');
            break;

        default:
            console.log("chapter name error!");
    };

    //監測選擇按鈕
    $("#choice_y").click(function () {
        btn_y_visited = 1;
        lineCount_interactive = 0;
        console.log("btn_y_visited = 1")
        $content.html(data["interactive_item"][0][clickItem_dialogSwitch][17]["help"][lineCount_interactive]);
    })


    function daiLogue(clickItem, showUpItem) {
        // 動畫時間軸設置
        var tl = gsap.timeline({ default: { duration: 0.5 } })
            .from(showUpItem, { duration: 0.5, opacity: 0, y: 80, })
        var lineCount_dialog = 0;


        //開啟
        $(clickItem).click(function () {
            lineCheck(lineCount_dialog);
            $content.html(data[chapter][lineCount_dialog]);
            console.log("放入第一句話與圖片")
            tl.play(0);
            console.log("播放動畫")
            $(".dialog").removeClass("disable");
        })
        tl.progress(0).pause()

        $(".dialog").click(function () {
            lineCount_dialog++;
            lineCheck(lineCount_dialog);
            if (lineCount_dialog + 1 > data[chapter].length) {
                //關閉
                console.log("結束對話框")
                tl.reverse();
                chapter_end_by_dialogue(chapter);
                console.log(chapter);
                setTimeout(function () {
                    $('.oldone').addClass('disable');
                    lineCount_dialog = 0;
                    $content.html(data[chapter][lineCount_dialog]);
                    console.log("初始化對話框")
                }, 500)


            } else {
                $content.html(data[chapter][lineCount_dialog]);
                console.log("放入對話")
            };
        });
    };

    $next.click(function () {
        $content.html(data[chapter][storyboard_click])
        storyboard_click++;
        if (storyboard_click + 1 > data[chapter].length) {
            chapter_end_by_dialogue(chapter);
        }
    });
});

// 互動性物件
var tl2 = gsap.timeline({ default: { duration: 0.3 } });
tl2.fromTo(".interactive_item", { opacity: 0 }, { opacity: 1, duration: 0.3 })
tl2.fromTo(".interactive_img", { scale: 0 }, { scale: 1, duration: 0.5 });

function interact(clickItem) {//這邊他說showUpItem未被讀取，你修一下------
    console.log(0)
    // 動畫時間軸設置
    $.getJSON("../js/text.json", function (data) {
        //開啟
        $(clickItem).click(function () {
            $("clickItem").css("animation", "none")//關閉閃爍動畫
            clickItem_dialogSwitch = clickItem;
            $heading.html(clickItemCheck(clickItem));
            lineCount_interactive = 0;
            $content.html(data["interactive_item"][0][clickItem][lineCount_interactive]);
            $interactive_img.attr("src", interactive_img_location)
            console.log("The clickItem has been clicked!")
            tl2.play(0);
            $('.interactive_item').removeClass('disable');

        });
    });
};

$.getJSON("../js/text.json", function (data) {

    $(".interactive_item").click(function () {
        lineCount_interactive++;
        console.log("lineCount_interactive = " + lineCount_interactive)
        if (lineCount_interactive === 16) {
            $("#choice").css("opacity", "0");
            $("#choice").css("display", "flex");
            setTimeout(() => {
                choice_tl.play(0)
            }, 1500)
        }
        if (lineCount_interactive + 1 > data["interactive_item"][0][clickItem_dialogSwitch].length) {
            //執行淡出動畫
            tl2.reverse();
            console.log("0");
            btn_y_visited = 0;
            lineCount_interactive = 0;
            chapter_end_by_interactive(clickItem_dialogSwitch);
            setTimeout(function () {
                $('.interactive_item').addClass('disable');
            }, 500)

        } else if (btn_y_visited === 1) {
            $content.html(data["interactive_item"][0][clickItem_dialogSwitch][17]["help"][lineCount_interactive]);
            if (lineCount_interactive + 1 === data["interactive_item"][0][clickItem_dialogSwitch][17]["help"].length) {
                $("#content_text").html("「我已經制定好計畫了，我需要你......」");
                $("#fade_out").removeClass("none");
                setTimeout(() => {
                    $("#content_block").css("display", "flex");
                    tl_fade.play();
                }, 1000);

                setTimeout("javascript:location.href='../html/storyboard_true.html'", 4000);
            }
        } else {
            $content.html(data["interactive_item"][0][clickItem_dialogSwitch][lineCount_interactive]);
        };
    });
})



$("#choice_y").click(function () {
    $("#choice").css("display", "none");
});

$("#choice_n").click(function () {
    $("#choice").css("display", "none");
    // 提取呈現文本內容
    $("#content_text").html("「......你根本不知道自己做了甚麼。」");
    $("#content_block").css("display", "flex");
    $("#fade_out").removeClass("none");
    tl_fade.play();
    setTimeout("javascript:location.href='../html/storyboard_false.html'", 4000);



})

$("#play_again").click(function () {
    location.href = '../html/intro.html'
})


tl_fade.progress(0).pause()