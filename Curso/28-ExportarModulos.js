// Exportación de módulos

// Funciones

export function agregar(a, b) {
    return a + b
}

console.log(agregar(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "TestQa"

// Clases

export class Circulo {

    constructor(radio) {
        this.radio = radio
    }

    area() {
        return Math.PI * Math.pow(this.radio, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radio
    }

}

// Exportación por defecto

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }