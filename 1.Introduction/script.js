/*
*/
console.log(document.title);
document.title = "Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(255, 255, 125)";

// // Get the <body> element
// const bodyElement = document.body;

// // Get the second child element of the <body>
// const secondChild = bodyElement.children[1];

// // Display all children elements of the second child element
// for (const child of secondChild.children) {
//   console.log(child);
//   // You can replace console.log with any action you want to perform with each child element
// }

let deuxiemeElementEnfant = document.body.children;
for (let enfant of deuxiemeElementEnfant){
    console.log(enfant)
}

