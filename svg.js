var about = document.getElementById("aboutMe");
var contact = document.getElementById("contact");
var aboutah = document.getElementsByClassName("aboutah")[0];
var skillsah= document.getElementsByClassName("skillsah")[0];
var aboutwrapp = document.querySelector(".aboutwrapp");
var skillswrapp = document.querySelector(".skillswrapp");
var aboutpath = document.querySelectorAll(".about");
var contactah = document.querySelectorAll(".contactah");
var skillspath = document.querySelectorAll(".skills");
var skillMeId = document.getElementById("skillMe");
var skillMe = document.querySelectorAll(".skillMe")[0];



aboutah.addEventListener("click", function(){
    about.style.display="flex";
    
})
about.addEventListener("click", function(){
  about.style.display="none";
});
skillsah.addEventListener("click", function(){
  skillMeId.style.display="block";
  
})
skillMeId.addEventListener("click", function(){
skillMeId.style.display="none";
});
contactah[0].addEventListener("click", function(){
  contact.style.display="flex";
  
})
contact.addEventListener("dblclick", function(){
contact.style.display="none";
});