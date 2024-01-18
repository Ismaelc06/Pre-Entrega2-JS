
let user = prompt("Ingrese su nombre por favor")

alert( user +" Bienvenido a 'MULTIELECTRON' ")

let productos = [
    {id: 11, nombre: "Camara Dahua 2mp", cat:"camaras", precio:1300, stock: 7},    
    {id: 12, nombre: "Camara Hikvision 1mp", cat:"camaras", precio:2000, stock: 5},
    {id: 13, nombre: "Camara PTZ", cat:"camaras", precio:1600, stock: 15},
    {id: 14, nombre: "Grabador de 8CH", cat:"grabadores", precio:900, stock: 9},
    {id: 15, nombre: "Grabador de 16CH", cat:"grabadores", precio:1100, stock: 3},
    {id: 16, nombre: "Grabador de 32CH", cat:"grabadores", precio:700, stock: 8},
    {id: 17, nombre: "Disco duro 1TB", cat:"almacenamiento", precio:800, stock: 10},
    {id: 18, nombre: "Disco duro 2TB", cat:"almacenamiento", precio:600, stock: 12}
]

 alert("Elije la opcion de lo que quieras realizar")
 let Ind = 0
 let carrito = [];
do {
    Ind = Number(prompt(" 1. Ver lista de productos \n 2. Ver Stock disponible de un producto \n 3. Filtrar \n 4. Comprar un producto \n 5. Ver carrito \n 0. FINALIZAR"))
    if (Ind == 1) {
        console.log("Lista de productos:");
        for (let i = 0; i < productos.length; i++) {
          console.log(`ID: ${productos[i].id}, Nombre: ${productos[i].nombre}, Precio: ${productos[i].precio}, Stock: ${productos[i].stock}`);
        }
      } else if ( Ind ==2){
        let id = Number(prompt("Ingrese el ID del producto:"))
        let producto = productos.find(p => p.id === id)
        if (producto) {
            console.log(`Stock disponible de ${producto.nombre}: ${producto.stock}`)
        } else {
            console.log("Producto no encontrado")
        }
    } else if (Ind == 3) {
        let categoria = prompt("Ingrese la categoría que desea filtrar:")
        let productosFiltrados = productos.filter(p => p.cat === categoria)
        if (productosFiltrados.length > 0) {
            console.log("Resultados de la búsqueda:")
            for (let i = 0; i < productosFiltrados.length; i++) {
                console.log(`${productosFiltrados[i].nombre} - Precio: ${productosFiltrados[i].precio} - Stock: ${productosFiltrados[i].stock}`)
            }
        } else {
            console.log("No se encontraron productos en la categoría especificada")
        }
    } else if (Ind === 4) {
        let id = Number(prompt("Ingrese el ID del producto que desea comprar:"));
        let producto = productos.find(p => p.id === id);
        if (producto) {
          if (producto.stock > 0) {
            console.log(`Se ha comprado ${producto.nombre} con un precio de ${producto.precio}. ¡Disfruta de tu nuevo producto!`);
            producto.stock--;
            carrito.push(producto);
          } else {
            console.log("Lo sentimos, el producto está agotado. Por favor, intente más tarde.");
          }
        } else {
          console.log("Producto no encontrado.");
        }
      } else if (Ind === 5) {
        console.log("Carrito de compras:");
        for (let i = 0; i < carrito.length; i++) {
          console.log(`Nombre: ${carrito[i].nombre}, Precio: ${carrito[i].precio}`);
        }
      }
    } while (Ind !== 0);
    
    let costoTotal = 0;
    for (let i = 0; i < carrito.length; i++) {
      costoTotal += carrito[i].precio;
    }
    console.log(`El costo total de la compra es: $${costoTotal}`);
