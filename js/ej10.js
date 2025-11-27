const boton = document.getElementById('btnCargar');
const salida = document.getElementById('salida');

function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    salida.textContent = `Espera de ${tiempo}ms...`;
    setTimeout(() => {
        const usuario = {
            id: 10,
            nombre: "Anthony"
        };
        callback(usuario);
    }, tiempo);
}

boton.addEventListener('click', () => {
    salida.textContent = "Cargando datos...";
    cargarUsuario((usuarioRecibido) => {
        salida.textContent = `Usuario cargado: ${usuarioRecibido.nombre} (ID: ${usuarioRecibido.id})`;
    });
});