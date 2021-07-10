var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var website = []; //<=<=<=Created an empty Array so we can push the class objects
////////////////////////Locations Class
var Locations = /** @class */ (function () {
    function Locations(image, name, ZIP, address, date) {
        this.image = image;
        this.name = name;
        this.ZIP = ZIP;
        this.address = address;
        this.date = date;
        website.push(this);
    }
    Locations.prototype.display = function () {
        return "\n        <div class=\"card mb-5 mt-5 g-1 animate__animated animate__swing\">\n        <img class=\"img img-fluid d-none d-sm-none d-md-block d-lg-block d-xl-block\" src=\"" + this.image + "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n        <h3 class=\"card-title\"> " + this.name + "</h3>\n        <ul style=\"list-style-type:disc;\">\n        <li><p class=\"card-text\"><i class=\"fa fa-map-marker\"></i> " + this.ZIP + "</p></li>\n        <li><p class=\"card-text\"><i class=\"fa fa-car\"></i> " + this.address + "</p></li>\n       \n         ";
    };
    Locations.prototype.closdiv = function () {
        return "\n        </ul>\n        <p class=\"date card-text animate__animated animate__bounceInUp animate__delay-1s\"> Last visited on:<br> " + this.date + "</p>\n        </div>\n        </div>\n         ";
    };
    return Locations;
}());
/////&//////////////////////Restaurants Class
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(image, name, ZIP, address, tel, cuisine, web, date) {
        var _this = _super.call(this, image, name, ZIP, address, date) || this;
        _this.tel = tel;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return " \n        " + _super.prototype.display.call(this) + "\n        <li><p class=\"card-text\"><i class=\"fa fa-phone\"></i> " + this.tel + " </p></li>\n        <li><p class=\"card-text\"><i class=\"fa fa-cutlery\" aria-hidden=\"true\"></i> " + this.cuisine + "</p>\n        <li><p class=\"web card-text\"><i class=\"fa fa-at\"></i> <a href=\"" + this.web + "\"> Website </a></p></li>\n        ";
    };
    return Restaurants;
}(Locations));
/////////////////////////////////// Events Class
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(image, name, ZIP, address, eventdate, eventtime, eventprice, date) {
        var _this = _super.call(this, image, name, ZIP, address, date) || this;
        _this.eventdate = eventdate;
        _this.eventtime = eventtime;
        _this.eventprice = eventprice;
        return _this;
    }
    Events.prototype.display = function () {
        return "\n        " + _super.prototype.display.call(this) + "\n        <li><p class=\"event card-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> " + this.eventdate + "</p></li>\n        <li><p class=\"event card-text\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> " + this.eventtime + "</p></li>\n        <li><p class=\"event card-text\"><b><em>&#36; " + this.eventprice + "</b></em></p></li>      \n        ";
    };
    return Events;
}(Locations));
//Creating Objects
new Locations("img/stephansplatz.jpg", "Vienna <br>St. Stephen's Cathedral", 1010, "Stephansplatz 1", "January 5, 2001 21:30:50 ");
new Locations("img/iceland.jpg", "Reykjavík Hallgrimskirkja", 101, "Eiríksgata 4", "September 20, 2008 20:30:00");
new Locations("img/paris.jpg", "Paris <br>Eiffel Tower", 75007, " Champ de Mars, 5 Avenue ", "August 13, 2013 10:28:37");
new Locations("img/Sagrada-Familia.jpg", "Barcelona <br> La Sagrada Familia", 08013, "Carrer de Mallorca 401", "February 8, 2021 20:30:00");
new Restaurants("img/belgrade.jpg", "Babaroga Steakhouse Belgrade", 11000, "Severni bulevar 2 Beograd ", "+381 11 279 05 38", "Balkan,Steakhouse Barbecue, European", "https://www.restoranbabaroga.com/", "March 20, 2020 21:00:23");
new Restaurants("img/ElevenMadisonPark.jpg", "Elevenmadisonpark", 10010, "11 Madison Ave New York", "+1 212-889-0905", "American,European,Vegetarian Friendly", "https://www.elevenmadisonpark.com/", "July 1, 2019 15:10:12");
new Restaurants("img/eden.jpg", "Restaurant EDEN ", 5552, "Eindhovenseweg 115", "+31 40 844 6193", "Seafood,International,European", "https://www.restaurant-eden.nl/", "January 25, 2017 15:20:19");
new Restaurants("img/noma.jpg", "Noma <br> Copenhagen", 1432, "Refshalevej 96", "+45 32 96 32 97", "Scandinavican,Nordic,Seefood ", "https://noma.dk/", "April 05, 2007 14:33:10");
new Events("img/usopen.jpg", "US Open 2020 <br> NT Center", 11368, "USTA Billie Jean King National Tennis Center", "Aug 31, 2020 – Sep 13, 2020", "11 a.m. - 18 p.m", "320,00 ", "September 13, 2020 18:15:19");
new Events("img/tennis.jpeg", "Wimbledon <br>Tennis tournament ", 11111, "Church Road SW19 London ", "1 – 14 July 2019", "11 a.m. -19 p.m", "500,00 ", "July 27, 2019 13:49:32");
new Events("img/fifa.jpg", "Fifa World Cup 2018 <br> Luzhniki Stadium", 11111, "Luzhnetskaya naberezhnaya 24 ", "June 14, 2018 – July 15, 2018", "11 a.m. -13 p.m", "200,00", "June 15, 2018 14:49:32");
new Events("img/wien.png", "WWE Championship <br> Vienna", 1150, "Roland-Rainer-Platz 1 ", "Monday 11 November 2019", "06.30 p.m.", "50,00 ", "November 11, 2019 18:00:11");
// displaying the objects
for (var _i = 0, website_1 = website; _i < website_1.length; _i++) {
    var val = website_1[_i];
    document.getElementById("content").innerHTML += val.display() + val.closdiv();
}
//Card Body + Closing Div 
//////////////////Sort by  Ascending  
function sortbtnUp() {
    website.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });
    var text = "";
    for (var _i = 0, website_2 = website; _i < website_2.length; _i++) {
        var val = website_2[_i];
        text += val.display() + val.closdiv();
    }
    ;
    document.getElementById("content").innerHTML = text;
}
//Adding Click event to Sort Objects Ascending 
document.getElementById("btnup").addEventListener("click", sortbtnUp);
//////////////////Sort by Descending 
function sortbtnDown() {
    website.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
    });
    var text = "";
    for (var _i = 0, website_3 = website; _i < website_3.length; _i++) {
        var val = website_3[_i];
        text += val.display() + val.closdiv();
    }
    ;
    document.getElementById("content").innerHTML = text;
}
//Adding Click event to Sort Objects Descending 
document.getElementById("btndown").addEventListener("click", sortbtnDown);
