// Objetos

// Sintaxis

let persona = {
    nombre: "Test",
    apellidos: "QA Core",
    edad: 35,
    email: "ruben.martinezpadilla@t-evolvers.com"
}

// acceso a las propiedades o atributos de un objeto
console.log(persona.nombre) // opcion recomendada

// Notacion de corchetes
console.log(persona["nombre"])

// Modificación

persona.nombre = "Nuevo Test"
console.log(persona.nombre) // opcion recomendada

// Elimincion de propiedades
delete persona.edad
console.log(persona)

// Agregar nueva propiedad
persona["edad"] = 35
console.log(persona)

// Métodos (funciones)

var vehiculo = {
    marca: "Ford",
    modelo: "Mustang",
    año: 1969,
    conducir:  function(){
        console.log("el vehiculo se está conduciendo")
    }
};

vehiculo.conducir()

let persona2 = {
    nombre: "Test",
    apellidos: "QA Core",
    edad: 35,
    email: "ruben.martinezpadilla@t-evolvers.com",
    caminar:  function(){
        console.log("la persona 2 está caminando")
    },
    trabajo: { // objeto dentro de otro
        empresa: "t-evolvers",
        experiencia: 3,
        puesto: "Analista de calidad QA"
    }
}

persona2.caminar()
console.log(persona2)
console.log(persona2.trabajo.empresa)

// Iteracion
for(let valor in persona){ // accedemos al valor que contiene cada una de las claves
    console.log(valor)
}

for(let key in persona){ // accedemos a la clave la cual nos muestra el valor que contiene cada una
    console.log(key + ": " + persona[key])
}

// acceder a una propiedad dentro del mismo objeto usamos la palabra reservada this.
let persona3 = {
    nombre: "Test",
    apellidos: "QA Core",
    edad: 35,
    email: "ruben.martinezpadilla@t-evolvers.com",
    caminar:  function ( ) {
        console.log(`la persona está caminando`) // aqui usamos this para acceder a las propiedades del objeto dentro de él mismo  
    },
    trabajo: { // objeto dentro de otro
        empresa: "t-evolvers",
        experiencia: 3,
        puesto: "Analista de calidad QA",
        detalles: function ( ) {
            console.log(`la persona tiene ${this.experiencia} años de experiencia`) // aqui usamos this para acceder a las propiedades del objeto dentro de él mismo  
        }
    }
}
console.log(persona3)
console.log("-----------------------------")
console.log(persona3.trabajo.detalles())
console.log("-----------------------------")
console.log(persona3.email)
console.log("-----------------------------")


// Funciones como objetos

function Person(nombre, edad) { // esta parte debería convertirse en una clase
    this.nombre,
    this.edad
}

let persona4 = new Person("Juan", 29)

console.log(typeof(persona4))
