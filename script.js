var city="";
var searchCity = $("#search-city");
var searchbutton = $("#search-button");
var currentcity =$("#current-city");
var temperature = $("#temp");
var windspeed = $("#wind");
var humid = $("#humidity");



var apikey = "6a9de91525474aa0fefcd1b74aab4d1c";

function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city = searchCity.val().trim();   
        currentWeather(city);
    } else {
        alert("Please enter name of the city!");
    }
}

    //function currentWeather(city){
      //  var apiurl = "http://api.openweathermap.org/data/2.5/weather?q="+city+",&APPID="+apikey+"";
   // $.ajax({
     //   url: apiurl,
     //   method: "GET",
   // }).then(function(Response){
    //    console.log(Response);
  //  }
//)}

function currentWeather(city){
    var apiurl = "http://api.openweathermap.org/data/2.5/weather?q="+city+",&APPID="+apikey+"";
$.ajax({
    url: apiurl,
    method: "GET",
}).then(function(data){

    var today = new Date().toLocaleDateString()
    console.log(today);

   $(currentcity).html(data.name+"("+today+")");
   $(temperature).html(data.main.temp+"&deg;C");
   $(windspeed).html(data.wind.speed + "MPH");
   $(humid).html(data.main.humidity + "%");
}
)}


  $("#search-button").on("click",displayWeather);
    
    







