$('#animateButton').click(() => {
    $('div').animate({
        opacity: "0.75",
        width: "800px",
        height: "200px"
    }, 2000)
})

$('#pauseButton').click(() => {
    $('div').stop();
})

$('#finishButton').click(() => {
    $('div').finish();
})

$('#restartButton').click(() => {
    $('div').stop()
    $('div').animate({
        width: "100px",
        height: "100px"
    }, "fast")
})