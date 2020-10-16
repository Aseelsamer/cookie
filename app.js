'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var locations1 = [];
function Location(name, min, max, AvgCookiePerCust) {
  this.Lname = name;
  this.min = min;
  this.max = max;
  this.AvgCookiePerCust = AvgCookiePerCust;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  locations1.push(this);
}
Location.prototype.getCustomerPerHour = function (min, max) {
  for (var i = 0; i < hours.length; i++) {
    this.customerPerHour[i] = getRndInteger(min, max);
  }
};
Location.prototype.getcookiesPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
  }
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var seatle = new Location('Seatle', 7, 8, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);
//loop to call methods for all objects
for (var j = 0; j < locations1.length; j++) {
  locations1[j].getCustomerPerHour(locations1[j].min, locations1[j].max);
  locations1[j].getcookiesPerHour();
}
// var container1 = document.getElementById('container');
// var tableE1 = document.createElement('table');
// container1.appendChild(tableE1);
tableHead(); //first line in table
Location.prototype.render = function () {
  var tr2 = document.createElement('tr');
  tableE1.appendChild(tr2);
  var td1 = document.createElement('td');
  tr2.appendChild(td1);
  td1.textContent = this.Lname;
  var totalDaily = 0;
  for (var i = 0; i < hours.length; i++) {
    var td2 = document.createElement('td');
    tr2.appendChild(td2);
    td2.textContent = this.cookiesPerHour[i];
    totalDaily += this.cookiesPerHour[i];

  }
  var td3 = document.createElement('td');
  tr2.appendChild(td3);
  td3.textContent = totalDaily;

};
for (var i = 0; i < locations1.length; i++) {
  locations1[i].render();
}
total();
function tableHead() {
  var tr1 = document.createElement('tr');
  tableE1.appendChild(tr1);
  var th3 = document.createElement('th');
  tr1.appendChild(th3);
  th3.textContent = '        ';
  for (var i = 0; i < hours.length; i++) {
    var th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = hours[i];
  }
  var th2 = document.createElement('th');
  tr1.appendChild(th2);
  th2.textContent = 'Daily Location Total';
}
function total() {
  var tr4 = document.createElement('tr');
  tableE1.appendChild(tr4);
  var td4 = document.createElement('td');
  tr4.appendChild(td4);
  td4.textContent = 'Totals'; //the cell of word'totals'
  var total = 0;
  var total2 = 0;
  for (var i = 0; i < hours.length; i++) {
    var td5 = document.createElement('td');
    tr4.appendChild(td5);
    for (var j = 0; j < locations1.length; j++) {
      total += locations1[j].cookiesPerHour[i];
      td5.textContent = total;
      total2 += locations1[j].cookiesPerHour[i];
    }
    total = 0; //to avoid adding the value of totals of pevoius colomn
  }
  var td6 = document.createElement('td');
  tr4.appendChild(td6);
  td6.textContent = total2;
}
// Location.prototype.getCustomerPerHour = function (min, max) {
//   for (var i = 0; i < hours.length; i++) {
//     this.customerPerHour[i] = getRndInteger(min, max);
//   }
// };
// Location.prototype.getcookiesPerHour = function () {
//   for (var i = 0; i < hours.length; i++) {
//     this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
//   }
// };

var container1 = document.getElementById('container');
var tableE1 = document.createElement('table');
container1.appendChild(tableE1);

function renderHeaderRow(table) {

  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  var Header = document.createElement('th');
  headerRow.appendChild(Header);

  for (var i=0;i<hours.length;i++) {
    var hoursstring=document.createElement('th');
    headerRow.appendChild(hoursstring);
    hoursstring.textContent=hours[i];
  }
  var totalcookiedperlocation=document.createElement('th');
  headerRow.appendChild(totalcookiedperlocation);
  totalcookiedperlocation.textContent='Daily Location Total';
}

var myForm = document.getElementById('shopForm');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target);

  // function myForm() {
  //     event.preventDefault();
  //     console.log(event.target);


  var Lname = event.target.text1.value;
  console.log(Lname);

  var min = event.target.number1.value;
  console.log(min);

  var max = event.target.number2.value;
  console.log(max);

  var AvgCookiePerCust = event.target.avg3.value;
  console.log(AvgCookiePerCust);

  var locations1 = new Location(Lname, min, max, AvgCookiePerCust);
  console.log(locations1);
  locations1.render();
});
