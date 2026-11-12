/* DiegoTech - script.js */

const botonMenu = document.getElementById("botonMenuMovil");
const menu = document.getElementById("menuNavegacion");
const escritorio = window.matchMedia("(min-width: 769px)");

function estaAbierto() {
  return menu.classList.contains("activo");
}

function abrirMenu() {
  menu.classList.add("activo");
  botonMenu.setAttribute("aria-expanded", "true");
  botonMenu.setAttribute("aria-label", "Cerrar menú");
  const primerEnlace = menu.querySelector("a");
  if (primerEnlace) primerEnlace.focus();
}

function cerrarMenu(devolverFoco) {
  if (!estaAbierto()) return;
  menu.classList.remove("activo");
  botonMenu.setAttribute("aria-expanded", "false");
  botonMenu.setAttribute("aria-label", "Abrir menú");
  if (devolverFoco) botonMenu.focus();
}

if (botonMenu && menu) {
  botonMenu.addEventListener("click", () => {
    if (estaAbierto()) {
      cerrarMenu(true);
    } else {
      abrirMenu();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarMenu(true);
  });

  document.addEventListener("click", (evento) => {
    if (!estaAbierto()) return;
    if (menu.contains(evento.target) || botonMenu.contains(evento.target)) return;
    cerrarMenu(false);
  });

  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => cerrarMenu(false));
  });

  escritorio.addEventListener("change", (evento) => {
    if (evento.matches) cerrarMenu(false);
  });
}

const anio = document.getElementById("anioActual");
if (anio) {
  anio.textContent = new Date().getFullYear();
}
