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