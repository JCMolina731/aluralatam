// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === ''){
        alert("Por favor, ingrese un nombre valido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value="";

}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let elegido = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "🎉 ¡El amigo secreto es: " + elegido + "!";
}

