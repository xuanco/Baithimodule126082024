document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-list').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        if (id && name && phone && address && email) {
            const newRow = customerList.insertRow();
            newRow.insertCell().textContent = id;
            newRow.insertCell().textContent = name;
            newRow.insertCell().textContent = phone;
            newRow.insertCell().textContent = address;
            newRow.insertCell().textContent = email;

            // Clear form fields
            form.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    });
});
