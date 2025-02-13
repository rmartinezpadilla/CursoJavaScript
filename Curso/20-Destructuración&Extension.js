// recordando un poco
let miArreglo = [1, 2, 3, 4]

let persona = {
    name: "Analista Test",
    age: 37,
    alias: "QA"
}

let valor = miArreglo[1]
console.log(valor)


// Desestructuración

// Sintaxis arreglos

let [miValor0, miValor1, miValor2, miValor3, miValor4] = miArreglo
console.log(miValor0)
console.log(miValor1)
console.log(miValor2)
console.log(miValor3)
console.log(miValor4)

// Sintaxis de arreglos con valores predeterminados

let [miValor5 = 0, miValor6 = 0, miValor7 = 0, miValor8 = 0, miValor9 = 0] = miArreglo
console.log(miValor5)
console.log(miValor6)
console.log(miValor7)
console.log(miValor8)
console.log(miValor9)

// Ignorar elementos del arreglo

let [miValor10, , , miValor13] = miArreglo
console.log(miValor10)
console.log(miValor13)


// Propagación (...)

// Sintaxis arreglos

let miArreglo2 = [...miArreglo, 5, 6]

console.log(miArreglo2)

// Copia de arreglos

let miArreglo3 = [...miArreglo]

console.log(miArreglo3)

// Combinación de arreglos

let miArreglo4 = [...miArreglo, ...miArreglo2, ...miArreglo3]

console.log(miArreglo4)

// Sintaxis objects

let persona4 = { ...persona, email: "testqa@t-evolvers.com" }

console.log(persona4)

// Copia de objetos

let persona5 = { ...persona }

console.log(persona5)