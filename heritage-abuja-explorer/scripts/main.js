/* Heritage Abuja Explorer JavaScript */


/* Heritage Sites Object Array */

const heritageSites = [

{
    name: "Aso Rock",
    location: "Central Abuja",
    description:
    "A famous natural landmark that represents Abuja.",
    image:
    "images/aso_rock.webp"
},


{
    name: "National Mosque",
    location: "Abuja",
    description:
    "A historic architectural landmark in Nigeria's capital.",
    image:
    "images/national_mosque.webp"
},


{
    name: "Millennium Park",
    location:
    "Three Arms Zone",
    description:
    "A peaceful recreation area popular with visitors.",
    image:
    "images/park.webp"
},


{
    name: "Zuma Rock",
    location:
    "Near Abuja",
    description:
    "A culturally important natural rock formation.",
    image:
    "images/zuma_rock.webp"
}

];




/* Display Cards */

function displaySites(){


const container =
document.querySelector("#siteContainer");



if(container){


container.innerHTML =
heritageSites.map(site => {


return `

<section class="card">

<img 
src="${site.image}"
alt="${site.name}"
loading="lazy">


<h3>${site.name}</h3>


<p>
Location: ${site.location}
</p>


<p>
${site.description}
</p>


</section>

`;

}).join("");

}


}




/* Visitor Local Storage */

function visitorMessage(){


const button =
document.querySelector("#visitButton");


const message =
document.querySelector("#welcomeMessage");



if(button){


button.addEventListener(
"click",
()=>{


let visitor =
localStorage.getItem("visitor");



if(visitor){


message.textContent =
`Welcome back ${visitor}! Enjoy your Abuja adventure.`;


}

else {


visitor = "Explorer";


localStorage.setItem(
"visitor",
visitor
);



message.textContent =
`Welcome ${visitor}! Start discovering Abuja heritage.`;

}


});


}


}




/* Contact Form */

function contactForm(){


const form =
document.querySelector("#contactForm");



const output =
document.querySelector("#formMessage");



if(form){


form.addEventListener(
"submit",
(event)=>{


event.preventDefault();



const name =
document.querySelector("#name").value;



localStorage.setItem(
"contactVisitor",
name
);



output.textContent =
`Thank you ${name}. Your message was submitted successfully.`;



form.reset();


});


}


}





/* Footer Year */

function footerYear(){


const year =
document.querySelector("#year");



if(year){


year.textContent =
new Date().getFullYear();


}


}





/* Mobile Navigation */

function mobileMenu(){


const button =
document.querySelector("#menuButton");


const menu =
document.querySelector("#navigation");



if(button && menu){


button.addEventListener(
"click",
()=>{


menu.classList.toggle("show");


});


}


}





displaySites();

visitorMessage();

contactForm();

footerYear();

mobileMenu();