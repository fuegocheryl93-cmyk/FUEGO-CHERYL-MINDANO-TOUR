const spots = {

davao:[
{
name:"Samal Island",
price:1200,
img:"davao/Samal.jpeg",
desc:"Samal Island is known for its crystal clear beaches. It is perfect for swimming and relaxation."
},
{
name:"Philippine Eagle Center",
price:500,
img:"davao/Eagle.jpeg",
desc:"This center protects the Philippine Eagle. It promotes wildlife conservation and education."
}
],

zamboanga:[
{
name:"Yakan Village",
price:300,
img:"zamboanga/Yakan.jpeg",
desc:"Yakan Village showcases traditional weaving culture. It reflects the rich heritage of the Yakan people."
},
{
name:"Great Santa Cruz Island",
price:1000,
img:"zamboanga/Santa.jpeg",
desc:"This island has rare pink sand beaches. It is one of the most unique destinations in Mindanao."
}
],

cdo:[
{
name:"Mapawa Nature Park",
price:700,
img:"cdo/Mapawa.jpeg",
desc:"Mapawa offers waterfalls and scenic views. It is great for outdoor adventures."
},
{
name:"Seven Seas Waterpark",
price:900,
img:"cdo/Seven.jpeg",
desc:"A modern waterpark with fun slides and pools. It is perfect for families."
}
],

bukidnon:[
{
name:"Mount Kitanglad",
price:1000,
img:"bukidnon/Mount.jpeg",
desc:"Mount Kitanglad is rich in biodiversity. It is ideal for trekking and nature exploration."
},
{
name:"Kaamulan Park",
price:300,
img:"bukidnon/Kaamulan.jpeg",
desc:"A cultural park celebrating Bukidnon traditions. It hosts festivals and events."
}
],

surigao:[
{
name:"Cloud 9",
price:800,
img:"surigao/Cloud.jpeg",
desc:"Cloud 9 is a famous surfing destination. It offers big waves and beautiful views."
},
{
name:"Sugba Lagoon",
price:1000,
img:"surigao/Sugba.jpeg",
desc:"Sugba Lagoon has clear turquoise water. It is perfect for swimming and kayaking."
}
]

};

let selectedDesc="";

function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u && p){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
}
}

function showSpots(place){
let container=document.getElementById("spots");
container.innerHTML="";

spots[place].forEach(s=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${s.img}">
<h3>${s.name}</h3>
<p>${s.desc}</p>
<p><b>₱${s.price}</b></p>
<button onclick="selectSpot('${s.name}',${s.price},'${s.desc}')">Select</button>
`;

container.appendChild(card);
});
}

function selectSpot(name,price,desc){
document.getElementById("spot").value=name;
document.getElementById("price").value=price;
selectedDesc=desc;
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let spot=document.getElementById("spot").value;
let room=document.getElementById("room").value;
let food=document.getElementById("food").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;

document.getElementById("receipt").innerHTML=`
<h3>Booking Confirmed 🤎</h3>
<p>${name}</p>
<p>${spot}</p>
<p>${room} | ${food}</p>
<p>${date} - ${time}</p>
`;

let table=document.querySelector("#bookingTable tbody");
let row=table.insertRow();

row.innerHTML=`
<td>${name}</td>
<td>${spot}</td>
<td>${room}</td>
<td>${food}</td>
<td>${date}</td>
<td>${time}</td>
`;
});

