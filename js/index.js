$(document).ready(async function() {
    console.log('Hello World');

    //
    // const url = `https://runsignup.com/Rest/races?api_key=${keys.run_SignUp_secret}&api_secret=abfb0602fffd5549ad769ea40f1a5234295e9695&format=xml&events=F&race_headings=F&race_links=F&include_waiver=F&include_multiple_waivers=F&include_event_days=F&include_extra_date_info=F&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=F&distance_units=K`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // };
    // fetch(url, options)
    //     .then( response => console.log(response) )
    //     .catch( error => console.error(error) ); /* handle errors */


    // $.get(`https://runsignup.com/Rest/races?api_key=${keys.run_SignUp}&api_secret=${keys.run_SignUp_secret}&format=json`).done(async function(json)
    // {
    //     console.log("testingggggggg")
    //     console.log(await json.result);
    // });

    $.getJSON(`https://runsignup.com/Rest/races?api_key=${keys.run_SignUp}&api_secret=${keys.run_SignUp_secret}&format=json`, function(json_data){
        console.log("test")
        alert(JSON.stringify(json_data));
    });

});


