'use strict';

var i = 600;

function genHourlyReport(location) {
  for (i = 600; i <= 2000; i += 100) {
    var randGen = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
    if (i < 1000) {
      location.genResults.push('<li> 0' + i + ' hours:' + randGen + ' cookies </li>');
    } else {
      location.genResults.push('<li>' + i + ' hours:' + randGen + ' cookies</li>');
    }
  }

  console.log(location.genResults);
}

var pike = {
  name: 'pike',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  genResults: [],
  gen: function () {
    genHourlyReport(pike);
  },
};

var seaTac = {
  name: 'seaTac',
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  genResults: [],
  gen: function () {
    return genHourlyReport(seaTac);
  },

};

var seaCenter = {
  name: 'seaCenter',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  genResults: [],
  gen: function () {
    return genHourlyReport(seaCenter);
  },
};

var theHill = {
  name: 'theHill',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  genResults: [],
  gen: function () {
    return genHourlyReport(theHill);
  },
};

var alki = {
  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  genResults: [],
  gen: function () {
    return genHourlyReport(alki);
  },
};

pike.gen();
seaTac.gen();
seaCenter.gen();
theHill.gen();
alki.gen();

var locationObjects = [];
locationObjects.push(pike.name);
locationObjects.push(seaTac.name);
locationObjects.push(seaCenter.name);
locationObjects.push(theHill.name);
locationObjects.push(alki.name);
console.log(locationObjects);
var reportResults = [];
reportResults.push(pike.genResults);
reportResults.push(seaTac.genResults);
reportResults.push(seaCenter.genResults);
reportResults.push(theHill.genResults);
reportResults.push(alki.genResults);
console.log(reportResults);

var ul = document.createElement('ul');
document.body.appendChild(ul);

for (var i = 1; i <= reportResults.length; i++) {
  var li = document.createElement('li');
  li.className = 'report';
  var a = document.createElement('a');
  a.innerHTML = locationObjects[i] + reportResults[i];

  li.appendChild(a);
  ul.appendChild(li);
}

//populate array with randos
/*
for (i = 0; i <= locationLength; i++) {
  console.log(locationObjects[i]);
  genHourlyReport(locationObjects[i]);
  console.log(locationObjects[i].genResults);
}

var x = 0;
var locationLength = locationObjects.length;
console.log('number of locations: ' + locationLength);

//this function supposedly creates list items
function reporting(objectName) {
  for (x = 0; x <= locationLength; x++) {
    console.log(x);
    var node = document.createElement('LI');
    var liNode = document.createTextNode(locationObjects.genResults[x]);
    var totalNode = document.createTextNode(locationObjects.genResults[x]);
    document.createElement('UL' + ' id = ' + i);
    node.appendChild(liNode);
  }
}

//this loop creates list items from each index in genResults
for (i = 0; i >= locationLength; i++) {

  //Write the total into the results array on the last cycle.
  for (i = 0; i < 14; i++) {
    node.appendChild(totalNode);
    document.getElementById('firstAndPike').appendChild(node);
  }
}


documentselect UL
firstchild (li)
next sibling (li2)
print
next sibling (li3)
print
parentnode (ul1)
next sibling (u2)
firstchild (li1 of u2)
next sibling (li2 of u2)


function register(location) {
  location.gen();
  var printThis = '';
  for (var i = 0; i < location.genResults.length; i++) {
    printThis += '<li>' + location.genResults[i] + '</li>';
  }

  return printThis;
}

document.queryselector('ul').innerHTML = register();
var nextItem = document.queryselector('ul')
document.nextSibling
*/
