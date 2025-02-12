// if, else if, else

// Variable global
let edad = 40

// if (si)

if ( edad >= 30) {
    // Bloque donde se cumple la condición
    console.log("eres un adulto")
}

// else (si no)
if ( edad >= 30) {
    // Bloque donde se cumple la condición
    console.log("eres un adulto")
} else {
    console.log("eres un joven")
}

// else if (si no, si)
if ( edad >= 30) {
    // Bloque donde se cumple la condición
    console.log("eres un adulto")
} else if(edad <= 15){
    console.log("eres un niño")
}

// operador ternario
const mensaje = edad >= 30 ? "es un adulto" : "es un joven"
console.log(mensaje)

// Switch

let dia = 1
let nombreDia

switch (dia) {
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Número de día incorrecto"
}

console.log(nombreDia)