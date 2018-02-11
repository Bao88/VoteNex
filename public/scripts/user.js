var overlay, submit;

window.onload = function(){
  fetch('/who', {
    method: "GET",
    credentials: "include"      //Send with cookie so server knows we are a authenticated user
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    document.getElementById("display-name").innerHTML = data.name;
  });
  overlay = document.getElementsByClassName("overlay")[0];
  
  submit = document.getElementById("submit");
    // alert(submit);
    // event.preventDefault();
}


function submitPoll( event ) {
  event.preventDefault();
  console.log("Prevented!");
  // laert("hello");
}

function createPoll(event){
  document.getElementById("form").style.display = "block";
  var form = document.getElementById("create-form");
  form.reset();
}

function myPoll () {
 console.log("implement my poll, fetch all polls from this user"); 
}

function allPolls () {
 console.log("implement fetch of all polls available"); 
}

function buttonPressed(event) {
  event.preventDefault;
  var which = event.innerHTML;
  console.log(which);
  var form = document.getElementById("form-content");
  var length = form.childNodes.length-2;    // There seems to be "    " Text objects
  if(which === "+"){
    var inputElement = document.createElement("INPUT");
    
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("name", "choice"+length);
    inputElement.setAttribute("id", "choice"+length);
    inputElement.setAttribute("placeholder", "Choice "+length);
    inputElement.setAttribute("class", "form-input createinput");
    form.appendChild(inputElement);
  } else if(which === "-" && length !== 1) {   //Make sure the user can't remove "nothing"
    console.log(form.lastElementChild);
    form.removeChild(form.lastElementChild);
  } else if(which === "X"){
    document.getElementById("form").style.display = "none";
  } else {
    alert("You can't remove something that doesn't exists!"); 
  }
  
  // if(which === "Login") loginForm.style.display = "block";
  // if(which === "Register") registerForm.style.display = "block";
  // for(var i = 0; i < 2; i++) document.getElementsByClassName("btn")[i].style.display = "none";
  // overlay.style.display = "block";
}

