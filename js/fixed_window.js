var lock = false;
var toggleScrollLock = function () {
    if (!lock) {
        //鎖定狀態
        $('body').css('overflow', 'hidden');
        lock = true;
        console.log(0)
    }
}
var toggleScrollUnlock = function () {
    if (lock) {
        //不鎖定狀態
        $('body').css('overflow', '');
        lock = false;
        console.log(1)
    }
}


$('.freezeScroll').each(function (i, element) {
    $(element).on('click', toggleScrollLock());
    console.log("freeze")
});

$('.unfreezeScroll').each(function (i, element) {
    $(element).on('click', toggleScrollUnlock());
    console.log("unfreeze")
});