$('#animateButton').click(() => {
    $('#div1').fadeToggle(2000,()=>{
        $('#div2').fadeToggle(2000)
    });
})