'use strict';

//the constructor for each of my stores
function Store(name, minCust, maxCust, avgCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.genResults = [];
  locationObjects.push(this);
}

//generates a random number between minCust and maxCust, multiples it by the avg cookies/customer/store
//and pushes it into an an object's array.
function gen(location) {
  for (var i = 0; i < 14; i ++) {
    var randGen = Math.random() * (location.maxCust - location.minCust + 1) + location.minCust;
    randGen = Math.floor(randGen * location.avgCust);
    location.genResults.push(randGen);
  }
}

//superGen calls gen() for each of our stores
function superGen() {
  for (var x = 0; x < locationObjects.length; x++) {
    console.log(x);
    gen(locationObjects[x]);
  }
}

//declaring variables for creating HTMl elements in the DOM
var rowEl = document.createElement('tr');
var dataEl = document.createElement('td');
var tableBodyEl = document.createElement('tbody');
var tableEl = document.getElementById('pike');

//apppending the table body to the table
tableEl.appendChild(tableBodyEl);

//this puts the projecttions for a store into it's own row in the DOM
function superPrintProjections(store) {
  superGen();
  var rowEl = document.createElement('tr');
  tableBodyEl.appendChild(rowEl);
  var dataEl = document.createElement('td');
  dataEl.textContent = store.name;
  rowEl.appendChild(dataEl);

  for (var i = 0; i < 15; i++) {
    var dataEl = document.createElement('td');
    dataEl.textContent = store.genResults[i];
    rowEl.appendChild(dataEl);
  }
}

//superMakeRow calls superGen() and makes rows for each item in locationObjects
function superMakeRow() {
  superGen();
  for (var i = 0; i < locationObjects.length; i++) {
    superPrintProjections(locationObjects[i]);
  }
}

//an empty array for our objects to live in
var locationObjects = [];

//using the constructor to create 5 stores and push them into locationObjects
var pike = new Store('pike', 23, 65, 6.3);
var seaTac = new Store('seaTac', 3, 24, 1.2);
var seaCenter = new Store('seaCenter', 11, 38, 3.7);
var theHill = new Store('theHill', 20, 38, 2.3);
var alki = new Store('alki', 2, 16, 4.6);

//create an array which will hold projects for each object
var reportResults = [pike.genResults, seaTac.genResults, seaCenter.genResults, theHill.genResults, alki.genResults];

//calling the function that makes it all happpen.
superMakeRow();
