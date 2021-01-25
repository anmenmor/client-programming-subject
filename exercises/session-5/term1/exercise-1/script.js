$("img").hover(
    function() {
        $(this).attr("src", 'img2.png');
},
    function() {
        $(this).attr ("src", 'img1.png');}
    )
