
function ingresos(){
    let user=prompt("Ingrese su usuario");
    fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(response=>{ return response.json();})
        .then(data => {
            console.log(data);
            if(data.find(objeto=> objeto.username == user)){
                alert("Ingreso exitoso");
                localStorage.setItem("login",1);
                window.location.href = "./pages/productos.html";
            }
            else{
                alert("Ingreso fallido");
                localStorage.setItem("login",0);
            }
        })
        .catch(error=>{console.error("Se tuvo un error al buscar a los usuarios. ",error)});
}
function login(){
    let ingreso=localStorage.getItem("login");
    if(ingreso==1){
        window.open(pagina.html);
    }

}




let botoningreso
botoningreso = document.getElementById("ListaProductos");
botoningreso.addEventListener("click",function(){
    ingresos();
    
})