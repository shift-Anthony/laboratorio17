const boton = document.getElementById('btn-Calcular');
const mensaje = document.getElementById('resultado');

//Promesa
function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroA = Number(a);
            const numeroB = Number(b);
            if (numeroB === 0) reject(new Error("No se puede dividir entre cero"));
            else resolve(numeroA / numeroB);
        }, 1500); 
    });
}

//async/await
boton.addEventListener('click', async () => {
    const a = document.getElementById('numA').value;
    const b = document.getElementById('numB').value;
    mensaje.textContent = "Calculando...";

    try {
        const resultado = await dividirAsync(a, b);
        mensaje.textContent = "Resultado: " + resultado;
    } catch (error) {
        mensaje.textContent = "Error: " + error.message;
    }
});