
//wsp centralizado en valor para no repetirlo en varios lugares del código

// Número de WhatsApp en formato internacional, sin signos
const NUMERO = '56938621425'

// enlace con el mensaje ya codificado para la URL
export function enlaceWhatsApp(mensaje) {

return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensaje)}`

}