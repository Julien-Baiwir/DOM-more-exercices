// // Function to generate a random hexadecimal color
// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
//   }
// //   The '#' + part in return '#' + ... is simply concatenating the pound sign (#) with the generated hexadecimal color code to form a valid color representation in CSS. The '#' is a part of the string that represents the start of a hexadecimal color code in CSS (e.g., #RRGGBB format for colors).
  
// // Learners and their corresponding random background colors
//   const learners = [
//     { name: 'Julien', color: getRandomColor() },
//     { name: 'Jeremy', color: getRandomColor() },
//     { name: 'Alice', color: getRandomColor() }
//   ];
  
//   // Reference to the article element
//   const article = document.querySelector('article');
  
//   // Loop through the learners array
//   for (let i = 0; i < learners.length; i++) {
//     // Create a section element
//     const section = document.createElement('section');
  
//     // Set background color
//     section.style.backgroundColor = learners[i].color;
  
//     // Create a paragraph for the learner's name
//     const paragraph = document.createElement('p');
//     paragraph.textContent = learners[i].name;
  
//     // Append paragraph to section
//     section.appendChild(paragraph);
  
//     // Append section to the article
//     article.appendChild(section);
//   }


//   jeremy -------------
// function creationDiv(nom){
//     let article = document.querySelectorAll('article');
//     for (let elem of article){
//     let newsection = document.createElement('section');
//     let newcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     let newparagraphe = document.createElement('p');
//     newparagraphe.innerHTML = nom;
//     newsection.appendChild(newparagraphe);
//     newsection.style.backgroundColor = newcolor;
//     elem.appendChild(newsection);  
//     }
//     }
let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen"];
for (let i = 0; i < tab.length; i++) {
    let randomIndex = Math.floor(Math.random() * tab.length);
    let x = tab[i];
    tab[i] = tab[randomIndex];
    tab[randomIndex] = x;
}
console.log(tab);
for (let x = 0; x< tab.length; x++){
    creationDiv(tab[x]);
}


    //   point 2 -------------
    // let section = document.querySelectorAll('section');
    // for (let element of section) {
    // let backgroundColor = element.style.backgroundColor;
    // let rgbValues = backgroundColor.match(/\d+/g);
    // let r = parseInt(rgbValues[0]);
    // let g = parseInt(rgbValues[1]);
    // let b = parseInt(rgbValues[2]);
    // if(r < 150 && g < 150 && b < 150){
    //     element.style.color = "#ffffff";
    // }
    // else {
    //     element.style.color = "#000000";
    // }
    // }

//   point 3 -------------
// window.onload = function() {
//     // Select the main element where the articles are located
//     const mainElement = document.querySelector('main');
  
//     // Get all the article elements within the main element
//     const articles = mainElement.querySelectorAll('article');
  
//     // Convert NodeList to an array for easy manipulation
//     const articlesArray = Array.from(articles);
  
//     // Randomize the order of articles
//     for (let i = articlesArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [articlesArray[i], articlesArray[j]] = [articlesArray[j], articlesArray[i]];
//     }
  
//     // Clear the existing articles from the DOM
//     mainElement.innerHTML = '';
  
//     // Reinsert the articles in the new randomized order
//     articlesArray.forEach(article => {
//       mainElement.appendChild(article);
//     });
//   };

//   jeremy -------------change juste l'array pas la page
// let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen"];

// for (let i = 0; i < tab.length; i++) {
//     let randomIndex = Math.floor(Math.random() * tab.length);
//     let x = tab[i];
//     tab[i] = tab[randomIndex];
//     tab[randomIndex] = x;
//     }
// console.log(tab);
// for (let x = 0; x< tab.length; x++){
//     creationDiv(tab[x]);
//     }




