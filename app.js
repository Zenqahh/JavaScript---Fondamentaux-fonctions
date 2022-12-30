const arr = [];  
do { // Demande une valeur comprise entre 1 et 20, si ce n'est pas le cas renvoi une alert  
  number = parseInt(prompt("Combien de noms voulez-vous ?"))
  if (isNaN(number) || number < 1) { 
      alert("Merci d'entrer une valeur correct")
  }
} while (isNaN(number) || number < 1);
// le temps que i n'est pas supérieur à number boucle continue. chaque tour i incrémente de 1 
for (let i = 0; i < number; i++) {
    arr.push(prompt('Entrer le nom ' + (i+1)));// envoi les valeurs saisi aux prompts dans un tableau 
}
// condition qui renvoi une concaténation si number est plus grand que 3 ou si number est plus petit ou égal à 3
if (number > 3) {
    console.log(`Vous avez saisi ${arr.length} noms ${arr} " C'est beaucoup de noms !`) 
}
else if (number <= 3) {
    console.log(`Vous avez saisi ${arr.length} noms ${arr}`)
}


// function qui renvoi un a un les élements d'un tableau
function showName(arr) { 
   for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    
   }
}
showName(arr) //print la function showname avec le paramètre du tableau 