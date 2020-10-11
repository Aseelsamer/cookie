"use strict";
var Seattle = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }
    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];
            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },
    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";
        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="Seatle";
        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);
        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Seattle.getCustomerPerHour();
Seattle.getCookiesPerHour();
Seattle.render();
//   Seattle.render();
  // numOfCustomers*avg of cookies
  // count it for all hours
// Seattle.randCustomeers(2,7);



var tokyo = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 3,
    max: 24,
    AvgCookiePerCust: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],
    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }
    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];
            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },
    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";
        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="tokyo";
        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);
        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
tokyo.getCustomerPerHour();
tokyo.getCookiesPerHour();
tokyo.render();
//   Seattle.render();
  // numOfCustomers*avg of cookies
  // count it for all hours
// Seattle.randCustomeers(2,7);



var dubai = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }
    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];
            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },
    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";
        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="dubai";
        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);
        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
dubai.getCustomerPerHour();
dubai.getCookiesPerHour();
dubai.render();



var paris = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }
    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];
            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },
    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";
        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="paris";
        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);
        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
paris.getCustomerPerHour();
paris.getCookiesPerHour();
paris.render();



var lima = {
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',],
    numOfCookies: 0,
    min: 23,
    max: 65,
    AvgCookiePerCust: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    // randCustomeers:function(min,max){
    //     this.numOfCustomer =getRndInteger(min,max);
    // },
    getCustomerPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var dialy = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            this.customerPerHour[i] = dialy;
        }
    },
    sales: [],
    getCookiesPerHour: function () {
        var total = 0;
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.AvgCookiePerCust * this.customerPerHour[i]);
            console.log(this.customerPerHour[i]);
            total = total + this.cookiesPerHour[i];
            this.sales[i] = this.hours[i] + ":" + this.cookiesPerHour[i] + "Cookies";
        }
        this.sales[14] = "total: " + total + "cookies";
        console.log(this.sales);
    },
    render: function () {
        var container1 = document.getElementById("container");
        console.log('container= ', container1);
        var title = document.createElement('h1');
        container1.appendChild(title);
        title.textContent = "Welcome to Sales page";
        var par=document.createElement('p');
        container1.appendChild(par);
        par.textContent="lima";
        var ulE1 = document.createElement('ul');
        container1.appendChild(ulE1);
        for (var i = 0; i < this.sales.length; i++) {
            var liE=document.createElement('li');
            ulE1.appendChild(liE);
            liE.textContent=this.sales[i];
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
lima.getCustomerPerHour();
lima.getCookiesPerHour();
lima.render();