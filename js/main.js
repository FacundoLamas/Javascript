// vec_palabras=[];
// a=prompt("INGRESA PALABRA, FIN para salir").toLowerCase();
// while(a != "fin"){
//     vec_palabras.push(a);
//     a=prompt("INGRESA PALABRA, FIN para salir").toLowerCase();
// }
// for(let i=0; i < vec_palabras.length; i++){
//     console.log(vec_palabras[i]);
// }

// arraydeobjetos=[]
// num=parseInt(prompt("Ingrese un numero"));
// while(isNaN(num)){
//         num=parseInt(prompt("Ingrese un numero"));
//     }
// while(num != 0){
    
//     texto=(prompt("Ingrese una palabra"));
//     const objetovich = {
//         numero: num , palabra:texto
//     };
//     arraydeobjetos.push(objetovich);
//     num=parseInt(prompt("Ingrese un numero"));
//     while(isNaN(num)){
//         num=parseInt(prompt("Ingrese un numero"));
//     }
// }
// for(let i of arraydeobjetos){
//     console.log(i.numero,i.palabra);
// }



// class persona{
//     constructor(nom,edad,auto){
//         this.nombre = nom;
//         this.edad = edad;
//         this.auto = auto;
//     }
//     lector(){
//         return `Nombre: ${this.nombre}, Edad: ${this.edad}, Auto: ${this.auto}`
//     }
// }

// function crear(){
//     nombre=prompt("Ingrese el nombre del cliente, Fin para terminar").toLowerCase();
//     while(nombre != "fin"){
//         edad= parseInt(prompt("Ingrese su edad"));
//         while(edad < 1 || edad > 100){
//             edad= parseInt(prompt("ERROR: Ingrese una edad valida"));
//         }
//         auto=prompt("Ingrese su marca de auto");
//         cliente1 = new persona(nombre,edad,auto);
//         console.log(cliente1.lector());
//         nombre=prompt("Ingrese el nombre del cliente, Fin para terminar").toLowerCase();
// }
// }

// crear()
localStorage.clear();
class producto{
    constructor(id,nombre,precio,cantidad,subtotal){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
    lector(){
        return `Id: ${this.id}, Nombre: ${this.nombre}, precio: ${this.precio}, cantidad: ${this.cantidad}, subtotal: ${this.subtotal}`
    }
}
function cargar(arreglo){
    let ids=[]
    let id,nombre,precio,cantidad,subtotal,cancelar;
    id=parseInt(cancelar = prompt("Ingrese el id del producto"));
    while((isNaN(id) && cancelar !=null) || id in arreglo){
        id=parseInt(prompt("ERROR-Ingrese el id del producto"));
    }
    ids.push(id);
    while(id != 0 && cancelar != null){
        nombre=(prompt("Ingrese el nombre de su producto"));
        precio=parseInt(prompt("Ingrese el precio del producto"));
        while(isNaN(precio)){
            precio=parseInt(prompt("ERROR-Ingrese el precio del producto"));        
        }
        cantidad=parseInt(prompt("Ingrese la cantidad del producto"));
        while(isNaN(cantidad)){
            cantidad=parseInt(prompt("ERROR-Ingrese la cantidad del producto"));        
        }
        subtotal= cantidad * precio;
        productolistado= new producto(id,nombre,precio,cantidad,subtotal);
        arreglo.push(productolistado);
        let listado = document.getElementById("productos");
        let nuevoproducto = document.createElement("ol");
        nuevoproducto.innerHTML=`
                    <p id="iden">ID:${id} <img class="basura" src="./assets/img/eliminar.jpg" alt=""></p>
                    <p id="nombre">Nombre:${nombre}</p>
                    <p id="cantidad">Cantidad:${cantidad}</p>
                    <p id="precio">Precio:${precio}$</p>
                    <p id="subtotal:">Subtotal:${subtotal}$</p>
                    `
        nuevoproducto.setAttribute("class","producto")
        nuevoproducto.setAttribute("id",id);
        listado.appendChild(nuevoproducto);
        localStorage.setItem(`Producto ${id}`,JSON.stringify(productolistado));
        id=parseInt(cancelar = prompt("Ingrese el id del producto"));
        while((isNaN(id) && cancelar !=null) || (ids.includes(id) && id !=0)){
            id=parseInt(prompt("ERROR-Ingrese el id del producto"));
        }
        ids.push(id);
    }
}
lista=[];
cargar(lista);
let total=0;
for (let i=0;i < lista.length ; i++){
    console.log(lista[i].lector());
    total = total + lista[i].subtotal;
}
console.log("El total de la compra seria de ",total);
let buscado = prompt("Ingrese el nombre del producto buscado")
if(buscado != null){
    const busqueda = lista.find(pinga => pinga.nombre == buscado);
    console.log(busqueda);  
    if(busqueda){
        alert(`Se encontro el elemento buscado en el id ${busqueda.id}`);
    }
}
let productos = document.querySelectorAll(".producto");
let borrados = document.querySelectorAll(".basura");
borrados.forEach(function(objeto2){
    productos.forEach(function(objeto){
        objeto2.addEventListener("click",function(){
            objeto.remove();
            localStorage.removeItem(`Producto ${objeto.id}`);
            lista=lista.filter(function(elemento){
                if(elemento.id == objeto.id){
                    return false;
                }
            });
        })
    });
});

// const filtrado = lista.filter(function(objeto){
//     return objeto.nombre.includes("a");
// })
// console.log(filtrado);



// lista.map(curso => curso.subtotal = curso.subtotal * 1.21);
// for (let i=0;i < lista.length ; i++){
//     console.log(lista[i].lector());
// }


// const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'banana'];


// const conteoFrutas = frutas.reduce(function(conteo, fruta) {
//     conteo[fruta] = (conteo[fruta] || 0) + 1;
//     return conteo;
// }, {});

// console.log(conteoFrutas);
// conteoFrutas["pera"]=2;
// console.log(conteoFrutas);

// let h1 = document.getElementById("a");
// console.log(h1);
// h1.innerText = 'Titulazo';
// let body = document.getElementById("body");
// console.log(body.innerText);
// console.log(body.textContent);
// console.log(body.innerHTML);
// body.innerHTML = "<h2>Pipo</h2><p>hola</p>"
// console.log(body.innerText);
// console.log(body.textContent);
// console.log(body.innerHTML);

