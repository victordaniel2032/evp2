document.getElementById('calcular').addEventListener('click', function() {
    // Precio de cada llanta
    const precioPorLlantas = 200;
    
    // Obtener la cantidad de llantas ingresada
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Inicializar variables
    let descuento = 0;
    let importePagar;

    // Verificar la cantidad de llantas y calcular el descuento
    if (cantidad >= 6 && cantidad <= 12) {
        descuento = 0.10; // 10% de descuento
    } else if (cantidad > 12) {
        descuento = 0.15; // 15% de descuento
    }

    // Calcular el importe a pagar
    importePagar = cantidad * precioPorLlantas * (1 - descuento);

    // Mostrar los resultados
    if (descuento > 0) {
        document.getElementById('resultado').innerText = `
            Importe a pagar: S/${importePagar.toFixed(2)} 
            Descuento aplicado: ${descuento * 100}%
        `;
    } else {
        document.getElementById('resultado').innerText = `
            Importe a pagar: S/${importePagar.toFixed(2)} 
            Sin descuento.
        `;
    }
});
