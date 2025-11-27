const boton = document.getElementById('btn-Test');

//nivel 2
function funcionNivel2() {
    try {
        console.log(x);
    } catch (error) {
        console.log("Nivel 2 atrapó el error: " + error.message);
        throw error;
    }
}

//nivel 1
function funcionNivel1() {
    try {
        funcionNivel2();
    } catch (error) {
        console.log("Nivel 1 recibió el error: " + error.message);
        throw error;
    }
}

//nivel superior
boton.addEventListener('click', () => {
    try {
        funcionNivel1();
    } catch (error) {
        console.log("Error capturado en el nivel superior: " + error.message);
    }
});