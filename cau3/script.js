function countPairs() {
    const arrayInput = document.getElementById('arrayInput').value;
    const kInput = document.getElementById('kInput').value;
    const resultElement = document.getElementById('result');
    
    const arr = arrayInput.split(',').map(num => num.trim()).map(Number);
    const k = parseInt(kInput, 10);

    if (arr.length === 0 || isNaN(k) || k <= 0) {
        resultElement.textContent = 'Vui lòng nhập mảng hợp lệ và số nguyên dương k.';
        return;
    }

    if (arr.length > 50) {
        resultElement.textContent = 'Mảng không được có quá 50 phần tử.';
        return;
    }

    let count = 0;
    const n = arr.length;
    const pairs = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++;
                pairs.push(`(${arr[i]}, ${arr[j]})`);
            }
        }
    }

    if (count === 0) {
        resultElement.innerHTML = `Không có cặp số nào có tổng chia hết cho ${k}.`;
    } else {
        resultElement.innerHTML = `Số lượng cặp số có tổng chia hết cho ${k}: ${count}<br>Các cặp số là: ${pairs.join('<br>')}`;
    }
}
