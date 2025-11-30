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
    while(id != 0 && (isNaN(id) && cancelar !=null) || (ids.includes(id)) ){
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
agregar=document.getElementById("BotonAgregar");

lista=[];
agregar.addEventListener("click",function(){
    cargar(lista);
})
let total=0;
for (let i=0;i < lista.length ; i++){
    console.log(lista[i].lector());
    total = total + lista[i].subtotal;
}
console.log("El total de la compra seria de ",total);

let productos = document.querySelectorAll(".producto");
let borrados = document.querySelectorAll(".basura");
borrados.forEach(function(objeto2,i){
    objeto2.addEventListener("click",function(){
        let objeto = productos[i];
        if(objeto){
            objeto.remove();
            localStorage.removeItem(`Producto ${objeto.id}`);
            lista=lista.filter(function(elemento){
            if(elemento.id == objeto.id){
                return false;
            }
            else{
                return true
            }
            });
        }
        
    })
});


// let buscado = prompt("Ingrese el nombre del producto buscado")
// if(buscado != null){
//     const busqueda = lista.find(pinga => pinga.nombre == buscado);
//     console.log(busqueda);  
//     if(busqueda){
//         alert(`Se encontro el elemento buscado en el id ${busqueda.id}`);
//     }
// }