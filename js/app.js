/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var countElem = document.getElementById("matCount");
countElem.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgElem = document.getElementById("msgCount");
msgElem.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var nameElem = document.getElementById("fullname");
nameElem.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageElem = document.getElementById("age");
ageElem.innerHTML = "63 Years Old";

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobElem = document.createElement("div");
jobElem.id = "job";
jobElem.innerHTML = "Clown and Restauranteur";
data.appendChild(jobElem);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbiesElem = document.createElement("div");
hobbiesElem.id = "hobbies";
hobbiesElem.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(hobbiesElem);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationElem = document.createElement("div");
locationElem.id = "location";
locationElem.innerHTML = "Honolulu, HI";
data.appendChild(locationElem);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsElem = document.createElement("div");
wantsElem.id = "wants";
wantsElem.innerHTML = "Looking for a Mrs. McDonald";
data.appendChild(wantsElem);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var newProElem = document.createElement("p");
newProElem.id = "pro2";
newProElem.innerHTML = "[Insert at least 2 sentences of new profile for Ronald here]";
profile.appendChild(newProElem);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var newMatchName = document.getElementsByClassName("firstName");
newMatchName[0].innerHTML = "Wendy";

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var newMatchAge = document.getElementsByClassName("otherAge");
newMatchAge[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var newMatchStatus = document.getElementsByClassName("status");
newMatchStatus[0].innerHTML = "Single Mother";

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var secMatchName = document.getElementsByClassName("firstName");
secMatchName[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var secMatchAge = document.getElementsByClassName("otherAge");
secMatchAge[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 var thirdMatchImage = document.getElementsByClassName("other");
 thirdMatchImage[2].src = "https://secure.img2-fg.wfcdn.com/im/79582021/compr-r85/3670/36706786/teacup-labrador-puppy-statue.jpg";

 //div with class name of firstName
var thirdMatchName = document.getElementsByClassName("firstName");
thirdMatchName[2].innerHTML = "Pup In A Cup";

 //div with class name of otherAge
var thirdMatchAge = document.getElementsByClassName("otherAge");
thirdMatchAge[2].innerHTML = "Mentally 2";

 //div with class name of status
var thirdMatchStatus = document.getElementsByClassName("status");
thirdMatchStatus[2].innerHTML = "Single";
 
 //div with class anem of Motto
 var thirdMatchMotto = document.getElementsByClassName("motto");
 thirdMatchMotto[2].innerHTML = "I'm ready for nap time!"




