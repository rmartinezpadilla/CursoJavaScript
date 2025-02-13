// Clases

// class Persona{
//     constructor(nombre, edad, email){
//         this.nombre = nombre
//         this.edad = edad
//         this.email = email
//     }
// }


class Persona{
    constructor(nombre = "Sin nombre", edad = 0, email = "Sin email"){ // en este caso se le dan valores por defecto dentro del constructor
        this.nombre = nombre
        this.edad = edad
        this.email = email
    }
}


// Instanciar una clase, crear un objeto

let juan = new Persona("test", 39, "test@qa.com")
let andres = new Persona("Andrés")

console.log(andres.nombre)


// crear metodos a una clase

class Persona2{
    constructor(nombre = "Sin nombre", edad = 0, email = "Sin email"){ // en este caso se le dan valores por defecto dentro del constructor
        this.nombre = nombre
        this.edad = edad
        this.email = email
    }
    caminar(){
        console.log("La persona camina")
    }
}


let david = new Persona2()
david.caminar()


// Propiedades privadas

class PersonaPrivada{

    #nequi // declaramos el atributo con numeral y solo la clase puede acceder a ella y dentro del constructor tambien se le antepne numeral

    constructor(nombre, edad, email, nequi){
        this.nombre = nombre
        this.edad = edad
        this.email = email
        this.#nequi = nequi // declarar atributo privado
    }
}

let ana = new PersonaPrivada("Ana", 23, "ana@axy.com", 23313232)

console.log(ana)

// getters y setters


class Datos{

    #nombre
    #edad
    #email
    #nequi

    constructor(nombre, edad, email, nequi){
        this.#nombre = nombre
        this.#edad = edad
        this.#email = email
        this.#nequi = nequi
    }

    get nombre(){
        return this.#nombre
    }

    set nequi(numero){
        this.#nequi =  numero
    }

    get nequi(){
        return this.#nequi
    }

}

let mila = new Datos("mila", 23, "asd@test.com", 1688615)

console.log(mila.nequi)

console.log(mila.nombre)

mila.nequi = 3103868309

console.log(mila.nequi)

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let miPerro = new Dog("test Perro")
miPerro.run()
miPerro.sound()

let miPez = new Fish("test pez", 10)
miPez.swim()
miPez.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) { // declaramos la funcion estatica usando la palabra reservada static para poder usar el metodo sin necesida de instanciar la clase
        return a + b
    }
}

console.log(MathOperations.sum(5, 10)) // puedo acceder al metodo de la clase sin instancar la clase, esto con el uso de la palabra reservada static