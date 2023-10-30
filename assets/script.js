function findCombinations() {
    // Obtiene los valores ingresados por el usuario
    const numbersInput = document.getElementById('numbers');
    const targetInput = document.getElementById('target');
    const resultDiv = document.getElementById('result');

    // Convierte los números ingresados en una lista de números
    const numbers = numbersInput.value.split(',').map(Number);
    const target = parseInt(targetInput.value, 10);

    // Define una lista para almacenar las combinaciones encontradas
    const result = [];

    // Define una función recursiva para buscar combinaciones
    function find(currentCombination, index) {
        const currentSum = currentCombination.reduce((a, b) => a + b, 0);

        // Si la suma actual es igual al número objetivo, agrega la combinación a la lista de resultados
        if (currentSum === target) {
            result.push(currentCombination);
            return;
        }

        // Si la suma actual es mayor que el número objetivo, termina la recursión
        if (currentSum > target) {
            return;
        }

        // Recorre los números restantes y llama a la función recursivamente con una nueva combinación
        for (let i = index; i < numbers.length; i++) {
            const newCombination = currentCombination.concat(numbers[i]);
            find(newCombination, i + 1);
        }
    }

    // Inicia la búsqueda de combinaciones con una lista vacía y el primer número
    find([], 0);

    // Si se encontraron combinaciones, las muestra en la página. De lo contrario, muestra un mensaje de error.
    if (result.length > 0) {
        resultDiv.innerHTML = "<h3>Combinaciones encontradas:</h3>";
        for (let i = 0; i < result.length; i++) {
            resultDiv.innerHTML += result[i].join(' + ') + ' = ' + target + '<br>';
        }
    } else {
        resultDiv.innerHTML = "<h3>No se encontraron combinaciones.</h3>";
    }
}