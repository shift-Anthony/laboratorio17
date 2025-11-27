const boton = document.getElementById('btn-Cargar');
const salida = document.getElementById('textoSalida');

//promesa
function cargarMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

//async/await
boton.addEventListener('click', async () => {
    salida.textContent = "Cargando...";
    const mensaje = await cargarMensaje();
    salida.textContent = mensaje;
});