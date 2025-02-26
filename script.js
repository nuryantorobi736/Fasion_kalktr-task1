// Mengisi tanggal secara otomatis
const tanggal = new Date();
const tanggalString = `${tanggal.getDate()}/${tanggal.getMonth() + 1}/${tanggal.getFullYear()}`;
document.getElementById('tanggal').value = tanggalString;

// Menangani pengiriman form
document.getElementById('submit').addEventListener('click', function() {
    const ukuranTangan = document.getElementById('ukuranTangan').value;
    const ukuranPinggang = document.getElementById('ukuranPinggang').value;
    const ukuranDada = document.getElementById('ukuranDada').value;
    const panjangBaju = document.getElementById('panjangBaju').value;
    const panjangPundak = document.getElementById('panjangPundak').value;
    const jenisKain = document.getElementById('jenisKain').value;
    const jenisBaju = document.getElementById('jenisBaju').value;
    const rincianBaju = document.getElementById('rincianBaju').value;

    // Menambahkan data ke tabel
    const tabelBody = document.getElementById('pesananBody');
    const newRow = tabelBody.insertRow();
    const rowIndex = tabelBody.rows.length - 1; // Mendapatkan index baris yang baru ditambahkan

    newRow.innerHTML = `
        <td>${tanggalString}</td>
        <td>${ukuranTangan} cm</td>
        <td>${ukuranPinggang} cm</td>
        <td>${ukuranDada} cm</td>
        <td>${panjangBaju} cm</td>
        <td>${panjangPundak} cm</td>
        <td>${jenisKain}</td>
        <td>${jenisBaju}</td>
        <td>${rincianBaju}</td>
        <td><button class="edit-button" onclick="editPesanan(${rowIndex})"><i class="fas fa-edit icon"></i> Edit</button></td>
    `;

    // Menampilkan tabel dan menyembunyikan form
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('tabelContainer').style.display = 'block';
});

// Kembali ke form pemesanan
document.getElementById('backToForm').addEventListener('click', function() {
    document.getElementById('tabelContainer').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
});

// Fungsi untuk mengedit pesanan
function editPesanan(index) {
    const row = document.getElementById('pesananBody').rows[index];

    // Mengisi form dengan data dari baris yang dipilih
    document.getElementById('tanggal').value = row.cells[0].innerText;
    document.getElementById('ukuranTangan').value = row.cells[1].innerText.replace(' cm', '');
    document.getElementById('ukuranPinggang').value = row.cells[2].innerText.replace(' cm', '');
    document.getElementById('ukuranDada').value = row.cells[3].innerText.replace(' cm', '');
    document.getElementById('panjangBaju').value = row.cells[4].innerText.replace(' cm', '');
    document.getElementById('panjangPundak').value = row.cells[5].innerText.replace(' cm', '');
    document.getElementById('jenisKain').value = row.cells[6].innerText;
    document.getElementById('jenisBaju').value = row.cells[7].innerText;
    document.getElementById('rincianBaju').value = row.cells[8].innerText;

    // Menghapus baris yang diedit
    row.remove();

    // Menampilkan form dan menyembunyikan tabel
    document.getElementById('tabelContainer').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
}