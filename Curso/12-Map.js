// Map

// Declaración
let miMap = new Map()
console.log(miMap)

// Inicialización
miMapData = new Map([
    ["Nombre" , "Test"],
    ["Direccion", "Home"],
    ["telefono", 312155]
])

console.log(miMapData)

// Métodos y propiedades

// set

miMapData.set("tipo de sangre", "B+") // si la clave no existe la agrega junto con su valor al Map 
miMapData.set("Nombre", "Rubén") // Si la clave ya existe lo que hace es actualizar el valor
console.log(miMapData)

// get
console.log(miMapData.get("tipo de sangre")) // al metodo get se le envía el nombre de la clave para obtener su valor

// has
console.log(miMapData.has("claveNo")) 
/*  al metodo has se le envía el nombre de la clave para obtener su valor, 
    en este caso se envia una clave errada para saber si existe o no, nos retorna un boolean 
*/

// keys y values

// keys -> nos devuelve la lista de las claves del map
console.log(miMapData.keys())

// values -> nos devuelve los valores de todas las claves
console.log(miMapData.values())

// entries -> nos devuelve todo el contenido del map, clave y valor
console.log(miMapData.entries())

// delete
miMapData.delete("telefono")
console.log(miMapData)

// crear -> Borrar todo el mapa

miMapData.clear()
console.log(miMapData)