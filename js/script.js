/* ============================================================
   DiegoTech — script.js (JavaScript principal)
   ---------------------------------------------------------
   Contiene:
   1. Menú móvil (abrir / cerrar)
   2. Encabezado que se oculta al bajar y aparece al subir

   Este archivo se carga desde home.html con:
   <script src="js/script.js" defer></script>
   ============================================================ */

// --- 1. Menú móvil (abrir / cerrar) ---
var botonMenu = document.getElementById('botonMenuMovil');
var menuNavegacion = document.getElementById('menuNavegacion');
botonMenu.addEventListener('click', function () {
  var abierto = menuNavegacion.classList.toggle('activo');
  botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  botonMenu.textContent = abierto ? '✕' : '☰';
});
menuNavegacion.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menuNavegacion.classList.remove('activo');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.textContent = '☰';
  }
});

// --- 2. Encabezado: ocultar al bajar, mostrar al subir ---
var encabezado = document.querySelector('.encabezado-barra');
var posicionAnterior = 0;
var UMBRAL = 80; // píxeles mínimos para empezar a ocultar (evita parpadeo en la parte superior)
window.addEventListener('scroll', function () {
  var posicion = window.scrollY;
  if (posicion > UMBRAL && posicion > posicionAnterior) {
    encabezado.classList.add('oculta');   // bajando: ocultar
  } else {
    encabezado.classList.remove('oculta'); // subiendo o cerca del top: mostrar
  }
  // Si el menú móvil está abierto, no ocultar la barra
  if (menuNavegacion.classList.contains('activo')) {
    encabezado.classList.remove('oculta');
  }
  posicionAnterior = posicion;
}, { passive: true });
