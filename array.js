'use strict';

//the constructor for each of my stores

function Store(name, minCust, maxCust, avgCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.genResults = [];
}

//generates a random number between minCust and maxCust and pushes it into an an object's array.
function gen(location) {
  for (var i = 600; i <= 2000; i += 100) {
    var randGen = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
    location.genResults.push(randGen);
    }
}


//superGen generates projections for each of our stores
function superGen() {
  for (var x = 0; x < locationObjects.length; x++) {
    console.log(x);
    gen(locationObjects[x]);
  }
}

//var rowEl = document.querySelector('tr');
var rowEl = document.createElement('tr');
var dataEl = document.createElement('td');
var tableBodyEl = document.createElement('tbody');
var tableEl = document.getElementById('pike');

tableEl.appendChild(tableBodyEl);

function printProjections(store) {
  var rowEl = document.createElement('tr');
  tableBodyEl.appendChild(rowEl);
  var dataEl = document.createElement('td');
  dataEl.textContent = store.name;
  rowEl.appendChild(dataEl);

  for (var i = 0; i < 15; i++) {
    var dataEl = document.createElement('td');
    dataEl.textContent = store.genResults[i];

    console.log(dataEl);

    rowEl.appendChild(dataEl);
  }

  console.log(rowEl);
  console.log(dataEl);
}

//superMakeRow makes rows for each item in locationObjects
function superMakeRow() {
  superGen();
  for (var i = 0; i < locationObjects.length; i++) {
    printProjections(locationObjects[i]);
  }
}

//tableEl.appendChild(tableBodyEl);

//using the constructor to create 5 stores
var pike = new Store('pike', 23, 65, 6.3);
var seaTac = new Store('seaTac', 3, 24, 1.2);
var seaCenter = new Store('seaCenter', 11, 38, 3.7);
var theHill = new Store('theHill', 20, 38, 2.3);
var alki = new Store('alki', 2, 16, 4.6);

//an array with each of our objects
var locationObjects = [pike, seaTac, seaCenter, theHill, alki];
console.log('locationObjects = ' + locationObjects);

var reportResults = [pike.genResults, seaTac.genResults, seaCenter.genResults, theHill.genResults, alki.genResults];
console.log('report results: ' + reportResults);

function superMakeHead(){
  for (var i = 0; i < locationObjects.length; i++) {
    makeHead(locationObjects[i]);
  }
}
superGen();
