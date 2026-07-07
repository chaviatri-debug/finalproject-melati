// Menyimpan kumpulan data kutipan motivasi secara statis di dalam Object.
// Struktur data menggunakan kombinasi Object dan Array untuk memudahkan akses berdasarkan key (mood).
const databaseMotivasi = {
  "Senang": [
    "Bagus sekali! Pertahankan energi positifmu hari ini. 😄",
    "Senyummu menular! Bagikan kebahagiaanmu dengan orang di sekitarmu.",
    "Hari yang luar biasa! Jadikan momen ini untuk mengerjakan tugas dengan semangat.",
    "Nikmati setiap momen baik hari ini, sekecil apa pun itu.",
    "Semangatmu sedang tinggi. Gunakan untuk menyelesaikan hal-hal penting.",
    "Jangan lupa bersyukur atas pencapaian kecilmu hari ini.",
    "Energi positifmu bisa menjadi semangat bagi orang lain.",
    "Terus pertahankan senyum itu. Hari ini masih penuh kemungkinan baik.",
    "Momen bahagia seperti ini layak untuk dikenang.",
    "Semoga kebahagiaanmu hari ini membawa keberuntungan di langkah berikutnya.",
    "Kamu pantas menikmati hasil dari kerja kerasmu.",
    "Teruslah percaya diri, kamu sedang berkembang ke arah yang lebih baik.",
    "Hari ini adalah kesempatan bagus untuk mencoba hal baru.",
    "Semoga semangatmu bertahan hingga akhir hari.",
    "Jangan lupa berbagi kebahagiaan dengan orang-orang terdekat."
  ],

  "Sedih": [
    "Tidak apa-apa merasa sedih. Menangislah jika itu membuatmu lega. 💙",
    "Kesedihan ini hanya sementara. Tarik napas, esok adalah hari yang baru.",
    "Kamu tidak sendirian. Jangan ragu untuk bercerita kepada orang yang kamu percaya.",
    "Hari yang berat bukan berarti hidupmu akan selalu berat.",
    "Beri dirimu waktu untuk beristirahat dan memulihkan hati.",
    "Pelan-pelan saja. Kamu tidak harus segera merasa baik-baik saja.",
    "Tidak semua luka terlihat, tetapi semuanya layak untuk dipulihkan.",
    "Tetap bertahan. Akan ada hari yang lebih cerah menunggumu.",
    "Ingat, badai selalu berlalu pada waktunya.",
    "Satu langkah kecil hari ini sudah merupakan kemajuan.",
    "Jangan terlalu keras pada dirimu sendiri.",
    "Kamu sudah melakukan yang terbaik sejauh ini.",
    "Perasaan ini akan berlalu seiring berjalannya waktu.",
    "Semoga besok membawa lebih banyak harapan untukmu.",
    "Kamu berharga, bahkan di hari-hari ketika kamu merasa rapuh."
  ],

  "Stres": [
    "Tugas memang menumpuk. Ambil jeda 15 menit, dunia tidak akan runtuh karena kamu beristirahat. 🌿",
    "Jangan paksa dirimu. Kerjakan satu per satu dari yang paling mudah.",
    "Tarik napas dalam. Minum segelas air, dan jauhkan diri dari layar sejenak.",
    "Tidak semua pekerjaan harus selesai sekaligus.",
    "Mulailah dari tugas yang paling sederhana agar lebih ringan.",
    "Istirahat sejenak bisa membuatmu kembali lebih fokus.",
    "Tubuh dan pikiranmu juga membutuhkan jeda.",
    "Rapikan meja kerjamu untuk membantu pikiran lebih tenang.",
    "Kurangi tekanan dengan membuat daftar prioritas.",
    "Selesaikan sedikit demi sedikit. Progres tetaplah progres.",
    "Jangan lupa makan dan minum dengan cukup.",
    "Tidak apa-apa meminta bantuan jika beban terasa terlalu berat.",
    "Kamu tidak harus sempurna dalam segala hal.",
    "Luangkan beberapa menit untuk menghirup udara segar.",
    "Besok masih ada kesempatan untuk melanjutkan pekerjaanmu."
  ],

  "Cemas": [
    "Kecemasanmu tidak mendefinisikan masa depanmu. Fokuslah pada apa yang bisa kamu kendalikan hari ini. 🍃",
    "Overthinking hanya akan menguras energimu. Coba alihkan pikiran dengan mendengarkan musik.",
    "Tuliskan apa yang membuatmu cemas di kertas, lalu buang. Kamu lebih kuat dari kecemasanmu.",
    "Tarik napas perlahan dan fokus pada saat ini.",
    "Tidak semua kekhawatiran akan benar-benar terjadi.",
    "Berikan dirimu kesempatan untuk beristirahat dari pikiran yang sibuk.",
    "Lakukan satu hal kecil yang bisa kamu kendalikan sekarang.",
    "Kamu sudah berhasil melewati banyak tantangan sebelumnya.",
    "Percayalah bahwa kamu mampu menghadapi apa yang datang nanti.",
    "Jangan biarkan pikiran buruk mengambil alih harimu.",
    "Minumlah segelas air dan tenangkan dirimu sejenak.",
    "Tidak apa-apa jika semuanya belum berjalan sesuai rencana.",
    "Hari ini cukup dijalani satu langkah demi satu langkah.",
    "Kamu lebih kuat daripada rasa takutmu.",
    "Fokus pada solusi, bukan hanya kekhawatirannya."
  ],

  "Marah": [
    "Marah itu emosi yang wajar. Tapi jangan biarkan ia mengendalikan tindakanmu. Tarik napas panjang. 🌬️",
    "Mundur selangkah. Jangan mengambil keputusan apa pun saat pikiran sedang panas.",
    "Cari tempat yang tenang, pejamkan mata, dan hitung mundur dari 10.",
    "Beri dirimu waktu sebelum merespons sesuatu.",
    "Tidak semua masalah harus diselesaikan saat ini juga.",
    "Minumlah air dan tenangkan pikiranmu terlebih dahulu.",
    "Diam sejenak terkadang lebih bijaksana daripada bereaksi cepat.",
    "Fokuslah pada solusi, bukan hanya emosinya.",
    "Jangan biarkan kemarahan merusak hubungan yang berharga.",
    "Tarik napas perlahan hingga tubuhmu terasa lebih rileks.",
    "Besok mungkin masalah ini tidak terasa sebesar hari ini.",
    "Bersikap tenang adalah bentuk kekuatan.",
    "Berjalan sebentar bisa membantu meredakan emosi.",
    "Kamu tetap bisa mengendalikan tindakanmu meski sedang marah.",
    "Ambil waktu untuk berpikir sebelum berbicara."
  ],

  "Capek": [
    "Kerja kerasmu luar biasa, tapi tubuhmu juga butuh istirahat. Tidurlah. 🛌",
    "Jangan merasa bersalah karena mengambil waktu untuk rebahan. Kamu pantas mendapatkannya.",
    "Matikan laptopmu. Waktunya mengisi ulang energi agar besok bisa produktif lagi.",
    "Tubuhmu sedang meminta waktu untuk beristirahat.",
    "Tidak semua hari harus dipenuhi produktivitas.",
    "Istirahat juga merupakan bagian dari proses mencapai tujuan.",
    "Tidur yang cukup bisa membuat harimu jauh lebih baik.",
    "Nikmati waktu santai tanpa merasa bersalah.",
    "Berikan tubuhmu kesempatan untuk memulihkan tenaga.",
    "Besok akan terasa lebih ringan jika kamu beristirahat hari ini.",
    "Jangan abaikan rasa lelah yang sudah kamu rasakan.",
    "Kamu sudah bekerja keras. Saatnya mengisi ulang energi.",
    "Minumlah air, makan yang cukup, lalu beristirahat.",
    "Tidak apa-apa berjalan lebih pelan hari ini.",
    "Kesehatanmu sama pentingnya dengan semua pekerjaanmu."
  ]
};


async function dapatkanMotivasi(mood) {
    // Mensimulasikan proses asinkron (waktu tunggu server) menggunakan Promise dan setTimeout.
    // Bertujuan untuk mendemonstrasikan penerapan teknik Async/Await pada alur program.
    await new Promise(resolve => setTimeout(resolve, 700));
    
    let daftarQuotes = databaseMotivasi[mood];
    
    // Mengambil kutipan secara acak (randomized selection) dari dalam array
    let randomIndex = Math.floor(Math.random() * daftarQuotes.length);
    return daftarQuotes[randomIndex];
}


async function prosesMood(kondisiUser) {
    const elemenPesan = document.getElementById("kotak-pesan");
    
    // Memberikan indikator proses loading kepada pengguna
    elemenPesan.className = "alert alert-info text-center";
    elemenPesan.innerHTML = "<em>Mencari pesan khusus untukmu... ⏳</em>";

    // Memanggil fungsi asynchronous untuk mendapatkan hasil kutipan
    const pesanMotivasi = await dapatkanMotivasi(kondisiUser);

    // Pengkondisian (If-Else) untuk memberikan warna dinamis pada elemen peringatan (Alert)
    let warnaAlert = "alert-secondary";
    if (kondisiUser === "Senang") warnaAlert = "alert-success";
    else if (kondisiUser === "Sedih") warnaAlert = "alert-warning";
    else if (kondisiUser === "Stres") warnaAlert = "alert-danger";
    else if (kondisiUser === "Cemas") warnaAlert = "alert-info text-dark";
    else if (kondisiUser === "Marah") warnaAlert = "alert-dark text-white";
    else if (kondisiUser === "Capek") warnaAlert = "alert-secondary";

    // Memperbarui antarmuka pengguna (UI) dengan data yang berhasil didapatkan
    elemenPesan.className = `alert ${warnaAlert} text-center shadow-sm`;
    elemenPesan.innerHTML = `<h5 class="mb-2">Kamu merasa <strong>${kondisiUser}</strong></h5>
                             <p class="mb-0 fs-5">"${pesanMotivasi}"</p>`;

    // Menyimpan rekam jejak (history) input pengguna ke penyimpanan lokal
    simpanKeRiwayat(kondisiUser);
}

// Memasang Event Listener secara iteratif pada elemen tombol yang tersedia
const daftarMood = ["Senang", "Sedih", "Stres", "Cemas", "Marah", "Capek"];
daftarMood.forEach(mood => {
    let tombol = document.getElementById(`btn${mood}`);
    if (tombol) {
        tombol.addEventListener("click", () => prosesMood(mood));
    }
});

function simpanKeRiwayat(kondisi) {
    // Mengambil data lama dari LocalStorage, jika kosong inisialisasi dengan array kosong
    let riwayatMood = JSON.parse(localStorage.getItem("dataRiwayatMood")) || [];
    let waktuSekarang = new Date();
    
    let entriBaru = {
        tanggal: waktuSekarang.toLocaleDateString('id-ID'),
        waktu: waktuSekarang.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        mood: kondisi
    };

    riwayatMood.push(entriBaru);
    
    // Menyimpan kembali data yang sudah diperbarui ke dalam LocalStorage
    localStorage.setItem("dataRiwayatMood", JSON.stringify(riwayatMood));
    renderTabel();
}

function renderTabel() {
    let riwayatMood = JSON.parse(localStorage.getItem("dataRiwayatMood")) || [];
    const tbody = document.getElementById("tbody-riwayat");
    
    // Mereset isi tabel sebelum merender ulang data
    tbody.innerHTML = "";

    // Penanganan kondisi jika riwayat masih kosong
    if (riwayatMood.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">Belum ada riwayat mood.</td></tr>`;
        return;
    }

    // Melakukan iterasi (perulangan) untuk setiap data riwayat dan menampilkannya di tabel
    riwayatMood.forEach((item, index) => {
        let warnaBadge = "bg-secondary";
        if (item.mood === "Senang") warnaBadge = "bg-success";
        else if (item.mood === "Sedih") warnaBadge = "bg-warning text-dark";
        else if (item.mood === "Stres") warnaBadge = "bg-danger";
        else if (item.mood === "Cemas") warnaBadge = "bg-info text-dark";
        else if (item.mood === "Marah") warnaBadge = "bg-dark";
        else if (item.mood === "Capek") warnaBadge = "bg-secondary";

        let baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td><span class="badge ${warnaBadge}">${item.mood}</span></td>
        `;
        tbody.appendChild(baris);
    });
}

// Event Listener untuk menghapus seluruh riwayat lokal
document.getElementById("btnHapusRiwayat").addEventListener("click", () => {
    if(confirm("Yakin ingin menghapus semua riwayat mood?")) {
        localStorage.removeItem("dataRiwayatMood");
        renderTabel();
    }
});


let timerNapas; 

function mulaiNapas() {
    const teks = document.getElementById("teks-instruksi");
    const visual = document.getElementById("visual-napas");
    const btnMulai = document.getElementById("btnMulai");
    const btnBerhenti = document.getElementById("btnBerhenti");

    btnMulai.disabled = true;
    btnBerhenti.disabled = false;

    // Fungsi siklus internal untuk mengatur alur pernapasan
    function siklusNapas() {
        teks.innerText = "🌬️ Tarik Napas Perlahan...";
        visual.classList.add("membesar");

        // Transisi fase hembuskan napas setelah jeda 4 detik
        setTimeout(() => {
            teks.innerText = "😌 Hembuskan Perlahan...";
            visual.classList.remove("membesar");
        }, 4000);
    }

    // Eksekusi siklus pertama, kemudian ulangi setiap 8 detik
    siklusNapas();
    timerNapas = setInterval(siklusNapas, 8000);
}

function berhentiNapas() {
    // Menghentikan interval yang sedang berjalan
    clearInterval(timerNapas);
    
    const teks = document.getElementById("teks-instruksi");
    const visual = document.getElementById("visual-napas");
    
    teks.innerText = "Latihan dihentikan. Siap untuk mulai lagi?";
    visual.classList.remove("membesar");

    document.getElementById("btnMulai").disabled = false;
    document.getElementById("btnBerhenti").disabled = true;
}

document.getElementById("btnMulai").addEventListener("click", mulaiNapas);
document.getElementById("btnBerhenti").addEventListener("click", berhentiNapas);

// Menginisialisasi perenderan tabel segera setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", renderTabel);