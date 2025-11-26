const boton = document.getElementById('btnError');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    try {
        let x = null;
        console.log(x.nombre);
    } catch (error) {
        mensaje.innerHTML = `Tipo: ${error.name}<br>Mensaje: ${error.message}`;
        console.error(error);
    }
});