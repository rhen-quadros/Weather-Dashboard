$("button").on("click", function (event) {
  event.preventDefault();
  var cityName = $("#search-input").val();
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
          var temp = data.list[0].main.temp - 273.15;
          var wind = data.list[0].wind.speed;
          var humidity = data.list[0].main.humidity;

          var htmlContent =
            "<h1>" +
            cityName +
            " " +
            todayDate +
            "</h1>" +
            "<p>" +
            "Temp: " +
            temp.toFixed(2) +
            "</p>" +
            "<p>" +
            "Wind: " +
            wind +
            "</p>" +
            "<p>" +
            "Humidity: " +
            humidity +
            "</p>";

          $("#today").html(htmlContent);
        });
    });
});
