let mots =["Maison","Voiture","Arbre","Route","Poupée","Ventre","Console","Herbe","Pyramide"];

function fonction(){
   let aleatoire = Math.floor(Math.random()*mots.length);
   console.log(aleatoire);
   document.querySelector('#word').innerText = mots[aleatoire];
   document.querySelector('#indice').innerHTML = "<button onclick='indice()'> Clic pour donner le nombre d'indice </button>";
}

function indice(){
  nbrIndice = parseInt(prompt("Combien veux-tu utiliser d'indices?"));
  document.querySelector('#indice').innerHTML='Il te reste ' + nbrIndice + ' indices à donner';
}

