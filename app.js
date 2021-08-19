let profileList = document.getElementById('profile-list');
let profileLi = document.getElementById('profileLi');
let togglePreferencesLi = document.getElementById('togglePreferencesLi');
let toggle = document.getElementById('togglePreferences');
let inspirationNav = document.getElementById('inspirationNav');
let inspirationList = document.getElementById('inspirationList');
let findWorkList = document.getElementById('findWorkList');
let findWorkLi = document.getElementById('findWorkLi');

inspirationNav.addEventListener('mouseover', (e) => {
    inspirationList.style.display = 'flex';
})
inspirationNav.addEventListener('mouseout', (e) => {
    inspirationList.style.display = 'none';
})
inspirationList.addEventListener('mouseover', (e) => {
    inspirationList.style.display = 'flex';
})
inspirationList.addEventListener('mouseout', (e) => {
    inspirationList.style.display = 'none';
})
// inspirationNav.addEventListener('mouseout', () => {
//     if (inspirationList.classList.addEventListener('mouseout', (e) => {
//         inspirationList.style.display = 'none';
//     })) else {
//         inspirationList.style.display = 'flex';
//     }
//  })

findWorkLi.addEventListener('mouseover', (e) => {
    findWorkList.style.display = 'flex';
})
findWorkList.addEventListener('mouseover', (e) => {
    findWorkList.style.display = 'flex';
})

findWorkLi.addEventListener('mouseout', () => {
    findWorkList.style.display = 'none';
})

togglePreferencesLi.addEventListener('mouseover', (e) => {
    toggle.style.display = 'flex';
})

togglePreferencesLi.addEventListener('mouseout', () => {
    toggle.style.display = 'none';
})

profileLi.addEventListener('mouseover', (e) => {
    profileList.style.display = 'block';
})

profileLi.addEventListener('mouseout', () => {
    profileList.style.display = 'none';
})



// const lists =  Array.from(document.querySelectorAll('.classLi'));


// const showHijos = e => {
//     const list = e.target; 
//     const listProximo = list.nextElementSibling;

//     list ? listProximo.style.diplay = 'flex' : 'none'; 

// }

// lists.forEach( list => { 
//     list.addEventListener('mouseover', showHijos);
//   });


// let hijos = [profileList, toggle,inspirationList];

// const mostrarHijos = e => {
//     let hijos = e.target;
//     hijos.forEach( hijo => {
//     if (hijos[e.target].style.display === "none") {
//         hijos[e.target].style.display = "block";
//     } else {
//         hijos[e.target].style.display = "none";
//     }

// hijos.forEach( hijo => { //step es el circulo individual, como son los cuatro iguales le aplicamos el mismo evento de click y la misma funcion para no escribirlo 4 veces
//     hijo.addEventListener('mouseover', mostrarHijos);
//   });


// function mostrarListaPerfil () {
//     if (profileList.style.display === "none") {
//         profileList.style.display = "block";
//         profileList.style.transition = "1.2s"; // Este no funciona
//     } else {
//         profileList.style.display = "none";
//     }
//     }
//     // setTimeout(function() {
//     //     profileList.style.display = "none";
//     //   }, 500);
//     // }, false;


//   // reset the color after a short delay
  

// function mostrarWorkPreferences () {
//     if (toggle.style.display === "none") {
//         toggle.style.display = "block";
//     } else {
//         toggle.style.display = "none";
//     }
// }

// function showInspirationNav () {
//     if (inspirationList.style.display === "none") {
//         inspirationList.style.display = "flex";
//     } else {
//         inspirationList.style.display = "none";
//     }
// }


// function showFindWorkList () {
//     if (findWorkList.style.display === "none") {
//         findWorkList.style.display = "block";
//     } else {
//         findWorkList.style.display = "none";
//     }
// }

