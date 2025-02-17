window.onload = function() { //El script se ejecutara despues de que toda la pagina cargue por copmleto
    const lista = document.getElementById("lista");
    const tareas = JSON.parse(localStorage.getItem("tareas")) || []; //Obtiene los valores de "tareas" en formato JSON, parse transforma la cadena en un array que se pueda manejar

    tareas.forEach(tarea => { //Por cada tarea se ejecutara la funcion
        const li = document.createElement("li");
        li.textContent = tarea; //Se crea un elemento li y se le asigna su correspondiente tarea

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = function() {
            const index = tareas.indexOf(tarea);
            if (index !== -1) { //Si se encuentra la tarea, se elmina tanto de l apagina como del LocaleStorage
                tareas.splice(index, 1);
                localStorage.setItem("tareas", JSON.stringify(tareas));
                li.remove(); //Elimina el elemento li
            }
        };

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
};