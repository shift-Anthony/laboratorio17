const boton = document.getElementById('btnCargar');
const salida = document.getElementById('salida');
//Promesa
function cargarUsuario() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
        
        setTimeout(() => {
            const usuario = { id: 10, nombre: "Anthony" };
            resolve(usuario);
        }, tiempo);
    });
}

boton.addEventListener('click', () => {
    salida.textContent = "Cargando...";
    cargarUsuario().then((usuario) => {
        salida.textContent = `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
    });
});