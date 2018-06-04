var monImage = document.querySelector('img');

monImage.onclick = function() {
    var monSrc = monImage.getAttribute('src');
    if(monSrc === 'images/firefox-logo.jpg') {
      monImage.setAttribute ('src','images/firefox-logo2.jpg');
    } else {
      monImage.setAttribute ('src','images/firefox-logo.jpg');
    }
}
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
function définirNomUtilisateur() {
  var monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}
if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}
monBouton.onclick = function() {
  définirNomUtilisateur();
}