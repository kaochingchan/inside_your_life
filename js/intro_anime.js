//進場動畫
var intro_fade = gsap.timeline({ default: { duration: 1 } });
intro_fade.to("#intro_bg", { opacity: 0, duration: 1, delay: 1 });

var tl_control_instruction = gsap.timeline({ default: { duration: 1 } });
tl_control_instruction.to("#control_instruction", { opacity: 0, delay: 1, duration: 1 })


tl_control_instruction.progress(0).pause()

setTimeout(() => {
    $("#intro_bg").css("display", "none");
    tl_control_instruction.play(0);
    setTimeout(() => {
        $("#control_instruction").css("display", "none");
    }, 2000);
}, 2000);



