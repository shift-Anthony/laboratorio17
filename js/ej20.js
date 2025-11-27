const boton = document.getElementById('btn-Iniciar');
const consola = document.getElementById('proceso');

function log(texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    consola.appendChild(p);
}

//promesa
function procesarNumero(numero) {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        setTimeout(() => {
            log(`Procesando ${numero}... (Tardó ${tiempo}ms)`);
            resolve();
        }, tiempo);
    });
}

//Async/await
async function procesarLista(numeros) {

    const promesas = numeros.map(num => procesarNumero(num));
    await Promise.all(promesas);
    return "Proceso completado";
}

boton.addEventListener('click', async () => {
    consola.innerHTML = ''; 
    const misNumeros = [10, 20, 30, 40, 502];
    log("Iniciando...");
    try {
        const mensajeFinal = await procesarLista(misNumeros);
        log(mensajeFinal);
    } catch (error) {
        console.error("Algo falló:", error);
    }
});