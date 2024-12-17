document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de las notas
    const evp = parseFloat(document.getElementById('evp').value);
    const exp = parseFloat(document.getElementById('exp').value);
    const exf = parseFloat(document.getElementById('exf').value);
    const pf = parseFloat(document.getElementById('pf').value);

    // Calcular el promedio
    const promedio = (evp + exp + exf + pf) / 4;

    // Determinar el estado de aprobación
    const estado = promedio >= 13 ? 'Aprobado' : 'Desaprobado';

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `Promedio: ${promedio.toFixed(2)} - Estado: ${estado}`;
});
