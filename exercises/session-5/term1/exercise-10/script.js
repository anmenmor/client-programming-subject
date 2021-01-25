$('table').mouseenter(() => {
    $("tr:odd").hide("slow");
})

$('table').mouseleave(() => {
    $("tr:odd").show("slow");
})