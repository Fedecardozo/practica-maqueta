// const $btnList = document.getElementById("btnList");
// const navbar = document.querySelectorAll(".navbar");
// const $navSuperior = document.getElementById("navSuperior");
// const $navInferior = document.getElementById("navInferior");
// let oculto = true;

// function OcultarNav() {
//   navbar.forEach((e) => {
//     e.classList.add("ocultar");
//     oculto = true;
//   });
// }

// function MostrarNav() {
//   navbar.forEach((e) => {
//     e.classList.remove("ocultar");
//     oculto = false;
//   });
// }

// function verificarTamañoPantalla() {
//   if (window.innerWidth < 992) {
//     $btnList.hidden = false;
//     OcultarNav();
//     $navInferior.appendChild($navSuperior);
//   } else {
//     $btnList.hidden = true;
//     MostrarNav();
//   }
// }

// verificarTamañoPantalla();

// window.addEventListener("resize", verificarTamañoPantalla);

// $btnList.addEventListener("click", () => {
//   const classNav = $navSuperior.classList;
//   oculto ? MostrarNav() : OcultarNav();
//   classNav.replace("d-flex", "d-none") || classNav.replace("d-none", "d-flex");
// });

const $btnAbrir = document.getElementById("btnAbrir");
const $btnCerrar = document.getElementById("btnCerrar");
const $listSuperior = document.getElementById("listSuperior");
const $listInferior = document.getElementById("listInferior");
const $newNav = document.getElementById("newNav");
const $navSuperior = document.getElementById("navSuperior");
const $navInferior = document.getElementById("navInferior");
const $hr = document.getElementById("hr");

$btnAbrir.addEventListener("click", () => {
  $btnAbrir.hidden = true;
  $btnCerrar.hidden = false;
  $newNav.classList.remove("ocultar");
  $hr.hidden = true;
});

$btnCerrar.addEventListener("click", () => {
  $btnAbrir.hidden = false;
  $btnCerrar.hidden = true;
  $newNav.classList.add("ocultar");
  $hr.hidden = false;
});

function verificarTamañoPantalla() {
  if (window.innerWidth <= 992) {
    $newNav.appendChild($listInferior);
    $newNav.appendChild($listSuperior);
  } else {
    $navInferior.appendChild($listInferior);
    $navSuperior.appendChild($listSuperior);
  }
}

verificarTamañoPantalla();

window.addEventListener("resize", verificarTamañoPantalla);
