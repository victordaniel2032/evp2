document.getElementById('calcular').addEventListener('click', function() {
    // Obtener los valores numéricos ingresados
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Calcular la suma
    const suma = num1 + num2;

    // Verificar si la suma es par
    if (suma % 2 === 0) {
        // Realizar las operaciones
        const resta = num1 - num2;
        const multiplicacion = num1 * num2;
        const division = num2 !== 0 ? (num1 / num2) : 'Indefinido';
        const residuo = num2 !== 0 ? (num1 % num2) : 'Indefinido';

        // Mostrar resultados
        const resultado = `
            Suma: ${suma}
            Resta: ${resta}
            Multiplicación: ${multiplicacion}
            División: ${division}
            Residuo: ${residuo}
        `;
        document.getElementById('resultado').innerText = resultado;
    } else {
        // Indicar que no es posible realizar el cálculo
        document.getElementById('resultado').innerText = 'No es posible hacer el cálculo. La suma es impar.';
    }
});
