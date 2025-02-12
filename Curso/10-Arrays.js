// Arrays

// Declaracion
let miArreglo = [ ] // Recomendada

let misDatos = new Array ()

//Inicialización

miArreglo = [1,2]

console.log(miArreglo)

// Métodos comunes

let data = [ ]

// push y pop

data.push("Test") // agrega un elemento desde la primera posicion del array
data.push("QA")
data.push("Rubén")
data.push(35)

console.log(data)

console.log(data.pop()) // elimina el último elemento del array y lo devuelve

//shift  y unshift

let data2 = [ ]
data2.shift() // elimina desde la primera posicion del array
data2.push("QA")
data2.push("Rubén")
data2.push(35)

console.log(data2.shift())
console.log(data2)


console.log(data2.unshift())
console.log(data2)

// length (tamaño del array)

console.log(data2.length)

// clear (limpiar el array)

// data2 = [ ] // primera opción
data2.length = 0 // alternativa
console.log(data2)
console.log(data2.length)

// slice (deveulve una copia del arrgo desde donde se desee

data2.push("Juan")
data2.push("QA")
data2.push("Rubén")
data2.push(35)
let newData2 = data2.slice(1, 2) // tomar elemenos en especifico
console.log(newData2)

let data3 = ["Hola", "juan", "Rubén", "Test", "Qa", 22]
let newData3 =  data3.splice(0, 5, "Nuevo elemento en la posicion elegida") // de esta manera podemos agregar un elemento en la posición que elijamos
console.log(newData3)