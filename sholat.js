// ==========================================
// ENGINE JADWAL SHOLAT & FITUR ISLAMI
// ==========================================
const SHOLAT_STATE = {
    kotaId: localStorage.getItem('sholat_kota_id') || '1422', // Default: 1422 (Mataram)
    kotaNama: localStorage.getItem('sholat_kota_nama') || 'KOTA MATARAM',
    jadwalHariIni: null,
    waktuSholatArr: ['subuh', 'terbit', 'dhuha', 'dzuhur', 'ashar', 'maghrib', 'isya'],
    nextPrayerInterval: null
};

// 1. Inisialisasi Tanggal Masehi & Hijriah (Native JS, Tanpa Framework)
function updateTanggalIslami() {
    const now = new Date();
    
    // Format Masehi
    const opsiMasehi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('tanggalMasehi').textContent = now.toLocaleDateString('id-ID', opsiMasehi);
    
    // Perbaikan Format Hijriah
    const bulanHijriah = [
        'Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 
        'Jumadil Awal', 'Jumadil Akhir', 'Rajab', "Sya'ban", 
        'Ramadhan', 'Syawal', "Dzulqa'dah", 'Dzulhijjah'
    ];
    
    try {
        // Menggunakan en-US untuk memaksa output angka, guna menghindari bug translasi native Android
        const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic', { 
            day: 'numeric', 
            month: 'numeric', 
            year: 'numeric' 
        });
        const parts = formatter.formatToParts(now);
        
        // Ekstrak angka tanggal, bulan, dan tahun
        let d = parts.find(p => p.type === 'day').value;
        let m = parts.find(p => p.type === 'month').value;
        let y = parts.find(p => p.type === 'year').value;

        // Cocokkan angka bulan (dikurangi 1 karena array dimulai dari 0)
        document.getElementById('tanggalHijriah').textContent = `${d} ${bulanHijriah[parseInt(m) - 1]} ${y} H`;
    } catch(e) {
        document.getElementById('tanggalHijriah').textContent = "Kalender Hijriah";
    }
}

// 2. Fetch API & Sistem Caching
async function fetchJadwalSholat() {
    const now = new Date();
    const tahun = now.getFullYear();
    const bulan = String(now.getMonth() + 1).padStart(2, '0');
    const hari = String(now.getDate()).padStart(2, '0');
    const tanggalTujuan = `${tahun}/${bulan}/${hari}`;
    const cacheKey = `sholat_${SHOLAT_STATE.kotaId}_${tanggalTujuan}`;

    document.getElementById('namaLokasi').textContent = SHOLAT_STATE.kotaNama;

    // Cek Local Storage (Offline Support)
    const dataCache = localStorage.getItem(cacheKey);
    if (dataCache) {
        SHOLAT_STATE.jadwalHariIni = JSON.parse(dataCache);
        document.getElementById('statusCacheSholat').innerHTML = '<i class="fa-solid fa-wifi-slash"></i> Mode Offline';
        renderJadwalGrid();
        mulaiHitungMundur();
        
        // Tetap coba perbarui di background jika online
        if (navigator.onLine) tarikDariServer(tanggalTujuan, cacheKey, false);
        return;
    }

    if (!navigator.onLine) {
        showToast('Offline! Tidak ada data sholat tersimpan untuk hari ini.', 'error');
        return;
    }

    tarikDariServer(tanggalTujuan, cacheKey, true);
}

async function tarikDariServer(tanggalTujuan, cacheKey, renderLangsung) {
    try {
        const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${SHOLAT_STATE.kotaId}/${tanggalTujuan}`);
        const res = await response.json();
        
        if (res.status && res.data && res.data.jadwal) {
            SHOLAT_STATE.jadwalHariIni = res.data.jadwal;
            // Simpan ke Cache
            localStorage.setItem(cacheKey, JSON.stringify(res.data.jadwal));
            document.getElementById('statusCacheSholat').innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Tersinkron';
            
            if (renderLangsung) {
                renderJadwalGrid();
                mulaiHitungMundur();
            }
        }
    } catch (e) {
        if(renderLangsung) document.getElementById('prayerGrid').innerHTML = '<div class="text-center text-danger py-4">Gagal memuat jadwal. Cek koneksi.</div>';
    }
}

// 3. Render Grid Tampilan Waktu Sholat
function renderJadwalGrid() {
    const grid = document.getElementById('prayerGrid');
    if (!SHOLAT_STATE.jadwalHariIni) return;

    let html = '';
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();

    // Deteksi sholat mana yang saat ini sedang berlangsung dengan membaca dari Isya mundur ke Subuh
    let namaAktif = null;
    let waktuTerbalik = [...SHOLAT_STATE.waktuSholatArr].reverse();
    for (let nama of waktuTerbalik) {
        if (SHOLAT_STATE.jadwalHariIni[nama]) {
            const w = SHOLAT_STATE.jadwalHariIni[nama].split(':');
            const waktuMins = parseInt(w[0]) * 60 + parseInt(w[1]);
            if (currentMins >= waktuMins) {
                namaAktif = nama;
                break;
            }
        }
    }

    SHOLAT_STATE.waktuSholatArr.forEach(nama => {
        if (!SHOLAT_STATE.jadwalHariIni[nama]) return;
        const waktuStr = SHOLAT_STATE.jadwalHariIni[nama];
        const isAktif = (nama === namaAktif);

        const bgClass = isAktif ? 'bg-emerald-100 border-emerald-500' : 'bg-gray-50 border-gray-200';
        const textClass = isAktif ? 'text-emerald-800 font-bold' : 'text-gray-700';
        const iconPulse = isAktif ? '<i class="fa-solid fa-clock-rotate-left fa-spin-pulse text-emerald-600"></i>' : '';

        html += `
        <div class="flex justify-between items-center p-3 border-2 rounded-xl ${bgClass} transition-all">
            <div class="capitalize ${textClass} flex items-center gap-2">${iconPulse} ${nama}</div>
            <div class="font-black ${textClass} text-lg" style="font-family: monospace;">${waktuStr}</div>
        </div>`;
    });

    grid.innerHTML = html;
}

// 4. Kalkulasi Countdown Waktu Sholat Berikutnya
function mulaiHitungMundur() {
    if (SHOLAT_STATE.nextPrayerInterval) clearInterval(SHOLAT_STATE.nextPrayerInterval);
    
    SHOLAT_STATE.nextPrayerInterval = setInterval(() => {
        if (!SHOLAT_STATE.jadwalHariIni) return;

        const now = new Date();
        const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        
        let waktuBerikutnya = null;
        let namaBerikutnya = null;

        for (let nama of SHOLAT_STATE.waktuSholatArr) {
            if (nama === 'terbit' || nama === 'dhuha') continue; // Fokus 5 Waktu utama
            
            const w = SHOLAT_STATE.jadwalHariIni[nama].split(':');
            const pTime = parseInt(w[0]) * 3600 + parseInt(w[1]) * 60;
            
            if (pTime > currentTime) {
                waktuBerikutnya = pTime;
                namaBerikutnya = nama;
                break;
            }
        }

        // Jika semua sholat hari ini sudah lewat, targetkan Subuh besok
        if (!waktuBerikutnya) {
            waktuBerikutnya = (24 * 3600) + (parseInt(SHOLAT_STATE.jadwalHariIni['subuh'].split(':')[0]) * 3600 + parseInt(SHOLAT_STATE.jadwalHariIni['subuh'].split(':')[1]) * 60);
            namaBerikutnya = 'subuh (Esok)';
        }

        const sisaDetik = waktuBerikutnya - currentTime;
        
        // Peringatan Alarm 2 Menit (120 Detik) Sebelum Sholat
        if (sisaDetik === 120) {
            showToast(`Bersiap! 2 menit lagi menuju waktu sholat ${namaBerikutnya.toUpperCase()}`, 'warning');
            playTone(800, 'triangle', 2);
        }

        // Pemicu Notifikasi (Ketika waktu sholat pas masuk)
        if (sisaDetik === 0) {
            showToast(`Waktu ${namaBerikutnya.toUpperCase()} telah masuk wilayah ${SHOLAT_STATE.kotaNama}`, 'success');
            playTone(600, 'sine', 1.5); 
            renderJadwalGrid(); 
            
            // Eksekusi Popout Warning
            const popout = document.getElementById('sholatPopout');
            document.getElementById('sholatPopoutName').textContent = namaBerikutnya;
            popout.classList.remove('hidden');
            
            // Popout hilang otomatis dalam 5 Menit
            setTimeout(() => {
                popout.classList.add('hidden');
            }, 5 * 60 * 1000);
        }

        const h = Math.floor(sisaDetik / 3600);
        const m = Math.floor((sisaDetik % 3600) / 60);
        const s = sisaDetik % 60;

        document.getElementById('nextPrayerName').textContent = namaBerikutnya.toUpperCase();
        document.getElementById('prayerCountdown').textContent = 
            String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
            
    }, 1000);
}

// 5. Fitur Pencarian & Pemilihan Kota Manual
document.getElementById('btnGantiLokasi').addEventListener('click', () => {
    document.getElementById('lokasiInputArea').classList.toggle('hidden');
});

document.getElementById('btnCariKota').addEventListener('click', async () => {
    const query = document.getElementById('inputKota').value.trim();
    if (!query) return;
    
    const hasilDiv = document.getElementById('hasilPencarianKota');
    hasilDiv.innerHTML = '<span class="text-muted"><i class="fa-solid fa-spinner fa-spin"></i> Mencari...</span>';
    
    try {
        const res = await (await fetch(`https://api.myquran.com/v2/sholat/kota/cari/${query}`)).json();
        if (res.status && res.data.length > 0) {
            let listHtml = '';
            res.data.forEach(kota => {
                listHtml += `<div class="p-2 bg-gray-100 hover:bg-emerald-100 cursor-pointer rounded border border-gray-200" 
                              onclick="pilihKotaSholat('${kota.id}', '${kota.lokasi}')">
                              <i class="fa-solid fa-map-pin text-emerald-600 mr-1"></i> ${kota.lokasi}
                             </div>`;
            });
            hasilDiv.innerHTML = listHtml;
        } else {
            hasilDiv.innerHTML = '<span class="text-danger">Kota tidak ditemukan</span>';
        }
    } catch(e) {
        hasilDiv.innerHTML = '<span class="text-danger">Gagal mencari. Cek koneksi.</span>';
    }
});

window.pilihKotaSholat = function(id, nama) {
    SHOLAT_STATE.kotaId = id;
    SHOLAT_STATE.kotaNama = nama;
    localStorage.setItem('sholat_kota_id', id);
    localStorage.setItem('sholat_kota_nama', nama);
    
    document.getElementById('lokasiInputArea').classList.add('hidden');
    document.getElementById('inputKota').value = '';
    document.getElementById('hasilPencarianKota').innerHTML = '';
    
    // --- PERBAIKAN: Hentikan timer lama dan berikan efek loading instan ---
    if (SHOLAT_STATE.nextPrayerInterval) {
        clearInterval(SHOLAT_STATE.nextPrayerInterval);
    }
    document.getElementById('nextPrayerName').textContent = '...';
    document.getElementById('prayerCountdown').textContent = '--:--:--';
    document.getElementById('prayerGrid').innerHTML = '<div class="text-center text-sm text-emerald-600 font-bold py-4"><i class="fa-solid fa-spinner fa-spin"></i> Menyesuaikan jadwal kota...</div>';
    // ----------------------------------------------------------------------
    
    showToast(`Lokasi diubah ke ${nama}`, 'success');
    fetchJadwalSholat(); // Panggil data kota baru
};

// 6. Action Button Tambahan (Mockup)
document.getElementById('btnArahKiblat').addEventListener('click', () => {
    // Membuka Google Search Kiblat Finder (Solusi ter-ringan tanpa Framework Compass JS)
    window.open('https://qiblafinder.withgoogle.com/', '_blank');
});

document.getElementById('btnMasjidTerdekat').addEventListener('click', () => {
    // Memanfaatkan URI scheme Google Maps
    window.open('https://www.google.com/maps/search/masjid+terdekat', '_blank');
});

// Panggil fungsi saat tab diklik
document.getElementById('sholatTab').addEventListener('click', () => {
    updateTanggalIslami();
    fetchJadwalSholat();
});
