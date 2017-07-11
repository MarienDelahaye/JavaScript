var scoreO=0;
var scoreU=0;

function pierre() {user===pierre
}
function ciseaux() {user===ciseaux
}
function feuille() {user===feuille
}
document.getElementById("pierre").addEventListener("click") ,pierre()
{
  document.getElementById("pierre").innerHTML = + person; " A choisi pierre"
}
document.getElementById("ciseaux").addEventListener("click") ,ciseaux()
{
  document.getElementById("ciseaux").innerHTML = + person; " A choisi ciseaux"
}
document.getElementById("feuille").addEventListener("click") ,feuille()
{
 document.getElementById("feuille").innerHTML = + person; " A choisi ciseaux"
}
console.log (user)

while(scoreO!=3 && scoreU!=3){

 var user
  var ordi= Math.random();

if (ordi<=0.34){
  ordi=("pierre")
}
else  if (ordi<=0.67 && ordi>0.34){
    ordi=("feuille");
    }
      else{
      ordi=("ciseaux");
    }
      alert("l'ordi à choisi : " + ordi);

 if (user===ordi) {
    alert("egalité");
      }

 else  if((user==="pierre" && ordi==="ciseaux")
      || (user==="ciseaux" && ordi==="feuille")
      || (user==="feuille" && ordi==="pierre")){
        scoreU++ ;
        alert("Tu as gagné, ton score est : " + scoreU + " et le score de l'Ordinateur est : " + scoreO );
      }
        else {
          scoreO++;
          alert("L'ordi gagne, son score est : " + scoreO + " et ton score est de : " + scoreU);
        }

}

alert ("Ordinateur: " + scoreO +" "+"Vous: " +scoreU +"");
