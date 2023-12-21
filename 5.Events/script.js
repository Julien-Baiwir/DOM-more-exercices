// Stocke le temps initial au moment où cette ligne est exécutée
const _initTime = Date.now();

// Définit une fonction getElapsedTime pour calculer le temps écoulé depuis _initTime
const getElapsedTime = () => {
  // Calcule la différence entre le temps actuel et _initTime, puis la divise par 1000 pour obtenir des secondes
  // Convertit le résultat en nombre et le formate avec 2 décimales, puis ajoute 's' à la fin pour indiquer les secondes
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

// Définit une fonction clickOnSquare qui sera exécutée lorsqu'un élément .actionsquare est cliqué
const clickOnSquare = (e) => {
  // Affiche dans la console la deuxième classe du carré cliqué (classList[1])
  console.log(e.target.classList[1]);
// Affiche dans la console le temps écoulé depuis _initTime à chaque clic sur un carré
  console.log(getElapsedTime());
}

// début exercice ( on remplace actionsquares)
const creatediv = (e) =>{
  let div = document.createElement('div');
  div.className = "displayedsquare";
  div.classList.add(e.target.classList[1]);
  let wrapper = document.querySelector('.displayedsquare-wrapper');
  wrapper.appendChild(div);
}

const information = (e) =>{
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let sentence = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square";
  li.innerHTML = sentence;
  ul.appendChild(li);
  console.log(ul);
}

// // // Sélectionne tous les éléments avec la classe .actionsquare
const actionSquares = document.querySelectorAll('.actionsquare')

// Ajoute un écouteur d'événements de clic à chaque élément .actionsquare
for (let actionSquare of actionSquares) {
actionSquare.addEventListener('click', clickOnSquare);
actionSquare.addEventListener('click',creatediv);
actionSquare.addEventListener('click',information);
}

// point 2 exercice add an event

Function to change background color randomly
const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Random hex color
  document.body.style.backgroundColor = "#" + randomColor; // Set body background color
  console.log(`[${getElapsedTime()}] Background color changed`);
};

Event listener for codepress on the document body

const logkey = (e) => {
  if (e.code == "Space") {
      let random = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = random;z
      let ul = document.querySelector('ul');
      let li = document.createElement('li');
      let sentence = "[" + getElapsedTime() + "] Created a new " + random + " background";
      li.innerHTML = sentence;
      ul.appendChild(li);
  }
  else if (e.code == "KeyL") {
      let tab = document.querySelectorAll('li');
      for ( let element of tab){
          element.remove();
      }
  }
  else if (e.code == "KeyS"){
      let tab = document.querySelectorAll('.displayedsquare ');
      for ( let element of tab){
          element.remove();
      }
  }
}




