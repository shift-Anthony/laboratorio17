const boton = document.getElementById('btn-Calcular');
const mensaje = document.getElementById('resultado');

//Promesa
function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(b) === 0) reject(new Error("No se puede dividir entre cero"));
            else resolve(Number(a) / Number(b));
        }, 1500);
    });
}

boton.addEventListener('click', () => {
    const a = document.getElementById('numA').value;
    const b = document.getElementById('numB').value;

    mensaje.textContent = "Calculando...";

    dividirAsync(a, b)
        .then((resultado) => {
            mensaje.textContent = "Resultado: " + resultado;
        })
        .catch((error) => {
            mensaje.textContent = "Error: " + error.message;
        });
});