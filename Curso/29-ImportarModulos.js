// Importar de módulos

import { agregar, PI, nombre, Circulo } from "./28-ExportarModulos.js"

import importacionPorDefecto from "./28-ExportarModulos.js"

// Funciones

console.log(agregar(5, 10))

// Propiedades

console.log(PI)
console.log(nombre)

// Clases

let circulo = new Circulo(10)
console.log(circulo.radio)
console.log(circulo.area().toFixed(2))
console.log(circulo.perimetro().toFixed(2))

// Importación por defecto

console.log(importacionPorDefecto(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"