// ciclos, loops, bucle

// for
for (let index = 0; index < 10; index++) {
    console.log("hola, ciclo: ", index+1)
    
}

let fruits = ["Apple", "Orange", "Plum"];

for (let index = 0; index < fruits.length; index++) {
    console.log(`fruta: ${fruits[index]}`)
    
}

// While
let valor = 2

while (valor < 10) {
    console.log(`El valor es menor que 10: ${valor}`)
    valor++
}

// do while

let valor2 = 10

do {
    console.log("Ejecutando una vez")
    valor2++
} while (valor2 < 10);


// for of -> recorrer valores de un objeto que sea iterable
let data3 = ["Hola", "juan", "Rubén", "Test", "Qa", 22]

let miSet = new Set(["Test", "QA", 3])

let miMapData = new Map([
    ["Nombre" , "Test"],
    ["Direccion", "Home"],
    ["telefono", 312155]
])

for(let valorArray of data3){
    console.log(valorArray)
}

for(let valorArray of miSet){
    console.log(valorArray)
}

for(let valorArray of miMapData){
    console.log(valorArray)
}

// Break y continua
for (let index = 0; index < 10; index++) {
    if( index == 2){
        continue // al cumplirse la condición "salta" la línea y continua ejecutando el ciclo
    }else if(index == 5){
        break // al cumplirse la condición termina de ejecutar el for
    }
    console.log("hola, ciclo: ", index)
    
}