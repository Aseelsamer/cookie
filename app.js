'use strict';
var footerRow;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var locations1 = [];
function Location(name, min, max, AvgCookiePerCust) {
  this.Lname = name;
  this.min = min;
  this.max = max;
  this.AvgCookiePerCust = AvgCookiePerCust;
  this.total=0,
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
var container1 = document.getElementById('container');
var tableE1 = document.createElement('table');
container1.appendChild(tableE1);
function renderheaderRow(table) {
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  var Header = document.createElement('th');
  headerRow.append(Header);
  Header.textContent= '       ';
  for (var i=0; i<hours.length;i++) {
    var hoursstring= document.createElement('th');
    headerRow.appendChild(hoursstring);
    hoursstring.textContent=hours[i];
  }

  var totalcookiesperlocation=document.createElement('th');
  headerRow.appendChild(totalcookiesperlocation);
  totalcookiesperlocation.textContent='Daily Location Total' ;
}
renderheaderRow(tableE1);
tableE1.prototype.renderdataRow = function() {
  var dataRow = document.createElement('th');
  tableE1.appendChild(dataRow);

  var shoplocationNames = document.createElement('th');
  dataRow.append(shoplocationNames);
  shoplocationNames.textContent=this.Lname;

  for (var i=0; i<this.cookiesPerHour.length;i++) {
    var numofcookieperhour=document.createElement('td');
    dataRow.appendChild(numofcookieperhour);
    numofcookieperhour.textContent=this.cookiesPerHour[i];
  }
  var totalcookies= document.cookiesPerHour('td');
  dataRow.appendChild(totalcookies);
  totalcookies.textContent=this.total;
};
for (var i=0;i<locations1.length;i++){
  this.locations1[i].renderdatarows();
}

function renderfooterRows(table) {
  footerRow= document.createElement('tr');
  table.appendChild(footerRow);
  var totalsperhour = document.createElement('td');
  footerRow.appendChild(totalsperhour);
  totalsperhour.textContent='Totals';
  for (var hourIndex=0; hourIndex<hours.length;hourIndex++)
    var td = document.createElement('td');

  footerRow.appendChild(td);

  var totalHourSales=0;
  for (var shopIndex=0;shopIndex < locations1.length ;shopIndex ++ )
    var shop=locations1[shopIndex];
  totalHourSales +=shop.cookiesPerHour[hourIndex];

}
var totaloftotal=0;
td.textContent= totalHourSales;
totaloftotal+= totalHourSales;

var td= document.createElement('td');
footerRow.append(td);
td.textContent=totaloftotal;

renderfooterRows(tableE1);

var myForm = document.getElementById('shopForm');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target);


  var Lname = event.target.text1.value;
  console.log('Lname',Lname);

  var min = event.target.number1.value;
  console.log('min',min);

  var max = event.target.number2.value;
  console.log('max',max);

  var AvgCookiePerCust = event.target.avg3.value;
  console.log('AvgCookiePerCust',AvgCookiePerCust);

  var newlocation= new Location(Lname, min, max,
    console.log('newlocation',newlocation));
  newlocation.calculatenumberofcookies();
  locations1.push(newlocation);
  newlocation.renderdatarows();
  renderfooterRows(tableE1);
});

