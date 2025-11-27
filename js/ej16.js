const boton = document.getElementById('btn-Iniciar');
const consola = document.getElementById('proceso');

function log(texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    consola.appendChild(p);
}
//Promesa
function procesarUnNumero(numero) {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

        setTimeout(() => {
            log(`Procesando ${numero}... (Tardó ${tiempo}ms)`);
            resolve();
        }, tiempo);
    });
}

function procesarLista(numeros) {
    const promesas = numeros.map(num => procesarUnNumero(num));
    return Promise.all(promesas);
}

boton.addEventListener('click', () => {
    consola.innerHTML = '';
    const misNumeros = [1, 2, 3, 4, 5];
    log("Iniciando...");
    procesarLista(misNumeros)
        .then(() => {
            log("Proceso completado");      
        });
});