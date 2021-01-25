let myTime;

$('#createBtn').click(()=> {
    const continent = $('#continent').val();
    const country = $('#country').val();
    const capital = $('#capital').val();
    myTime = new MyTime(continent, country, capital);

    $('#created').html(myTime.toString())
});

$('#nextHourBtn').click(() => {
    if (myTime) $('#nextHour').html(myTime.nextHour().toString());
    else alert('You need to create the time first.');
});

$('#previousHourBtn').click(() => {
    if (myTime) $('#previousHour').html(myTime.previousHour().toString());
    else alert('You need to create the time first.');
});
 
$('#getTimeOfBtn').click(() =>{
    if (myTime) {
        const continent = $('#newContinent').val();
        const country = $('#newCountry').val();
        const capital = $('#newCapital').val();
        const countryObj = new Country(continent, country, capital);
        $('#getTimeOf').html(myTime.getTimeOf(countryObj).toString());

    }
    else alert('You need to create the time first.');
});
