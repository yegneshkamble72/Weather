var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

button.addEventListener('click', function () {

  if(input.value === ""){
    alert("Please enter city name!");
    return;
  }

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
  + input.value + 
  '&appid=536a41fb909a99fff37534418199a1e9&units=metric')

  .then(response => response.json())
  .then(data => {

    if(data.cod === "404"){
      alert("City not found!");
      return;
    }

    var tempValue = data.main.temp;
    var nameValue = data.name;
    var descValue = data.weather[0].description;
    var cloudValue = data.clouds.all;

    main.innerHTML = nameValue;
    desc.innerHTML = "Weather - " + descValue;
    temp.innerHTML = "Temperature - " + tempValue + " °C";
    clouds.innerHTML = "Clouds - " + cloudValue + "%";

    input.value = "";

  })
  .catch(() => {
    alert("Something went wrong!");
  });

});
