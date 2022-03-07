const prompt = require("prompt-sync")();
//Déclarer les variables
let D = +prompt("Entrez la masse d'ergol nécessaire au décollage en kg: ");
let L = +prompt("Entrez la distance totale du voyage en unités astronomique: ");
function decollage(){
    console.log("la masse totale nécessaire au voyage est: "+(D+L*5))
}
//Appel de la fonction
decollage()


