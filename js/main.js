

//Constantes
const usuarios=[
    {id:"facundo",passw:"1234"},
    {id:"rod",passw:"1324"}
];


// Funciones
function ingresos(dato){
    let user=dato;
    fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(response=>{ return response.json();})
        .then(data => {
            console.log(data);
            if(data.find(objeto=> objeto.username == user)){                    //Uso el usuario Bret regularmente
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
function ingreso(user,passw,users){
    console.log("Entro");  
    if(users.find(objeto=> objeto.id == user && objeto.passw == passw) ){
        localStorage.setItem("login",1);
        window.location.href = "./pages/productos.html";
    }
    else{
        let padre = document.getElementById("login");
        let fallo= document.createElement("div");
        fallo.innerHTML=`
        <p>Ha habido un error al ingresar el usuario y/o contraseña</p>
        `;
        fallo.setAttribute("class","fallo");
        padre.appendChild(fallo);
        setTimeout(a=>{padre.removeChild(fallo)},5000);
    }

}





// Logica
let inputusario = document.getElementById("user");
let inputpassword = document.getElementById("password");
let submit = document.getElementById("formulario");         //Tomo los objetos formulario e inputs, de inputs tomo el value, el valor y lo envio a ingresos que es una funcion fetch que
submit.addEventListener("submit",function(objeto){          //verifique si la cuenta existe
    objeto.preventDefault();
    ingreso(inputusario.value,inputpassword.value,usuarios);
})


// let botoningreso
// botoningreso = document.getElementById("login");
// botoningreso.addEventListener("click",function(){
//     ingresos();
    
// })