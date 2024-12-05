function saveData() {
    const data = {
        nama: document.getElementById('nama').value,
        role: document.getElementById('role').value,
        availability: document.getElementById('availability').value,
        usia: document.getElementById('usia').value,
        lokasi: document.getElementById('lokasi').value,
        pengalaman: document.getElementById('pengalaman').value,
        email: document.getElementById('email').value,
    };

    localStorage.setItem('participantData', JSON.stringify(data));
    alert("Data berhasil disimpan!");
    window.location.href = 'data.html';
}

function loadData() {
    const data = JSON.parse(localStorage.getItem('participantData'));
    
    if (data) {
        document.getElementById('nama').value = data.nama;
        document.getElementById('role').value = data.role;
        document.getElementById('availability').value = data.availability;
        document.getElementById('usia').value = data.usia;
        document.getElementById('lokasi').value = data.lokasi;
        document.getElementById('pengalaman').value = data.pengalaman;
        document.getElementById('email').value = data.email;
    }
}
function loadData(){
    const data = JSON.parse(localStorage.getItem('participantData'));

    const dataContainer = document.getElementById('data-container');
    const dataContainer2 = document.getElementById('data-container2');
    if (data) {
        dataContainer.innerHTML = `
            <p>Availability: ${data.availability}</p>
            <p>usia: ${data.usia}</p>
            <p>lokasi: ${data.lokasi}</p>
            <p>Pengalaman: ${data.pengalaman}</p>
            <p>Email: ${data.email}</p>
        `;
        dataContainer2.innerHTML =`
         <h1>${data.nama}</h1>
         <p>${data.role}</p>
        `;
    }
}
loadData();