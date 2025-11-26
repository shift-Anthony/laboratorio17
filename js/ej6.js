const boton = document.getElementById('btn-Verificar');
const input = document.getElementById('inputEdad');
const mensaje = document.getElementById('mensaje');


function validarEdad(edad) {
    if (edad === '' || isNaN(edad) || edad < 0)  throw new Error("Edad inválida");
}

boton.addEventListener('click', () => {
    try {
        validarEdad(input.value);
        mensaje.textContent = "Edad correcta.";
        mensaje.style.color = "green";
    } catch (error) {
        mensaje.textContent = error.message;
        mensaje.style.color = "red";
    }
});