 /*Constantes pour la manipulation du DOM*/
const mainTitle = document.getElementById('mainTitle');
const mainContent = document.getElementById('mainContent');
const firstButton = document.getElementById('button');
const words = document.querySelector('#word');
const clue = document.getElementById('clue');
const howManyClue = document.getElementById('howManyClue');
const winOrLoose = document.getElementById('winOrLoose');

/*Tableau de mots à faire deviner*/
const wordTab = [
  "Chat", "Chien", "Maison", "Voiture", "Ordinateur", "Téléphone", "Arbre", "Fleur", "Livre", "Musique",
  "Plage", "Montagne", "Étoile", "Lune", "Soleil", "Bonheur", "Amour", "Famille", "Ami", "Cuisine",
  "Restaurant", "Voyage", "Avion", "Train", "Bateau", "École", "Université", "Art", "Sport", "Nature",
  "Ville", "Route", "Café", "Théâtre", "Cinéma", "Internet", "Réseau", "Données", "Science", "Technologie",
  "Histoire", "Géographie", "Langage", "Bibliothèque", "Photographie", "Tableau", "Peinture", "Sculpture",
  "Danse", "Chanson"
];
/*Variables*/
let wordAlreadyUsed = [];

let intHowManyClue;


//---------------------------------------------------------------------------------


/*Fonction pour choisir un mot "aléatoire" dans le tableau wordTab*/
/*Cela créer un bouton qui lance la fonction nbrClue (choix du nombre d'indice)*/
function randomWord(){
   mainTitle.innerHTML = "Le Pire Ami 2 A 2";
   howManyClue.style.visibility ='hidden';
   firstButton.style.visibility ='visible';
   let random = Math.floor(Math.random()*wordTab.length);
   if(wordAlreadyUsed.includes(random)){
     randomWord();
   }else{
     words.innerHTML = `Le mot à faire deviner est :<br\/> ${wordTab[random]}`;
     clue.innerHTML = "<button onclick='nbrClue()'> Clic pour donner le nombre d'indice</button>";
     winOrLoose.innerHTML = "";
   }
   wordAlreadyUsed.push(random);
   wordAlreadyUsed.sort(); 
   console.log(wordAlreadyUsed);
}

/*Fonction qui me demande le nombre d'indice à donner et récupère la valeur saisie*/
/*Cela lance la fonction indice*/
function nbrClue(){
  clue.innerHTML = "";
  howManyClue.style.visibility = 'visible';
  howManyClue.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      intHowManyClue = howManyClue.value;
      indice()
    }
  });
}

/*Fonction qui verifie si la valeur saisie dans nbrHint est conforme et repond en fonction de la valeur*/
/*Si c'est un chiffre entre 1 et 10* cela créer un bouton qui lance la fonction boucleIndice*/
function indice(){
  howManyClue.style.visibility ='hidden';
  if(intHowManyClue >= 1 && intHowManyClue <= 10){
    clue.innerHTML= `Il te reste ${intHowManyClue} indices à donner <br\/> <br\/> <button class='tour' onclick='boucleIndice()'>Clic pour passer au tour suivant</button>`;
  }else if(intHowManyClue > 10){
    clue.innerHTML ="Il y a un peu trop d'indices, non ? <br\/> Indique un chiffre entre 1 et 10 <br\/> <br\/> <button onclick='nbrClue()'> Clic pour donner le nombre d'indice</button>";
    }else{
      clue.innerHTML = "Tu dois mentionner un chiffre entre 1 et 10 ! <br\/> <br\/> <button onclick='nbrClue()'> Clic pour donner le nombre d'indice</button>";
    }
}

/*fonction qui décrémente le nombre d'indices restant et émet un message pour continuer ou dire si les indices sont à zero*/
/*Em même temps un bouton gagné et perdu sont créer et lance les fontions win ou loose*/
function boucleIndice(){
  
  intHowManyClue -= 1;
  if(intHowManyClue === 0 || intHowManyClue < 0){
    clue.innerHTML = "Tu n'as plus d'indice en reserve";
    winOrLoose.innerHTML = "<button onclick='win()'>Gagné ?</button> ou <button onclick='loose()'>Perdu ?</button>";
  }else{
    clue.innerHTML= `Il te reste ${intHowManyClue} indices à donner <br\/> <br\/> <button onclick='boucleIndice()'>Clic pour passer au tour suivant</button>`;
    winOrLoose.innerHTML = "<button onclick='win()'>Gagné ?</button>";
  }
}
/*Fonction qui émet un message en cas de victoire et créer un boutton pour relancer une partie*/
function win(){
  mainTitle.innerHTML = "Gagné !!! <br\/><br\/> <button onclick='randomWord()'> Nouvelle Partie ?</button>";
  firstButton.style.visibility ='hidden';
  words.innerHTML = "";
  clue.innerHTML = "";
  winOrLoose.innerHTML= "";
}

/*Fonction qui émet un message en cas de défaite et créer un boutton pour relancer une partie*/
function loose(){
  mainTitle.innerHTML = "Perdu !!! <br\/><br\/> <button onclick='randomWord()'> Nouvelle Partie ?</button>";
  firstButton.style.visibility ='hidden';
  words.innerHTML = "";
  clue.innerHTML = "";
  winOrLoose.innerHTML= "";
}
