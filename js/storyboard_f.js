//$('window').load(function(){})已被廢棄，所以改為$(window).on('load',function () {})



// $(document).ready(function () {
var tl = gsap.timeline({ default: { duration: 0.5 } });
var click_count = 1;
var cut = "#cut1";

var tl_cut4_innerlogo = gsap.timeline({ default: { duration: 1.4 } });
tl_cut4_innerlogo.to("#cut4_innerlogo", { opacity: 0, duration: 0.1 });
tl_cut4_innerlogo.to("#cut4_innerlogo", { opacity: 0.7, duration: 0.1 });
tl_cut4_innerlogo.to("#cut4_innerlogo", { opacity: 0, duration: 0.1 });
tl_cut4_innerlogo.to("#cut4_innerlogo", { opacity: 0.7, duration: 0.1 });
tl_cut4_innerlogo.to("#cut4_innerlogo", { opacity: 0, duration: 1 });
tl_cut4_innerlogo.progress(0).pause();

var tl_container = gsap.timeline({ default: { duration: 0.3 } });
tl_container.to("#text", { opacity: 0, duration: 0.3 });
tl_container.progress(0).pause();

$("#next").click(function () {
    tl.to(cut, { duration: 0.4, opacity: 0 });
    tl.play();

    if (cut === "#cut3") {
        $("#text").css("display", "none");
        tl_container.play(0);
        setTimeout(() => {
            tl_cut4_innerlogo.play(0);
            setTimeout(() => {
                $("#text").css("display", "flex")
                tl_container.reverse();
            }, 1000);
        }, 2000);
    }

    if (click_count < 5) {
        click_count++;
        console.log(click_count);
        cut = "#cut" + click_count.toString();
    } else {

    }

    console.log(cut);

})
tl.progress(0).pause();