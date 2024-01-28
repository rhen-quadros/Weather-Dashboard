$(document).ready(function () {
  // Load cities from local storage on page load
  loadCities();

  // Handle click event on city names in the history
  $(document).on("click", ".list-group-item", function () {
    var cityName = $(this).text();
    fetchWeather(cityName);
  });

  $("button").on("click", function (event) {
    event.preventDefault();
    var cityName = $("#search-input").val();
    localStorage.setItem("searchedCity", cityName);

    // Save the city to local storage
    saveCity(cityName);

    // Load cities again to update the history immediately
    loadCities();

    // Fetch and display weather for the selected city
    fetchWeather(cityName);
  });

  function fetchWeather(cityName) {
    var cityURL =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      cityName +
      "&appid=ef4ac2c82d48b8c9e99b208c1d96371c";

    fetch(cityURL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(cityURL);
        console.log(data);

        var lon = data[0].lon;
        var lat = data[0].lat;

        var oneCallURL =
          "http://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=ef4ac2c82d48b8c9e99b208c1d96371c";

        fetch(oneCallURL)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            console.log(oneCallURL);
            console.log(data);

            var cityName = data.city.name;
            var todayDate = dayjs().format("(D/M/YYYY)");
            var dayPlusOne = dayjs().add(1, "day").format("D/M/YYYY");
            var dayPlusTwo = dayjs().add(2, "day").format("D/M/YYYY");
            var dayPlusThree = dayjs().add(3, "day").format("D/M/YYYY");
            var dayPlusFour = dayjs().add(4, "day").format("D/M/YYYY");
            var dayPlusFive = dayjs().add(5, "day").format("D/M/YYYY");
            var temp = data.list[0].main.temp - 273.15;
            var wind = data.list[0].wind.speed;
            var humidity = data.list[0].main.humidity;
            var tempOne = data.list[1].main.temp - 273.15;
            var windOne = data.list[1].wind.speed;
            var humidityOne = data.list[1].main.humidity;
            var tempTwo = data.list[2].main.temp - 273.15;
            var windTwo = data.list[2].wind.speed;
            var humidityTwo = data.list[2].main.humidity;
            var tempThree = data.list[3].main.temp - 273.15;
            var windThree = data.list[3].wind.speed;
            var humidityThree = data.list[3].main.humidity;
            var tempFour = data.list[4].main.temp - 273.15;
            var windFour = data.list[4].wind.speed;
            var humidityFour = data.list[4].main.humidity;
            var tempFive = data.list[5].main.temp - 273.15;
            var windFive = data.list[5].wind.speed;
            var humidityFive = data.list[5].main.humidity;

            var presentHtmlContent =
              '<div class="container">' +
              '<div class="card text-black bg-white mb-3">' +
              '<div class="card-body">' +
              '<h1 class="card-title">' +
              cityName +
              " " +
              todayDate +
              "</h1>" +
              '<p class="card-text">Temp: ' +
              temp.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              wind +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidity +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>";

            $("#today").html(presentHtmlContent);

            var futureHtmlContent =
              '<div class="container">' +
              '<h2 class="mt-4">5-Day Forecast</h2>' +
              '<div class="row">' +
              // Day Plus One
              '<div class="col-md-2">' +
              '<div class="card text-white bg-black mb-3">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              dayPlusOne +
              "</h5>" +
              '<p class="card-text">Temp: ' +
              tempOne.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              windOne +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidityOne +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              // Day Plus Two
              '<div class="col-md-2">' +
              '<div class="card text-white bg-black mb-3">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              dayPlusTwo +
              "</h5>" +
              '<p class="card-text">Temp: ' +
              tempTwo.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              windTwo +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidityTwo +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              // Day Plus Three
              '<div class="col-md-2">' +
              '<div class="card text-white bg-black mb-3">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              dayPlusThree +
              "</h5>" +
              '<p class="card-text">Temp: ' +
              tempThree.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              windThree +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidityThree +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              // Day Plus Four
              '<div class="col-md-2">' +
              '<div class="card text-white bg-black mb-3">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              dayPlusFour +
              "</h5>" +
              '<p class="card-text">Temp: ' +
              tempFour.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              windFour +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidityFour +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              // Day Plus Five
              '<div class="col-md-2">' +
              '<div class="card text-white bg-black mb-3">' +
              '<div class="card-body">' +
              '<h5 class="card-title">' +
              dayPlusFive +
              "</h5>" +
              '<p class="card-text">Temp: ' +
              tempFive.toFixed(2) +
              "</p>" +
              '<p class="card-text">Wind: ' +
              windFive +
              "</p>" +
              '<p class="card-text">Humidity: ' +
              humidityFive +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";

            $("#forecast").html(futureHtmlContent);
          });
      });
  }

  function saveCity(cityName) {
    // Retrieve cities from local storage
    var cities = JSON.parse(localStorage.getItem("cities")) || [];

    // Add the new city to the array
    cities.push(cityName);

    // Save the updated array back to local storage
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  function loadCities() {
    // Retrieve cities from local storage
    var cities = JSON.parse(localStorage.getItem("cities")) || [];

    // Display the cities in the #history element
    $("#history").empty();
    cities.forEach(function (city) {
      var listItem = $("<a>")
        .addClass("list-group-item list-group-item-action")
        .text(city);
      $("#history").append(listItem);
    });
  }
});
