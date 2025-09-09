// El principal objetivo de este desafío es fortalecer tus habilidades 
// en lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema.

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

    // Limpiar el campo de entrada
    input.value = '';

    // (Opcional) Mostrar la lista actualizada en consola para verificar
    console.log(listaAmigos);
}