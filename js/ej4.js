const boton = document.getElementById('btnTest');
const salida = document.getElementById('salida');
boton.addEventListener('click', () => {
    try {
        JSON.parse("Hola Mundo"); 
    } catch (e) {
        salida.innerHTML = `
            Nombre: ${e.name} <br>
            Mensaje: ${e.message}
        `;
        console.log(e.name, e.message);
    }
});