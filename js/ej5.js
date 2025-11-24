const boton = document.getElementById('btnTest');

boton.addEventListener('click', () => {
    try {
        console.log(variableQueNoExiste);
    } catch (error) { console.log("fallo"); } finally {
        console.log("siempre se ejecuta");
    }
});