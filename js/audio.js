var button_audio_bg = new Audio();
var paper_sound_effect = new Audio("../audio/paper.wav");
var info_sound_effect = new Audio("../audio/info_open.wav");
var telephone_sound_effect = new Audio("../audio/Telephone Ring.mp3");
telephone_sound_effect.volume = 1;

var not_help = new Audio("../audio/phone_sound.mp3");
not_help.volume = 0.2;

var ed = new Audio("../audio/theEnd.mp3");
ed.volume = 0.6;

var lineCount_sound = 0;

function bg_music() {
    switch ($("title").html()) {
        case "intro":
            button_audio_bg.src = "../audio/Sentimental.mp3";
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;
            break;

        case "firstChapter":
            button_audio_bg.src = "../audio/street_galaxy_tomorrow.mp3";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;
            break;

        case "secondChapter":
            console.log("mining.mp3 was played.")
            button_audio_bg.src = "../audio/mining.mp3";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;//
            break;

        case "secondChapter_2":
            button_audio_bg.src = "../audio/mining.mp3";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;//

            break;

        case "thirdChapter":
            button_audio_bg.src = "../audio/Eon - Ambient Scifi Music.mp3";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;//
            break;

        case "forthChapter":
            button_audio_bg.src = "../audio/hackroom.wav";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.1;
            break;

        case "storyboard_true":
        case "storyboard_false":
            button_audio_bg.src = "../audio/my-little-chromatic-bastard-11660.mp3";//
            button_audio_bg.loop = true;
            button_audio_bg.volume = 0.9;
            break;

        case "theEnd_t":
        case "theEnd_f":
            break;

        default:
            console.log("there's no music here!")
    };
}

bg_music();

$(document).click(function () {
    button_audio_bg.play();
});


$("#flyer").click(function () {
    paper_sound_effect.play();
})

$("#rule").click(function () {
    paper_sound_effect.play();
})

$("#bill").click(function () {
    paper_sound_effect.play();
})

$("#newspaper").click(function () {
    paper_sound_effect.play();
})

$("#doc1").click(function () {
    info_sound_effect.play()
})

$("#doc2").click(function () {
    info_sound_effect.play()
})

$("#news").click(function () {
    info_sound_effect.play()
})

if ($("title").html() === "fifthChapter") {
    $(".interactive_item").click(() => {

        lineCount_sound++;
        if (lineCount_sound === 3) {
            telephone_sound_effect.play();
        }
        if (lineCount_sound === 9) {
            telephone_sound_effect.pause();

        }
    })
}


if ($("title").html() === "theEnd_t") {
    $(".dialog").click(() => {
        lineCount_sound++;
        if (lineCount_sound === 4) {
            console.log("ed music has played.")
            ed.play(0);
        }
    })

}

if ($("title").html() === "theEnd_f") {
    $(".dialog").click(() => {
        paper_sound_effect.pause();
        lineCount_sound++;
        if (lineCount_sound === 8) {
            console.log("ed music has played.")
            ed.play(0);
        }
    })
}

$("#choice_n").click(function () {
    not_help.play();
})