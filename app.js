/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Array para almacenar los nombres de los amigos
let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // trim() elimina espacios al inicio y fin

    // Validar la entrada
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return; // salir de la función si el campo está vacío
    }

    // Actualizar el array de amigos
    listaAmigos.push(nombre);

    // Actualizar lista en pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = '';

}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista antes de volver a llenarla
    lista.innerHTML = '';

    // Recorrer el array y generar elementos <li>
    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
