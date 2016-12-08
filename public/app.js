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
  new ColumnChart(container, title, functionCall[0], functionCall[1]);
}

var populateCategories = function(allCountries) {
  countryNames = [];
  countryPopulations = [];
 
  for (i = 0; i < allCountries.length; i++) {
    var country = allCountries[i];
    if (country.population > 100000000) {
    countryNames.push(country.name);
    var tempData = {
      y: country.population,
      color: "tomato"
    }
    countryPopulations.push(tempData);
    // console.log(countries);
    }

    var series = [{
      name: "Country population",
      data: countryPopulations
    }]
    }
    var returnData = [countryNames, series];
    console.log(returnData);
  }




   
    