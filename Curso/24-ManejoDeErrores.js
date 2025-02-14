// Manejo de errores - excepciones


let objeto

// captura de errores

// try catch

try {
    // código que intenta ejecutar
    console.log(objeto.xyz)
    console.log("Si esto sale es por que no hubo error en la línea anterior")
} catch (error) {
    // que hacer cuando se genera un error
    console.log("Algo ha pasado", error.message)
}

// finaly

try {
    // código que intenta ejecutar
    console.log(objeto.xyz)
    console.log("Si esto sale es por que no hubo error en la línea anterior")
} catch (error) {
    console.log("Algo ha pasado", error.message)
}finally { // esta parte del código se va a ejecutar siempre, independientemente si hubo error o no en el try catch
    console.log("esta parte siempre se va a mostrar/ejecutar")
}

// throw - generar un error

//throw new Error("Se ha producido un error"); // puedo personalizar y enviar un error

function sumaEnteros(x, y){
    
    // if (typeof x == "number") {
    //     console.log("X es un número")
    // }

    // if (Number.isInteger(x)) {
    //     console.log("X es un entero")
    // }
    if (typeof x !== "number" || typeof y !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }

    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        console.log("No se pueden sumar estos datos, uno de ellos o ambos no se pueden procesar.")
    }
    if (x == 0 || y == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", x, y)
    }

    return x + y
    }
    
    try {
        console.log(sumaEnteros("10", 5))
    } catch (error) {
        console.log("Se ha producido un error", error.message)
    }


    // Capturar varios tipos de errores

    try {
        // console.log(sumIntegers(5.5, 10))
        console.log(sumaEnteros("5", 10))
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Se ha producido un error de tipo:", error.message)
        } else if (error instanceof Error) {
            console.log("Se ha producido un error:", error.message)
        }
    }

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
    }

    try {
        console.log(sumaEnteros(0, 10))
    } catch (error) {
        console.log("Se ha producido un error personalizado:", error.message)
        error.printNumbers()
    }