


$(document).keydown(function (e) {
    switch (e.which) {
        case 37:    // key left

            $("#miner").css("transform", "rotateY(180deg)");
            $("#miner").css("width", "calc(57.5vh*0.58)");
            $("#miner").css("height", "calc(77.5vh*0.58)");
            console.log("0");


            break;
        case 39:    // key right

            $("#miner").css("transform", "rotateY(0deg)");
            $("#miner").css("width", "calc(57.5vh*0.58)");
            $("#miner").css("height", "calc(77.5vh*0.58)");
            console.log("1");


            break;
    }
});


$(document).keyup(function (e) {
    switch (e.which) {
        case 37:    // key left
            $("#miner").css("transform", "rotateY(180deg)");
            $("#miner").css("width", "calc(30.3vh * 0.58)");
            $("#miner").css("height", "calc(70.8vh * 0.58)");
            $("#miner").attr("src", "../image/character/main_stand.png");

            break;
        case 39:    // key right
            $("#miner").css("transform", "rotateY(0deg)");
            $("#miner").css("width", "calc(30.3vh * 0.58)");
            $("#miner").css("height", "calc(70.8vh * 0.58)");
            $("#miner").attr("src", "../image/character/main_stand.png");
            break;
    }
});




var play = true;
$(document).keydown(function (e) {
    if (play) {
        switch (e.which) {
            case 37:    // key left
                $("#miner").attr("src", "../image/character/main_walk.gif");
            //轉成走路
            case 39:    // key right
                //轉成走路
                $("#miner").attr("src", "../image/character/main_walk.gif");
                break;
        }
        play = false;
    }
});
$(document).keyup(function (e) {
    if (!play) {
        switch (e.which) {
            case 37:    // key left
                $("#miner").css("transform", "rotateY(180deg)");
                $("#miner").css("width", "calc(30.3vh * 0.58)");
                $("#miner").css("height", "calc(70.8vh * 0.58)");
                $("#miner").attr("src", "../image/character/main_stand.png");
            //轉成走路
            case 39:    // key right
                //轉成走路
                $("#miner").css("transform", "rotateY(0deg)");
                $("#miner").css("width", "calc(30.3vh * 0.58)");
                $("#miner").css("height", "calc(70.8vh * 0.58)");
                $("#miner").attr("src", "../image/character/main_stand.png");
                break;
        }
        play = true;
    }
});