/*Constantes pour la manipulation du DOM*/
const mainTitle = document.getElementById('mainTitle');
const mainContent = document.getElementById('mainContent');
const firstButton = document.getElementById('button');
const words = document.querySelector('#word');
const indices = document.getElementById('indice');
const howManyIndice = document.getElementById('howManyIndice');
const winOrLoose = document.getElementById('winOrLoose');

/*Tableau de mots à faire deviner*/
const mots = [
  "Chat", "Chien", "Maison", "Voiture", "Ordinateur", "Téléphone", "Arbre", "Fleur", "Livre", "Musique",
  "Plage", "Montagne", "Étoile", "Lune", "Soleil", "Bonheur", "Amour", "Famille", "Ami", "Cuisine",
  "Restaurant", "Voyage", "Avion", "Train", "Bateau", "École", "Université", "Art", "Sport", "Nature",
  "Ville", "Route", "Café", "Théâtre", "Cinéma", "Internet", "Réseau", "Données", "Science", "Technologie",
  "Histoire", "Géographie", "Langage", "Bibliothèque", "Photographie", "Tableau", "Peinture", "Sculpture",
  "Danse", "Chanson"
];

let wordAlreadyUsed = [];

let intHowManyIndice;


//---------------------------------------------------------------------------------


/*Fonction pour choisir un mot "aléatoire" dans le tableau mots*/
/*Cela créer un bouton qui lance la fonction nbrHint (choix du nombre d'indice)*/
function randomWord(){
   mainTitle.innerHTML = "Le Pire Ami 2 A 2";
   howManyIndice.style.visibility ='hidden';
   firstButton.style.visibility = 'visible';
   let aleatoire = Math.floor(Math.random()*mots.length);
   if(wordAlreadyUsed.includes(aleatoire)){
     randomWord();
   }else{
     words.innerHTML = `Le mot à faire deviner est :<br\/> ${mots[aleatoire]}`;
     indices.innerHTML = "<button onclick='nbrHint()'> Clic pour donner le nombre d'indice</button>";
     winOrLoose.innerHTML = "";
   }
   wordAlreadyUsed.push(aleatoire);
   wordAlreadyUsed.sort(); 
   console.log(wordAlreadyUsed);
}

/*Fonction qui me demande le nombre d'indice à donner et récupère la valeur saisie*/
/*Cela lance la fonction indice*/
function nbrHint(){
  indices.innerHTML = "";
  howManyIndice.style.visibility = 'visible';
  howManyIndice.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      intHowManyIndice = howManyIndice.value;
      indice()
    }
  });
}

/*Fonction qui verifie si la valeur saisie dans nbrHint est conforme et repond en fonction de la valeur*/
/*Si c'est un chiffre entre 1 et 10* cela créer un bouton qui lance la fonction boucleIndice*/
function indice(){
  howManyIndice.style.visibility ='hidden';
  if(intHowManyIndice >= 1 && intHowManyIndice <= 10){
    indices.innerHTML= `Il te reste ${intHowManyIndice} indices à donner <br\/> <br\/> <button class='tour' onclick='boucleIndice()'>Clic pour passer au tour suivant</button>`;
  }else if(intHowManyIndice > 10){
    indices.innerHTML ="Il y a un peu trop d'indices, non ? <br\/> Indique un chiffre entre 1 et 10 <br\/> <br\/> <button onclick='nbrHint()'> Clic pour donner le nombre d'indice</button>";
    }else{
      indices.innerHTML = "Tu dois mentionner un chiffre entre 1 et 10 ! <br\/> <br\/> <button onclick='nbrHint()'> Clic pour donner le nombre d'indice</button>";
    }
}

/*fonction qui décrémente le nombre d'indices restant et émet un message pour continuer ou dire si les indices sont à zero*/
/*Em même temps un bouton gagné et perdu sont créer et lance les fontions win ou loose*/
function boucleIndice(){
  
  intHowManyIndice -= 1;
  if(intHowManyIndice === 0 || intHowManyIndice < 0){
    indices.innerHTML = "Tu n'as plus d'indice en reserve";
    winOrLoose.innerHTML = "<button onclick='win()'>Gagné ?</button> ou <button onclick='loose()'>Perdu ?</button>";
  }else{
    indices.innerHTML= `Il te reste ${intHowManyIndice} indices à donner <br\/> <br\/> <button onclick='boucleIndice()'>Clic pour passer au tour suivant</button>`;
    winOrLoose.innerHTML = "<button onclick='win()'>Gagné ?</button>";
  }
}
/*Fonction qui émet un message en cas de victoire et créer un boutton pour relancer une partie*/
function win(){
  mainTitle.innerHTML = "Gagné !!! <br\/><br\/> <button onclick='randomWord()'> Nouvelle Partie ?</button>";
  firstButton.style.visibility ='hidden';
  words.innerHTML = "";
  indices.innerHTML = "";
  winOrLoose.innerHTML= "";
}

/*Fonction qui émet un message en cas de défaite et créer un boutton pour relancer une partie*/
function loose(){
  mainTitle.innerHTML = "Perdu !!! <br\/><br\/> <button onclick='randomWord()'> Nouvelle Partie ?</button>";
  firstButton.style.visibility ='hidden';
  words.innerHTML = "";
  indices.innerHTML = "";
  winOrLoose.innerHTML= "";
}