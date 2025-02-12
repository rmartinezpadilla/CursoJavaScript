// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(5 + 10) // suma
console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // Divisón

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) // Incremento

b-- // Decremento
console.log(b) // Decremento

// Operadores de asignación

let miVariable = 2
console.log(miVariable)

miVariable += 2
console.log(miVariable)

miVariable -= 2
console.log(miVariable)

miVariable *= 2
console.log(miVariable)

miVariable /= 2
console.log(miVariable)

miVariable %= 2
console.log(miVariable)

miVariable **= 2
console.log(miVariable)


// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo de dato y valor)
console.log(a != b) // Desigualdad

// Operadores lógicos

// and (&&)
console.log(a > b && b < a)

// or (||)
console.log(a > b || b > a)

// not
console.log(!true)

// Operadores ternarios
const miVariable2 = true
miVariable2 ? console.log("Esto se muestra si se cumple la condición") : console.log("Esto se muestra si se cumple la condición")