// Strings

let miNombre = "Rubén"
let saludo = "Hola " + miNombre + " !"

console.log(saludo)

// Longitud

console.log(saludo.length)

// Acceso a una posicion del string
console.log(saludo[0])

// métodos comunes con Strings
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("Rub"))
console.log(saludo.includes("Hola"))
console.log(saludo.includes("Martinez"))
console.log(saludo.slice(0, 6))
console.log(saludo.replace("Rubén", "Martínez"))

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "ruben.martinez@t-evolvers.com"
console.log(`Hola, ${miNombre}! Tu email es ${email}.`)