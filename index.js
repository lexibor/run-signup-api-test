$(document).ready(function() {
    console.log('Hello World');


    $.getJSON("https://runsignup.com/Rest/races?api_key=2d39ccda32f2f9ad88e93c7caed7b682735a7c72&format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_multiple_waivers=F&include_event_days=F&include_extra_date_info=F&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&distance_units=K&zipcode=78258&radius=20", function(json)
    {
        console.log(json);
    });

});


