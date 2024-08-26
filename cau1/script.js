document.addEventListener('DOMContentLoaded', () => {
    const maxElements = 20;
    let numbers = [];

    const numberForm = document.getElementById('numberForm');
    const numberInput = document.getElementById('numberInput');
    const findMultiplesButton = document.getElementById('findMultiples');
    const arrayDisplay = document.getElementById('arrayDisplay');
    const multiplesDisplay = document.getElementById('multiplesDisplay');
    const sumDisplay = document.getElementById('sumDisplay');

    numberForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newNumber = parseInt(numberInput.value, 10);

        if (numbers.length < maxElements) {
            numbers.push(newNumber);
            updateDisplay();
        } else {
            alert(`Mảng đã có ${maxElements} phần tử. Không thể thêm nữa.`);
        }

        numberInput.value = '';
    });

    findMultiplesButton.addEventListener('click', () => {
        const multiples = findMultiplesOf3And5();
        const sum = calculateSum(multiples);
        multiplesDisplay.textContent = multiples.length > 0 ? multiples.join(', ') : 'Chưa có số nào là bội chung của 3 và 5.';
        sumDisplay.textContent = sum;
    });

    function updateDisplay() {
        arrayDisplay.textContent = `Mảng hiện tại: [${numbers.join(', ')}]`;
        multiplesDisplay.textContent = 'Chưa có số nào là bội chung của 3 và 5.';
        sumDisplay.textContent = '0';
    }

    function findMultiplesOf3And5() {
        return numbers.filter(number => number % 3 === 0 && number % 5 === 0);
    }

    function calculateSum(multiples) {
        return multiples.reduce((total, num) => total + num, 0);
    }
});

