const fileInput = document.querySelector('input');
const tableData = document.querySelector('tbody');
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const data = new FormData();
    data.append('file', fileInput.files[0]);
    console.log(data)

    fetch('/api/getMetadatas', {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(result => {
            document.querySelectorAll('tr').forEach((tr) => {
                tr.remove()
            });
            if (result.error) {
                const tr = document.createElement('tr');
                const td1 = document.createElement('td');
                const td2 = document.createElement('td');
                td1.innerHTML = 'Erreur'
                td2.innerHTML = result.error
                tr.appendChild(td1)
                tr.appendChild(td2);
                tableData.appendChild(tr);
            } else {
                for (const key in result) {
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td');
                    const td2 = document.createElement('td');
                    td1.innerHTML = key;
                    td2.innerHTML = result[key];
                    tr.appendChild(td1)
                    tr.appendChild(td2);
                    tableData.appendChild(tr);
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});