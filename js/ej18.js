const boton = document.getElementById('btnCargar');
const salida = document.getElementById('salida');

//Promesa
function cargarUsuario() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
        console.log(`Esperando ${tiempo}ms...`);
        setTimeout(() => {
            const usuario = { id: 10, nombre: "Anthony" };
            resolve(usuario);
        }, tiempo);
    });
}

//async/await
boton.addEventListener('click', async () => {
    salida.textContent = "Cargando...";
    const usuario = await cargarUsuario();
    salida.textContent = `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
});