// Point 1 ------------------------------------------
// //// Select the last child of the <ol> tag and put it at the beginning of the list
// const ol = document.querySelector('ol');
// const a = ol.children[0];
// const e = ol.children[4];
// e.appendChild(a);

// let ol = document.querySelector('ol');
// let last = ol.children[4];
// let first = ol.children[0];
// ol.insertBefore(last, first);

// Point 2 ---------------------------------------------

//// Move the <h2> of the third section in the second one and vice-versa
// Sélectionne les deux sections directement par leur index
// const secondSection = document.querySelectorAll('section')[1];
// const thirdSection = document.querySelectorAll('section')[2];

// Récupère les éléments h2 des sections
// const secondH2 = secondSection.querySelector('h2');
// const thirdH2 = thirdSection.querySelector('h2');

// // Échange les éléments h2 en les déplaçant d'une section à l'autre
// secondSection.appendChild(thirdH2);
// thirdSection.appendChild(secondH2);
// const firstParagraph = secondSection.querySelector('p');
// secondSection.insertBefore(secondH2, firstParagraph);

// ----solution jeremy
// let section = document.querySelectorAll('section');
// let h2 = document.querySelectorAll('h2');
// let lasth2 = h2[2];
// let secondh2 = h2[1];
// section[1].insertBefore(lasth2, section[1].firstElementChild);
// section[2].insertBefore(secondh2, section[2].firstElementChild);

//// Delete the last section from the DOM, we don't need it anyways
// const sections = document.querySelectorAll('section');
// const lastSection = sections[sections.length - 1];
// lastSection.parentNode.removeChild(lastSection);

// section[2].style.display = "none";