/* DiegoTech - script.js */

/* Menu movil */
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
