
let ids=[];
let lista=[];
class producto{
    constructor(id,nombre,precio,cantidad,subtotal){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        //this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
    lector(){
        return `Id: ${this.id}, Nombre: ${this.nombre}, precio: ${this.precio}`
    }
}
const listafija=[
    {id:1, nombre:"Manzana",precio:300},
    { id: 2, nombre: "Pera", precio: 500 },
    { id: 3, nombre: "Mandarina", precio: 450 },
    { id: 4, nombre: "Naranja", precio: 300 },
    { id: 5, nombre: "Cereza", precio: 500 },
    { id: 6, nombre: "Caqui", precio: 450 }
]
async function leer(arreglo,ids){
    let listado = document.getElementById("productos");
    let guardado = 0;
    let total=0;
    await espera();
    for(let i=0; i<localStorage.length;i++){
        let Producto = JSON.parse(localStorage.getItem(`Producto ${guardado+1}`));
        guardado++;
        total = total + Producto.subtotal;
        arreglo.push(Producto);
        ids.push(Producto.id);
        let nuevoproducto = document.createElement("ol");
        nuevoproducto.innerHTML=`
                <svg class="basura" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.31 2.25h3.38c.217 0 .406 0 .584.028a2.25 2.25 0 0 1 1.64 1.183c.084.16.143.339.212.544l.111.335l.03.085a1.25 1.25 0 0 0 1.233.825h3a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1 0-1.5h3.09a1.25 1.25 0 0 0 1.173-.91l.112-.335c.068-.205.127-.384.21-.544a2.25 2.25 0 0 1 1.641-1.183c.178-.028.367-.028.583-.028m-1.302 3a3 3 0 0 0 .175-.428l.1-.3c.091-.273.112-.328.133-.368a.75.75 0 0 1 .547-.395a3 3 0 0 1 .392-.009h3.29c.288 0 .348.002.392.01a.75.75 0 0 1 .547.394c.021.04.042.095.133.369l.1.3l.039.112q.059.164.136.315z" clip-rule="evenodd"/><path fill="currentColor" d="M5.915 8.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.813.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.302c-.14-.706-.204-1.644-.294-2.992z"/><path fill="currentColor" d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.15 0a.75.75 0 0 1 .671.82l-.5 5a.75.75 0 0 1-1.492-.149l.5-5a.75.75 0 0 1 .82-.671"/></svg>
                <p id="iden">Orden: ${Producto.id}</p>
                <p id="nombre">Producto: ${Producto.nombre}</p>
                <p id="cantidad">Cantidad: ${Producto.cantidad}</p>
                <p id="precio">Precio: ${Producto.precio}$</p>
                <p id="subtotal:">Subtotal: ${Producto.subtotal}$</p>
                `
        nuevoproducto.setAttribute("class","producto")
        nuevoproducto.setAttribute("id",Producto.id);
        console.log(Producto);
        listado.appendChild(nuevoproducto);
    }
    let htmltotal=document.getElementById("total");
    htmltotal.innerText=`Total:${total}$`;

}

function espera(){
        return new Promise(resolver => {
            let header = document.getElementById("hproducto");
            let barraCarga= document.createElement("div");
            barraCarga.innerHTML=`
            <p>Cargando</p>
            `
            barraCarga.setAttribute("class","barra");
            header.appendChild(barraCarga)
            setTimeout(resolver,3500);
            setTimeout(a => {barraCarga.setAttribute("class","borrar");},3000);
            setTimeout(a => {
                header.removeChild(barraCarga);
            },3600);
            })
        }
function cargar(arreglo,ids){
    let id,nombre,precio,cantidad,subtotal,cancelar;
    
    id=parseInt(cancelar = prompt("Ingrese el id del producto"));
        while((isNaN(id) && cancelar !=null) || (ids.includes(id)  && id != 0)){
            id=parseInt(cancelar = prompt("ERROR-Ingrese el id del producto"));
        }
    while(id != 0 && cancelar != null){
        nombre=(cancelar = prompt("Ingrese el nombre de su producto"));
        if(cancelar == null){
            break
        }
        precio=parseInt(cancelar = prompt("Ingrese el precio del producto"));
        if(cancelar == null){
            break
        }
        while(isNaN(precio)&& cancelar != null){
            precio=parseInt(cancelar = prompt("ERROR-Ingrese el precio del producto"));        
        }
        if(cancelar == null){
            break
        }
        cantidad=parseInt(cancelar = prompt("Ingrese la cantidad del producto"));
        while(isNaN(cantidad) && cancelar != null){
            cantidad=parseInt(cancelar = prompt("ERROR-Ingrese la cantidad del producto"));        
        }
        if(cancelar == null){
            break
        }
        ids.push(id);
        subtotal= cantidad * precio;
        productolistado= new producto(id,nombre,precio,cantidad,subtotal);
        arreglo.push(productolistado);
        let listado = document.getElementById("productos");
        let nuevoproducto = document.createElement("ol");
        nuevoproducto.innerHTML=`
                    <svg class="basura" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.31 2.25h3.38c.217 0 .406 0 .584.028a2.25 2.25 0 0 1 1.64 1.183c.084.16.143.339.212.544l.111.335l.03.085a1.25 1.25 0 0 0 1.233.825h3a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1 0-1.5h3.09a1.25 1.25 0 0 0 1.173-.91l.112-.335c.068-.205.127-.384.21-.544a2.25 2.25 0 0 1 1.641-1.183c.178-.028.367-.028.583-.028m-1.302 3a3 3 0 0 0 .175-.428l.1-.3c.091-.273.112-.328.133-.368a.75.75 0 0 1 .547-.395a3 3 0 0 1 .392-.009h3.29c.288 0 .348.002.392.01a.75.75 0 0 1 .547.394c.021.04.042.095.133.369l.1.3l.039.112q.059.164.136.315z" clip-rule="evenodd"/><path fill="currentColor" d="M5.915 8.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.813.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.302c-.14-.706-.204-1.644-.294-2.992z"/><path fill="currentColor" d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821m5.15 0a.75.75 0 0 1 .671.82l-.5 5a.75.75 0 0 1-1.492-.149l.5-5a.75.75 0 0 1 .82-.671"/></svg>
                    <p id="iden">Orden: ${id}</p>
                    <p id="nombre">Producto: ${nombre}</p>
                    <p id="cantidad">Cantidad: ${cantidad}</p>
                    <p id="precio">Precio: ${precio}$</p>
                    <p id="subtotal:">Subtotal: ${subtotal}$</p>
                    `
        nuevoproducto.setAttribute("class","producto")
        nuevoproducto.setAttribute("id",id);
        listado.appendChild(nuevoproducto);
        localStorage.setItem(`Producto ${id}`,JSON.stringify(productolistado));
        id=parseInt(cancelar = prompt("Ingrese el id del producto"));
        if(cancelar == null){
            break;
        }
        while((isNaN(id) && cancelar !=null) || (ids.includes(id) && id != 0 )){
            id=parseInt(cancelar = prompt("ERROR-Ingrese el id del producto"));
        }
        if(cancelar == null){
            break;
        }
        ids.push(id);
    }
}
let agregar=document.getElementById("BotonAgregar");

leer(lista,ids);

let htmltotal=document.getElementById("total");

agregar.addEventListener("click",function(){
    cargar(lista,ids);
    let totals = document.querySelectorAll(".producto");
    let total =0;
        totals.forEach(objeto => {
            id = objeto.id;
            total = total + lista.find(a => a.id == id).subtotal;
        });
    htmltotal.innerText=`Total: ${total}$`;
});
// Delegacion de eventos
let subtotal=0;
let htmlsubtotal=document.getElementById("subtotal");
let padre = document.getElementById("productos"); //Tomo al padre de  la lista
padre.addEventListener("click",function(click){ //Agrego en el la delegacion de eventos
    
    if(click.target.classList.contains("basura")){ //click.target... es, "En donde clickeo tiene la clase 'basura'?"
        let producto = click.target.closest(".producto"); // Declaro a producto el elemento con clase producto mas cercano al click
        
        if(producto){
            let id = producto.id;
            producto.remove()
            localStorage.removeItem(`Producto ${id}`)
            lista= lista.filter(objeto => objeto.id != id);
            ids = ids.filter(objeto => objeto != id);
            let totals = document.querySelectorAll(".producto");
            let total =0;
            totals.forEach(objeto => {
                id = objeto.id;
                total = total + lista.find(a => a.id == id).subtotal;
            });
            htmltotal.innerText=`Total: ${total}$`;
            let subtotales = document.querySelectorAll(".click");
                subtotales.forEach(objeto => {
                    id = objeto.id;
                    subtotal = subtotal + lista.find(a => a.id == id).subtotal;
                });
            htmlsubtotal.innerText=`Subtotal seleccionado: ${subtotal}$`;
        }
    }
    if(click.target.classList.contains("producto")){
        click.target.classList.toggle("click");
    }
    subtotal=0;
    let subtotales = document.querySelectorAll(".click");
        subtotales.forEach(objeto => {
            id = objeto.id;
            subtotal = subtotal + lista.find(a => a.id == id).subtotal;
        });
    htmlsubtotal.innerText=`Subtotal seleccionado: ${subtotal}$`;
});
let borrar = document.getElementById("BotonBorrar");
borrar.addEventListener("click",function(click){
    let borro = document.querySelectorAll(".click");
    borro.forEach(objeto => {
        id = objeto.id;
        localStorage.removeItem(`Producto ${id}`)
        lista= lista.filter(objeto => objeto.id != id);
        ids = ids.filter(objeto => objeto != id);
        objeto.remove();
    });
    let totals = document.querySelectorAll(".producto");
    let total =0;
        totals.forEach(objeto => {
            id = objeto.id;
            total = total + lista.find(a => a.id == id).subtotal;
        });
    htmltotal.innerText=`Total: ${total}$`;
    let subtotales = document.querySelectorAll(".click");
        subtotales.forEach(objeto => {
            id = objeto.id;
            subtotal = subtotal + lista.find(a => a.id == id).subtotal;
        });
    htmlsubtotal.innerText=`Subtotal seleccionado: ${subtotal}$`;
});

// setTimeout(a => {
//     console.log("Esto tiene que aparecer en 5 segundos");
// },5000);


// let buscado = prompt("Ingrese el nombre del producto buscado")
// if(buscado != null){
//     const busqueda = lista.find(pinga => pinga.nombre == buscado);
//     console.log(busqueda);  
//     if(busqueda){
//         alert(`Se encontro el elemento buscado en el id ${busqueda.id}`);
//     }
// }
