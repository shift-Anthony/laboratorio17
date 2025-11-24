const boton = document.getElementById('btn-Error');
const parrafo = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    try {
        funcionQueNoExiste(); 
    } catch (error) {
        parrafo.textContent = "Error capturado: " + error.message;
    }
});