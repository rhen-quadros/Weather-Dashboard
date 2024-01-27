$("button").on("click", function (event) {
  event.preventDefault();
  var cityName = $("#search-input").val();
  var queryURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&appid=ef4ac2c82d48b8c9e99b208c1d96371c";

  fetch(queryURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(queryURL);
      console.log(data);
    });
});
