let contador = 1;

//Se mantiene la funcionalidad del prototipo del Taller 2, pero se agregan las funciones de agregar y eliminar en localStorage para mantener la informacion entre las paginas
function agregar() {
    let input = document.getElementById("tarea").value.trim();
    const lista = document.getElementById("lista");

    if (input.trim() !== "") {
        const tarea = document.createElement("li");
        tarea.textContent = input;
        tarea.setAttribute("id", `tarea${contador}`);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = function () {
            tarea.remove();
            eliminarTareaEnLocalStorage(input);
        };

        tarea.appendChild(botonEliminar);
        lista.appendChild(tarea);

        agregarTareaEnLocalStorage(input);

        contador++;
    }
}

function agregarTareaEnLocalStorage(tarea) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || []; //Obtiene el valor almacenado en el localStorage de "tareas"
    tareas.push(tarea); //Agrega la tarea que el usuario a ingresado en el input
    localStorage.setItem("tareas", JSON.stringify(tareas)); //Convierte "tareas" una cadena de texto, guardando la tarea en "tareas"
}

function eliminarTareaEnLocalStorage(tarea) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || []; //Se obtienen las tareas, si no hay ninguna se asigna un array vacio
    const index = tareas.indexOf(tarea); //Devuelve el indice de la tarea en el array
    if (index !== -1) { //Si la tarea existe se elimina
        tareas.splice(index, 1); //Modifica el array original, elmina 1 elemento de la posicion index
        localStorage.setItem("tareas", JSON.stringify(tareas));
        //Se guarda nuevamente el array actualizado
    }
}

//Para la accesibilidad si el usuario ingresa enter en el input, se agregara la Tarea sin necesidad de moverse usar el boton.

document.getElementById("tarea").addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        agregar();
    }
})
