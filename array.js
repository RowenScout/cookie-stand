'use strict';

var i = 600;

function genHourlyCust(location) {
  var randGen = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
  return randGen;
}

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  gen: function () {
    return genHourlyCust(pike);
  },
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  gen: function () {
    return genHourlyCust(seaTac);
  },

};

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  gen: function () {
    return genHourlyCust(seaCenter);
  },
};

var theHill = {
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  gen: function () {
    return genHourlyCust(theHill);
  },
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  gen: function () {
    return genHourlyCust(alki);
  },

  genReport: function () {
    for (i = 600; i < 2000; i += 100) {
      if (i<)
      console.log(i + ' hours:' + alki.gen() + 'cookies');
    }
  },
};
