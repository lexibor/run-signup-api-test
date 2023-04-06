$(document).ready(function() {
    console.log('Hello World');


    $.getJSON("https://runsignup.com/Rest/races?api_key=1b5511344c1892462a5fdff8780b7e98ae45e645&api_secret=abfb0602fffd5549ad769ea40f1a5234295e9695&format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_multiple_waivers=F&include_event_days=F&include_extra_date_info=F&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&distance_units=K&zipcode=78258&radius=20").done(function(json)
    {
        console.log("testingggggggg")
        console.log(json.result);
    });

});


