// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//dejar cursor en la caja
document.getElementById('amigo').focus();


//Definición de Variables y Constantes

// Array de amigos
let listaDeAmigos = [];



//Funcion agregar amigo
function agregarAmigo(){

        //recibir amigo
            const amigo = (document.getElementById('amigo').value);

        //validar que no esté en blanco nombre del amigo
                if (amigo===""){
                    alert("Debe ingresar un nombre...");
                    return;
                } else {
                    
                    // Si no está vacío, se ingresa amigo al array
                    // verifica que no ingrese otro nombre igual
                    if (listaDeAmigos.includes(amigo)){
                        alert("Ya ingresó un amigo con el mismo nombre");
                        //return;
                    }
                        // ingreso amigo al array
                        else {
                            listaDeAmigos.push(amigo);
                            
                            // desplegar array en la pagina
                            mostrarListaAmigos();
                            //console.log(amigo);
                            //console.log(listaDeAmigos)
                            }
                    }
                    
                   
                //limpiar cuadro de texto
                limpiarCaja();  
                //dejar cursor en la caja
                document.getElementById('amigo').focus();
                }
                
  
/* function mostrarListaAmigos1(){
            for (let x=0; x < listaDeAmigos.length; x++){
            document.querySelector("#listaAmigos").innerHTML= "<li>" +listaDeAmigos[x]+ "</li>";
        }
}  */

function mostrarListaAmigos() {
    let idLista = document.getElementById("listaAmigos");
    
    // Limpiar lista de la pantalla
    idLista.innerHTML = ""; 

    //ciclo para mostrar los elementos del arreglo
    for (let x = 0; x < listaDeAmigos.length; x++) {
        // Crear un nuevo elemento de lista
        let lista = document.createElement("li");
        lista.textContent = listaDeAmigos[x];
        // Agregar el nuevo elemento a la lista
        idLista.appendChild(lista);
    }
}


function sortearAmigo(){
    //console.log(listaDeAmigos);
    let elegido = [Math.floor(Math.random() * listaDeAmigos.length)];
    //console.log(elegido);
    console.log(listaDeAmigos[elegido]);
    document.querySelector("#resultado").innerHTML= ('El amigo secreto es:') + (listaDeAmigos[elegido]);
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}
