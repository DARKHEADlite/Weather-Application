
const submit = document.getElementById("submit");
submit.addEventListener("click", function(event) {
  event.preventDefault();
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  console.log("Input value: ", inputValue);


  let string = inputField.value;
  let firstChar = string.charAt(0).toUpperCase();
  let newString = firstChar + string.slice(1);
  


  const cityname = document.getElementById("cityname");
  cityname.innerHTML = newString;
  
 
  inputField.value = "";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newString}&appid=89230523f72b75b0db70cf697c93c26b`)
    .then(response => response.json())
    .then(data => {

        



      console.log(data);

      // console.log(data.main.temp)
      const tempValue = document.getElementById("temperature")
      tempValue.innerHTML =parseFloat((data.main.temp - 273.15).toFixed(2)) + "°C";
      

      // console.log(data.main.temp_max)
      const temp_max= document.getElementById("temp_max");
      temp_max.innerHTML = parseFloat((data.main.temp_max - 273.15).toFixed(2)) + "°C";

      const temp_min = document.getElementById("temp_min");

      temp_min.innerHTML = parseFloat((data.main.temp_min - 273.15).toFixed(2)) + "°C";

      const humidity = document.getElementById("humidity")
      humidity.innerHTML = data.main.humidity + "%";

      const description = document.getElementById("description")
      description.innerHTML = data.weather[0].description;

      // const wind = document.getElementById("wind")
      // wind.innerHTML = parseFloat((data.main.temp_max-273.15).toFixed(2))+"°C";

      // const cityname = document.getElementById("cityname")
      // cityname.innerHTML = data.main.name

      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      console.log(date)
      const currentdate = document.getElementById("currentdate")
      currentdate.innerHTML = date


      // data.main.temp_max-273.15
    })
    .catch(error => {

      console.error(error);
    });
});