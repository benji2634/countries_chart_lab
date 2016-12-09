var series;
var countries;

window.onload = function() {
  var url = 'https://restcountries.eu/rest/v1/all'
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if (this.status != 200) return;

  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  // console.log(countries);
  var title = "My Country Chart";
  var container = document.getElementById('column-chart');
  var functionCall = populateCategories(countries);
  console.log(functionCall);
  new ColumnChart(container, title, functionCall.series, functionCall.countryNames);
}

var populateCategories = function(allCountries) {
  countryNames = [];
  countryPopulations = [];

  for (i = 0; i < allCountries.length; i++) {
    var country = allCountries[i];
    if (country.population > 100000000) {
      countryNames.push(country.name);
      // console.log(countryNames[0]);
      var tempData = {
        y: country.population,
        color: "tomato"
      }
      countryPopulations.push(tempData);
    // console.log(countryPopulations[0]);
  }

  var series = [{
    name: "Country population",
    data: countryPopulations
  }]
}
var returnData = {series: series, countryNames: countryNames};
return returnData;
// console.log(returnData);
}




   
    