// //point 1--------------

// // Get all elements with the class name "important"
// const importantElements = document.querySelectorAll('.important');

// // Loop through each element and add a title attribute
// importantElements.forEach(element => {
//   element.setAttribute('title', 'This is an important item');
// });

// version plus courte point 1
let title = document.querySelectorAll('.important');
for ( let element of title){
    element.setAttribute ('title', 'This is an important item');
}

// // point 2--------------
    let img = document.querySelectorAll('img');
    for (let imgElement of img) {
    if (!imgElement.classList.contains('important')) {
    imgElement.style.display = "none";
    }
    }

// // point 3--------------
// let paragraphs = document.querySelectorAll('p');
// for (let pElement of paragraphs) {
//     if (pElement.classList.length > 0) {
//         // Display the class name as content inside the paragraph
//         pElement.textContent += ` (${pElement.classList})`;
//     }
// }
// solution plus courte
let p = document.querySelectorAll('p');
for (let para of p ){
console.log(para.innerHTML);//prend l'intérieur .innerHTML
if(para.classList != ""){
console.log(para.classList.value);
}
}

// // point 4--------------
for (let paragraphe of p ){
    if(paragraphe.classList != ""){}
    else {
    let myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    paragraphe.style.color = myRandomColor;
    }
    }

// plus long
// let paragraphs = document.querySelectorAll('p');
// const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E9', '#33FFFF', '#FFFF33']; 

// for (let i = 0; i < paragraphs.length; i++) {
//     let pElement = paragraphs[i];
//     if (pElement.classList.length === 0) {
//         // classList != "") même chose
//         let randomColor = colors[Math.floor(Math.random() * colors.length)];
//         pElement.style.color = randomColor;
//     }
// }



