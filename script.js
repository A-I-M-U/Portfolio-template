window.onload = ()=>{
    document.querySelector("#loader").style.display="none"; 
    document.querySelector(".registration").style.display="flex";
    let active = false;
    let button = document.querySelector('.burger');
    let slider = document.querySelector('nav>ul');
    let links = document.querySelectorAll('nav li')
    let burger_lines = document.querySelectorAll('.line');
    
const navbar = (active) =>{
button.addEventListener('click',()=>{
    if(!active){    
        burger_lines.forEach(line =>{
                line.classList.toggle('cross');
            });
        links.forEach(link =>{
            link.classList.toggle('animate')
        })
        slider.classList.toggle('slide-in');
        
        }
    
    })
}
navbar(active)
 }

function signup_portal() {
  document.querySelector(".login").style.display= "block";
  
  setTimeout(() => {
   document.querySelector(".login").style.display = "none";
   document.querySelector(".sign_up").style.display = "flex";
   
 })
}
 
 

function login_portal() {
  document.querySelector(".sign_up").style.opacity = "none";
  
  setTimeout(() => {
   document.querySelector(".sign_up").style.display = "none";
   document.querySelector(".login").style.display  = "flex";
   
  })
}


function enter_main_window_login(){
    document.querySelector(".registration").style.display= "block";
  var x = document.getElementById('email').value;
  if (x == "") {
    alert("Enter email");
    document.querySelector(".registration").style.display= "flex";
    return false;
    
  }
  var y = document.getElementById('password').value;
  if (y == "") {
    alert("Enter password");
    document.querySelector(".registration").style.display= "flex";
    return false;
    
  }
    
  
  
 else{
  setTimeout(() => {
   document.querySelector(".registration").style.display = "none";
   document.querySelector(".main_window").style.display = "flex";
   document.getElementById ("body").style.overflow = "scroll";
  
  })
  
}
}




function enter_main_window_signup(){
    document.querySelector(".registration").style.display= "block";
  var x = document.getElementById('email_signup').value;
  if (x == "") {
    alert("Enter email");
    document.querySelector(".registration").style.display= "flex";
    return false;
    
  }
  var y = document.getElementById('password_signup').value;
  if (y == "") {
    alert("Enter password");
    document.querySelector(".registration").style.display= "flex";
    return false;
    
  }
  var z = document.getElementById('username').value;
  if (z == "") {
    alert("Enter username");
    document.querySelector(".registration").style.display= "flex";
    return false;
    
  }
  
  else{
  setTimeout(() => {
   document.querySelector(".registration").style.display = "none";
   document.querySelector(".main_window").style.display = "flex";
   document.getElementById ("body").style.overflow = "scroll";
  
  })
  }
}



    



function open_blog() {
      window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
    }
    
function open_project(){
    window.location.href = 'https://github.com/Atul1409/Peacock-discord-bot';
}
/* Slider is inspired from https://www.sololearn.com/Discuss/2280263/?ref=app*/
var certificates = [
   'https://i.ibb.co/RSDXmQ5/Screenshot-20201230-004312-Chrome.jpg',
    'https://i.ibb.co/f2hMn9s/Screenshot-20201230-004446-Gallery.jpg', 
   'https://i.ibb.co/Qjtsxx3/Screenshot-20201230-004426-Gallery.jpg', 

'https://i.ibb.co/30w25Gf/Java-Script-certificate-1.png'

];

var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= certificates.length) {
        num = 0;
    }
    slider.src = certificates[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = certificates.length-1;
    }
    slider.src = certificates[num];
}

function open_git(){
    window.location.href = 'https://github.com/Atul1409';
}

function open_sl(){
    window.location.href = 'https://www.sololearn.com/Profile/19034561';
}

function open_insta(){
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
}

function open_tinder(){
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
}

