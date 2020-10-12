"use strict";

var hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var locations1=[];
function Location( name,min, max,AvgCookiePerCust) {
    this.Lname=name;
    this.min=min ;
    this.max=max;
    this.AvgCookiePerCust=AvgCookiePerCust;
    this.customerPerHour=[];
    this.cookiesPerHour=[];
    locations1.push(this); 
}

// getCustomerPerHour: function () {
//     for (var i = 0; i < this.hours.length; i++) {
//         var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//         this.customerPerHour[i] = dialy;
//     }
// }

Location.prototype.getCustomerPerHour= function (min , max){
    for (var i=0 ;i<hours.length;i++){

        this.customerPerHour[i]= getRndInteger(min,max)
    }
}
Location.prototype.getcookiesPerHour= function () {
    for (var i=0 ;i<hours.length;i++){
        this.cookiesPerHour[i]=Math.floor(this.AvgCookiePerCust*this.customerPerHour[i]);
    }
}

function getRndInteger(min,max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
var seatle= new Location("seatle",7,8,6.3);
seatle.getCustomerPerHour(seatle.min,seatle.max);
seatle.getcookiesPerHour();
console.log(seatle);
var tokyo = new Location("tokyo",3,24,1.2);
var dubai = new Location("dubai",11,38,3.7);
var paris = new Location("paris",20,38,2.3);
var lima = new Location("lima",2,16,4.6);

var container1 = document.getElementById("container");

Location.prototype.render = function() {
    var tableE1 = document.createElement('table');
        container1.appendChild(tableE1);

 }
console.log(tokyo.min);
for (var i=0 ;i<hours.length;i++) {
    locations1[i].getCustomerPerHour(locations1[i].min,locations1[i].max);
    locations1[i].getcookiesPerHour();
    console.log(locations1[i]);}
