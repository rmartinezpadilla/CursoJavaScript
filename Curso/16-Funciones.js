// Funciones

function miFuncion() {
    console.log("Test función")
}

for (let index = 0; index < 3; index++) {
    miFuncion()
    
}

// Con parámetros
function miFuncionParams(name) {
    console.log("Hola, ", name)
}

for (let index = 0; index < 3; index++) {
    miFuncionParams("Juan")
    
}

// Funciones anónimas

const miFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

miFunc2("Test Rubén")

// Funciones anónimas

const miFunc3 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

miFunc3("Test QA Rubén")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern() // solo la puedo llamar dentro de la función que la contiene, la función padre que en este caso es extern()
}

extern()
// intern() Error: fuera del scope ( fuera de las llaves)

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(miFunc2, "función de orden superior") // llamamos a la función padre y le pasamos como parametro una funcion anteriormente creada con su parametro

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Test", "QA", 35, true, "test@qa.com"])

myMap = new Map([
    ["name", "Test"],
    ["email", "test@qa.com"],
    ["age", 35]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

// video 3:57 -> para continuar