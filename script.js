const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const bomb = document.getElementById("bomb");
const popup = document.getElementById("popup");
const viewMessageBtn = document.getElementById("viewMessageBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// Fungsi untuk memindahkan tombol No secara acak ketika di-hover
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth * 0.8; // Supaya tombol tidak keluar layar
    const y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Ketika tombol Yes diklik
yesBtn.addEventListener('click', () => {
    // Tampilkan dan jatuhkan icon bom
    bomb.style.display = 'block';
    bomb.classList.add('falling');

    // Tampilkan pop-up secara langsung tanpa delay
    popup.style.display = 'block';
    popup.classList.add('show');
});

// Ketika tombol Lihat Pesan diklik
viewMessageBtn.addEventListener('click', () => {
    alert("Aku adalah Najla yang kuat, dan aku akan terus melangkah maju, meninggalkan semua yang tidak membuatku bahagia. Mulai sekarang, aku akan fokus pada masa depanku yang cerah dan penuh harapan.!");
    nextBtn.style.display = 'inline-block'; // Tampilkan tombol Selanjutnya setelah alert
});

// Ketika tombol Selanjutnya diklik
nextBtn.addEventListener('click', () => {
    window.location.href = "page2.html"; // Arahkan ke halaman berikutnya
});

// Menangani tombol Lihat Pesan
if (viewMessageBtn) {
    viewMessageBtn.addEventListener('click', () => {
        let message;
        const currentPage = window.location.pathname;

        if (currentPage.endsWith("page1.html")) {
            message = "Udah saatnya aku bangga sama gaya sendiri! Setiap outfit itu representasi diri aku. Nggak peduli apa kata orang, yang penting aku nyaman dan percaya diri!";
        } else if (currentPage.endsWith("page2.html")) {
            message = "Setiap orang berhak untuk berpakaian sesuai keinginan mereka. Jangan biarkan komentar negatif mempengaruhi pilihan kita!";
        } else if (currentPage.endsWith("page3.html")) {
            message = "Pakaian yang aku pilih mencerminkan diriku. Jangan pernah merasa ragu untuk menjadi diri sendiri!";
        }

        alert(message);
        
        // Tampilkan tombol Tutup setelah pesan dilihat
        closeBtn.style.display = 'inline-block'; // Tampilkan tombol 'Tutup'
    });
}


// Menangani tombol Tutup
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        // Sembunyikan popup ketika tombol Tutup diklik
        popup.style.display = 'none';
        
        // Reset tampilan untuk interaksi berikutnya (jika diperlukan)
        closeBtn.style.display = 'none'; // Sembunyikan tombol setelah menutup pop-up
    });
}


// Ketika tombol Selanjutnya diklik
nextBtn.addEventListener('click', () => {
    window.location.href = "page3.html"; // Arahkan ke halaman berikutnya
});

// Ketika tombol Kembali diklik
backBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Sembunyikan pop-up
    bomb.style.display = 'none'; // Sembunyikan icon bom
    yesBtn.style.display = 'inline-block'; // Tampilkan kembali tombol Yes
    noBtn.style.display = 'inline-block'; // Tampilkan kembali tombol No
});


function showFirework() {
    // Tampilkan gambar kembang api
    const firework = document.getElementById('firework');
    firework.style.display = 'block'; // Tampilkan gambar kembang api
    firework.style.animation = 'rise 1s forwards'; // Tambahkan animasi naik
    
    // Sembunyikan gambar bom setelah tombol diklik
    const bomb = document.getElementById('bomb');
    bomb.style.display = 'none'; // Sembunyikan gambar bom
}

if (distance < 100) { // Jarak toleransi untuk memindahkan tombol
    moveButton();
}

        // Fungsi untuk menampilkan alert dan langsung pindah halaman
        function showAlert() {
            alert('Nggak semua orang harus ikut organisasi buat sukses. Ikut organisasi bisa bantu, tapi kalau itu bukan hal yang kamu suka atau belum waktunya, santai aja. Kamu bisa berkembang dengan cara lain yang cocok sama minat kamu.');
           
            location.href = "k2.html"; 
        }
        closeBtn.style.display = 'inline-block'; // Tampilkan tombol 'Tutup'
    


// Menangani tombol Tutup
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        // Sembunyikan popup ketika tombol Tutup diklik
        popup.style.display = 'none';
        
        // Reset tampilan untuk interaksi berikutnya (jika diperlukan)
        closeBtn.style.display = 'none'; // Sembunyikan tombol setelah menutup pop-up
    });
} 
        // Fungsi untuk memindahkan tombol "MASIHHH" saat kursor mendekat
        function moveButton() {
            const noBtn = document.getElementById("noBtn");
            const container = document.querySelector('.container');
            
            // Ukuran area lari (container)
            const containerHeight = container.offsetHeight;
            const containerWidth = container.offsetWidth;
            
            // Ukuran tombol
            const btnHeight = noBtn.offsetHeight;
            const btnWidth = noBtn.offsetWidth;
            
            // Menghitung posisi baru secara acak dalam container
            const newTop = Math.random() * (containerHeight - btnHeight);
            const newLeft = Math.random() * (containerWidth - btnWidth);

            // Memindahkan tombol ke posisi baru hanya ketika kursor mendekat
            noBtn.style.transform = `translate(${newLeft}px, ${newTop}px)`;
        }
        