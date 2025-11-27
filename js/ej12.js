const boton = document.getElementById('btn-Iniciar');
const consolaVisual = document.getElementById('proceso');

function log(texto) {
    const p = document.createElement('p');
    p.textContent = texto;
    consolaVisual.appendChild(p);
}

function procesarLista(numeros, callbackFinal) {
    let procesados = 0;
    numeros.forEach(numero => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        setTimeout(() => {
            const mensaje = `Procesando ${numero}... (Tardó ${tiempo}ms)`;
            log(mensaje);
            procesados++;
            if (procesados === numeros.length) callbackFinal("Proceso completado");
        }, tiempo);
    });
}
boton.addEventListener('click', () => {
    consolaVisual.innerHTML = '';
    const miArray = [10, 20, 30, 40, 50];
    
    log("Iniciando...");
    procesarLista(miArray, (mensajeFinal) => {
        log(mensajeFinal);
    });
});