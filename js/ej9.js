const boton = document.getElementById('btn-Cargar');
const salida = document.getElementById('textoSalida');

function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

boton.addEventListener('click', () => {
    salida.textContent = "Cargando...";
    cargarMensaje((mensaje) => {
        salida.textContent = mensaje;
    });
});