// Set

/* 
    IMPORTANTE:
    la caracteristica principal de los set es que no permite duplicados (objetos exactamente iguales) dentro de la lista
*/

// Declaración
let miSet = new Set()
console.log(miSet)

// inicialización

miSet = new Set(["Test", "QA", 3])

console.log(miSet)

// Métodos comunes

// agregar y eliminar (add and delete)

miSet.add("rmartinezpadilla@hotmail.com") // agregar un elemento al final del objeto
console.log(miSet)

console.log(miSet.delete("QA")) // eliminar un elemnto del objeto, se le debe indicar el contenido (el valor) queremos eliminar y retorna el boleano de la operación
console.log(miSet)

// has
console.log(miSet.has("Test"))
console.log(miSet.has("TestS"))

// size
console.log(miSet.size)

// la caracteristica principal de los set es que no permite duplicados dentro de la lista