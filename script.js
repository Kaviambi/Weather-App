var city=""
var cityi="";
var searchCity = $("#search-city");
var searchbutton = $("#search-button");
var currentcity =$("#current-city");
var temperature = $("#temp");
var windspeed = $("#wind");
var humid = $("#humidity");

//var apikey = "6a9de91525474aa0fefcd1b74aab4d1c";

//function displayWeather(event){
 // event.preventDefault();
 // if(searchCity.val().trim()!==""){
     // city = searchCity.val().trim();   
      //currentWeather(city);
      
  //} else {
      //alert("Please enter name of the city!");
  //}
//}
 //function currentWeather(city){
     //call current weather
    // var apiurl = "http://api.openweathermap.org/data/2.5/weather?q="+city+",&units=imperial&APPID="+apikey+"";
 // $.ajax({
    // url: apiurl,
    // method: "GET",
 //}).then(function(response){

  //To get today's date
    //var date = new Date().toLocalDateString();
    //$(temperature).html(response.main.temp+"&deg;F");
    //$(windspeed).html(response.wind.speed + " MPH");
  //$(humid).html(response.main.humidity + "%");
//}
 //)}
 
 var apikey = "6a9de91525474aa0fefcd1b74aab4d1c";

function fdisplayWeather(event){
 event.preventDefault();
  if(searchCity.val().trim()!==""){
     cityi = searchCity.val().trim();   
      fcurrentWeather(cityi);
      
  } else {
      alert("Please enter name of the city!");
  }
}

function fcurrentWeather(city){
  
  var fapiurl = "https://api.openweathermap.org/data/2.5/forecast?q="+city+",&units=imperial&APPID="+apikey+"";
$.ajax({
  url: fapiurl,
  method: "GET",
}).then(function(response){

  //Array of 5 day weather forecast 
   //var today = new Date().toLocaleDateString()
   console.log(response);
   $("#currentcity").html(response.city.name);
   $("#date0").html(response.list[0].dt_txt);
    $("#temp0").html(response.list[0].main.temp+ "&deg;F");
    $("#wind0").html(response.list[0].wind.speed+ " MPH");
    $("#humidity0").html(response.list[0].main.humidity+ "%");

    console.log(response);
  
   
    $("#date1").html(response.list[8].dt_txt);
    $("#temp1").html(response.list[8].main.temp+ "&deg;F");
    $("#wind1").html(response.list[8].wind.speed+ " MPH");
    $("#humidity1").html(response.list[8].main.humidity+ "%");

    console.log(response);
   
   $("#date2").html(response.list[14].dt_txt);
    $("#temp2").html(response.list[14].main.temp+ "&deg;F");
    $("#wind2").html(response.list[14].wind.speed+ " MPH");
    $("#humidity2").html(response.list[14].main.humidity+ "%");

    console.log(response);
   
   $("#date3").html(response.list[22].dt_txt);
    $("#temp3").html(response.list[22].main.temp+ "&deg;F");
    $("#wind3").html(response.list[22].wind.speed+ " MPH");
    $("#humidity3").html(response.list[22].main.humidity+ "%");

    console.log(response);
   
   $("#date4").html(response.list[30].dt_txt);
    $("#temp4").html(response.list[30].main.temp+ "&deg;F");
    $("#wind4").html(response.list[30].wind.speed+ " MPH");
    $("#humidity4").html(response.list[30].main.humidity+ "%");

    console.log(response);
   
    $("#date5").html(response.list[38].dt_txt);
     $("#temp5").html(response.list[38].main.temp+ "&deg;F");
     $("#wind5").html(response.list[38].wind.speed+ " MPH");
     $("#humidity5").html(response.list[38].main.humidity+ "%");
}
)}

//To display searched city 
    var txt1 = document.getElementById('search-city');
    var bbtn1 = document.getElementById('search-button');
 var out1 = document.getElementById('output1');

 function fun1(){
  out1.innerHTML = txt1.value;
 }
bbtn1.addEventListener('click',fun1);
 $("#search-button").on("click",fdisplayWeather);




