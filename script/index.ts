let website: any = [];        //<=<=<=Created an empty Array so we can push the class objects
                                
////////////////////////Locations Class
class Locations {
    constructor(public image: string,public name: string,public ZIP: number,public address:string , public date:string) {       
        website.push(this);
    }

    display() {                                                                       //Function Display contains the Card body
        return `
        <div class="card mb-5 mt-5 g-1 animate__animated animate__swing">
        <img class="img img-fluid d-none d-sm-none d-md-block d-lg-block d-xl-block" src="${this.image}" alt="Card image cap">
        <div class="card-body">
        <h3 class="card-title"> ${this.name}</h3>
        <ul style="list-style-type:disc;">
        <li><p class="card-text"><i class="fa fa-map-marker"></i> ${this.ZIP}</p></li>
        <li><p class="card-text"><i class="fa fa-car"></i> ${this.address}</p></li>
       
         `
    }
                                                                                                      
    closdiv() {                                                                       ///// Function contains Closing Div 
        return `
        </ul>
        <p class="date card-text animate__animated animate__bounceInUp animate__delay-1s"> Last visited on:<br> ${this.date}</p>
        </div>
        </div>
         `
    }
}


/////&//////////////////////Restaurants Class

class Restaurants extends Locations {                                                                                                
    constructor(image: string, name: string,ZIP: number,address: string, public tel: string,public cuisine: string,public web: string, date:string,) {
        super(image, name, ZIP, address,date);
    }
    display() {                                                                         ///// Function contains added contnent
        return ` 
        ${super.display()}
        <li><p class="card-text"><i class="fa fa-phone"></i> ${this.tel} </p></li>
        <li><p class="card-text"><i class="fa fa-cutlery" aria-hidden="true"></i> ${this.cuisine}</p>
        <li><p class="web card-text"><i class="fa fa-at"></i> <a href="${this.web}"> Website </a></p></li>
        `;
    }
}

/////////////////////////////////// Events Class

class Events extends Locations {
    constructor(image: string,name: string,ZIP: number,address: string, public eventdate: string,public eventtime: string,public eventprice: string,date:string) {
    super(image, name, ZIP, address,date);
    }
    display() {                                                                            ///// Function contains added contnent
        return `
        ${super.display()}
        <li><p class="event card-text"><i class="fa fa-calendar" aria-hidden="true"></i> ${this.eventdate}</p></li>
        <li><p class="event card-text"><i class="fa fa-clock-o" aria-hidden="true"></i> ${this.eventtime}</p></li>
        <li><p class="event card-text"><b><em>&#36; ${this.eventprice}</b></em></p></li>      
        `;
    }
}

//Creating Objects

new Locations("img/stephansplatz.jpg","Vienna <br>St. Stephen's Cathedral", 1010, "Stephansplatz 1","January 5, 2001 21:30:50 ");
new Locations("img/iceland.jpg","Reykjavík Hallgrimskirkja",101,"Eiríksgata 4","September 20, 2008 20:30:00");
new Locations("img/paris.jpg","Paris <br>Eiffel Tower",75007 ," Champ de Mars, 5 Avenue ","August 13, 2013 10:28:37");
new Locations("img/Sagrada-Familia.jpg","Barcelona <br> La Sagrada Familia",08013,"Carrer de Mallorca 401","February 8, 2021 20:30:00");

new Restaurants("img/belgrade.jpg","Babaroga Steakhouse Belgrade",11000,"Severni bulevar 2 Beograd ","+381 11 279 05 38","Balkan,Steakhouse Barbecue, European","https://www.restoranbabaroga.com/","March 20, 2020 21:00:23");
new Restaurants("img/ElevenMadisonPark.jpg","Elevenmadisonpark",10010,"11 Madison Ave New York","+1 212-889-0905","American,European,Vegetarian Friendly","https://www.elevenmadisonpark.com/","July 1, 2019 15:10:12");
new Restaurants("img/eden.jpg","Restaurant EDEN ",5552,"Eindhovenseweg 115","+31 40 844 6193","Seafood,International,European","https://www.restaurant-eden.nl/","January 25, 2017 15:20:19");
new Restaurants("img/noma.jpg","Noma <br> Copenhagen",1432 ,"Refshalevej 96","+45 32 96 32 97","Scandinavican,Nordic,Seefood ","https://noma.dk/","April 05, 2007 14:33:10");

new Events("img/usopen.jpg","US Open 2020 <br> NT Center",11368,"USTA Billie Jean King National Tennis Center","Aug 31, 2020 – Sep 13, 2020","11 a.m. - 18 p.m","320,00 ","September 13, 2020 18:15:19");
new Events("img/tennis.jpeg","Wimbledon <br>Tennis tournament ",11111,"Church Road SW19 London ","1 – 14 July 2019","11 a.m. -19 p.m","500,00 ","July 27, 2019 13:49:32");
new Events("img/fifa.jpg","Fifa World Cup 2018 <br> Luzhniki Stadium",11111,"Luzhnetskaya naberezhnaya 24 ","June 14, 2018 – July 15, 2018","11 a.m. -13 p.m","200,00","June 15, 2018 14:49:32");
new Events("img/wien.png","WWE Championship <br> Vienna",1150,"Roland-Rainer-Platz 1 ","Monday 11 November 2019","06.30 p.m.","50,00 ","November 11, 2019 18:00:11");

// displaying the objects

for (let val of website) {
    (document.getElementById("content") as HTMLElement).innerHTML +=  val.display() + val.closdiv();}
                                                                    //Card Body + Closing Div 
//////////////////Sort by  Ascending  

    function sortbtnUp(){
        website.sort(function(a:string, b:string){
            var dateA = new Date(a.date), dateB = new Date(b.date);    
            return dateA - dateB;  
        }); 
          
        var text:string = "";
        for (let val of website) {
             text += val.display() + val.closdiv()};
             (document.getElementById("content") as HTMLElement).innerHTML = text;        
    }

    //Adding Click event to Sort Objects Ascending 
   (document.getElementById("btnup")as HTMLElement).addEventListener("click", sortbtnUp )  
   
   //////////////////Sort by Descending 

    function sortbtnDown(){
        website.sort(function(a:string, b:string){
            var dateA = new Date(a.date), dateB = new Date(b.date);    
            return dateB - dateA;  
        });  

        var text:string = "";
        for (let val of website) {
             text += val.display() + val.closdiv()};
             (document.getElementById("content") as HTMLElement).innerHTML = text; 
    }

    //Adding Click event to Sort Objects Descending 
    (document.getElementById("btndown")as HTMLElement).addEventListener("click", sortbtnDown ) 
    

