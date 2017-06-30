var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choixOrdi = Math.random();
if (choixOrdi < 0.34) {
choixOrdi = "pierre";
}
else if(choixOrdi <= 0.67) {
choixOrdi = "feuille";
}
else {
choixOrdi = "ciseaux";
}
console.log("Tu as choisis : " + choixUtilisateur); // Ce que l'utilisateur choisis s'affiche dans la console
console.log("L'ordinateur a choisis: " + choixOrdi); // Ce que l'ordinateur choisis s'affiche dans la console
alert("Tu as choisis: " + choixUtilisateur); // Ce que  l'utilisateur choisis mais s'affiche sous forme d'alert
alert("L'ordinateur a choisis: " + choixOrdi); // Ce que l'ordinateur choisis mais s'affiche sous forme d'alert
var comparer = function(choix1, choix2){
if (choix1===choix2)
{
return "Egalité !";
}
else if (choix1==="pierre")
{
if (choix2==="ciseaux")
{
return "pierre gagne !";
}
else{
return "feuille gagne !";
}
}
if (choix1===choix2)
{
return "Egalité !";
}
else if (choix1==="feuille")
{
if (choix2==="pierre")
{
return "feuille gagne !";
}
else{
return "ciseaux gagne !";
}
alert ("ciseaux gagne !");
}
if (choix1===choix2){
return "Egalité !";
}
else if (choix1==="ciseaux")
{
if (choix2==="feuille")
{
return "ciseaux gagne !";
}
else
{
return "pierre gagne !";
}
}
}
comparer(choixUtilisateur, choixOrdi);
