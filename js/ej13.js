const boton = document.getElementById('btn-Cargar');
const salida = document.getElementById('textoSalida');
//Promesa
function cargarMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}
boton.addEventListener('click', () => {
    salida.textContent = "Cargando...";
    cargarMensaje()
        .then((mensaje) => {
            salida.textContent = mensaje;
        });
});