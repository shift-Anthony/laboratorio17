const button = document.getElementById('btn-Calcular');
const textoResultado = document.getElementById('resultado');

function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (Number(b) === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            const resultado = a / b;
            callback(null, resultado);
        }
    }, 1500);
}
button.addEventListener('click', () => {
    const a = document.getElementById('numA').value;
    const b = document.getElementById('numB').value;

    textoResultado.textContent = "Calculando...";

    dividirAsync(a, b, (error, resultado) => {
        if (error) textoResultado.textContent = "Error: " + error.message;
        else textoResultado.textContent = "Resultado: " + resultado;
    });
});