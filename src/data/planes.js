// Planes de páginas web. Si cambias un precio o un texto, lo editas solo aquí.
export const planes = [
  {
    id: 'basica',
    nombre: 'Página básica',
    precio: '$20.000',
    etiqueta: '',
    destacado: false,
    caracteristicas: [
      'Presentación de tu negocio',
      'Productos y servicios',
      'Código QR listo para imprimir',
      'Publicada gratis, sin costo mensual',
      'Entrega en 3 días',
    ],
    textoBoton: 'Elegir la básica',
    mensaje: 'Hola, quiero la página básica de $20.000.',
  },
  {
    id: 'completa',
    nombre: 'Página completa',
    precio: '$30.000',
    etiqueta: 'La más pedida',
    destacado: true,
    caracteristicas: [
      'Todo lo de la página básica',
      'Botón de WhatsApp directo',
      'Links a tus redes sociales',
      'Pensada para recibir pedidos',
    ],
    textoBoton: 'Elegir la completa',
    mensaje: 'Hola, quiero la página completa de $30.000.',
  },
]