function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const modalContent = document.querySelector(".content");
const thanksContent = document.querySelector(".thanks");
const btnClose = document.querySelector(".thanks .btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
modalClose.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalContent.classList.remove('animate-close');
  thanksContent.classList.remove('animate-close');
  modalContent.classList.add('animate-enter');
  thanksContent.classList.add('animate-enter');
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalContent.classList.remove('animate-enter');
  thanksContent.classList.remove('animate-enter');
  thanksContent.classList.add('animate-close');
  modalContent.classList.add('animate-close');
  setTimeout(function(){
    modalbg.style.display = "none";
  }, 700);
}


function validate(e){
  e.preventDefault();
  if(lancerVerif()){
    modalContent.classList.add('animate-close');
    setTimeout(function(){
      modalContent.style.display = "none";
    }, 700);
    setTimeout(function(){
      thanksContent.style.display = "block";
      thanksContent.classList.add('animate-enter');
    }, 720);
  }
  else{
  }
  
  
}

//Changer ça en tableau
function lancerVerif(){
  let statut1 = verifierString(document.getElementById('first'));
  let statut2 = verifierString(document.getElementById('last'));
  let statut3 = verifierEmail(document.getElementById('email'));
  let statut4 = verifierNombre(document.getElementById('quantity'));
  let statut5 = verifierRadioboutons(document.querySelectorAll('input[name="location"]'));
  let statut6 = verifierCheckBox();
  let statut7 = verifierString(document.getElementById('birthdate'));

  if(statut1 && statut2 && statut3 && statut4 & statut5 && statut6 && statut7){
    return true;
  }
  else{
    return false;
  }
}

function verifierCheckBox(){
  let box = document.querySelector('#checkbox1:checked')
  let parentBox = document.querySelector('#checkbox1')
  if(box !== null){
    parentBox.parentNode.removeAttribute("data-error");
    parentBox.parentNode.removeAttribute("data-error-visible");
    return true;
  }
  else{
    parentBox.parentNode.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    parentBox.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }
}

function verifierString (laChaine){
  if(laChaine.value.length < 2){
    laChaine.parentNode.setAttribute("data-error", "Le texte doit au moins faire 2 de longueur");
    laChaine.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }else{
    laChaine.parentNode.removeAttribute("data-error");
    laChaine.parentNode.removeAttribute("data-error-visible");
    return true;
  }
}

function verifierNombre (laValeur){
  if(laValeur.value.length >= 0 && !isNaN(laValeur)){
    laValeur.parentNode.removeAttribute("data-error");
    laValeur.parentNode.removeAttribute("data-error-visible");
    return true;
  }
  else{
    laValeur.parentNode.setAttribute("data-error", "Vous devez entrer un nombre");
    laValeur.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }
}

function verifierRadioboutons(radioBoutons){
  let parentRadioBoutons = radioBoutons[0].parentNode;
  let lieuSelectionne = null;
  for (let radioButton of radioBoutons) {
    if (radioButton.checked) {
      lieuSelectionne = radioButton.value;
      break;
    }
  }

  if(lieuSelectionne){
    parentRadioBoutons.removeAttribute("data-error");
    parentRadioBoutons.removeAttribute("data-error-visible");
    return true;
  }
  else{
    parentRadioBoutons.setAttribute("data-error", "Vous devez choisir une option.");
    parentRadioBoutons.setAttribute("data-error-visible", "true");
    return false;
  }
}

function verifierEmail(lEmail){

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(lEmail.value.match(validRegex)){
    lEmail.parentNode.removeAttribute("data-error");
    lEmail.parentNode.removeAttribute("data-error-visible");
    return true
  }else{
    lEmail.parentNode.setAttribute("data-error", "L'email doit être rempli et valide");
    lEmail.parentNode.setAttribute("data-error-visible", "true");
    return false
  }
}
