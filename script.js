if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('./sw.js', { 
                scope: './' 
            });
            
            console.log('✅ Service Worker registered:', registration.scope);
            
            // Tunggu worker aktif
            const worker = registration.active || 
                          (await navigator.serviceWorker.ready).active;
            
            if (worker) {
                // Kirim pesan untuk caching
                worker.postMessage({ 
                    type: 'CACHE_OFFLINE_ASSETS',
                    timestamp: Date.now() 
                });
                console.log('📦 Pesan caching dikirim ke Service Worker');
            }
            
        } catch (error) {
            console.warn('⚠️ Service Worker tidak terdaftar:', error);
        }
    });
}
    const TEACHERS = [
        { name: 'Budiman, S. Pd.', isAdmin: true, subjects: [], adminType: 'admin' },
        { name: 'Adi Hardiyansyah, M. Pd.', isAdmin: true, subjects: ['IPA Terpadu'], adminType: 'admin' },
        { name: 'Agus Sarkawi, S. T.', isAdmin: true, subjects: ['Informatika'], adminType: 'agus' },
        { name: 'Abdul Hafizh Hizam, Lc.', subjects: ['Aqidah'] },
        { name: 'Adiandri Suhaili, M. Pd.', subjects: ['IPA Terpadu'] },
        { name: 'Ahmad Arroiyan, Lc.', subjects: ['Bahasa Arab', 'Qowaidul Lughoh', 'Kitabah & Khat'] },
        { name: 'Ahmad Mahsan Haikal, Lc.', subjects: ['Kitabah & Khat', 'Bahasa Arab', "Ta'bir"] },
        { name: 'Andri Jaelani, Lc., M. H.', subjects: ["Ta'bir", 'Kitabah & Khat'] },
        { name: 'Arsyad, S. Pd.', subjects: ['Bahasa Indonesia'] },
        { name: 'Firman, S. Pd.', subjects: ['Bahasa Indonesia'] },
        { name: 'Hafizh Bagis, Lc.', subjects: ['Bahasa Arab', 'Kitabah & Khat'] },
        { name: 'Hairul Umam Insani, S. Pd.', subjects: ['Bahasa Inggris'] },
        { name: 'Haqikahurrahman, S. Pd.', subjects: ['Matematika'] },
        { name: 'Jamaluddin, Lc.', subjects: ['Fiqih'] },
        { name: 'Jumadil Awal, SE.', subjects: ['IPS', 'Pancasila'] },
        { name: 'Junaidi, S. Pd.', subjects: ['IPS', 'Pancasila'] },
        { name: 'L. Muh. Baidui, M. Pd.', subjects: ['IPA Terpadu'] },
        { name: 'Lalu M. Sulistiono, SP.', subjects: ['Fiqih'] },
        { name: 'Ludfi Rusdiyono, S. Pd.', subjects: ['Bahasa Inggris'] },
        { name: 'M. Tahir, M. Pd.', subjects: ['PJOK'] },
        { name: 'Muhammad Al Huraibi, Lc.', subjects: ['Bahasa Arab'] },
        { name: 'Saifuddin Hidayat, S. Pd.', subjects: ['Matematika', 'SBDP'] },
        { name: 'Salman, S. Pd. I.', subjects: ['Adab Akhlak'] },
        { name: 'Syahrul Hasyim, Lc.', subjects: ['Aqidah'] },
        { name: 'Syamsul Bahri, Lc.', subjects: ['Kitabah & Khat', 'Bahasa Arab', 'Qowaidul Lughoh'] },
        { name: 'Taufiqurrahman, Lc.', subjects: ['Bahasa Arab', 'Kitabah & Khat'] },
        { name: 'Zulfi Farid, Lc.', subjects: ['Bahasa Arab', "Ta'bir"] },
        { name: 'Zulkarnaen Teguh W, S. Pd.', subjects: ['Hadits'] },
        { name: 'Ahmad Fazhlurrahman', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Abdul Hanan', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Akmaluddin', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Aminullah', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Azza Mahsari, S. Pd.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Fauzul Kabir, S. Pd.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Haris Fajriansyah, B. A.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Irfan Hidayat, S.Pd.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Iswahyudi, S. T.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Maliki', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Musalim Amin, S. Pd. I.', subjects: ['Tahfizhul Qur\'an'] },
        { name: 'Ukasyah', subjects: ['Tahfizhul Qur\'an'] }
    ];

    const CLASSES = ['7A', '7B', '7C', '7D', '7E', '8A', '8B', '8C', '8D', '8E', '9A', '9B', '9C', '9D'];

// HELPER: Paksa semua operasi waktu frontend menggunakan WITA (UTC+8)
function getCurrentWITA() {
    const localNow = new Date();
    const utc = localNow.getTime() + (localNow.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 8)); // Paksa ke UTC+8
}


    let GAS_URL = localStorage.getItem('GAS_URL') || 'https://script.google.com/macros/s/AKfycbzxWViRYvQjYP4J42TznIC0wRFp-PLTGU76h90X8u8hgHJKSRwgfVGE82RbANkow4ikhg/exec';
        //'https://script.google.com/macros/s/AKfycbxfWbpuYgFis9tumFFOynaNrjZueRCuzH2akyLWg0Y4mr9nY1tMAav7yd1hv0wsPHWKOA/exec';
        //'https://script.google.com/macros/s/AKfycbwTPzLaw_wwbvVu-GzbUiUkK9jIqh7d5N_BXY9PJrLk3jk-3qvsRgoBiFOtTcaIHmtC/exec';

// Fungsi untuk mendapatkan tanggal lokal YYYY-MM-DD (WITA)
function getLocalDateString(d = getCurrentWITA()) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// FUNGSI CEK PEKAN GANJIL / GENAP
function isEvenWeek(d = new Date()) {
    const date = new Date(d.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    const week1 = new Date(date.getFullYear(), 0, 4);
    const weekNumber = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    return weekNumber % 2 === 0;
}

// ==========================================
// DAFTAR HARI LIBUR / KEGIATAN SEKOLAH
// ==========================================

// Daftar Tanggal Libur / Merah (Termasuk 17 Agustus)
const liburSpesifik = [
    { tanggal: '2026-08-17', keterangan: '17 Agustus: Upacara / Hari Kemerdekaan' },
    { tanggal: '2026-09-25', keterangan: 'Pembagian Rapor' },
    { tanggal: '2026-09-01', keterangan: 'KKG & Pembagian Gaji' }
];

// Rentang Tanggal Libur (Warna Merah)
const rentangLibur = [
    { mulai: '2026-07-01', selesai: '2026-07-31' }, // Belum Mulai Aktif Aplikasi Absensinya
    { mulai: '2026-08-01', selesai: '2026-08-09' }, // Belum Mulai Aktif Aplikasi Absensinya
    { mulai: '2026-12-21', selesai: '2027-01-03' }, // Libur Semester Ganjil
    { mulai: '2027-02-08', selesai: '2027-02-09' }, // Libur Awal Ramadhan
    { mulai: '2027-02-22', selesai: '2027-03-20' }, // Libur Ramadhan
];

// Rentang Kegiatan / STS / Festival (Warna Hijau)
const rentangKegiatan = [
    { mulai: '2026-09-14', selesai: '2026-09-23', nama: 'Sumatif Tengah Semester (STS)' },
    { mulai: '2026-10-05', selesai: '2026-10-07', nama: 'Audisi Festival Internal Abu Hurairah' },
    { mulai: '2026-10-23', selesai: '2026-10-24', nama: "Itqan al-Qur'an & Hadits" },
    { mulai: '2026-11-09', selesai: '2026-11-13', nama: 'Final Festival Internal' },
    { mulai: '2026-11-30', selesai: '2026-12-12', nama: 'Sumatif Akhir Semester (SAS)' },
    { mulai: '2027-01-28', selesai: '2027-01-30', nama: 'Festival External Bali Nusa Tenggara' },
    { mulai: '2027-03-24', selesai: '2027-04-02', nama: 'STS Genap' },
    { mulai: '2027-04-23', selesai: '2027-04-24', nama: "Itqan al-Qur'an & Hadits" }
];


function getStatusHariIni(dateObj) {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    const tanggalFormat = `${y}-${m}-${d}`;

    // Cek Libur Spesifik (Ganti bagian ini)
    const libur = liburSpesifik.find(l => l.tanggal === tanggalFormat);
    if (libur) {
        return { status: 'libur', label: libur.keterangan };
    }

    // Cek Rentang Libur (Libur Panjang)
    for (let r of rentangLibur) {
        if (tanggalFormat >= r.mulai && tanggalFormat <= r.selesai) {
            return { status: 'libur', label: 'Libur Sekolah / Ramadhan' };
        }
    }

    // Cek Rentang Kegiatan (KBM Ditiadakan)
    for (let r of rentangKegiatan) {
        if (tanggalFormat >= r.mulai && tanggalFormat <= r.selesai) {
            return { status: 'kegiatan', label: r.nama };
        }
    }

    return { status: 'normal', label: '' };
}


function isLiburSekolah(dateObj) {
    // Dengan fungsi ini, kita cukup memanggil getStatusHariIni.
    // Jika statusnya BUKAN 'normal' (berarti sedang libur atau ada kegiatan), 
    // maka dianggap jadwal reguler libur, sehingga Alpha/Terlewat tidak akan dihitung.
    const status = getStatusHariIni(dateObj);
    return status.status !== 'normal';
}

const WALI_KELAS_MAP = {
        "Hairul Umam Insani, S. Pd.": "7A", "Hafizh Bagis, Lc.": "7B", "Salman, S. Pd. I.": "7C",
        "Haqikahurrahman, S. Pd.": "7D", "Zulkarnaen Teguh W, S. Pd.": "7E",
        "Firman, S. Pd.": "8A", "Syahrul Hasyim, Lc.": "8B", "Adiandri Suhaili, M. Pd.": "8C",
        "M. Tahir, M. Pd.": "8D", "Ahmad Mahsan Haikal, Lc.": "8E",
        "Saifuddin Hidayat, S. Pd.": "9A", "Syamsul Bahri, Lc.": "9B",
        "Ludfi Rusdiyono, S. Pd.": "9C", "Ahmad Arroiyan, Lc.": "9D"
    };

    const JADWAL_WAKTU = {
        reguler: {
            'Pembiasaan Pagi': { masuk: '07:15', keluar: '07:30' },
            'JP 1': { masuk: '07:30', keluar: '08:10' },
            'JP 2': { masuk: '08:10', keluar: '08:50' },
            'JP 3': { masuk: '08:50', keluar: '09:30' },
            'JP 4': { masuk: '09:30', keluar: '10:10' },
            'JP 5': { masuk: '10:40', keluar: '11:15' },
            'JP 6': { masuk: '11:15', keluar: '11:50' },
            'JP 7': { masuk: '11:50', keluar: '12:25' },
            'JP 8': { masuk: '12:25', keluar: '13:00' }
        },
        jumat: {
                        'Pembiasaan Pagi': { masuk: '07:15', keluar: '07:30' },
            'JP 1': { masuk: '07:30', keluar: '08:05' },
            'JP 2': { masuk: '08:05', keluar: '08:40' },
            'JP 3': { masuk: '08:40', keluar: '09:15' },
            'JP 4': { masuk: '09:15', keluar: '09:50' },
            'JP 5': { masuk: '10:20', keluar: '10:55' },
            'JP 6': { masuk: '10:55', keluar: '11:30' }
        }
    };


    function formatKopelClass(kelas, mapel) {
        if (!kelas || !mapel) return kelas;
        const normMapel = mapel.toLowerCase();
        let group = null;

        if (normMapel.includes('tahfiz')) {
            if (['7A', '7B', '7C'].includes(kelas)) group = ['7A', '7B', '7C'];
            else if (['7D', '7E', '8A'].includes(kelas)) group = ['7D', '7E', '8A'];
            else if (['8B', '8C', '8D', '8E'].includes(kelas)) group = ['8B', '8C', '8D', '8E'];
            else if (['9A', '9B', '9C', '9D'].includes(kelas)) group = ['9A', '9B', '9C', '9D'];
        } else if (normMapel.includes('pjok') || normMapel.includes('olahraga')) {
            if (['9A', '9B'].includes(kelas)) group = ['9A', '9B'];
            else if (['9C', '9D'].includes(kelas)) group = ['9C', '9D'];
            else if (['7D', '7E'].includes(kelas)) group = ['7D', '7E'];
            else if (['7A', '7B'].includes(kelas)) group = ['7A', '7B'];
                        else if (['8A', '8B'].includes(kelas)) group = ['8A', '8B'];
                        else if (['7C', '8E'].includes(kelas)) group = ['7C', '8E'];
        }

        if (group) {
            return group.map(c => c === kelas ? `(${c})` : c).join(',');
        }
        return kelas;
    }

// Fungsi untuk mengambil daftar santri kelas kopel (Tahfizh / PJOK)
function getDaftarSantriKopel(baseClass, subject) {
    let classesToFetch = [baseClass];
    let subjectLower = (subject || "").toLowerCase();

    // Logika Kopel Tahfizh
    if (subjectLower.includes('tahfiz')) {
        const kopelTahfizh = [
            ['7A', '7B', '7C'],
            ['7D', '7E', '8A'],
            ['8B', '8C', '8D', '8E'],
            ['9A', '9B', '9C', '9D']
        ];
        for (let group of kopelTahfizh) {
            if (group.includes(baseClass)) {
                classesToFetch = group;
                break;
            }
        }
    } 
    // Logika Kopel PJOK (Opsional, sudah disiapkan jika dibutuhkan)
    else if (subjectLower.includes('pjok') || subjectLower.includes('olahraga')) {
        const kopelPJOK = [
            ['9A', '9B'], ['9C', '9D'], ['7D', '7E'],
            ['7A', '7B'], ['8A', '8B'], ['7C', '8E']
        ];
        for (let group of kopelPJOK) {
            if (group.includes(baseClass)) {
                classesToFetch = group;
                break;
            }
        }
    }

    // Gabungkan semua santri dari kelas yang terpilih
    let allSantri = [];
    classesToFetch.forEach(cls => {
        if (DATA_SANTRI[cls]) {
            allSantri = allSantri.concat(DATA_SANTRI[cls]);
        }
    });
    return allSantri;
}

    // Tambahkan parameter targetDate dengan default new Date()
function getMapelForScan(kelas, guruName, hari, jp, targetDate = new Date()) {
    hari = (hari || "").toLowerCase();
    
    // ATURAN KHUSUS PEMBIASAAN PAGI
    if (jp === 'Pembiasaan Pagi') {
        if (WALI_KELAS_MAP[guruName] && WALI_KELAS_MAP[guruName] === kelas) return 'Pembiasaan Pagi';
        return null;
    }
    // ... sisa kodenya biarkan
    
    const isGuruTahfizh = TEACHERS.some(t => t.name === guruName && t.subjects.includes("Tahfizhul Qur'an"));
    if (isGuruTahfizh) {
        const isKopel1 = ['7A', '7B', '7C'].includes(kelas) && ((hari === 'senin' && (jp === 'JP 3' || jp === 'JP 4')) || (hari === 'selasa' && (jp === 'JP 3' || jp === 'JP 4')) || (hari === 'rabu' && (jp === 'JP 7' || jp === 'JP 8')) || (hari === 'kamis' && (jp === 'JP 3' || jp === 'JP 4')));
        const isKopel2 = ['7D', '7E', '8A'].includes(kelas) && ((hari === 'selasa' && (jp === 'JP 1' || jp === 'JP 2')) || (hari === 'rabu' && (jp === 'JP 3' || jp === 'JP 4')) || (hari === 'kamis' && (jp === 'JP 7' || jp === 'JP 8')) || (hari === 'jumat' && (jp === 'JP 3' || jp === 'JP 4')));
        const isKopel3 = ['8B', '8C', '8D', '8E'].includes(kelas) && ((hari === 'senin' && (jp === 'JP 7' || jp === 'JP 8')) || (hari === 'selasa' && (jp === 'JP 5' || jp === 'JP 6')) || (hari === 'kamis' && (jp === 'JP 1' || jp === 'JP 2')) || (hari === 'jumat' && (jp === 'JP 5' || jp === 'JP 6')));
        const isKopel4 = ['9A', '9B', '9C', '9D'].includes(kelas) && ((hari === 'senin' && (jp === 'JP 5' || jp === 'JP 6')) || (hari === 'rabu' && (jp === 'JP 1' || jp === 'JP 2')) || (hari === 'jumat' && (jp === 'JP 1' || jp === 'JP 2')));
        
        if (isKopel1 || isKopel2 || isKopel3 || isKopel4) return "Tahfizhul Qur'an";
    }

    if (guruName === 'M. Tahir, M. Pd.') {
        if (['9A', '9B'].includes(kelas) && hari === 'selasa' && (jp === 'JP 1' || jp === 'JP 2')) return 'PJOK';
        if (['9C', '9D'].includes(kelas) && hari === 'selasa' && (jp === 'JP 3' || jp === 'JP 4')) return 'PJOK';
        if (['7D', '7E'].includes(kelas) && hari === 'kamis' && (jp === 'JP 1' || jp === 'JP 2')) return 'PJOK';
        if (['7A', '7B'].includes(kelas) && hari === 'jumat' && (jp === 'JP 1' || jp === 'JP 2')) return 'PJOK';
        if (['8A', '8B'].includes(kelas) && hari === 'kamis' && (jp === 'JP 3' || jp === 'JP 4')) return 'PJOK';
        if (['7C', '8E'].includes(kelas) && hari === 'jumat' && (jp === 'JP 3' || jp === 'JP 4')) return 'PJOK';
    }

    if (jadwalPelajaran[hari] && jadwalPelajaran[hari][jp] && jadwalPelajaran[hari][jp][kelas]) {
        const jadwalRaw = jadwalPelajaran[hari][jp][kelas];
        if (jadwalRaw.includes('SBDP') || jadwalRaw.includes('Informatika')) {
            // DETEKSI GENAP/GANJIL MENGGUNAKAN TARGET DATE (TANGGAL PEKAN LALU/DLL)
            const genap = isEvenWeek(targetDate);
            if (genap && guruName === 'Agus Sarkawi, S. T.') return 'Informatika';
            if (!genap && guruName === 'Saifuddin Hidayat, S. Pd.') return 'SBDP';
            return null; 
        }
        if (jadwalRaw.includes(guruName)) return jadwalRaw.split('(')[0].trim();
    }
    return null;
}

    function parseTime(t) {
        if (!t || t === '-' || t === '') return null;
        let str = String(t).trim();
        if (str.includes('T')) {
            let d = new Date(str);
            return isNaN(d.getTime()) ? null : d;
        }
        // Normalisasi format id-ID (titik menjadi titik dua)
        str = str.replace(/\./g, ':');
        let pts = str.split(':');
        if (pts.length < 2) return null;
        let d = new Date();
        d.setHours(parseInt(pts[0], 10), parseInt(pts[1], 10), pts[2] ? parseInt(pts[2], 10) : 0, 0);
        return d;
    }

    function parseTimeToMins(timeStr) {
        if (!timeStr || timeStr === '-' || timeStr === '') return 0;
        let str = String(timeStr).trim();
        
        if (str.includes('T')) {
            let d = new Date(str);
            if (!isNaN(d.getTime())) return d.getHours() * 60 + d.getMinutes();
        }
        
        // Normalisasi pemisah titik
        str = str.replace(/\./g, ':');
        let p = str.split(':');
        
        if (p.length >= 2) {
            let h = parseInt(p[0], 10);
            let m = parseInt(p[1], 10);
            if (!isNaN(h) && !isNaN(m)) return (h * 60) + m;
        }
        return 0;
    }

    function getDayName() { 
        const now = getCurrentWITA();
        return ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'][now.getDay()]; 
    }
    function getDayNameID() { 
        const now = getCurrentWITA();
        return ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][now.getDay()]; 
    }

function getCurrentJPInfo(mode = '') {
        const now = getCurrentWITA();
        const totalMins = (now.getHours() * 60) + now.getMinutes();
        const isJumat = (getDayName() === 'jumat');
        const jadwal = isJumat ? JADWAL_WAKTU.jumat : JADWAL_WAKTU.reguler;
        
        let bestJP = 'Di luar JP';
        let minDiff = 9999;
        
        for (let jp in jadwal) {
            let mArr = jadwal[jp].masuk.split(':');
            let kArr = jadwal[jp].keluar.split(':');
            let m = parseInt(mArr[0], 10)*60 + parseInt(mArr[1], 10);
            let k = parseInt(kArr[0], 10)*60 + parseInt(kArr[1], 10);
            
            let isValid = false;
            let allowEarly = jp === 'Pembiasaan Pagi' ? 30 : 10; // Boleh absen 30 menit lebih awal khusus Pembiasaan Pagi
            
            if (mode === 'masuk') {
                isValid = (totalMins >= (m - allowEarly) && totalMins <= k); 
            } else if (mode === 'keluar') {
                isValid = (totalMins >= m && totalMins <= (k + 20)); 
            } else {
                isValid = (totalMins >= (m - allowEarly) && totalMins <= (k + 20));
            }
            
            if (isValid) {
                let center = (m + k) / 2;
                let diff = Math.abs(totalMins - center);
                if (diff < minDiff) { minDiff = diff; bestJP = jp; }
            }
        }
        return bestJP;
    }

    const DB_NAME = 'AbsensiGuruDB';
    const STORE_NAME = 'attendance';
    let db = null;
    let serverDataCache = []; // Cache Data Server Hari Ini untuk mengecek jadwal terlewat


/**
 * ============================================================================
 * GENERATOR DETERMINISTIC SESSION ID
 * Dibuat untuk memastikan satu sesi mengajar memiliki 1 ID absolut yang tetap.
 * ============================================================================
 */
function generateSessionId(dateStr, teacherName, subject, classCode, jpStr, action) {
    // FIX: Jika parameter tidak lengkap, buat ID acak (bukan null) supaya
    // idempotensi tetap terjaga saat record di-sync ulang dari IndexedDB.
    if (!dateStr || !teacherName || !subject || !classCode || !jpStr) {
        return 'SID_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10);
    }

    // 1. Normalisasi Tanggal (YYYY-MM-DD menjadi YYYYMMDD)
    // Contoh: "2026-09-04" -> "20260904"
    const safeDate = String(dateStr).replace(/[^0-9]/g, '');

    // 2. Normalisasi Nama Guru (Hapus gelar, titik, koma, spasi, ubah ke UPPERCASE)
    // Contoh: "Hafizh Bagis, Lc." -> "HAFIZHBAGISLC"
    const safeTeacher = String(teacherName).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    // 3. Normalisasi Mata Pelajaran
    // Contoh: "Bahasa Arab" -> "BAHASAARAB"
    const safeSubject = String(subject).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    // 4. Normalisasi Kelas (Sangat krusial untuk Kelas Kopel/Gabungan)
    // Menghapus tanda kurung, memecah berdasarkan koma, mengurutkan abjad, lalu digabung
    // Contoh: "(7C,7A,7B)" akan selalu menjadi "7A7B7C"
    const safeClass = String(classCode)
        .replace(/[()]/g, '')           // Buang tanda kurung
        .split(',')                     // Pecah jika ada koma
        .map(c => c.trim().toUpperCase()) 
        .sort()                         // Urutkan abjad agar posisinya selalu tetap
        .join('');                      // Gabungkan

    // 5. Normalisasi Jam Pelajaran
    // Contoh: "JP 1-2" -> "JP12" | "Pembiasaan Pagi" -> "PEMBIASAANPAGI"
    const safeJp = String(jpStr).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    // 6. FIX KRITIS: sertakan ACTION (masuk/keluar) ke dalam ID.
    // Tanpa ini, record "masuk" dan "keluar" dari sesi yang sama ber-ID identik,
    // dan cek duplikat session_id di server akan MENOLAK scan keluar
    // dengan pesan "Sesi sudah terekam".
    // Hasil Akhir: "20260904_HAFIZHBAGISLC_BAHASAARAB_7A_JP78_MASUK"
    const safeAction = String(action || '').replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    return `${safeDate}_${safeTeacher}_${safeSubject}_${safeClass}_${safeJp}_${safeAction || 'EVENT'}`;
}


    function openDB() {
        return new Promise((resolve, reject) => {
            try {
                const request = indexedDB.open(DB_NAME, 1);
                request.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains(STORE_NAME)) {
                        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                        store.createIndex('teacher', 'teacher', { unique: false });
                        store.createIndex('date', 'date', { unique: false });
                        store.createIndex('synced', 'synced', { unique: false });
                    }
                };
                request.onsuccess = (e) => { db = e.target.result; resolve(db); };
                request.onerror = (e) => { reject(e.target.error); };
            } catch (e) { reject(e); }
        });
    }

function saveAttendanceLocal(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // Pastikan koneksi database terbuka (auto-reconnect jika null/tertutup)
            if (!db) {
                db = await openDB();
            }
            
            const safeStr = (val) => { if (val === undefined || val === null) return ''; return String(val); };
            const record = {
                teacher: safeStr(data.teacher || ''), class: safeStr(data.class || ''), subject: safeStr(data.subject || 'Kegiatan Lain'),
                action: safeStr(data.action || 'masuk'), date: safeStr(data.date || ''), time: safeStr(data.time || ''),
                day: safeStr(data.day || ''), jp: safeStr(data.jp || 'JP -'), jadwal_masuk: safeStr(data.jadwal_masuk || ''),
                jadwal_keluar: safeStr(data.jadwal_keluar || ''), timestamp: safeStr(data.timestamp || new Date().toISOString()),
                keterangan: safeStr(data.keterangan || ''),
                session_id: safeStr(data.session_id || ''),  // FIX: simpan session_id ke IndexedDB agar tidak hilang saat sync ulang
                synced: false
            };
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const req = store.add(record);
            req.onsuccess = () => resolve(req.result);
            req.onerror = (e) => reject(e.target.error);
        } catch (e) { reject(e); }
    });
}

    function getUnsynced() {
        return new Promise((resolve, reject) => {
            //if (!db) { reject(new Error('DB not open')); return; }
            try {
                                // Pastikan koneksi database terbuka
                                openDB().then(database => {
                db = database;
                const tx = db.transaction(STORE_NAME, 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const req = store.getAll();
                req.onsuccess = () => resolve((req.result || []).filter(item => item.synced === false));
                req.onerror = () => reject(req.error);
                                }).catch(err => reject(err));
            } catch (e) { reject(e); }
        });
    }

    function processSyncedItem(item) {
    return new Promise((resolve, reject) => {
        //if (!db) { reject(new Error('DB not open')); return; }
        try {
                        openDB().then(database => {
            db = database;
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);

            if (item.action === 'masuk') {
                // Jangan hapus! Cukup tandai bahwa sudah sinkron
                item.synced = true;
                const req = store.put(item); 
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            } else if (item.action === 'keluar') {
                // Hapus data keluar ini dari memori HP
                store.delete(item.id);
                
                // Cari data 'masuk' pasangannya dan hapus juga (karena keduanya sudah aman di server)
                const index = store.index('teacher');
                const reqAll = index.getAll(IDBKeyRange.only(item.teacher));
                reqAll.onsuccess = () => {
                    const records = reqAll.result || [];
                    records.forEach(r => {
                        if (r.action === 'masuk' && r.class === item.class && r.date === item.date && r.jp === item.jp) {
                            store.delete(r.id);
                        }
                    });
                    resolve();
                };
                reqAll.onerror = () => reject(reqAll.error);
            } else {
                store.delete(item.id);
                resolve();
            }
                        }).catch(err => reject(err));
        } catch (e) { reject(e); }
    });
        }

function getLocalHistory(teacher, date) {
    return new Promise(async (resolve, reject) => {
        try {
            // Pastikan koneksi database terbuka (auto-reconnect jika null/tertutup)
            if (!db) {
                db = await openDB();
            }

            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const index = store.index('teacher');
            const range = IDBKeyRange.only(teacher);
            const req = index.getAll(range);
            req.onsuccess = () => resolve((req.result || []).filter(item => date ? item.date === date : true));
            req.onerror = () => reject(req.error);
        } catch (e) { reject(e); }
    });
}

    function countPendingSync() { return getUnsynced().then(res => res.length).catch(() => 0); }

    // FUNGSI UNTUK MERFRESH CACHE DATA SERVER & NORMALISASI ZONA WAKTU
    async function refreshServerCache() {
        try {
            const response = await fetch(GAS_URL + '?action=getAbsensi');
            const res = await response.json();
            if (res.success) {
                res.data.forEach(d => {
                    if (d.date && typeof d.date === 'string' && d.date.includes('T')) {
                        let dt = new Date(d.date);
                        if (!isNaN(dt.getTime())) d.date = dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
                    }
                });
                const todayStr = getLocalDateString(new Date());
                serverDataCache = res.data.filter(d => d.date === todayStr);
            }
        } catch (e) { console.error("Gagal update cache", e); }
    }

    async function sendToGoogleSheet(record) {
        try {
            const payload = {
                teacher: record.teacher || '', class: record.class || '', subject: record.subject || '',
                action: record.action || '', date: record.date || '', time: record.time || '',
                day: record.day || '', jp: record.jp || '', timestamp: record.timestamp || '',
                jadwal_masuk: record.jadwal_masuk || '', jadwal_keluar: record.jadwal_keluar || '',
                keterangan: record.keterangan || '',
                session_id: record.session_id || ''  // FIX: kirim session_id ke server (kunci anti-duplikat)
            };
            const response = await fetch(GAS_URL, {
                method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ api_action: 'addAttendance', ...payload })
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const json = await response.json();
            // FIX: Web App GAS selalu membalas HTTP 200 meskipun logika server menolak.
            // Tanpa cek ini, data yang ditolak server dianggap sukses lalu ditandai
            // synced dan hilang diam-diam.
            if (json && json.success === false) {
                return { success: false, error: json.error || json.message || 'Server menolak data' };
            }
            return { success: true, data: json };
        } catch (e) { return { success: false, error: e.message }; }
    }

    document.getElementById('agusSyncJadwal').addEventListener('click', async () => {
        const btn = document.getElementById('agusSyncJadwal');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menarik Jadwal...';
        addSyncLog('Tarik data jadwal dari server...', 'info');
        try {
            const response = await fetch(GAS_URL + '?action=getJadwal');
            if (!response.ok) throw new Error("Gagal terhubung ke GAS");
            const result = await response.json();
            if (result.success && result.data) {
                result.data.forEach(row => {
                    const vKelas = row[0], vHari = (row[1] || "").toString().toLowerCase().trim(), vJp = (row[2] || "").toString().toUpperCase().trim(), vMapel = row[3], vGuru = row[4];
                    if (vKelas && vHari && vJp && jadwalPelajaran[vHari]) {
                        if (!jadwalPelajaran[vHari][vJp]) jadwalPelajaran[vHari][vJp] = {};
                        jadwalPelajaran[vHari][vJp][vKelas] = `${vMapel} (${vGuru})`;
                    }
                });
                localStorage.setItem('jadwal_cache', JSON.stringify(jadwalPelajaran));
                addSyncLog('✅ Jadwal berhasil diperbarui', 'success'); showToast('Jadwal disinkronkan', 'success');
            } else { addSyncLog('⚠️ Format JSON tidak sesuai', 'error'); }
        } catch (e) { showToast('Gagal Tarik Jadwal', 'error'); addSyncLog('❌ ' + e.message, 'error'); }
        btn.innerHTML = originalText;
    });

    // Guard global agar tombol sync otomatis/manual tidak melakukan POST
    // bersamaan dengan sync lainnya.
    let syncInProgress = false;

    async function syncNow(showToastMsg = true, showLog = false) {
        if (syncInProgress) {
            if (showLog) addSyncLog('⏳ Sinkronisasi sedang berjalan. Permintaan kedua diabaikan.', 'info');
            return { success: false, message: 'Sync already running' };
        }

        if (!navigator.onLine) {
            if (showLog) addSyncLog('❌ Offline. Gagal sinkron.', 'error');
            if (showToastMsg) showToast('❌ Offline. Gagal sinkron.', 'error');
            return { success: false, message: 'Offline' };
        }

        syncInProgress = true;
        try {
            const unsynced = await getUnsynced();

            if (unsynced.length === 0) {
                if (showLog) addSyncLog('✅ Tidak ada data pending.', 'success');
                if (showToastMsg) showToast('✅ Tidak ada data pending.', 'success');
                updateSyncStatus();
                await refreshServerCache();
                renderMySchedule();
                return { success: true, message: 'Tidak ada data' };
            }

            if (showLog) addSyncLog(`📤 Pushing ${unsynced.length} data...`, 'info');
            if (showToastMsg) showToast(`🔄 Pushing ${unsynced.length} data...`, 'info');

            let successCount = 0;
            let failCount = 0;

            for (const item of unsynced) {
                // Ambil ulang record. Jika scan langsung sudah menandainya
                // synced, record ini dilewati.
                const fresh = await new Promise(resolve => {
                    try {
                        const tx = db.transaction(STORE_NAME, 'readonly');
                        const store = tx.objectStore(STORE_NAME);
                        const req = store.get(item.id);
                        req.onsuccess = () => resolve(req.result || null);
                        req.onerror = () => resolve(item);
                    } catch (e) { resolve(item); }
                });

                if (!fresh || fresh.synced !== false) continue;

                // Jika ada record identik yang sudah synced, jangan POST ulang.
                const all = await getLocalHistory(fresh.teacher, fresh.date).catch(() => []);

                // FIX: cek event identik via session_id (paling andal) sebelum POST ulang.
                const sameEventSynced = all.some(r =>
                    r.id !== fresh.id &&
                    fresh.session_id &&
                    r.session_id === fresh.session_id &&
                    r.synced === true
                );
                if (sameEventSynced) {
                    await processSyncedItem(fresh);
                    continue;
                }

                const sameLocal = all.some(r =>
                    r.id !== fresh.id &&
                    r.action === fresh.action &&
                    r.class === fresh.class &&
                    r.jp === fresh.jp &&
                    r.subject === fresh.subject &&
                    r.synced === true
                );

                if (sameLocal) {
                    await processSyncedItem(fresh);
                    continue;
                }

                const result = await sendToGoogleSheet(fresh);

                if (result.success) {
                    successCount++;
                    await processSyncedItem(fresh);
                    if (showLog) addSyncLog(`✅ Item ${fresh.id} terkirim`, 'success');
                } else {
                    failCount++;
                    if (showLog) addSyncLog(`❌ Item ${fresh.id} gagal: ${result.error}`, 'error');
                }
            }

            await refreshServerCache();
            updateSyncStatus();
            loadHistory();
            loadRekap();

            const msg = `Sync selesai: ${successCount} berhasil, ${failCount} gagal.`;
            if (showLog) addSyncLog((failCount ? '⚠️ ' : '✅ ') + msg, failCount ? 'error' : 'success');
            if (showToastMsg) showToast((failCount ? '⚠️ ' : '✅ ') + msg, failCount ? 'warning' : 'success');

            return { success: failCount === 0, message: msg };
        } catch (e) {
            console.error('syncNow error:', e);
            if (showLog) addSyncLog('❌ Error: ' + e.message, 'error');
            if (showToastMsg) showToast('❌ Gagal: ' + e.message, 'error');
            return { success: false, message: e.message };
        } finally {
            syncInProgress = false;
        }
    }

    async function updateSyncStatus() {
        try {
            const pending = await countPendingSync();
            const el = document.getElementById('syncStatus');
            if (el) {
                if (pending === 0) { el.innerHTML = '<i class="fa-solid fa-check"></i> Semua Sync'; el.style.background = 'rgba(16, 185, 129, 0.4)'; } 
                else { el.innerHTML = `<i class="fa-solid fa-rotate"></i> ${pending} pending`; el.style.background = 'rgba(245, 158, 11, 0.4)'; }
            }
        } catch (e) {}
    }

    function addSyncLog(message, type = 'info') {
        const logContainer = document.getElementById('syncLog'); if (!logContainer) return;
        const entry = document.createElement('div'); entry.className = `entry ${type}`;
        entry.innerHTML = `[${new Date().toLocaleTimeString()}] ${message}`;
        logContainer.appendChild(entry); logContainer.scrollTop = logContainer.scrollHeight;
        while (logContainer.children.length > 100) logContainer.removeChild(logContainer.firstChild);
    }

    let html5QrCode = null, isScanning = false, currentMode = 'masuk', currentUser = null, currentUserData = null;
    let isAdmin = false, isAgus = false;
    let adminViewMode = 'all'; 

    function renderTeacherList() {
        const container = document.getElementById('teacherList'); container.innerHTML = '';
        [...TEACHERS].sort((a, b) => a.name.localeCompare(b.name)).forEach(t => {
            const btn = document.createElement('button');
            btn.className = 'btn'; btn.textContent = t.name; btn.dataset.name = t.name;
            btn.addEventListener('click', (e) => { e.preventDefault(); selectTeacher(t); });
            container.appendChild(btn);
        });
    }

    function selectTeacher(teacher) {            
        const isAdminUser = teacher.isAdmin || false;
        if (isAdminUser) {
            document.getElementById('passwordSection').classList.remove('hidden');
            document.getElementById('adminPassword').value = '';
            document.getElementById('passwordSection').dataset.selectedTeacher = teacher.name;
            document.getElementById('passwordSection').dataset.adminType = teacher.adminType || '';
            document.querySelectorAll('#teacherList .btn').forEach(b => b.classList.remove('selected'));
            document.querySelector(`#teacherList .btn[data-name="${teacher.name}"]`)?.classList.add('selected');
        } else {
            document.getElementById('passwordSection').classList.add('hidden');
            doLogin(teacher.name, false, '');
        }
    }

    document.getElementById('adminLoginBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById('passwordSection');
        const teacherName = section.dataset.selectedTeacher, password = document.getElementById('adminPassword').value.trim();
        const adminType = section.dataset.adminType || '';
        let expectedPassword = adminType === 'agus' ? 'a133' : ({'senin':'seni212', 'selasa':'selas212', 'rabu':'rab212', 'kamis':'kami212', 'jumat':'juma212', 'sabtu':'sabt212', 'ahad':'aha212'})[getDayName()];

        if (password === expectedPassword) doLogin(teacherName, true, adminType);
        else { showToast('Password Salah!', 'error'); document.getElementById('adminPassword').value = ''; }
    });

    document.getElementById('teacherOnlyLoginBtn').addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.getElementById('passwordSection');
        const teacherName = section.dataset.selectedTeacher;
        doLogin(teacherName, false, ''); 
    });

    document.getElementById('adminPassword').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('adminLoginBtn').click(); } });

// Tambahkan targetDate pada getGroupedSchedule
function getGroupedSchedule(teacherName, hari, currentMins, targetDate = new Date()) {
    let blocks = [];
    if (isLiburSekolah(targetDate)) return blocks; 
    
    let currentBlock = null;
    const jadwal = (hari === 'jumat') ? JADWAL_WAKTU.jumat : JADWAL_WAKTU.reguler;
    // Tambahkan Pembiasaan Pagi ke loop
    const jpKeys = ['Pembiasaan Pagi', 'JP 1', 'JP 2', 'JP 3', 'JP 4', 'JP 5', 'JP 6', 'JP 7', 'JP 8'];

    for (let jp of jpKeys) {
        if (!jadwal[jp]) continue;

        let foundMapel = false;
        for (let c of CLASSES) {
            let mapel = getMapelForScan(c, teacherName, hari, jp, targetDate);
            if (mapel) {
                foundMapel = true;
                let formattedClass = formatKopelClass(c, mapel);
                let k = parseTimeToMins(jadwal[jp].keluar);

                let isSequential = false;
                if (currentBlock && currentBlock.class === formattedClass && currentBlock.mapel === mapel && currentBlock.jps[0] !== 'Pembiasaan Pagi') {
                    let lastJp = currentBlock.jps[currentBlock.jps.length - 1];
                    let currJpNum = parseInt(jp.replace('JP ', ''));
                    if (lastJp === currJpNum - 1) isSequential = true;
                }

                if (isSequential) {
                    currentBlock.jps.push(parseInt(jp.replace('JP ', '')));
                    currentBlock.jpStr = `JP ${currentBlock.jps[0]}-${currentBlock.jps[currentBlock.jps.length-1]}`;
                    currentBlock.keluar = jadwal[jp].keluar;
                    currentBlock.kMins = k;
                } else {
                    if (currentBlock) blocks.push(currentBlock);
                    let jpsPush = jp === 'Pembiasaan Pagi' ? ['Pembiasaan Pagi'] : [parseInt(jp.replace('JP ', ''))];
                    currentBlock = {
                        class: formattedClass, mapel: mapel, jps: jpsPush,
                        jpStr: jp === 'Pembiasaan Pagi' ? 'Pembiasaan Pagi' : jp,
                        masuk: jadwal[jp].masuk, keluar: jadwal[jp].keluar, kMins: k
                    };
                }
                break;
            }
        }
        if (!foundMapel && currentBlock) { blocks.push(currentBlock); currentBlock = null; }
    }
    if (currentBlock) blocks.push(currentBlock);
    return blocks;
}

function getNextClass() {
    if (!currentUser) return null;
        let nextClassGlobal = null; // Variabel global untuk menyimpan nextClass
    const hari = getDayName();
    const now = getCurrentWITA();//new Date();
    const totalMins = now.getHours() * 60 + now.getMinutes();
    
    let blocks = getGroupedSchedule(currentUser, hari, totalMins);

    for (let b of blocks) {
        let mMins = parseTimeToMins(b.masuk);
        // Mencari jadwal yang menit masuknya lebih besar dari waktu saat ini
        if (mMins > totalMins) {
            //let jpStr = b.jps.length > 1 ? `JP ${b.jps[0]}-${b.jps[b.jps.length-1]}` : `JP ${b.jps[0]}`;
                        // Langsung ambil string yang sudah matang dari fungsi getGroupedSchedule
                        let jpStr = b.jpStr;
            return { jp: jpStr, class: b.class, mapel: b.mapel, masuk: b.masuk, masukMins: mMins };
        }
    }
    return null;
}

        window.lastKnownJP = undefined;
    window.isAlarmMuted = false;
    window.continuousAlarmInterval = null;
    window.nextClassNotifiedTeaching = false;

    // Fungsi utama pembuat suara via HTML5 AudioContext
    function playTone(freq, type, duration) {
        try {
            const ctx = new(window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.frequency.value = freq; osc.type = type;
            gain.gain.setValueAtTime(0.5, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration);
        } catch(e) {}
    }

// 1. Deklarasikan file audio
const audioRing = new Audio('ring.mp3');
const audioAlarm = new Audio('alarm.mp3');

// 2. Variabel penanda izin audio
let isAudioUnlocked = false;

// 3. Fungsi untuk memancing izin audio dari browser
function unlockAudio() {
    if (isAudioUnlocked) return;
    
    // Mainkan dan langsung pause agar browser mencatat adanya "interaksi user" dengan audio
    audioRing.play().then(() => { 
        audioRing.pause(); 
        audioRing.currentTime = 0; 
    }).catch(e => {});
    
    audioAlarm.play().then(() => { 
        audioAlarm.pause(); 
        audioAlarm.currentTime = 0; 
    }).catch(e => {});
    
    isAudioUnlocked = true;
    
    // Lepaskan event listener agar fungsi ini tidak dieksekusi terus-menerus setiap kali layar diklik
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
}

// 4. Pasang pendeteksi klik pertama di seluruh halaman aplikasi
document.addEventListener('click', unlockAudio);
document.addEventListener('touchstart', unlockAudio);

// ==========================================
// Fungsi pemanggil audio yang dipakai sistem
// ==========================================

// 2. Ganti fungsi notifikasi perpindahan JP
function playJpChangeAlarm() { 
    audioRing.currentTime = 0; // Reset audio ke detik awal
    audioRing.play().catch(e => console.log("Audio tertahan oleh browser:", e));
}

// 3. Ganti fungsi bel peringatan 5 menit (looping)
function playContinuousBeep() { 
    audioAlarm.currentTime = 0; 
    audioAlarm.play().catch(e => console.log("Audio tertahan oleh browser:", e));
}

// 4. Ganti fungsi bel peringatan saat sedang mengajar kelas lain
function playShortBeep3x() {
    audioAlarm.currentTime = 0;
    audioAlarm.play().catch(e => console.log("Audio tertahan oleh browser:", e));
}
    
    // Fungsi untuk mematikan bel
    window.stopContinuousAlarm = function() {
        if(window.continuousAlarmInterval) clearInterval(window.continuousAlarmInterval);
        window.continuousAlarmInterval = null;
        window.isAlarmMuted = true;
        document.getElementById('muteAlarmBtn').classList.add('hidden');
    }

function updateNextClassInfo() {
    if (!currentUser) return;
    const now = getCurrentWITA();
    const hour = now.getHours();
    const infoCard = document.getElementById('nextClassCard');
    const warnCard = document.getElementById('upcomingClassWarningCard');
    const nextClass = getNextClass();

    // Logika Waktu: Hilangkan pada jam 13.00 ke atas
    if (hour >= 13) {
        infoCard.classList.add('hidden');
        warnCard.classList.add('hidden');
        document.getElementById('timerContainer').classList.add('hidden');
        nextClassGlobal = null; // Reset nextClassGlobal
        return;
    }

    if (nextClass) {
        infoCard.classList.remove('hidden');
        const cFormatted = formatKopelClass(nextClass.class, nextClass.mapel);
        document.getElementById('nextClassText').innerHTML =
            `Hari ini Ustadz akan mengajar <b>${nextClass.mapel}</b> di kelas <b>${cFormatted}</b> pada jam <b>${nextClass.masuk}</b> (${nextClass.jp}).`;

        // Simpan nextClass ke variabel global
        nextClassGlobal = nextClass;

        // Tampilkan timer
        document.getElementById('timerContainer').classList.remove('hidden');
        updateNextClassTimer(); // Panggil timer

        // Alarm 5 Menit (300 Detik)
        const totalSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const masukSeconds = parseTimeToMins(nextClass.masuk) * 60;
        const diffSeconds = masukSeconds - totalSeconds;

        // Alarm 5 Menit (300 Detik) di Kartu Merah
if (diffSeconds > 0 && diffSeconds <= 300) {
    warnCard.classList.remove('hidden');
    infoCard.classList.add('hidden'); // <-- Sembunyikan "Jadwal Berikutnya" saat warning muncul

    const m = Math.floor(diffSeconds / 60);
    const s = diffSeconds % 60;
    document.getElementById('upcomingTimer').textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');

    let isCurrentlyTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null") !== null;

    if (isCurrentlyTeaching) {
        warnCard.classList.add('pulse-alarm');
        document.getElementById('upcomingClassWarningText').innerHTML =
            `<i class="fa-solid fa-bell fa-shake"></i> PERHATIAN!<br>SEGERA PINDAH KE KELAS ${cFormatted} UNTUK MENGAJAR ${nextClass.mapel}!`;

        if (!window.nextClassNotifiedTeaching) {
            playShortBeep3x(); window.nextClassNotifiedTeaching = true;
        }
        stopContinuousAlarm();
        document.getElementById('muteAlarmBtn').classList.add('hidden');
    } else {
        warnCard.classList.remove('pulse-alarm');
        document.getElementById('upcomingClassWarningText').innerHTML =
            `<i class="fa-solid fa-triangle-exclamation fa-shake"></i> PERSIAPAN!<br>5 MENIT LAGI MASUK KELAS ${cFormatted} (${nextClass.mapel})!`;

        if (!window.isAlarmMuted && !window.continuousAlarmInterval) {
            window.continuousAlarmInterval = setInterval(playContinuousBeep, 1500);
            document.getElementById('muteAlarmBtn').classList.remove('hidden');
        }
    }
} else {
    warnCard.classList.add('hidden');
    warnCard.classList.remove('pulse-alarm');
    window.nextClassNotifiedTeaching = false;
    if(diffSeconds > 300) window.isAlarmMuted = false;
    stopContinuousAlarm();
    infoCard.classList.remove('hidden'); // <-- Tampilkan kembali "Jadwal Berikutnya" saat warning hilang
}
    } else {
        // Hilangkan jika tidak ada pelajaran
        infoCard.classList.add('hidden');
        warnCard.classList.add('hidden');
        document.getElementById('timerContainer').classList.add('hidden');
        nextClassGlobal = null; // Reset nextClassGlobal
        stopContinuousAlarm();
    }
}

function checkTomorrowSchedule() {
    // Jadwal hari ini/besok sekarang dikelola sepenuhnya oleh renderMySchedule().
    // Fungsi ini dipertahankan agar pemanggilan lama di updateClock() tetap aman.
    if (!currentUser) return;

    const oldTomorrowCard = document.getElementById('tomorrowScheduleCard');
    if (oldTomorrowCard) oldTomorrowCard.classList.add('hidden');

    // Segarkan kartu utama saat melewati batas 13:00 WITA.
    // renderMySchedule() sendiri juga dipanggil setiap 60 detik.
    const now = getCurrentWITA();
    const title = document.getElementById('myScheduleTitle');
    if (title) {
        const days = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
        const target = new Date(now);
        if (now.getHours() >= 13) target.setDate(target.getDate() + 1);

        title.textContent = now.getHours() >= 13
            ? `Jadwal Saya Esok Hari (${days[target.getDay()].toUpperCase()})`
            : `Jadwal Saya Hari Ini (${days[target.getDay()].toUpperCase()})`;
    }
}

    async function doLogin(name, isAdminUser, adminType) {
        currentUser = name; currentUserData = TEACHERS.find(t => t.name === name);
        isAdmin = isAdminUser; isAgus = (adminType === 'agus');
        document.getElementById('loginScreen').classList.add('hidden'); document.getElementById('app').classList.remove('hidden');
        document.getElementById('userNameDisplay').textContent = name;
        document.getElementById('userMapelDisplay').textContent = (currentUserData.subjects || []).join(', ') || (isAdminUser ? 'Admin' : '-');
        document.getElementById('adminTab').classList.toggle('hidden', !isAdminUser); document.getElementById('agusTab').classList.toggle('hidden', !isAgus);
        
        const isMTahir = (name === 'M. Tahir, M. Pd.');
        if (document.getElementById('manualScanBtn')) { 
            document.getElementById('manualScanBtn').classList.toggle('hidden', !(isAgus || isMTahir)); 
            if(!(isAgus || isMTahir)) document.getElementById('manualScanArea')?.classList.add('hidden'); 
        }

        currentMode = null; updateScanModeUI(); stopScanner();
        updateClock(); updateOfflineStatus();
        updateNextClassInfo(); 
        checkActiveTeachingForIzinKasus();
        
        if (navigator.onLine) {
            await refreshServerCache();
            syncNow(false, true); 
        }
        
        updateSyncStatus();
        loadHistory(); 
        
        showToast(`Assalamu'alaikum ustadz ${name}`, 'success');
        
        // FIX ANTI-LOGOUT ANDROID: Simpan semua sesi termasuk akun Master/Admin
        localStorage.setItem('absensi_user', name);
        if (isAdminUser) {
            localStorage.setItem('absensi_admin', 'true');
            localStorage.setItem('absensi_admin_type', adminType || '');
        } else {
            localStorage.removeItem('absensi_admin');
            localStorage.removeItem('absensi_admin_type');
        }
    }

    document.getElementById('switchUserBtn').addEventListener('click', () => {
        stopScanner(); document.getElementById('app').classList.add('hidden'); document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('passwordSection').classList.add('hidden');
        document.querySelectorAll('#teacherList .btn').forEach(b => b.classList.remove('selected'));
        currentUser = null; currentUserData = null; isAdmin = false; isAgus = false;
        
        // Hapus memori browser agar benar-benar logout jika tombol ditekan
        localStorage.removeItem('absensi_user');
        localStorage.removeItem('absensi_admin');
        localStorage.removeItem('absensi_admin_type');
    });

function updateScanModeUI() {
    let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
    const btnMasuk = document.getElementById('modeMasuk');
    const btnKeluar = document.getElementById('modeKeluar');
    const nextClass = getNextClass();
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();

    // Teks Dasar Default
    let masukText = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Scan Masuk';
    let keluarText = '<i class="fa-solid fa-door-open"></i> Scan Keluar';
    
    // Status Class Dasar
    let masukClass = 'btn btn-sm btn-outline';
    let keluarClass = 'btn btn-sm btn-outline';
    
    // Indikator Animasi Merah
    let isMasukAnimated = false;
    let isKeluarAnimated = false;

    // Evaluasi waktu akhir kelas
    let isPastEndTime = false;
    let isNearEndTime = false;

    if (activeTeaching && activeTeaching.keluar) {
        const endParts = activeTeaching.keluar.split(':');
        const keluarMins = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
        const todayStr = getLocalDateString(now);
        
        if (activeTeaching.date && activeTeaching.date !== todayStr) {
            isPastEndTime = true;
        } else if (currentMins >= keluarMins) {
            isPastEndTime = true;
        } else if ((keluarMins - currentMins) <= 5 && (keluarMins - currentMins) >= 0) {
            isNearEndTime = true; // Sisa 5 menit atau kurang
        }
    }

    // Set Status Mode Terkini
    if (activeTeaching && !isPastEndTime) {
        currentMode = 'keluar';
    } else if (!activeTeaching) {
        // Biarkan currentMode sesuai pilihan terakhir user, jangan dipaksa otomatis pindah ke 'masuk' 
        // jika mereka sedang mencoba menekan tab 'keluar'.
        if (currentMode !== 'masuk' && currentMode !== 'keluar') currentMode = 'masuk';
    }

    // PASTIKAN: Cek jika kelas selanjutnya mulai dalam waktu <= 5 Menit
    let isNextClassNear = nextClass && ((nextClass.masukMins - currentMins) <= 5);

    // ==========================================================
    // LOGIKA TEKS, BUKA KUNCIAN, & ANIMASI
    // ==========================================================
    if (activeTeaching) {
        if (activeTeaching.keluarScanned) {
            // Sedang sync ke server
            masukClass = 'btn btn-sm btn-outline opacity-50 pointer-events-none';
            keluarClass = 'btn btn-sm btn-outline opacity-50 pointer-events-none';
            document.getElementById('scanInstruction').innerHTML = `Menunggu sinkronisasi absen <b>KELUAR</b> kelas <b>${activeTeaching.class}</b>...<br><button class="btn btn-sm btn-warning mt-3 w-full" onclick="forceUnlock()" style="pointer-events: auto;"><i class="fa-solid fa-unlock-keyhole"></i> Lepaskan Kunci Manual</button>`;
            document.getElementById('scanModeBadge').innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sync...';
            currentMode = null; 
        } else {
            // Saat kelas sedang berlangsung / mau berakhir
            keluarText = `<i class="fa-solid fa-door-open"></i> Scan Keluar Kelas ${activeTeaching.class}`;
            
            if (isPastEndTime || isNearEndTime) {
                // Saatnya keluar (H-5 atau sudah lewat) -> Animasi Merah di Tombol Keluar
                isKeluarAnimated = true;
                keluarClass = 'btn btn-sm'; 
                
                if (isNextClassNear) {
                    // Transisi: Harus keluar, tapi kelas berikutnya mau mulai
                    masukText = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Scan Masuk Kelas ${nextClass.class}`;
                    masukClass = currentMode === 'masuk' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
                    document.getElementById('scanInstruction').innerHTML = `Fokus scan <b>KELUAR</b> terlebih dahulu sebelum menuju kelas ${nextClass.class}.`;
                } else {
                    masukClass = 'btn btn-sm btn-outline opacity-50 pointer-events-none';
                    document.getElementById('scanInstruction').innerHTML = `Waktu kelas <b>${activeTeaching.class}</b> hampir/telah habis. Silakan scan <b>KELUAR</b>.`;
                }
            } else {
                // Pertengahan jam mengajar santai
                keluarClass = currentMode === 'keluar' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
                
                // --- PAKSA BUKA KUNCIAN JIKA SISA WAKTU MASUK <= 5 MENIT ---
                if (isNextClassNear) {
                    masukText = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Scan Masuk Kelas ${nextClass.class}`;
                    masukClass = currentMode === 'masuk' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
                    document.getElementById('scanInstruction').innerHTML = `Kelas <b>${nextClass.class}</b> akan segera dimulai. Jangan lupa <b>KELUAR</b> dari kelas saat ini.`;
                } else {
                    masukClass = 'btn btn-sm btn-outline opacity-50 pointer-events-none';
                    document.getElementById('scanInstruction').innerHTML = `Anda sedang mengajar di kelas <b>${activeTeaching.class}</b>`;
                }
            }
        }
    } else {
        // Tidak sedang mengajar (Posisi Standby / Awal Pagi / LUPA SCAN MASUK)
        if (isNextClassNear) {
            // H-5 kelas mulai -> Animasi Merah di Tombol Masuk
            masukText = `<i class="fa-solid fa-arrow-right-to-bracket"></i> Scan Masuk Kelas ${nextClass.class} pukul ${nextClass.masuk}`;
            isMasukAnimated = true;
            
            if (currentMode === 'keluar') {
                document.getElementById('scanInstruction').innerHTML = `Arahkan kamera ke QR Code kelas untuk absen <b>KELUAR</b> (Jika Anda lupa absen masuk).`;
            } else {
                document.getElementById('scanInstruction').innerHTML = `Kelas <b>${nextClass.class}</b> akan segera dimulai. Silakan scan masuk!`;
            }
        } else {
            if (currentMode === 'keluar') {
                document.getElementById('scanInstruction').innerHTML = `Arahkan kamera ke QR Code kelas untuk absen <b>KELUAR</b> (Jika Anda lupa absen masuk).`;
            } else {
                document.getElementById('scanInstruction').textContent = 'Arahkan kamera ke QR Code kelas untuk absen MASUK';
            }
        }
        
        // Kuncian dilepas. Di luar jam mengajar, tombol MASUK dan KELUAR selalu bisa diklik
        masukClass = currentMode === 'masuk' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline'; 
        keluarClass = currentMode === 'keluar' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-outline';
    }

    // ==========================================================
    // TERAPKAN PERUBAHAN KE ELEMEN UI
    // ==========================================================
    if (currentMode) {
        document.getElementById('scanModeBadge').innerHTML = currentMode === 'masuk' ? '<i class="fa-solid fa-arrow-right-to-bracket"></i> Masuk' : '<i class="fa-solid fa-door-open"></i> Keluar';
    }

    // Reset kelas merah lama
    btnMasuk.classList.remove('btn-pulse-red');
    btnKeluar.classList.remove('btn-pulse-red');

    // Terapkan teks & class default
    btnMasuk.innerHTML = masukText;
    btnKeluar.innerHTML = keluarText;
    btnMasuk.className = masukClass;
    btnKeluar.className = keluarClass;

    // Timpa dengan efek animasi merah mencolok sesuai yang wajib difokuskan
    if (isMasukAnimated) {
        btnMasuk.classList.add('btn-pulse-red');
        // Kuncian pemaksaan currentMode = 'masuk' telah dihapus di sini agar guru tetap leluasa menekan tombol 'Keluar'
        if (currentMode === 'masuk') { btnMasuk.classList.remove('btn-outline'); }
    }
    
    if (isKeluarAnimated) {
        btnKeluar.classList.add('btn-pulse-red');
        if (currentMode !== 'keluar') { currentMode = 'keluar'; btnKeluar.classList.remove('btn-outline'); }
    }
}

    // --- PERBAIKAN: Fungsi Eksekusi Buka Kunci Paksa ---
 // REPLACEMENT FOR forceUnlock
window.forceUnlock = function() {
    if (currentUser) {
        localStorage.removeItem('activeTeaching_' + currentUser);
        const timerCard = document.getElementById('activeClassTimerCard');
        if (timerCard) timerCard.classList.add('hidden');
        if (typeof checkActiveTeachingForIzinKasus === 'function') checkActiveTeachingForIzinKasus();
        // currentMode = 'masuk'; // DIHAPUS: Biarkan fungsi updateScanModeUI yang menentukan naturalnya
        updateScanModeUI();
        showToast('Kunci kelas berhasil dilepas!', 'success');
    }
};

    document.getElementById('modeMasuk').addEventListener('click', () => { currentMode = 'masuk'; updateScanModeUI(); stopScanner(); setTimeout(startScanner, 300); });
    document.getElementById('modeKeluar').addEventListener('click', () => { currentMode = 'keluar'; updateScanModeUI(); stopScanner(); setTimeout(startScanner, 300); });
    
document.getElementById('manualScanBtn').addEventListener('click', () => {
    const area = document.getElementById('manualScanArea');
    const select = document.getElementById('manualClassSelect');
    
    if (area.classList.contains('hidden')) {
        // Reset dan isi opsi kelas secara dinamis
        select.innerHTML = '<option value="">-- Pilih Kelas --</option>';
        const rendered = new Set();
        
        CLASSES.forEach(cls => {
            // Gunakan dummy subject khusus jika pengajar adalah guru PJOK untuk memicu kopel
            const mockSubject = (currentUser === 'M. Tahir, M. Pd.') ? 'PJOK' : 'Mapel';
            const formatted = formatKopelClass(cls, mockSubject);
            
            if (!rendered.has(formatted)) {
                rendered.add(formatted);
                const opt = document.createElement('option');
                opt.value = cls; // value tetap memakai root class agar backend tidak bingung
                opt.textContent = formatted;
                select.appendChild(opt);
            }
        });
        area.classList.remove('hidden');
    } else {
        area.classList.add('hidden');
    }
});

document.getElementById('manualProcessBtn').addEventListener('click', () => {
    const val = document.getElementById('manualClassSelect').value.trim().toUpperCase();
    if (val) { 
        processScan(val); 
        document.getElementById('manualScanArea').classList.add('hidden'); 
    } else { 
        showToast('Silakan pilih kelas yang valid', 'error'); 
    }
});

    document.getElementById('syncNowBtn').addEventListener('click', () => syncNow(true, true));
    document.getElementById('adminSyncNow').addEventListener('click', () => syncNow(true, true));
    document.getElementById('agusSyncNow').addEventListener('click', () => syncNow(true, true));

// --- TAMBAHAN UNTUK FITUR ALASAN TERLAMBAT ---
window.showLateReasonModal = function(callback, initialValue = '') {
        // Sembunyikan tombol X agar guru wajib menekan "Simpan Alasan"
    document.getElementById('modalClose').style.display = 'none';
    document.getElementById('modalContent').innerHTML = `
        <div class="p-2">
            <div class="text-center mb-4">
                <i class="fa-solid fa-stopwatch text-warning mb-2" style="font-size: 3rem;"></i>
                <h3 class="font-bold text-lg">Anda Terlambat!</h3>
                <p class="text-sm text-muted">Waktu absen Anda melewati batas toleransi masuk. Silakan isi alasan keterlambatan Anda.</p>
            </div>
            <div class="input-group">
                <label>Alasan Keterlambatan</label>
                <textarea id="lateReasonInput" rows="3" class="w-full p-3 border-2 border-amber-200 rounded-xl bg-amber-50" placeholder="Misal: Rapat dadakan, ban bocor, menemani anak sakit, dll...">${initialValue}</textarea>
            </div>
            <button class="btn btn-warning w-full mt-2" id="submitLateReasonBtn"><i class="fa-solid fa-save"></i> Simpan Alasan</button>
        </div>
    `;
    document.getElementById('modalOverlay').classList.remove('hidden');
    
    document.getElementById('submitLateReasonBtn').onclick = () => {
        const reason = document.getElementById('lateReasonInput').value.trim();
        if (!reason) { showToast('Alasan keterlambatan wajib diisi!', 'error'); return; }
        document.getElementById('modalOverlay').classList.add('hidden');
        callback(reason);
    };
};

window.editKeterangan = async function(encodedRecord) {
    if (!navigator.onLine) {
        showToast('Anda harus terkoneksi internet (Online) untuk mengedit alasan ke server.', 'error');
        return;
    }
    const record = JSON.parse(decodeURIComponent(encodedRecord));
    let currentReason = record.keterangan || '';
    if (currentReason.startsWith('Telat: ')) currentReason = currentReason.substring(7);
    
    showLateReasonModal(async (newReason) => {
        let finalKet = `Telat: ${newReason}`;
        
        // 1. Update Database Lokal (IndexedDB)
        try {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            if (record.id) {
                const getReq = store.get(record.id);
                getReq.onsuccess = () => {
                    let data = getReq.result;
                    if (data) { data.keterangan = finalKet; store.put(data); }
                };
            }
        } catch(e) {}

        // 2. Update UI Optimis
        showToast('Mengirim perubahan ke server...', 'info');
        
        // 3. Update ke Google Sheets
        try {
            const payload = {
                api_action: 'editKeterangan', teacher: record.teacher, date: record.date,
                class: record.class, jp: record.jp, action: record.action, keterangan: finalKet
            };
            const response = await fetch(GAS_URL, {
                method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });
            const res = await response.json();
            
            if (res.success) {
                showToast('✅ Alasan berhasil diperbarui!', 'success');
                await refreshServerCache(); 
                loadHistory(); 
            } else {
                throw new Error(res.error);
            }
        } catch(e) {
            showToast('❌ Gagal update ke server: ' + e.message, 'error');
        }
    }, currentReason);
};
// ----------------------------------------------

async function startScanner() {
        if (document.getElementById('tabScan').classList.contains('hidden') || !currentMode) return;
        if (html5QrCode) { stopScanner(); setTimeout(startScanner, 100); return; }
        
        // Deklarasi elemen wrapper untuk logika floating
        const scannerWrapper = document.getElementById('scannerWrapper');

        html5QrCode = new Html5Qrcode("reader");
        html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 220, height: 220 } },
            (text) => {
                if (scanInProgress) return;
                stopScanner();
                processScan(text.trim().toUpperCase());
            }, () => {}
        ).then(() => {
            isScanning = true;
            // Kamera Html5Qrcode berhasil terbuka, jadikan tombol melayang
            if (scannerWrapper) scannerWrapper.classList.add('is-scanning');
        }).catch((err) => {
            console.error("Scanner initialization failed:", err);
            showToast('Error kamera/scan. Membersihkan cache...', 'error');
            
            // Panggil fungsi pembersih cache ketika scanner gagal dimulai
            clearAppCacheAndReload(); 
        });
    }

    function stopScanner() {
        isScanning = false;

        // Kamera diperintahkan berhenti, kembalikan tombol ke posisi normal (statis)
        const scannerWrapper = document.getElementById('scannerWrapper');
        if (scannerWrapper) scannerWrapper.classList.remove('is-scanning');

        if (html5QrCode) { try { html5QrCode.stop().then(() => html5QrCode.clear()); } catch(e){} html5QrCode = null; isScanning = false; }
    }

    // ==========================================================
    // ANTI-DUPLIKASI & ANTI-RACE CONDITION SCAN
    // ==========================================================
    let scanInProgress = false;
    let lastScanFingerprint = '';
    let lastScanAt = 0;

    function buildScanFingerprint(classCode, action, teacher, date, jp, subject) {
        return [teacher, date, action, classCode, jp, subject]
            .map(v => String(v || '').trim().toUpperCase()).join('|');
    }

    async function processScan(classCode) {
        if (scanInProgress) {
            showScanResult('⏳ Scan sebelumnya masih diproses. Tunggu sebentar...', 'warning');
            return;
        }
        if (!CLASSES.includes(classCode)) { showScanResult('❌ Kelas invalid: ' + classCode, 'error'); return; }
        if (!currentUser) { showScanResult('Silakan login.', 'error'); return; }

        const ket = document.getElementById('keteranganInput').value.trim();
        const now = getCurrentWITA();//new Date();
        const dateStr = getLocalDateString(now);
        const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const timeMins = now.getHours() * 60 + now.getMinutes();
        
        const day = getDayName();
        const isJumat = (day === 'jumat');
        const jadwal = isJumat ? JADWAL_WAKTU.jumat : JADWAL_WAKTU.reguler;
        
        let myBlocks = [];
        let currentBlock = null;

        for (let i = 1; i <= 8; i++) {
            let jp = 'JP ' + i;
            if (!jadwal[jp]) continue; 
            
            let mapel = getMapelForScan(classCode, currentUser, day, jp);
            if (mapel) {
                let m = parseTimeToMins(jadwal[jp].masuk);
                let k = parseTimeToMins(jadwal[jp].keluar);
                
                if (!currentBlock) {
                    currentBlock = { jps: [jp], mapel: mapel, masuk: m, keluar: k, strMasuk: jadwal[jp].masuk, strKeluar: jadwal[jp].keluar };
                } else {
                    if (currentBlock.mapel === mapel) {
                        currentBlock.jps.push(jp);
                        currentBlock.keluar = k;
                        currentBlock.strKeluar = jadwal[jp].keluar;
                    } else {
                        myBlocks.push(currentBlock);
                        currentBlock = { jps: [jp], mapel: mapel, masuk: m, keluar: k, strMasuk: jadwal[jp].masuk, strKeluar: jadwal[jp].keluar };
                    }
                }
            } else {
                if (currentBlock) {
                    myBlocks.push(currentBlock);
                    currentBlock = null;
                }
            }
        }
        if (currentBlock) myBlocks.push(currentBlock);

let activeBlock = null;
        let minDiff = 9999;
        
        for (let i = 0; i < myBlocks.length; i++) {
            let b = myBlocks[i];
            let m = b.masuk; let k = b.keluar; let isValid = false;
            
            // Toleransi duluan masuk: 30 menit untuk Pembiasaan Pagi, 10 menit untuk JP biasa
            let allowEarlyMins = b.jps.includes('Pembiasaan Pagi') ? 30 : 10; 
            
            if (currentMode === 'masuk') { 
                isValid = (timeMins >= (m - allowEarlyMins) && timeMins <= k); 
            } else if (currentMode === 'keluar') { 
                isValid = (timeMins >= m && timeMins <= (k + 20)); // Batas keluar 20 Menit
            } else { 
                isValid = (timeMins >= (m - allowEarlyMins) && timeMins <= (k + 20)); 
            }
            
            if (isValid) {
                let center = (m + k) / 2;
                let diff = Math.abs(timeMins - center);
                if (diff < minDiff) { minDiff = diff; activeBlock = b; }
            }
        }

                let jpFinal, mapelFinal, jMasuk, jKeluar;
        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");

        // PERBAIKAN: Jika sedang Keluar dan ada sesi aktif, PAKAI data spesifik sesi tersebut (jangan tebak dari jam sekarang)
        if (currentMode === 'keluar' && activeTeaching && activeTeaching.rawClass === classCode) {
            jpFinal = activeTeaching.jp;
            mapelFinal = activeTeaching.subject;
            jMasuk = activeTeaching.masuk;
            jKeluar = activeTeaching.keluar;
        } else {
            if (activeBlock) {
                let start = activeBlock.jps[0].replace('JP ', '');
                let end = activeBlock.jps[activeBlock.jps.length-1].replace('JP ', '');
                jpFinal = activeBlock.jps.length > 1 ? `JP ${start}-${end}` : activeBlock.jps[0];
                mapelFinal = activeBlock.mapel;
                jMasuk = activeBlock.strMasuk;
                jKeluar = activeBlock.strKeluar;
            } else {
                jpFinal = getCurrentJPInfo(currentMode);
                mapelFinal = getMapelForScan(classCode, currentUser, day, jpFinal);
                let bWaktu = jadwal[jpFinal] || { masuk: '00:00', keluar: '00:00' };
                jMasuk = bWaktu.masuk; jKeluar = bWaktu.keluar;
            }
        }

        let isWrongClass = (!mapelFinal || mapelFinal === 'Di Luar Jadwal');

        // PERBAIKAN KEAMANAN: Cegah scan KELUAR jika belum ada record MASUK sama sekali di sesi JP spesifik ini
        if (currentMode === 'keluar' && !activeTeaching) {
            let isMasukFoundLocally = false;
            try {
                const localHist = await getLocalHistory(currentUser, dateStr);
                isMasukFoundLocally = localHist.some(h => h.action === 'masuk' && h.class === formatKopelClass(classCode, mapelFinal) && h.jp === jpFinal);
            } catch(e) {}
            
            let isMasukFoundServer = serverDataCache.some(h => h.teacher === currentUser && h.action === 'masuk' && h.class === formatKopelClass(classCode, mapelFinal) && h.jp === jpFinal && h.date === dateStr);
            
            if (!isMasukFoundLocally && !isMasukFoundServer) {
                showScanResult(`⚠️ Ditolak: Anda belum absen MASUK untuk kelas ini pada sesi ${jpFinal}.`, 'error');
                playBeepWarning();
                return;
            }
        }

        //let isWrongClass = (!mapelFinal || mapelFinal === 'Di Luar Jadwal');

        // Logika Peringatan Salah Kelas / Guru Pengganti (Requirement 3)
        if (isWrongClass && currentMode === 'masuk') {
            document.getElementById('modalContent').innerHTML = `
                <div class="text-center p-4">
                    <i class="fa-solid fa-triangle-exclamation text-warning mb-4" style="font-size: 3rem;"></i>
                    <h3 class="font-bold text-lg mb-2">Peringatan Salah Ruangan</h3>
                    <p class="text-sm mb-4 text-muted">Guru atas nama <b>${currentUser}</b> tidak terdeteksi memiliki jadwal di kelas <b>${classCode}</b> pada jam ini.</p>
                    <p class="text-xs mb-4 text-gray-500">Jika Anda adalah guru yang menggantikan, silakan gunakan tombol di bawah.</p>
                    <button class="btn btn-warning w-full" id="btnGuruPengganti"><i class="fa-solid fa-user-plus"></i> Masuk sebagai Guru Pengganti</button>
                </div>
            `;
            document.getElementById('modalOverlay').classList.remove('hidden');
            document.getElementById('btnGuruPengganti').onclick = () => {
                document.getElementById('modalOverlay').classList.add('hidden');
                document.getElementById('keteranganInput').value = "Guru Pengganti";
                executeFinalScanRecord(classCode, "Guru Pengganti", 'Di Luar Jadwal', jpFinal, jMasuk, jKeluar, dateStr, timeStr, day, now);
            };
            return;
        }

        // =========================================================
        // --- AWAL TAMBAHAN LOGIKA CEK TERLAMBAT SAAT SCAN ---
        // =========================================================
        const tolMasuk = parseInt(localStorage.getItem('tolMasuk')) || 3;
        let isLate = false;
        let m = parseTimeToMins(jMasuk);
        
        if (currentMode === 'masuk' && m > 0) {
            // Batas maksimal telat Pembiasaan Pagi = 07.15 + 3 menit = 07.18
            let toleranceLimit = (jpFinal === 'Pembiasaan Pagi') ? 3 : tolMasuk;
            if ((timeMins - m) > toleranceLimit) {
                isLate = true;
            }
        }
        // =========================================================

        if (isLate) {
            // Tahan proses! Panggil fungsi poptext yang dibuat di Langkah A
            showLateReasonModal((alasan) => {
                // Callback ini akan dieksekusi SETELAH guru menekan tombol "Simpan Alasan" di poptext
                
                // Gabungkan jika guru sebelumnya sudah mengisi kolom keterangan (opsional) di layar utama
                let finalKet = ket ? `${ket} | Telat: ${alasan}` : `Telat: ${alasan}`;
                
                // Lanjutkan proses simpan ke database dengan membawa alasan telat
                executeFinalScanRecord(classCode, finalKet, mapelFinal || 'Di Luar Jadwal', jpFinal, jMasuk, jKeluar, dateStr, timeStr, day, now);
            }, "");
            
            // Wajib diberi return agar baris executeFinalScanRecord reguler di bawah tidak ikut tereksekusi
            return; 
        }
        // =========================================================
        // --- AKHIR TAMBAHAN LOGIKA CEK TERLAMBAT SAAT SCAN ---
        // =========================================================

        // Jika tidak telat, proses akan lurus saja mengeksekusi baris ini secara instan
        executeFinalScanRecord(classCode, ket, mapelFinal || 'Di Luar Jadwal', jpFinal, jMasuk, jKeluar, dateStr, timeStr, day, now);
    }

async function executeFinalScanRecord(classCode, ket, subject, jpFinal, jMasuk, jKeluar, dateStr, timeStr, day, now) {
    if (scanInProgress) {
        showScanResult('⏳ Scan sedang diproses. Jangan scan ulang.', 'warning');
        return;
    }
    scanInProgress = true;

    try {
        const action = currentMode || 'masuk';
        const formattedClass = formatKopelClass(classCode, subject);

        // QR scanner dapat memanggil callback lebih dari sekali.
        const fingerprint = buildScanFingerprint(classCode, action, currentUser, dateStr, jpFinal, subject);
        const nowMs = Date.now();
        if (fingerprint === lastScanFingerprint && (nowMs - lastScanAt) < 15000) {
            showScanResult('⚠️ QR yang sama baru saja diproses. Scan diabaikan.', 'warning');
            return;
        }
        lastScanFingerprint = fingerprint;
        lastScanAt = nowMs;

        // ----------------------------------------------------------
        // AUTO-CHECKOUT KELAS SEBELUMNYA
        // ----------------------------------------------------------
        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");

        if (action === 'masuk' && activeTeaching && !activeTeaching.keluarScanned) {
            const oldClass = activeTeaching.class;
            const oldSubject = activeTeaching.subject;
            const oldJp = activeTeaching.jp || '-';

            const oldHist = await getLocalHistory(currentUser, dateStr).catch(() => []);
            const oldAlreadyOutLocal = oldHist.some(r =>
                r.action === 'keluar' && r.class === oldClass && r.jp === oldJp
            );
            const oldAlreadyOutServer = serverDataCache.some(r =>
                r.teacher === currentUser &&
                r.action === 'keluar' &&
                r.class === oldClass &&
                r.jp === oldJp &&
                r.date === dateStr
            );

            if (!oldAlreadyOutLocal && !oldAlreadyOutServer) {
                const recordLupa = {
                    session_id: generateSessionId(activeTeaching.date || dateStr, currentUser, oldSubject, oldClass, oldJp, 'keluar'), // FIX: auto-checkout juga wajib punya session_id
                    teacher: currentUser,
                    class: oldClass,
                    subject: oldSubject,
                    action: 'keluar',
                    date: activeTeaching.date || dateStr,
                    time: timeStr,
                    day: getDayNameID(),
                    jp: oldJp,
                    jadwal_masuk: activeTeaching.masuk || '-',
                    jadwal_keluar: activeTeaching.keluar || '-',
                    timestamp: now.toISOString(),
                    keterangan: 'lupa absen keluar',
                    synced: false
                };

                const oldId = await saveAttendanceLocal(recordLupa);
                recordLupa.id = oldId;
                addHistoryRow({...recordLupa, id: oldId});

                let oldSent = false;
                if (navigator.onLine) {
                    const oldRes = await sendToGoogleSheet(recordLupa);
                    oldSent = !!oldRes.success;
                    if (oldSent) await processSyncedItem(recordLupa);
                }

                // Jangan menghapus activeTeaching kalau auto-out gagal.
                if (oldSent) {
                    activeTeaching.keluarScanned = true;
                    localStorage.setItem('activeTeaching_' + currentUser, JSON.stringify(activeTeaching));
                } else if (!navigator.onLine) {
                    showToast(`📱 Kelas ${oldClass} ditutup lokal; akan disinkronkan saat online.`, 'warning');
                } else {
                    showToast(`⚠️ Auto-out kelas ${oldClass} gagal dikirim. Data tetap disimpan lokal.`, 'warning');
                }
            }
        }

        // ----------------------------------------------------------
        // CEK DUPLIKASI: LOKAL + SERVER + SESSION ID
        // ----------------------------------------------------------
        // FIX: Session ID dibuat SEKALI di sini (saat tap), lalu dipakai untuk
        // pengecekan duplikat, record IndexedDB, dan payload ke server.
        const sessionId = generateSessionId(dateStr, currentUser, subject, formattedClass, jpFinal, action);

        const localHist = await getLocalHistory(currentUser, dateStr).catch(() => []);
        const duplicateLocal = localHist.some(h =>
            h.action === action &&
            h.class === formattedClass &&
            h.jp === jpFinal &&
            h.subject === subject
        );

        const duplicateServer = serverDataCache.some(h =>
            h.teacher === currentUser &&
            h.action === action &&
            h.class === formattedClass &&
            h.jp === jpFinal &&
            h.subject === subject &&
            h.date === dateStr
        );

        // FIX: cek berbasis session_id — paling andal, menangkap event yang sama
        // persis walau atribut teksnya sedikit berbeda (spasi/format kelas/subject).
        const duplicateServerById = serverDataCache.some(h =>
            sessionId && h.session_id && h.session_id === sessionId
        );

        if (duplicateLocal || duplicateServer || duplicateServerById) {
            showScanResult(`⚠️ Anda sudah melakukan absen ${action.toUpperCase()} untuk ${formattedClass} / ${jpFinal}.`, 'warning');
            playBeepWarning();
            document.getElementById('keteranganInput').value = '';
            return;
        }

        // ----------------------------------------------------------
        // KELUAR: cukup ada bukti MASUK di lokal ATAU server.
        // Tidak bergantung sepenuhnya pada activeTeaching.
        // ----------------------------------------------------------
        if (action === 'keluar') {
            const hasMatchingIn =
                localHist.some(h =>
                    h.action === 'masuk' &&
                    h.class === formattedClass &&
                    h.jp === jpFinal &&
                    h.date === dateStr
                ) ||
                serverDataCache.some(h =>
                    h.teacher === currentUser &&
                    h.action === 'masuk' &&
                    h.class === formattedClass &&
                    h.jp === jpFinal &&
                    h.date === dateStr
                );

            if (!hasMatchingIn) {
                showScanResult(`⚠️ Scan KELUAR ditolak: data MASUK ${formattedClass} / ${jpFinal} tidak ditemukan.`, 'error');
                playBeepWarning();
                return;
            }
        }

                // ----------------------------------------------------------
        // UPDATE ACTIVE TEACHING
        // ----------------------------------------------------------
        if (action === 'masuk' && jKeluar !== '00:00') {
            // FIX: Cek apakah saat ini sudah lewat dari batas auto-checkout
            let keluarMins = parseTimeToMins(jKeluar);
            let isPembiasaan = jpFinal === 'Pembiasaan Pagi';
            let triggerMins = isPembiasaan ? parseTimeToMins('07:29') : (keluarMins + 20);
            let currentMins = now.getHours() * 60 + now.getMinutes();

            // Hanya kunci kelas jika belum masuk masa auto-checkout
            if (currentMins < triggerMins) {
                const activeTeachingData = {
                    class: formattedClass,
                    subject: subject,
                    jp: jpFinal,
                    masuk: jMasuk,
                    keluar: jKeluar,
                    notified: false,
                    rawClass: classCode,
                    keluarScanned: false,
                    date: dateStr
                };
                localStorage.setItem('activeTeaching_' + currentUser, JSON.stringify(activeTeachingData));
                updateNextClassInfo();
                checkActiveTeachingForIzinKasus();
            } else {
                showToast('Waktu mengajar sesi ini telah usai. Kunci kelas ditiadakan.', 'info');
            }
        }

        // ----------------------------------------------------------
        // SIMPAN LOKAL SEKALI -> KIRIM SERVER SEKALI
        // ----------------------------------------------------------
        const record = {
            session_id: sessionId, // KUNCI UTAMA anti-duplikat (dibuat sekali saat tap, lihat bagian cek duplikat)
            teacher: currentUser,
            class: formattedClass,
            subject: subject,
            action: action,
            date: dateStr,
            time: timeStr,
            day: getDayNameID(),
            jp: jpFinal,
            jadwal_masuk: jMasuk,
            jadwal_keluar: jKeluar,
            timestamp: now.toISOString(),
            keterangan: ket,
            synced: false
        };

        const id = await saveAttendanceLocal(record);
        record.id = id;

                // FIX: Hapus kuncian kelas secara lokal TERLEPAS dari status internet
        if (action === 'keluar') {
            const actTeach = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
            if (actTeach && actTeach.class === formattedClass && actTeach.jp === jpFinal) {
                localStorage.removeItem('activeTeaching_' + currentUser);
                const timerCard = document.getElementById('activeClassTimerCard');
                if (timerCard) timerCard.classList.add('hidden');
                checkActiveTeachingForIzinKasus();
                currentMode = null;
                updateScanModeUI();
            }
        }
                
        showScanResult( // (Tampilkan notifikasi berhasil lokal)
            ket
                ? `${action === 'masuk' ? '✅ In' : '🚪 Out'} ${formattedClass} (${ket})`
                : `${action === 'masuk' ? '✅ In' : '🚪 Out'} ${formattedClass} (${subject})`,
            'success'
        );
        addHistoryRow({...record, id});

        if (navigator.onLine) {
            const res = await sendToGoogleSheet(record);

            if (res.success) {
                await processSyncedItem(record);
                await refreshServerCache();

                showScanResult('✅ Data terkirim ke Server dan tersimpan sekali.', 'success');

                //if (action === 'keluar') {
                //    const actTeach = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
                //    if (actTeach && actTeach.class === formattedClass && actTeach.jp === jpFinal) {
                //        localStorage.removeItem('activeTeaching_' + currentUser);
                //        const timerCard = document.getElementById('activeClassTimerCard');
                //        if (timerCard) timerCard.classList.add('hidden');
                //        checkActiveTeachingForIzinKasus();
                //        currentMode = null;
                //        updateScanModeUI();
                //    }
                //}
            } else {
                showScanResult('⚠️ Data tersimpan lokal. Gagal kirim ke server; tidak dibuat kiriman kedua.', 'warning');
            }
        } else {
            showScanResult('📱 Offline: data tersimpan lokal dan akan dikirim saat online.', 'info');
        }

        updateSyncStatus();
        playBeep();
        document.getElementById('keteranganInput').value = '';
        renderMySchedule();

    } catch (err) {
        console.error('executeFinalScanRecord error:', err);
        showScanResult('❌ Terjadi kesalahan saat memproses absensi: ' + (err.message || err), 'error');
                // Hapus tanda komentar di bawah ini jika ingin mereset cache saat gagal memproses absen
        //clearAppCacheAndReload();
    } finally {
        setTimeout(() => { scanInProgress = false; }, 500);
    }
}

    // FITUR PENCATATAN SANTRI IZIN & KASUS KELAS
    let tempSantriIzinList = [];
    let tempSantriKasusList = [];

    function checkActiveTeachingForIzinKasus() {
        if (!currentUser) return;
        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
        const containerIzin = document.getElementById('santriIzinContainer');
        const containerKasus = document.getElementById('santriKasusContainer');
        
        if (activeTeaching && !activeTeaching.keluarScanned) {
            containerIzin.classList.remove('hidden');
            containerKasus.classList.remove('hidden');
            document.getElementById('activeClassBadgeIzin').textContent = `Kelas: ${activeTeaching.class} (${activeTeaching.subject})`;
            document.getElementById('activeClassBadgeKasus').textContent = `Kelas: ${activeTeaching.class} (${activeTeaching.subject})`;
        } else {
            containerIzin.classList.add('hidden');
            containerKasus.classList.add('hidden');
        }
    }

    document.getElementById('jenisIzinSelect').addEventListener('change', function() {
        const lainGroup = document.getElementById('keteranganLainGroup');
        if (this.value === 'Lainnya') {
            lainGroup.classList.remove('hidden');
        } else {
            lainGroup.classList.add('hidden');
            document.getElementById('keteranganLainInput').value = '';
        }
    });

    const searchSantriIzinInput = document.getElementById('searchSantriIzinInput');
    const santriIzinDropdown = document.getElementById('santriIzinDropdown');

    searchSantriIzinInput.addEventListener('input', function() {
        let keyword = this.value.trim().toLowerCase();
        santriIzinDropdown.innerHTML = '';
        if (!keyword) {
            santriIzinDropdown.classList.add('hidden');
            return;
        }

        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
        if (!activeTeaching) {
            santriIzinDropdown.classList.add('hidden');
            return;
        }

        let targetClass = activeTeaching.rawClass;
        if (!targetClass) {
            CLASSES.forEach(c => { if(activeTeaching.class.includes(c)) targetClass = c; });
        }

        // Mengambil data spesifik hanya dari kelas yang di-scan (rawClass)
                let listSantriKelas = DATA_SANTRI[targetClass] || [];
        let matched = listSantriKelas.filter(nama => nama.toLowerCase().includes(keyword));

        if (matched.length > 0) {
            santriIzinDropdown.classList.remove('hidden');
            matched.forEach(nama => {
                let div = document.createElement('div');
                div.className = 'dropdown-item';
                div.textContent = nama;
                div.onclick = () => {
                    searchSantriIzinInput.value = nama;
                    santriIzinDropdown.classList.add('hidden');
                };
                santriIzinDropdown.appendChild(div);
            });
        } else {
            santriIzinDropdown.classList.add('hidden');
        }
    });

    const searchSantriKasusInput = document.getElementById('searchSantriKasusInput');
    const santriKasusDropdown = document.getElementById('santriKasusDropdown');

    searchSantriKasusInput.addEventListener('input', function() {
        let keyword = this.value.trim().toLowerCase();
        santriKasusDropdown.innerHTML = '';
        if (!keyword) {
            santriKasusDropdown.classList.add('hidden');
            return;
        }

        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
        if (!activeTeaching) {
            santriKasusDropdown.classList.add('hidden');
            return;
        }

        let targetClass = activeTeaching.rawClass;
        if (!targetClass) {
            CLASSES.forEach(c => { if(activeTeaching.class.includes(c)) targetClass = c; });
        }

                // Mengambil data spesifik hanya dari kelas yang di-scan (rawClass)
                let listSantriKelas = DATA_SANTRI[targetClass] || [];
        let matched = listSantriKelas.filter(nama => nama.toLowerCase().includes(keyword));

        if (matched.length > 0) {
            santriKasusDropdown.classList.remove('hidden');
            matched.forEach(nama => {
                let div = document.createElement('div');
                div.className = 'dropdown-item';
                div.textContent = nama;
                div.onclick = () => {
                    searchSantriKasusInput.value = nama;
                    santriKasusDropdown.classList.add('hidden');
                };
                santriKasusDropdown.appendChild(div);
            });
        } else {
            santriKasusDropdown.classList.add('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchSantriIzinInput.contains(e.target) && !santriIzinDropdown.contains(e.target)) {
            santriIzinDropdown.classList.add('hidden');
        }
        if (!searchSantriKasusInput.contains(e.target) && !santriKasusDropdown.contains(e.target)) {
            santriKasusDropdown.classList.add('hidden');
        }
    });

    document.getElementById('tambahSantriIzinBtn').addEventListener('click', () => {
        const nama = searchSantriIzinInput.value.trim();
        const jenis = document.getElementById('jenisIzinSelect').value;
        const ketLain = document.getElementById('keteranganLainInput').value.trim();

        if (!nama) { showToast('Pilih atau ketik nama santri terlebih dahulu', 'error'); return; }

        let jenisFinal = jenis === 'Lainnya' ? `Lainnya (${ketLain || '-'})` : jenis;
        tempSantriIzinList.push({ nama: nama, jenis_izin: jenisFinal, keterangan_lain: ketLain });
        renderSantriIzinTable();

        searchSantriIzinInput.value = '';
        document.getElementById('jenisIzinSelect').value = 'Ke WC';
        document.getElementById('keteranganLainGroup').classList.add('hidden');
        document.getElementById('keteranganLainInput').value = '';
        showToast('Santri ditambahkan ke daftar izin', 'success');
    });

    function renderSantriIzinTable() {
        const tbody = document.getElementById('santriIzinBody');
        const kirimBtn = document.getElementById('kirimSantriIzinBtn');
        tbody.innerHTML = '';

        if (tempSantriIzinList.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Belum ada santri ditambahkan</td></tr>';
            kirimBtn.classList.add('hidden'); return;
        }

        kirimBtn.classList.remove('hidden');
        tempSantriIzinList.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="font-bold">${item.nama}</td>
                <td><span class="badge bg-amber-100 text-amber-800">${item.jenis_izin}</span></td>
                <td><button class="btn btn-sm btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="removeTempSantriIzin(${index})"><i class="fa-solid fa-trash"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
    }
    window.removeTempSantriIzin = function(index) { tempSantriIzinList.splice(index, 1); renderSantriIzinTable(); };

    document.getElementById('tambahSantriKasusBtn').addEventListener('click', () => {
        const nama = searchSantriKasusInput.value.trim();
        const jenisKasus = document.getElementById('jenisKasusSelect').value;
        const ketKasus = document.getElementById('keteranganKasusInput').value.trim();

        if (!nama) { showToast('Pilih atau ketik nama santri terlebih dahulu', 'error'); return; }

        tempSantriKasusList.push({ nama: nama, jenis_kasus: jenisKasus, keterangan_kasus: ketKasus });
        renderSantriKasusTable();

        searchSantriKasusInput.value = ''; document.getElementById('jenisKasusSelect').value = 'Bolos'; document.getElementById('keteranganKasusInput').value = '';
        showToast('Kasus santri ditambahkan ke daftar', 'success');
    });

    function renderSantriKasusTable() {
        const tbody = document.getElementById('santriKasusBody');
        const kirimBtn = document.getElementById('kirimSantriKasusBtn');
        tbody.innerHTML = '';

        if (tempSantriKasusList.length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Belum ada kasus dicatat</td></tr>';
            kirimBtn.classList.add('hidden'); return;
        }

        kirimBtn.classList.remove('hidden');
        tempSantriKasusList.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="font-bold">${item.nama}</td>
                <td><span class="badge bg-red-100 text-red-700">${item.jenis_kasus}</span></td>
                <td><button class="btn btn-sm btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="removeTempSantriKasus(${index})"><i class="fa-solid fa-trash"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
    }
    window.removeTempSantriKasus = function(index) { tempSantriKasusList.splice(index, 1); renderSantriKasusTable(); };

    document.getElementById('kirimSantriIzinBtn').addEventListener('click', async () => {
        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
        if (!activeTeaching) { showToast('Tidak ada kelas aktif saat ini', 'error'); return; }
        if (tempSantriIzinList.length === 0) return;
        if (!navigator.onLine) { showToast('Offline, gagal mengirim data izin', 'error'); return; }

        const now = new Date();
        const payload = {
            api_action: 'addSantriIzin', teacher: currentUser, class: activeTeaching.class, subject: activeTeaching.subject,
            date: now.toISOString().split('T')[0], time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            timestamp: now.toISOString(), santri_list: tempSantriIzinList
        };

        const btn = document.getElementById('kirimSantriIzinBtn'); btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

        try {
            const response = await fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
            const res = await response.json();
            if (res.success) {
                showToast('✅ Data santri izin berhasil dikirim ke Spreadsheet!', 'success');
                tempSantriIzinList = []; renderSantriIzinTable();
            } else { throw new Error(res.error || 'Gagal menyimpan'); }
        } catch (e) { showToast('❌ Gagal kirim: ' + e.message, 'error'); } finally { btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Kirim Data Izin ke Server'; }
    });

    document.getElementById('kirimSantriKasusBtn').addEventListener('click', async () => {
        let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
        if (!activeTeaching) { showToast('Tidak ada kelas aktif saat ini', 'error'); return; }
        if (tempSantriKasusList.length === 0) return;
        if (!navigator.onLine) { showToast('Offline, gagal mengirim data kasus', 'error'); return; }

        const now = new Date();
        const payload = {
            api_action: 'addSantriKasus', teacher: currentUser, class: activeTeaching.class, subject: activeTeaching.subject,
            date: now.toISOString().split('T')[0], time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            timestamp: now.toISOString(), kasus_list: tempSantriKasusList
        };

        const btn = document.getElementById('kirimSantriKasusBtn'); btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

        try {
            const response = await fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
            const res = await response.json();
            if (res.success) {
                showToast('✅ Data kasus santri berhasil dikirim ke Spreadsheet!', 'success');
                tempSantriKasusList = []; renderSantriKasusTable();
            } else { throw new Error(res.error || 'Gagal menyimpan'); }
        } catch (e) { showToast('❌ Gagal kirim: ' + e.message, 'error'); } finally { btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Kirim Data Kasus ke Server'; }
    });

    function showScanResult(msg, type = 'info') {
        const el = document.getElementById('scanResult');
        el.classList.remove('hidden', 'success', 'error', 'info', 'warning'); el.classList.add(type); el.textContent = msg;
        clearTimeout(el._hideTimer); el._hideTimer = setTimeout(() => el.classList.add('hidden'), 6000);
    }

function updateTeachingTimer() {
    if (!currentUser) return;
    let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
    const timerCard = document.getElementById('activeClassTimerCard');
    
    if (!activeTeaching) { timerCard.classList.add('hidden'); return; }

    timerCard.classList.remove('hidden');
    document.getElementById('activeClassCode').textContent = activeTeaching.class + ' (' + activeTeaching.subject + ')';

    const now = new Date(); const endParts = activeTeaching.keluar.split(':');
    const endDate = new Date(); endDate.setHours(parseInt(endParts[0]), parseInt(endParts[1]), 0, 0);

    const diffSeconds = Math.floor((endDate - now) / 1000);

    if (diffSeconds > 0) {
        const h = Math.floor(diffSeconds / 3600); const m = Math.floor((diffSeconds % 3600) / 60); const s = diffSeconds % 60;
        let timeStr = ""; if (h > 0) timeStr += String(h).padStart(2, '0') + ':';
        timeStr += String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
        document.getElementById('activeClassCountdown').textContent = timeStr;

        if (diffSeconds <= 300) { 
            if (!activeTeaching.notified) { 
                playBeep3x(); 
                activeTeaching.notified = true; 
                localStorage.setItem('activeTeaching_' + currentUser, JSON.stringify(activeTeaching)); 
            }
            const warnEl = document.getElementById('activeClassWarning');
            warnEl.classList.remove('hidden'); 
            warnEl.textContent = `Waktu mengajar di kelas ini akan segera berakhir (pukul ${activeTeaching.keluar})`;
        } else { 
            document.getElementById('activeClassWarning').classList.add('hidden'); 
        }
    } else {
        document.getElementById('activeClassCountdown').textContent = "00:00"; 
        document.getElementById('activeClassWarning').classList.add('hidden');
        
        // Pengecekan otomatis > 3 menit DIHAPUS agar bisa direkam manual dengan 
        // timestamp yang sama dengan waktu masuk kelas kedua sesuai permintaan.
    }
}

async function renderMySchedule() {
    if (!currentUser) return;

    // SEMUA LOGIKA JADWAL MENGGUNAKAN WITA (UTC+8).
    // 00:00 s.d. 12:59 WITA  -> tampilkan jadwal HARI INI.
    // 13:00 s.d. 23:59 WITA -> tampilkan jadwal ESOK HARI.
    const now = getCurrentWITA();
    const isAfternoon = now.getHours() >= 13;

    const targetDate = new Date(now);
    if (isAfternoon) targetDate.setDate(targetDate.getDate() + 1);

    const days = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const targetDay = days[targetDate.getDay()];
    const targetDateStr = getLocalDateString(targetDate);

    // Riwayat absen hanya dipakai ketika yang ditampilkan adalah jadwal hari ini.
    // Jadwal besok tidak boleh dianggap sudah diabsen.
    let attendedList = [];
    if (!isAfternoon) {
        try {
            const history = await getLocalHistory(currentUser, targetDateStr);
            attendedList = [
                ...history,
                ...serverDataCache.filter(
                    d => d.teacher === currentUser &&
                         d.action === 'masuk' &&
                         d.date === targetDateStr
                )
            ];
        } catch(e) {}
    }

    // Untuk jadwal besok, currentMins=0 agar seluruh jadwal besok ditampilkan.
    const blocks = getGroupedSchedule(
        currentUser,
        targetDay,
        isAfternoon ? 0 : (now.getHours() * 60 + now.getMinutes()),
        targetDate
    );

    const card = document.getElementById('myScheduleCard');
    const tbody = document.getElementById('myScheduleBody');
    const title = document.getElementById('myScheduleTitle');

    if (!card || !tbody) return;

    tbody.innerHTML = '';

    // Ubah judul sesuai rentang waktu.
    if (title) {
        title.textContent = isAfternoon
            ? `Jadwal Saya Esok Hari (${targetDay.toUpperCase()})`
            : `Jadwal Saya Hari Ini (${targetDay.toUpperCase()})`;
    }

    // Pastikan kartu jadwal besok lama tidak muncul bersamaan.
    const oldTomorrowCard = document.getElementById('tomorrowScheduleCard');
    if (oldTomorrowCard) oldTomorrowCard.classList.add('hidden');

    if (blocks.length === 0) {
        card.classList.remove('hidden');
        card.style.display = 'block';

        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted" style="padding:18px;">
                    <i class="fa-solid fa-calendar-xmark" style="font-size:1.4rem;"></i><br>
                    ${isAfternoon
                        ? 'Tidak ada jadwal mengajar esok hari.'
                        : 'Tidak ada jadwal mengajar hari ini.'}
                </td>
            </tr>`;
        return;
    }

    card.classList.remove('hidden');
    card.style.display = 'block';

    let countDisplayed = 0;
    const currentMins = now.getHours() * 60 + now.getMinutes();

    blocks.forEach(sch => {
        const mMins = parseTimeToMins(sch.masuk);
        const isOngoing = !isAfternoon &&
            currentMins >= mMins &&
            currentMins <= sch.kMins;

        const isPassed = !isAfternoon && sch.kMins < currentMins;

        // FIX: sebelumnya menggunakan b.jpStr (variabel tidak ada).
        const jpStr = sch.jpStr;

        let hasClockedIn = false;

        if (!isAfternoon) {
            hasClockedIn = attendedList.some(h => {
                let overlap = false;

                sch.jps.forEach(j => {
                    if (h.jp) {
                        const hJps = String(h.jp).replace('JP ', '').split('-');
                        const hStart = parseInt(hJps[0], 10);
                        const hEnd = hJps.length > 1 ? parseInt(hJps[1], 10) : hStart;
                        if (j >= hStart && j <= hEnd) overlap = true;
                    }
                });

                if (!overlap) return false;
                if (h.class === sch.class) return true;

                // Dukungan khusus guru Tahfizh / kelas kopel.
                const teacher = TEACHERS.find(t => t.name === currentUser);
                const isGuruTahfizh = teacher &&
                    (teacher.subjects || []).includes("Tahfizhul Qur'an");

                if (isGuruTahfizh) {
                    const cleanSchClass = String(sch.class).replace(/[()]/g, '');
                    const cleanHClass = String(h.class || '').replace(/[()]/g, '');

                    const kopelGroups = [
                        ['7A', '7B', '7C'],
                        ['7D', '7E', '8A'],
                        ['8B', '8C', '8D', '8E'],
                        ['9A', '9B', '9C', '9D']
                    ];

                    for (const group of kopelGroups) {
                        if (
                            group.some(c => cleanSchClass.includes(c)) &&
                            group.some(c => cleanHClass.includes(c))
                        ) return true;
                    }
                }

                return false;
            });
        }

        // Jadwal yang sudah dilewati dan sudah scan tidak perlu ditampilkan.
        // Untuk jadwal besok, semua baris selalu ditampilkan.
        if (!isAfternoon && isPassed && hasClockedIn) return;

        countDisplayed++;

        const tr = document.createElement('tr');

        if (!isAfternoon && isPassed && !hasClockedIn) {
            tr.className = "bg-red-50";
            tr.innerHTML = `
                <td class="text-danger font-bold text-xs">${jpStr}</td>
                <td class="text-danger text-xs">${sch.masuk}-${sch.keluar}</td>
                <td class="text-danger font-bold text-xs">${sch.class}</td>
                <td class="text-danger text-xs">${sch.mapel}</td>
                <td class="text-xs">
                    <span class="badge bg-red-100 text-red-700 font-bold px-2 py-1">Terlewat</span>
                </td>`;
        } else if (isOngoing) {
            tr.className = "bg-amber-50";
            tr.innerHTML = `
                <td class="font-bold text-amber-800 text-xs">${jpStr}</td>
                <td class="text-amber-800 text-xs">${sch.masuk}-${sch.keluar}</td>
                <td class="font-bold text-amber-800 text-xs">${sch.class}</td>
                <td class="text-amber-800 text-xs">${sch.mapel}</td>
                <td class="text-xs">
                    <span class="badge bg-amber-100 text-amber-700 font-bold px-2 py-1">
                        <i class="fa-solid fa-spinner fa-spin"></i> Berlangsung
                    </span>
                </td>`;
        } else if (isAfternoon) {
            tr.className = "bg-indigo-50";
            tr.innerHTML = `
                <td class="font-bold text-indigo-800 text-xs">${jpStr}</td>
                <td class="text-indigo-800 text-xs">${sch.masuk}-${sch.keluar}</td>
                <td class="font-bold text-indigo-800 text-xs">${sch.class}</td>
                <td class="text-indigo-800 text-xs">${sch.mapel}</td>
                <td class="text-xs">
                    <span class="badge" style="background:#e0e7ff;color:#4338ca;font-weight:700;padding:4px 8px;">
                        Esok
                    </span>
                </td>`;
        } else {
            tr.innerHTML = `
                <td class="font-bold text-xs">${jpStr}</td>
                <td class="text-xs">${sch.masuk}-${sch.keluar}</td>
                <td class="font-bold text-xs">${sch.class}</td>
                <td class="text-xs">${sch.mapel}</td>
                <td class="text-xs">
                    <span class="badge bg-blue-100 text-blue-700 font-bold px-2 py-1">Akan Datang</span>
                </td>`;
        }

        tbody.appendChild(tr);
    });

    if (countDisplayed === 0) {
        card.classList.remove('hidden');
        card.style.display = 'block';
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted" style="padding:18px;">
                    ${isAfternoon
                        ? 'Tidak ada jadwal mengajar esok hari.'
                        : 'Semua jadwal hari ini sudah selesai/tercatat.'}
                </td>
            </tr>`;
    }
}

        function updateClock() {
        const now = getCurrentWITA();//new Date();
        document.getElementById('currentTimeDisplay').textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById('loginDayInfo').innerHTML = '<i class="fa-regular fa-calendar"></i> ' + getDayNameID() + ', ' + now.toLocaleDateString('id-ID');
        
        const currentJP = getCurrentJPInfo(currentMode || 'masuk');
        document.getElementById('jpDisplay').textContent = currentJP;
        
        // Pengecekan pergantian Jam Pelajaran (JP) untuk notifikasi
        if (currentUser && window.lastKnownJP !== undefined && window.lastKnownJP !== currentJP) {
            let isCurrentlyTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null") !== null;
            if (!isCurrentlyTeaching && currentJP !== 'Di luar JP') {
                playJpChangeAlarm();
            }
        }
        window.lastKnownJP = currentJP;

        updateTeachingTimer();
        updateNextClassInfo();
        checkTomorrowSchedule();
                if (now.getSeconds() === 0) renderJadwalGrid(); // Auto refresh penyorot tiap berganti menit
                autoResolveLupaAbsen(); // Tambahkan pemanggilan ini            
    }
    setInterval(updateClock, 1000);
    
    setInterval(() => { if (currentUser) renderMySchedule(); }, 60000);

    function generateHistoryRowHTML(record) {
        // --- TAMBAHAN: Deteksi jika ini adalah record terlewat ---
        if (record.isMissed) {
            return `<td class="text-danger font-bold">${record.time}</td>
                    <td class="font-bold text-danger">${record.class}</td>
                    <td class="text-danger">${record.subject}</td>
                    <td class="text-danger">❌ Terlewat</td>
                    <td class="text-xs text-danger font-bold">${record.keterangan}</td>`;
        }
        // ---------------------------------------------------------

        const tolMasuk = parseInt(localStorage.getItem('tolMasuk')) || 3;
        let isLate = false;
        if (record.action === 'masuk' && record.jadwal_masuk && record.jadwal_masuk !== '-') {
            let m = parseTimeToMins(record.jadwal_masuk);
            let wM = parseTimeToMins(record.time);
            if (m > 0 && wM > 0 && (wM - m) > tolMasuk) isLate = true;
        }
        
        let ketDisplay = record.keterangan || '-';
        let editBtn = '';
        const todayStr = getLocalDateString(new Date());
        
        if (isLate && record.date === todayStr) {
            const encodedRecord = encodeURIComponent(JSON.stringify(record));
            editBtn = `<br><button class="btn btn-sm btn-outline mt-1 text-warning" style="padding: 4px 8px; font-size: 0.7rem; width: 100%; border-color: var(--warning);" onclick="editKeterangan('${encodedRecord}')"><i class="fa-solid fa-pen"></i> Edit Alasan</button>`;
        }
        
        return `<td>${record.time}</td><td class="font-bold">${record.class}</td><td>${record.subject}</td><td>${record.action === 'masuk' ? '✅ In' : '🚪 Out'}</td><td class="text-xs">${ketDisplay}${editBtn}</td>`;
    }

    function addHistoryRow(record) {
        const tbody = document.getElementById('historyBody');
        const tr = document.createElement('tr');
        tr.innerHTML = generateHistoryRowHTML(record);
        tbody.prepend(tr);
        if (tbody.children.length > 50) tbody.removeChild(tbody.lastChild);
        document.getElementById('historyCount').textContent = tbody.children.length;
    }

    function loadHistory() {
        if (!currentUser) return;
        getLocalHistory(currentUser, getLocalDateString(new Date())).then((localData) => {
            const todayStr = getLocalDateString(new Date());
            const serverData = serverDataCache.filter(d => d.teacher === currentUser && d.date === todayStr);

            const mergedMap = new Map();
            serverData.forEach(d => {
                const key = `${d.class}_${d.subject}_${d.action}_${d.jp}`;
                mergedMap.set(key, { ...d, timestamp: d.timestamp || d.date + 'T' + d.time }); 
            });
            localData.forEach(d => {
                const key = `${d.class}_${d.subject}_${d.action}_${d.jp}`;
                mergedMap.set(key, d);
            });

            const mergedData = Array.from(mergedMap.values());
            
// --- AWAL INJEKSI JADWAL TERLEWAT (HARI INI) ---
            const hari = getDayName();
            const currentMins = new Date().getHours() * 60 + new Date().getMinutes();
            let blocks = getGroupedSchedule(currentUser, hari, currentMins, new Date());
            
            // Buat Set untuk melacak kopel yang sudah dicek agar tidak muncul berulang
            let processedKopel = new Set();

            blocks.forEach(b => {
                let mMins = parseTimeToMins(b.masuk);
                // Terlewat jika sudah lebih dari 15 menit dari jadwal masuk
                if (currentMins > (mMins + 15)) {
                    let jpStr = b.jps.length > 1 ? `JP ${b.jps[0]}-${b.jps[b.jps.length-1]}` : `JP ${b.jps[0]}`;
                    let fClass = formatKopelClass(b.class, b.mapel);
                    let fClassClean = fClass.replace(/[()]/g, ''); // Normalisasi hapus kurung
                    let uniqueKey = jpStr + '_' + fClassClean;

                    if (processedKopel.has(uniqueKey)) return; // Mencegah duplikasi kelas kopel
                    processedKopel.add(uniqueKey);
                    
                    // Cek apakah ada record dengan kopel yang sama (tanpa melihat kurung yang mana)
                    let isScanned = mergedData.some(d => {
                        let dClassClean = (d.class || '').replace(/[()]/g, '');
                        return d.action === 'masuk' && d.jp === jpStr && dClassClean === fClassClean;
                    });
                    
                    if (!isScanned) {
                        mergedData.push({
                            isMissed: true,
                            time: '-',
                            class: fClassClean, // Tampilkan tanpa kurung agar jelas ini satu kesatuan kopel
                            subject: b.mapel,
                            action: 'masuk',
                            keterangan: 'Tidak Scan Masuk',
                            timestamp: todayStr + 'T' + b.masuk + ':00' // Agar berurutan sesuai jadwal
                        });
                    }
                }
            });
            // --- AKHIR INJEKSI ---

            const tbody = document.getElementById('historyBody'); tbody.innerHTML = '';
            
            mergedData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).forEach(record => {
                const tr = document.createElement('tr');
                if (record.isMissed) tr.className = "bg-red-50"; // Tambahkan background merah
                tr.innerHTML = generateHistoryRowHTML(record);
                tbody.appendChild(tr);
            });
            document.getElementById('historyCount').textContent = tbody.children.length;
            renderMySchedule();
        });
    }

    function playBeep() { try { const ctx = new(window.AudioContext || window.webkitAudioContext)(); const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.connect(gain); gain.connect(ctx.destination); osc.frequency.value = 1000; osc.type = 'square'; gain.gain.value = 0.5; osc.start(); setTimeout(() => { osc.stop(); ctx.close(); }, 150); } catch (e) {} }
    function playBeep3x() { let count = 0; let intv = setInterval(() => { playBeep(); count++; if(count >= 3) clearInterval(intv); }, 800); }
    function playBeepWarning() { let count = 0; let intv = setInterval(() => { try { const ctx = new(window.AudioContext || window.webkitAudioContext)(); const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.connect(gain); gain.connect(ctx.destination); osc.frequency.value = 800; osc.type = 'triangle'; gain.gain.value = 0.5; osc.start(); setTimeout(() => { osc.stop(); ctx.close(); }, 200); } catch(e) {} count++; if(count >= 3) clearInterval(intv); }, 400); }

    function updateOfflineStatus() {
        const banner = document.getElementById('offlineBanner');
        if (!navigator.onLine) { banner.classList.add('show'); } else { banner.classList.remove('show'); syncNow(false, true); updateSyncStatus(); }
    }
    // --- TAMBAHKAN FUNGSI INI ---
// REPLACEMENT FOR autoResolveLupaAbsen
async function autoResolveLupaAbsen() {
    if (!currentUser) return;
    let activeStr = localStorage.getItem('activeTeaching_' + currentUser);
    if (!activeStr) return;
    
    let activeData = JSON.parse(activeStr);
    const todayStr = getLocalDateString(new Date());
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    let keluarMins = parseTimeToMins(activeData.keluar);
    let isPembiasaan = activeData.jp === 'Pembiasaan Pagi';
    
    // Trigger Auto-Checkout: Pukul 07:29 untuk Pembiasaan Pagi, atau Jam Keluar + 20 menit untuk JP biasa
    let triggerMins = isPembiasaan ? parseTimeToMins('07:29') : (keluarMins + 20);

    if (activeData.date === todayStr && currentMins >= triggerMins) {
        let outH = Math.floor(triggerMins / 60);
        let outM = triggerMins % 60;
        let autoOutTime = String(outH).padStart(2, '0') + ':' + String(outM).padStart(2, '0') + ':00';

        const recordLupa = {
            session_id: generateSessionId(activeData.date, currentUser, activeData.subject, activeData.class, activeData.jp || '-', 'keluar'), // FIX: auto-checkout juga wajib punya session_id
            teacher: currentUser, class: activeData.class, subject: activeData.subject, action: 'keluar',
            date: activeData.date, time: autoOutTime, day: getDayNameID(), 
            jp: activeData.jp || '-', 
            jadwal_masuk: activeData.masuk || '-', 
            jadwal_keluar: activeData.keluar,
            timestamp: now.toISOString(), keterangan: 'lupa scan keluar', synced: false
        };
        
        await saveAttendanceLocal(recordLupa);
        if (navigator.onLine) {
            sendToGoogleSheet(recordLupa).then(res => { if(res.success) processSyncedItem(recordLupa); });
        }

        localStorage.removeItem('activeTeaching_' + currentUser);
        const timerCard = document.getElementById('activeClassTimerCard');
        if(timerCard) timerCard.classList.add('hidden');
        
        updateScanModeUI();
        showToast('Sistem mencatat otomatis absen keluar (' + (isPembiasaan ? 'Batas Pembiasaan Pagi 07:29' : 'Lupa > 20 Menit') + ').', 'warning');
    }
}
    


async function verifySheetStatus() {
    // Sinkronisasi status tombol berdasarkan data server terbaru setelah online
    if (!currentUser) return;

    let activeStr = localStorage.getItem('activeTeaching_' + currentUser);
    if (!activeStr) return; // Tidak ada kelas terkunci, tidak ada yang perlu diverifikasi

    await refreshServerCache();
    const todayStr = getLocalDateString(new Date());
    let activeData;
    try { activeData = JSON.parse(activeStr); } catch (e) { return; }

    // PERBAIKAN KRITIS: hanya lihat histori milik KELAS & JP yang SEDANG terkunci saat ini,
    // JANGAN mengambil "aktivitas terakhir hari ini" dari kelas lain manapun.
    // Sebelumnya fungsi ini bisa salah membaca baris "keluar" milik kelas SEBELUMNYA
    // (karena cache server belum sempat memuat data "masuk" kelas yang baru saja discan),
    // lalu memaksa melepas kunci kelas aktif + mereset currentMode ke 'masuk'.
    // Akibatnya saat guru scan KELUAR untuk kelas yang sebenarnya masih aktif,
    // sistem malah mencatatnya sebagai MASUK lagi (dobel).
    const relevantToday = serverDataCache.filter(d =>
        d.date === todayStr &&
        d.teacher === currentUser &&
        d.class === activeData.class &&
        d.jp === activeData.jp
    );

    if (relevantToday.length > 0) {
        const lastActivity = relevantToday.reduce((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? a : b));

        // Hanya lepas kunci jika aktivitas terakhir UNTUK KELAS/JP INI SENDIRI memang "keluar"
        if (lastActivity.action === 'keluar') {
            localStorage.removeItem('activeTeaching_' + currentUser);
            const timerCard = document.getElementById('activeClassTimerCard');
            if (timerCard) timerCard.classList.add('hidden');
            currentMode = 'masuk';
            updateScanModeUI();
        }
    }
}
// ------------------------------

// --- GANTIKAN EVENT LISTENER ONLINE YANG LAMA ---
window.addEventListener('online', async () => { 
    updateOfflineStatus(); 
    showToast('🌐 Online: Sync otomatis berjalan...', 'success'); 
    await syncNow(false, true);
    await verifySheetStatus(); // Verifikasi data dengan Spreadsheet
});
    window.addEventListener('offline', () => { updateOfflineStatus(); showToast('📴 Offline', 'warning'); });
    setInterval(() => { if (navigator.onLine) syncNow(false, false); }, 30000);

    // GANTIKAN BLOK KODE LAMA DENGAN KODE INI
document.querySelectorAll('#mainTabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#mainTabs .tab').forEach(t => t.classList.remove('active')); tab.classList.add('active');
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        document.getElementById('tab' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)).classList.remove('hidden');
        stopScanner();
        
        if (tab.dataset.tab === 'rekap') loadRekap();
        if (tab.dataset.tab === 'jadwal') renderJadwalPekanIni();
        if (tab.dataset.tab === 'admin' && isAdmin) loadAdminData();
        if (tab.dataset.tab === 'agus' && isAgus) loadAgusData();
        
        // --- TAMBAHAN UNTUK TAB RIWAYAT ---
        if (tab.dataset.tab === 'riwayat') {
            populateRiwayatWeeks();
            loadRiwayatPekanan();
        }
    });
});

    let rekapFilter = 'day';
    document.querySelectorAll('.rekap-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.rekap-filter').forEach(b => { b.classList.remove('active'); b.classList.replace('btn-primary', 'btn-outline'); });
            btn.classList.add('active'); btn.classList.replace('btn-outline', 'btn-primary');
            rekapFilter = btn.dataset.filter; document.getElementById('rekapPeriode').textContent = btn.textContent.trim();
            loadRekap();
        });
    });

    document.querySelectorAll('.admin-view').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.admin-view').forEach(b => { b.classList.remove('active', 'btn-primary'); b.classList.add('btn-outline'); });
            btn.classList.remove('btn-outline'); btn.classList.add('active', 'btn-primary');
            adminViewMode = btn.dataset.view;
            loadAdminData();
        });
    });

async function loadRekap() {
        if (!currentUser) return;
        const tbody = document.getElementById('rekapBody'); 
        tbody.innerHTML = '<tr><td colspan="7" class="text-center font-bold text-gray-500 py-6"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Menarik data dari server...</td></tr>';
        
        try {
            const response = await fetch(GAS_URL + '?action=getAbsensi');
            const res = await response.json();
            if (!res.success) throw new Error(res.error);

            res.data.forEach(d => {
                if (d.date && typeof d.date === 'string' && d.date.includes('T')) {
                    let dt = new Date(d.date);
                    if (!isNaN(dt.getTime())) d.date = dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
                }
                ['time', 'jadwal_masuk', 'jadwal_keluar'].forEach(k => {
                    if (d[k] && typeof d[k] === 'string') {
                        if (d[k].includes('T')) {
                            let dt = new Date(d[k]);
                            if (!isNaN(dt.getTime())) d[k] = dt.getHours().toString().padStart(2,'0') + ':' + dt.getMinutes().toString().padStart(2,'0');
                        } else {
                            d[k] = d[k].replace(/\./g, ':');
                        }
                    }
                });
            });

            const now = new Date(); 
            const today = now.toISOString().split('T')[0];
            
            let filtered = res.data.filter(d => {
                if (d.teacher !== currentUser) return false;
                if (rekapFilter === 'day') return d.date === today;
                
                // Pastikan tidak merusak objek 'now' bawaan JS
                let filterDate = new Date(); filterDate.setHours(0,0,0,0);
                if (rekapFilter === 'week') {
                    filterDate.setDate(filterDate.getDate() - filterDate.getDay() + 1);
                    return d.date >= filterDate.toISOString().split('T')[0];
                }
                if (rekapFilter === 'month') {
                    filterDate.setDate(1);
                    return d.date >= filterDate.toISOString().split('T')[0];
                }
                return true; 
            });

            const tolMasuk = parseInt(localStorage.getItem('tolMasuk')) || 3;
            const tolKeluar = parseInt(localStorage.getItem('tolKeluar')) || 3;

            let lateCount = 0; let earlyCount = 0; let missedCount = 0;

            const grouped = {};
            filtered.forEach(d => {
                if (!d.date || !d.class || !d.jp) return;
                const key = d.date + '_' + d.class + '_' + d.jp;
                if (!grouped[key]) grouped[key] = {
                    date: d.date, class: d.class, subject: d.subject, jp: d.jp,
                    jadwal_masuk: d.jadwal_masuk || '-', jadwal_keluar: d.jadwal_keluar || '-',
                    waktu_masuk: '-', waktu_keluar: '-', ket: d.keterangan || '-', isMissed: false
                };
                if (d.action === 'masuk') {
                    grouped[key].waktu_masuk = d.time;
                    grouped[key].jadwal_masuk = d.jadwal_masuk || grouped[key].jadwal_masuk;
                    if(d.keterangan) grouped[key].ket = d.keterangan;
                }
                if (d.action === 'keluar') {
                    grouped[key].waktu_keluar = d.time;
                    grouped[key].jadwal_keluar = d.jadwal_keluar || grouped[key].jadwal_keluar;
                    if(d.keterangan && grouped[key].ket === '-') grouped[key].ket = d.keterangan;
                }
            });

            // --- AWAL INJEKSI KELAS TERLEWAT PADA REKAP ---
            let startDate = new Date(); startDate.setHours(0,0,0,0);
            if (rekapFilter === 'week') startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
            else if (rekapFilter === 'month') startDate.setDate(1);
            else if (rekapFilter === 'all') startDate = new Date(startDate.getFullYear(), 6, 1); // Batas limit all = 1 Juli (Tahun Ajaran Baru)
            
            let tempDate = new Date(startDate);
            const todayStrLocal = getLocalDateString(new Date());
            const nowMins = new Date().getHours() * 60 + new Date().getMinutes();
            
            while (getLocalDateString(tempDate) <= todayStrLocal) {
                if (tempDate.getDay() !== 0 && !isLiburSekolah(tempDate)) {
                    let dStr = getLocalDateString(tempDate);
                    let dHari = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'][tempDate.getDay()];
                    
                    let blocks = getGroupedSchedule(currentUser, dHari, 0, tempDate);
                    
                                        let processedRekapKopel = new Set();
                    blocks.forEach(b => {
                        let isPassed = true;
                        if (dStr === todayStrLocal) {
                            let m = parseTimeToMins(b.masuk);
                            if (nowMins < (m + 15)) isPassed = false; // Toleransi belum dianggap terlewat
                        }
                        
                        if (isPassed) {
                            let jpStr = b.jps.length > 1 ? `JP ${b.jps[0]}-${b.jps[b.jps.length-1]}` : `JP ${b.jps[0]}`;
                            let fClass = formatKopelClass(b.class, b.mapel);
                            let fClassClean = fClass.replace(/[()]/g, ''); // Normalisasi hapus kurung
                            let kopelKey = dStr + '_' + fClassClean + '_' + jpStr;

                            if (processedRekapKopel.has(kopelKey)) return; // Cegah injeksi ganda untuk kelas kopel
                            processedRekapKopel.add(kopelKey);
                            
                            // Cek apakah ada record di grouped yang base kelasnya sama 
                            let isScanned = Object.values(grouped).some(g => {
                                return g.date === dStr && g.jp === jpStr && String(g.class).replace(/[()]/g, '') === fClassClean;
                            });
                            
                            if (!isScanned) {
                                // Tambahkan entry terlewat menggunakan key kopel bersih agar tidak duplikat
                                grouped[kopelKey] = {
                                    date: dStr, class: fClassClean, subject: b.mapel, jp: jpStr,
                                    jadwal_masuk: b.masuk, jadwal_keluar: b.keluar,
                                    waktu_masuk: '-', waktu_keluar: '-', ket: 'Tdk Scan (Alpa)',
                                    isMissed: true
                                };
                            }
                        }
                    });
                }
                tempDate.setDate(tempDate.getDate() + 1);
            }
            // --- AKHIR INJEKSI ---

            const finalData = Object.values(grouped).sort((a,b) => b.date.localeCompare(a.date) || b.waktu_masuk.localeCompare(a.waktu_masuk));

            tbody.innerHTML = '';
            if (finalData.length === 0) {
                document.getElementById('rekapEmpty').classList.remove('hidden');
                document.getElementById('downloadArea').classList.add('hidden');
                document.getElementById('rekapSummary').querySelectorAll('.num').forEach(el => el.textContent = '0'); 
                return;
            }
            document.getElementById('rekapEmpty').classList.add('hidden');
            document.getElementById('downloadArea').classList.remove('hidden');

            finalData.forEach(r => {
                let isLate = false, isEarly = false;
                let telatMenit = 0, cepatMenit = 0;
                
                let jM = parseTimeToMins(r.jadwal_masuk); let wM = parseTimeToMins(r.waktu_masuk);
                if (jM > 0 && wM > 0) { let diff = wM - jM; if (diff > tolMasuk) { telatMenit = diff - tolMasuk; lateCount += telatMenit; isLate = true; } }
                
                let jK = parseTimeToMins(r.jadwal_keluar); let wK = parseTimeToMins(r.waktu_keluar);
                if (jK > 0 && wK > 0) { let diff = jK - wK; if (diff > tolKeluar) { cepatMenit = diff - tolKeluar; earlyCount += cepatMenit; isEarly = true; } }

                let statusHTML = '';
                const tr = document.createElement('tr');
                
                if (r.isMissed) {
                    statusHTML = '<span class="badge bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Alpa / Terlewat</span>';
                    missedCount++;
                    tr.className = "bg-red-50"; // Baris tabel diwarnai merah
                } else if (r.waktu_masuk === '-' || r.waktu_keluar === '-') {
                    statusHTML = '<span class="badge bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold">Incomplete</span>';
                    if (isLate) statusHTML += `<br><span class="badge bg-amber-100 text-amber-700 px-2 py-1 mt-1 rounded text-xs font-bold">Telat ${telatMenit}m</span>`;
                    if (isEarly) statusHTML += `<br><span class="badge bg-amber-100 text-amber-700 px-2 py-1 mt-1 rounded text-xs font-bold">Cepat ${cepatMenit}m</span>`;
                } else {
                    if (isLate && isEarly) statusHTML = `<span class="badge bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Telat ${telatMenit}m & Cepat ${cepatMenit}m</span>`;
                    else if (isLate) statusHTML = `<span class="badge bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">Telat ${telatMenit}m</span>`;
                    else if (isEarly) statusHTML = `<span class="badge bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">Cepat ${cepatMenit}m</span>`;
                    else statusHTML = '<span class="badge bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Tepat Waktu</span>';
                }

                tr.innerHTML = `<td>${r.date}</td><td class="font-bold">${r.class}</td><td>${r.subject}</td>
                                <td>${r.waktu_masuk}</td><td>${r.waktu_keluar}</td>
                                <td>${statusHTML}</td>
                                <td class="text-xs ${r.isMissed ? 'text-danger font-bold' : ''}">${r.ket}</td>`;
                tbody.appendChild(tr);
            });
            document.getElementById('statTotal').textContent = finalData.length; 
            document.getElementById('statLate').textContent = lateCount; 
            document.getElementById('statEarly').textContent = earlyCount;
            document.getElementById('statMissed').textContent = missedCount; // Update badge Tidak Absen
        } catch (e) { tbody.innerHTML = ''; document.getElementById('rekapEmpty').classList.remove('hidden'); document.getElementById('rekapEmpty').textContent = 'Koneksi gagal saat memuat data server'; }
    }

    function initAdminFilters() {
        const filterSelect = document.getElementById('adminTeacherFilter');
        filterSelect.innerHTML = '<option value="all">-- Semua Guru --</option>';
        TEACHERS.forEach(t => { const opt = document.createElement('option'); opt.value = t.name; opt.textContent = t.name; filterSelect.appendChild(opt); });
    }
        
function buildAdminMissedClasses(allData) {
    const tbody = document.getElementById('missedClassesBody');
    const todayStr = getLocalDateString(new Date()); 
    const serverDataToday = allData.filter(d => d.date === todayStr && d.action === 'masuk');
    const hari = getDayName();
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    let missedList = [];
    
    TEACHERS.forEach(t => {
        let blocks = getGroupedSchedule(t.name, hari, currentMins);
        blocks.forEach(sch => {
            // Syarat masuk list: Waktu saat ini > Jadwal Masuk + 15 Menit
            let batasPengecekan = parseTimeToMins(sch.masuk) + 15;
            
            if (currentMins > batasPengecekan) {
                let hasClockedIn = serverDataToday.some(h => {
                    // Pengecekan 1: Nama Guru harus persis sama
                    if (h.teacher !== t.name) return false;

                    // Pengecekan 2: Toleransi Benturan Jam Pelajaran (JP)
                    let overlap = false;
                    sch.jps.forEach(j => {
                        if (h.jp) {
                            let hJps = h.jp.replace('JP ', '').split('-');
                            let hStart = parseInt(hJps[0]);
                            let hEnd = hJps.length > 1 ? parseInt(hJps[1]) : hStart;
                            if (j >= hStart && j <= hEnd) overlap = true; 
                        }
                    });
                    if (!overlap) return false;

                    // Pengecekan 3: KELAS KOPEL (Berdasarkan Aturan Tahfizh & PJOK)
                    let classMatch = false;
                    
                    // Ekstrak kelas menjadi array (menghilangkan tanda kurung jika ada)
                    let schArr = sch.class.replace(/[()]/g, '').toLowerCase().split(',').map(c => c.trim());
                    let hArr = (h.class || "").replace(/[()]/g, '').toLowerCase().split(',').map(c => c.trim());

                    // Cek Irisan Dasar (Apakah nama kelas yang discan ada di jadwal)
                    if (schArr.some(c => hArr.includes(c))) {
                        classMatch = true;
                    }

                    let mapelStr = (sch.mapel || "").toLowerCase();
                    let hMapelStr = (h.subject || "").toLowerCase();
                    
                    // Aturan Grup Kopel Tahfizh
                    if (!classMatch && mapelStr.includes('tahfiz') && hMapelStr.includes('tahfiz')) {
                        const kopelTahfizh = [
                            ['7a', '7b', '7c'],
                            ['7d', '7e', '8a'],
                            ['8b', '8c', '8d', '8e'],
                            ['9a', '9b', '9c', '9d']
                        ];
                        // Jika kelas di jadwal dan kelas yang discan berada dalam satu grup yang sama -> Cocok!
                        for (let group of kopelTahfizh) {
                            if (group.some(c => schArr.includes(c)) && group.some(c => hArr.includes(c))) {
                                classMatch = true; break;
                            }
                        }
                    }
                    
                    // Aturan Grup Kopel PJOK (Khusus M. Tahir, M. Pd.)
                    if (!classMatch && mapelStr.includes('pjok') && hMapelStr.includes('pjok') && t.name === 'M. Tahir, M. Pd.') {
                        const kopelPJOK = [
                            ['9a', '9b'], ['9c', '9d'], ['7d', '7e'],
                            ['7a', '7b'], ['8a', '8b'], ['7c', '8e']
                        ];
                        // Jika kelas di jadwal dan kelas yang discan berada dalam satu grup yang sama -> Cocok!
                        for (let group of kopelPJOK) {
                            if (group.some(c => schArr.includes(c)) && group.some(c => hArr.includes(c))) {
                                classMatch = true; break;
                            }
                        }
                    }

                    return classMatch;
                });
                
                // Jika setelah semua pengecekan guru tersebut belum scan masuk
                if (!hasClockedIn) {
                    let jpStr = sch.jps.length > 1 ? `JP ${sch.jps[0]}-${sch.jps[sch.jps.length-1]}` : `JP ${sch.jps[0]}`;
                    missedList.push({
                        teacher: t.name, class: sch.class, mapel: sch.mapel, jp: jpStr, waktu: `${sch.masuk} - ${sch.keluar}`
                    });
                }
            }
        });
    });
    
    tbody.innerHTML = '';
    if (missedList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-success font-bold"><i class="fa-solid fa-check-double"></i> Alhamdulillah, seluruh jadwal kelas yang sedang/telah lewat berhasil diisi (Tidak ada yang absen).</td></tr>';
        return;
    }
    
    missedList.forEach(m => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="font-bold text-danger text-sm">${m.teacher}</td><td class="font-bold text-sm">${m.class}</td><td class="text-sm">${m.mapel}</td><td class="font-bold text-danger text-sm">${m.jp}</td><td class="text-sm">${m.waktu}</td>`;
        tbody.appendChild(tr);
    });
}

    let liveMonitorMode = 'ongoing';
    let currentServerDataCacheAdmin = [];

    function getOngoingAndNextJP() {
        const now = new Date();
        const totalMins = now.getHours() * 60 + now.getMinutes();
        const day = getDayName();
        const jadwal = (day === 'jumat') ? JADWAL_WAKTU.jumat : JADWAL_WAKTU.reguler;
        
        let ongoing = null, next = null;
        let jps = Object.keys(jadwal).sort();
        for (let i = 0; i < jps.length; i++) {
            let m = parseTimeToMins(jadwal[jps[i]].masuk);
            let k = parseTimeToMins(jadwal[jps[i]].keluar);
            if (totalMins >= m && totalMins <= k) {
                ongoing = jps[i];
                if (i + 1 < jps.length) next = jps[i+1];
                break;
            } else if (totalMins < m) {
                if (!next) next = jps[i];
                break;
            }
        }
        return { ongoing, next };
    }

function renderLiveMonitor() {
    const tbody = document.getElementById('liveMonitorBody');
    const info = document.getElementById('liveMonitorJpInfo');
    
    if (currentServerDataCacheAdmin.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Belum ada data dari server...</td></tr>'; return;
    }

    const todayStr = getLocalDateString(getCurrentWITA());
    const serverDataToday = currentServerDataCacheAdmin.filter(d => d.date === todayStr && d.action === 'masuk');
    const day = getDayName();
    const jpInfo = getOngoingAndNextJP();
    
    const targetJp = liveMonitorMode === 'ongoing' ? jpInfo.ongoing : jpInfo.next;
    
    if (!targetJp) {
        info.textContent = liveMonitorMode === 'ongoing' ? 'Tidak ada kelas yang sedang berlangsung saat ini.' : 'Tidak ada jadwal kelas berikutnya hari ini.';
        tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted font-bold">${info.textContent}</td></tr>`; return;
    }
    
    const jadwal = (day === 'jumat') ? JADWAL_WAKTU.jumat : JADWAL_WAKTU.reguler;
    info.innerHTML = `<span class="badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs">${targetJp} (${jadwal[targetJp].masuk} - ${jadwal[targetJp].keluar})</span>`;

    let rowsHTML = '';
    let renderedClasses = new Set(); // Mencegah duplikasi tampilan kelas kopel

    CLASSES.forEach(cls => {
        let teachers = []; let mapel = '-';
        TEACHERS.forEach(t => {
            let m = getMapelForScan(cls, t.name, day, targetJp);
            if (m) { teachers.push(t.name); mapel = m; }
        });

        if (teachers.length > 0) {
            let formattedClass = formatKopelClass(cls, mapel);

            // Skip rendering jika kopel ini sudah ditambahkan ke tabel sebelumnya
            if (renderedClasses.has(formattedClass)) return;
            renderedClasses.add(formattedClass);

            let isTahfizh = mapel.toLowerCase().includes('tahfiz');
            let teacherDisplay = isTahfizh ? '<span class="font-bold text-indigo-700">Tim Tahfizh</span>' : teachers.join(', ');

            let hasClockedIn = false;
            const isOverlap = (recordJp, checkJp) => {
                if (!recordJp || !checkJp) return false;
                let rJps = recordJp.replace('JP ', '').split('-');
                let cJps = checkJp.replace('JP ', '').split('-');
                return (parseInt(rJps[0]) <= (cJps.length > 1 ? parseInt(cJps[1]) : parseInt(cJps[0])) && 
                       (rJps.length > 1 ? parseInt(rJps[1]) : parseInt(rJps[0])) >= parseInt(cJps[0]));
            };

            hasClockedIn = serverDataToday.some(d => {
                if (!isOverlap(d.jp, targetJp)) return false;

                // 1. Normalisasi teks kelas yang tampil di baris tabel saat ini
                let kopelArray = formattedClass.replace(/[()]/g, '').toLowerCase().split(',').map(c => c.trim());
                // 2. Normalisasi teks kelas dari data server (yang di-scan guru)
                let serverClass = (d.class || "").replace(/[()]/g, '').toLowerCase().split(',').map(c => c.trim());

                let classMatch = false;

                // Cek irisan langsung (apakah kelas yang di-scan persis ada di dalam grup baris ini)
                if (kopelArray.some(c => serverClass.includes(c))) {
                    classMatch = true;
                }

                let mapelStr = (mapel || "").toLowerCase();
                let hMapelStr = (d.subject || "").toLowerCase();

                // Cek khusus Guru Tahfizh (Harus dipastikan memang mapel Tahfizh yang di-scan)
                if (!classMatch && mapelStr.includes('tahfiz') && hMapelStr.includes('tahfiz')) {
                    const kopelTahfizh = [ 
                        ['7a', '7b', '7c'], 
                        ['7d', '7e', '8a'], 
                        ['8b', '8c', '8d', '8e'], 
                        ['9a', '9b', '9c', '9d'] 
                    ];
                    
                    for (let group of kopelTahfizh) {
                        // KUNCI UTAMA: Hanya centang hijau jika grup kopel di jadwal SAMA PERSIS 
                        // dengan grup kopel tempat guru tersebut benar-benar melakukan scan masuk.
                        let groupMatchSchedule = group.some(c => kopelArray.includes(c));
                        let groupMatchServer = group.some(c => serverClass.includes(c));

                        if (groupMatchSchedule && groupMatchServer) {
                            classMatch = true;
                            break;
                        }
                    }
                }
                
                // Cek khusus PJOK (M. Tahir, M. Pd.)
                if (!classMatch && mapelStr.includes('pjok') && hMapelStr.includes('pjok') && teachers.includes('M. Tahir, M. Pd.')) {
                    const kopelPJOK = [ 
                        ['9a', '9b'], ['9c', '9d'], ['7d', '7e'], 
                        ['7a', '7b'], ['8a', '8b'], ['7c', '8e'] 
                    ];
                    for (let group of kopelPJOK) {
                        if (group.some(c => kopelArray.includes(c)) && group.some(c => serverClass.includes(c))) {
                            classMatch = true;
                            break;
                        }
                    }
                }

                if (!classMatch) return false;
                
                // Pastikan juga guru yang mengajar di server cocok dengan jadwal
                return teachers.includes(d.teacher);
            });


            let statusBadge = hasClockedIn 
                ? '<span class="text-success text-lg" title="Sudah Masuk"><i class="fa-solid fa-circle-check"></i></span>'
                : '<span class="text-warning text-lg" title="Belum Masuk/Menunggu"><i class="fa-solid fa-clock"></i></span>';

            rowsHTML += `<tr>
                <td class="font-bold text-xs">${formattedClass}</td>
                <td class="text-xs">${mapel}</td>
                <td class="text-xs">${teacherDisplay}</td>
                <td class="text-center">${statusBadge}</td>
            </tr>`;
        }
    });

    tbody.innerHTML = rowsHTML || '<tr><td colspan="4" class="text-center text-muted">Tidak ada jadwal pada JP ini</td></tr>';
}
    
    document.addEventListener('click', function(e) {
        if(e.target && e.target.closest('.live-toggle')) {
            const btn = e.target.closest('.live-toggle');
            document.querySelectorAll('.live-toggle').forEach(b => {
                b.classList.remove('btn-primary');
                b.classList.add('btn-outline');
            });
            btn.classList.remove('btn-outline');
            btn.classList.add('btn-primary');
            liveMonitorMode = btn.dataset.mode;
            renderLiveMonitor();
        }
    });
        
    async function loadAdminData() {
        if (!isAdmin) return;
        
        const tbody = document.getElementById('adminBody');
        const missedTbody = document.getElementById('missedClassesBody');
        tbody.innerHTML = '<tr><td colspan="9" class="text-center py-6 font-bold text-gray-500"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Memuat data dari Google Sheets...</td></tr>';
        missedTbody.innerHTML = '<tr><td colspan="5" class="text-center py-4 text-muted"><i class="fa-solid fa-spinner fa-spin"></i> Mengecek rekap...</td></tr>';
        
        try {
            const res = await (await fetch(GAS_URL + '?action=getAbsensi')).json();
            if (!res.success) throw new Error(res.error);
            const tolMasuk = parseInt(localStorage.getItem('tolMasuk')) || 3;
            const tolKeluar = parseInt(localStorage.getItem('tolKeluar')) || 3;
            
            res.data.forEach(d => {
                if (d.date && typeof d.date === 'string' && d.date.includes('T')) {
                    let dt = new Date(d.date);
                    if (!isNaN(dt.getTime())) d.date = dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
                }
                ['time', 'jadwal_masuk', 'jadwal_keluar'].forEach(k => {
                    if (d[k] && typeof d[k] === 'string') {
                        if (d[k].includes('T')) {
                            let dt = new Date(d[k]);
                            if (!isNaN(dt.getTime())) d[k] = dt.getHours().toString().padStart(2,'0') + ':' + dt.getMinutes().toString().padStart(2,'0');
                        } else {
                            d[k] = d[k].replace(/\./g, ':'); 
                        }
                    }
                });
            });
            
            currentServerDataCacheAdmin = res.data;
            renderLiveMonitor(); 
                        
            buildAdminMissedClasses(res.data);
            
            const filterTeacher = document.getElementById('adminTeacherFilter').value;
            const filterPeriod = document.getElementById('adminPeriodFilter').value;
            const todayStr = new Date().toISOString().split('T')[0];

            let filtered = res.data.filter(d => {
                if (filterTeacher !== 'all' && d.teacher !== filterTeacher) return false;
                if (filterPeriod === 'day') return d.date === todayStr;
                if (filterPeriod === 'week') return d.date >= new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)).toISOString().split('T')[0];
                if (filterPeriod === 'month') return d.date >= new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
                return true;
            });

            const grouped = {};
        filtered.forEach(d => {
            if (!d.date || !d.teacher || !d.jp) return;
            const key = d.date + '_' + d.teacher + '_' + d.class + '_' + d.jp;
            if (!grouped[key]) grouped[key] = { date: d.date, teacher: d.teacher, subject: d.subject, class: d.class, jp: d.jp, jadwal_masuk: d.jadwal_masuk || '-', jadwal_keluar: d.jadwal_keluar || '-', waktu_masuk: '-', waktu_keluar: '-', isLupa: false };
            if (d.action === 'masuk') { grouped[key].waktu_masuk = d.time; grouped[key].jadwal_masuk = d.jadwal_masuk || grouped[key].jadwal_masuk; }
            if (d.action === 'keluar') { 
                grouped[key].waktu_keluar = d.time; 
                grouped[key].jadwal_keluar = d.jadwal_keluar || grouped[key].jadwal_keluar; 
                if (d.keterangan === 'Lupa scan keluar pada riwayat kelas sebelumnya') {
                    grouped[key].isLupa = true;
                }
            }
        });

        let tLate = 0, tEarly = 0, tLupa = 0, visibleRecords = 0; 
        tbody.innerHTML = '';
        const finalData = Object.values(grouped).sort((a,b) => b.date.localeCompare(a.date) || a.teacher.localeCompare(b.teacher));
        
        finalData.forEach(g => {
            let telatMenit = 0, cepatMenit = 0;
            let jM = parseTimeToMins(g.jadwal_masuk), wM = parseTimeToMins(g.waktu_masuk);
            if (jM > 0 && wM > 0) { let diff = wM - jM; if (diff > tolMasuk) telatMenit = diff - tolMasuk; }
            let jK = parseTimeToMins(g.jadwal_keluar), wK = parseTimeToMins(g.waktu_keluar);
            if (jK > 0 && wK > 0) { let diff = jK - wK; if (diff > tolKeluar) cepatMenit = diff - tolKeluar; }
            
            // Filter Logika
            if (adminViewMode === 'late' && telatMenit <= 0) return;
            if (adminViewMode === 'early' && cepatMenit <= 0) return;
            if (adminViewMode === 'lupa' && !g.isLupa) return;
            
            if (g.isLupa) tLupa++;
            tLate += telatMenit; tEarly += cepatMenit; visibleRecords++;

            const badgeLupa = g.isLupa ? `<br><span class="badge" style="background:#f3e8ff; color:#9333ea; font-size:0.7rem;">Lupa Scan Keluar</span>` : '';

            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${g.date}</td><td class="font-bold">${g.teacher}</td><td>${g.subject}</td><td>${g.class}</td><td class="font-bold">${g.jp}</td>
                <td>${g.waktu_masuk} <br><span style="font-size:0.7rem;color:gray">Jdw: ${g.jadwal_masuk}</span></td>
                <td>${g.waktu_keluar} <br><span style="font-size:0.7rem;color:gray">Jdw: ${g.jadwal_keluar}</span>${badgeLupa}</td>
                <td class="${telatMenit>0?'text-danger font-bold':''}">${telatMenit}</td><td class="${cepatMenit>0?'text-warning font-bold':''}">${cepatMenit}</td>`;
            tbody.appendChild(tr);
        });
        
        if (visibleRecords === 0) { tbody.innerHTML = '<tr><td colspan="9" class="text-center py-4">Tidak ada data yang sesuai filter.</td></tr>'; }

        document.getElementById('adminStatTotal').textContent = visibleRecords; 
        document.getElementById('adminStatLate').textContent = tLate + ' Mnt'; 
        document.getElementById('adminStatEarly').textContent = tEarly + ' Mnt';
        document.getElementById('adminStatLupa').textContent = tLupa + ' Kali';
        } catch (e) { tbody.innerHTML = `<tr><td colspan="9" class="text-center text-danger">Gagal: ${e.message}</td></tr>`; }
    }

    function exportTableToExcel(tableId, filename = 'Data_Absensi.xls') {
        const table = document.getElementById(tableId); if (!table) return;
        const template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"></head><body><table>${table.cloneNode(true).innerHTML}</table></body></html>`;
        const blob = new Blob([template], { type: 'application/vnd.ms-excel' }); const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
    }
    
    document.getElementById('downloadRekapBtn').addEventListener('click', () => exportTableToExcel('rekapBody', 'Rekap_Pribadi.xls'));

    document.getElementById('adminTeacherFilter').addEventListener('change', loadAdminData);
    document.getElementById('adminPeriodFilter').addEventListener('change', loadAdminData);
    document.getElementById('adminRefresh').addEventListener('click', loadAdminData);

    document.getElementById('saveToleranceBtn').addEventListener('click', () => {
        const m = document.getElementById('toleranceMasukInput').value;
        const k = document.getElementById('toleranceKeluarInput').value;
        localStorage.setItem('tolMasuk', m);
        localStorage.setItem('tolKeluar', k);
        showToast('Konfigurasi Toleransi Disimpan!', 'success');
        if (isAdmin) loadAdminData();
        if (isAgus) loadAgusData();
    });

    document.getElementById('agusCheckConnection').addEventListener('click', async () => {
        addSyncLog('📡 Cek ping server...', 'info');
        try {
            const response = await fetch(GAS_URL + '?action=ping');
            if (response.ok) { showToast('Ping OK!', 'success'); addSyncLog('✅ Ping Berhasil', 'success'); }
            else { showToast('Ping Gagal', 'error'); addSyncLog('❌ Status: ' + response.status, 'error'); }
        } catch (e) { showToast('Network Error', 'error'); addSyncLog('❌ Error network', 'error'); }
    });

    document.getElementById('agusLoadReport').addEventListener('click', loadAgusData);

    async function loadAgusData() {
    if (!isAgus) return;
    const tbody = document.getElementById('agusBody');
    const period = document.getElementById('agusFilterPeriod').value;
    const tolMasuk = parseInt(localStorage.getItem('tolMasuk')) || 3;
    const tolKeluar = parseInt(localStorage.getItem('tolKeluar')) || 3;
    
    // Perbaikan struktur Header Tabel
    const tableHead = document.querySelector('#agusBody').closest('table').querySelector('thead tr');
    tableHead.innerHTML = '<th>Nama Guru</th><th>Mapel</th><th>Total Sesi</th><th>Telat (Mnt)</th><th>Cepat (Mnt)</th><th>Lupa Out</th>';
    
    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-6 font-bold text-gray-500"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Mengambil data dari Google Sheet...</td></tr>';
    
    try {
        const response = await fetch(GAS_URL + '?action=getAbsensi');
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        
        res.data.forEach(d => {
            if (d.date && typeof d.date === 'string' && d.date.includes('T')) {
                let dt = new Date(d.date);
                if (!isNaN(dt.getTime())) d.date = dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
            }
            ['time', 'jadwal_masuk', 'jadwal_keluar'].forEach(k => {
                if (d[k] && typeof d[k] === 'string') {
                    if (d[k].includes('T')) {
                        let dt = new Date(d[k]);
                        if (!isNaN(dt.getTime())) d[k] = dt.getHours().toString().padStart(2,'0') + ':' + dt.getMinutes().toString().padStart(2,'0');
                    } else {
                        d[k] = d[k].replace(/\./g, ':'); 
                    }
                }
            });
        });
        
        const now = new Date();
        let filtered = res.data.filter(d => {
            if (!d.date) return false;
            if (period === 'day') return d.date === now.toISOString().split('T')[0];
            if (period === 'week') return d.date >= new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)).toISOString().split('T')[0];
            if (period === 'month') return d.date >= new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
            if (period === 'semester') return d.date >= new Date(now.getFullYear(), now.getMonth() < 6 ? 0 : 6, 1).toISOString().split('T')[0];
            return true;
        });
        
        const grouped = {};
        filtered.forEach(d => {
            if (!d.date || !d.teacher || !d.jp) return;
            const key = d.date + '_' + d.teacher + '_' + d.class + '_' + d.jp;
            if (!grouped[key]) grouped[key] = {
                date: d.date, teacher: d.teacher, mapel: d.subject || '-',
                jadwal_masuk: d.jadwal_masuk || '-', jadwal_keluar: d.jadwal_keluar || '-',
                waktu_masuk: '-', waktu_keluar: '-', action_masuk: false, action_keluar: false, isLupa: false
            };
            if (d.action === 'masuk') { grouped[key].waktu_masuk = d.time; grouped[key].jadwal_masuk = d.jadwal_masuk || grouped[key].jadwal_masuk; grouped[key].action_masuk = true; }
            if (d.action === 'keluar') { 
                grouped[key].waktu_keluar = d.time; 
                grouped[key].jadwal_keluar = d.jadwal_keluar || grouped[key].jadwal_keluar; 
                grouped[key].action_keluar = true; 
                if (d.keterangan && d.keterangan.toLowerCase().includes('lupa')) grouped[key].isLupa = true;
            }
            grouped[key].mapel = d.subject || grouped[key].mapel;
        });

        const reportMap = {};
        Object.values(grouped).forEach(g => {
            if (!reportMap[g.teacher]) reportMap[g.teacher] = { name: g.teacher, mapel: g.mapel, total_sesi: 0, telat: 0, cepat: 0, lupa: 0 };
            reportMap[g.teacher].total_sesi++;
            
            if (g.isLupa) reportMap[g.teacher].lupa++;
            
            if (g.action_masuk && g.jadwal_masuk !== '-') {
                let jM = parseTimeToMins(g.jadwal_masuk); let wM = parseTimeToMins(g.waktu_masuk);
                if (jM > 0 && wM > 0) {
                    let diff = wM - jM;
                    if (diff > tolMasuk) reportMap[g.teacher].telat += (diff - tolMasuk);
                }
            }
            if (g.action_keluar && g.jadwal_keluar !== '-' && !g.isLupa) {
                let jK = parseTimeToMins(g.jadwal_keluar); let wK = parseTimeToMins(g.waktu_keluar);
                if (jK > 0 && wK > 0) {
                    let diff = jK - wK;
                    if (diff > tolKeluar) reportMap[g.teacher].cepat += (diff - tolKeluar);
                }
            }
        });

        tbody.innerHTML = '';
        Object.values(reportMap).sort((a,b) => a.name.localeCompare(b.name)).forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td class="font-bold">${item.name}</td><td>${item.mapel}</td>
                <td class="text-primary font-bold text-center">${item.total_sesi}</td>
                <td class="text-center ${item.telat > 0 ? 'text-warning font-bold' : ''}">${item.telat}</td>
                <td class="text-center ${item.cepat > 0 ? 'text-danger font-bold' : ''}">${item.cepat}</td>
                <td class="text-center ${item.lupa > 0 ? 'text-purple-600 font-bold' : ''}">${item.lupa}</td>`;
            tbody.appendChild(tr);
        });
        if (Object.keys(reportMap).length === 0) tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4">Tidak ada data terakumulasi.</td></tr>';
    } catch (e) { tbody.innerHTML = `<tr><td colspan="6" class="text-center text-danger py-4">Error: ${e.message}</td></tr>`; }
}

    document.getElementById('agusEditLink').addEventListener('click', () => {
        document.getElementById('modalContent').innerHTML = `<div class="input-group"><label>URL Apps Script Terpasang</label><input type="text" id="gasUrlInput" value="${GAS_URL}" /></div><button class="btn btn-primary" id="saveGasUrl">Simpan Link</button>`;
        document.getElementById('modalOverlay').classList.remove('hidden');
        document.getElementById('saveGasUrl').onclick = () => {
            GAS_URL = document.getElementById('gasUrlInput').value.trim(); localStorage.setItem('GAS_URL', GAS_URL); showToast('Link Disimpan!', 'success'); document.getElementById('modalOverlay').classList.add('hidden');
        };
    });

    document.getElementById('agusGenQR').addEventListener('click', () => {
        let html = '<div class="grid-2">'; CLASSES.forEach(cls => { html += `<div class="card text-center p-2"><h2 class="text-primary font-bold text-2xl">${cls}</h2></div>`; }); html += '</div>';
        document.getElementById('modalContent').innerHTML = html; document.getElementById('modalOverlay').classList.remove('hidden');
    });

    document.getElementById('modalClose').addEventListener('click', () => { document.getElementById('modalOverlay').classList.add('hidden'); });

    function showToast(msg, type = 'info') {
        const container = document.getElementById('toastContainer'); const toast = document.createElement('div');
        let icon = '';
        if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>'; if (type === 'error') icon = '<i class="fa-solid fa-circle-xmark"></i>';
        if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation"></i>'; if (type === 'info') icon = '<i class="fa-solid fa-circle-info"></i>';
        toast.className = 'toast ' + type; toast.innerHTML = `${icon} <span>${msg}</span>`; container.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px) translateX(-50%)'; setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300); }, 3000);
    }

// ==========================================
// FUNGSI RENDER JADWAL PEKAN INI 
// (Dengan Filter Ganjil/Genap untuk Informatika & SBDP)
// ==========================================
function renderJadwalPekanIni() {
    if (!currentUser) return;
    
    const container = document.getElementById('jadwalPekanContainer');
    const guruText = document.getElementById('jadwalPekanGuru');
    const badge = document.getElementById('jadwalPekanBadge');
    const notice = document.getElementById('jadwalPekanNotice');
    
    guruText.textContent = currentUser;
    
    const isGenap = isEvenWeek();
    badge.innerHTML = isGenap ? '<i class="fa-solid fa-2"></i> Pekan Genap' : '<i class="fa-solid fa-1"></i> Pekan Ganjil';
    
    let html = '';
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    let totalSesi = 0;

    // Untuk mendapatkan tanggal rentang pekan ini secara dinamis
    const range = getWeekDateRange(0);

    days.forEach((day, index) => {
        let currentDate = new Date(range.start);
        currentDate.setDate(currentDate.getDate() + index);
        
        // Panggil fungsi status tanggal (libur/kegiatan/normal)
        const statusHari = getStatusHariIni(currentDate);
        let blocks = getGroupedSchedule(currentUser, day, 0, currentDate);
        
        let dayName = day.charAt(0).toUpperCase() + day.slice(1);
        let dateDisplay = `${String(currentDate.getDate()).padStart(2,'0')}/${String(currentDate.getMonth()+1).padStart(2,'0')}`;

        // Styling Grid berdasarkan status (Merah untuk libur, Hijau untuk STS/Festival/Kegiatan)
        let borderStyle = 'border-gray-200';
        let bgStyle = 'var(--input-bg)';
        let badgeInfo = '';

        if (statusHari.status === 'libur') {
            borderStyle = 'border-red-400';
            bgStyle = '#fef2f2'; // Merah Muda / Red-50
            badgeInfo = `<span class="badge bg-red-100 text-red-700 font-bold px-2 py-1 text-xs"><i class="fa-solid fa-triangle-exclamation"></i> Libur: ${statusHari.label}</span>`;
        } else if (statusHari.status === 'kegiatan') {
            borderStyle = 'border-emerald-400';
            bgStyle = '#ecfdf5'; // Hijau Muda / Emerald-50
            badgeInfo = `<span class="badge bg-emerald-100 text-emerald-700 font-bold px-2 py-1 text-xs"><i class="fa-solid fa-calendar-check"></i> ${statusHari.label}</span>`;
        }

        html += `<div class="p-3 rounded-xl border-2 ${borderStyle} mb-3" style="background: ${bgStyle};">
            <div class="font-bold text-primary mb-2 border-b border-gray-200 pb-1 flex justify-between items-center">
                <span><i class="fa-regular fa-calendar-days"></i> ${dayName}, ${dateDisplay}</span>
                ${badgeInfo}
            </div>`;

        if (statusHari.status === 'libur') {
            html += `<div class="text-center py-3 text-red-600 font-bold text-xs"><i class="fa-solid fa-mug-hot">></i> Hari Tidak Mengajar</div>`;
        } else if (blocks.length > 0) {
            html += `<table class="w-full text-sm"><tbody>`;
            blocks.forEach(b => {
                //let jpStr = b.jps.length > 1 ? `JP ${b.jps[0]}-${b.jps[b.jps.length-1]}` : `JP ${b.jps[0]}`;
                                // Langsung ambil string yang sudah matang dari fungsi getGroupedSchedule
                                let jpStr = b.jpStr;
                html += `<tr class="border-b last:border-0 border-gray-200">
                            <td class="py-2 pr-2 font-bold text-gray-700 align-top whitespace-nowrap" style="width: 25%; font-size: 0.75rem;">
                                ${jpStr}<br><span class="text-xs text-muted font-normal">${b.masuk} - ${b.keluar}</span>
                            </td>
                            <td class="py-2 pr-2 font-black text-gray-800 align-top" style="width: 20%;">${b.class}</td>
                            <td class="py-2 text-primary font-bold align-top" style="font-size: 0.8rem;">${b.mapel}</td>
                         </tr>`;
                totalSesi++;
            });
            html += `</tbody></table>`;
        } else {
            html += `<div class="text-center py-2 text-muted text-xs">Tidak ada jadwal mengajar pada hari ini.</div>`;
        }
        
        html += `</div>`;
    });

    container.innerHTML = html;
}

// ==========================================
// FUNGSI RIWAYAT PEKANAN (NEW)
// ==========================================
function getWeekDateRange(offsetWeeks = 0) {
    const now = new Date();
    const dayOfWeek = now.getDay() || 7; 
    now.setDate(now.getDate() - dayOfWeek + 1); // Mundur ke Hari Senin
    now.setHours(0,0,0,0);
    now.setDate(now.getDate() - (offsetWeeks * 7)); // Offset mundur pekan

    const startDate = new Date(now);
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + 5); // Hari Sabtu
    return { start: startDate, end: endDate };
}

function populateRiwayatWeeks() {
    const select = document.getElementById('riwayatWeekSelect');
    if (select.options.length > 0) return; 
    for (let i = 0; i < 5; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i === 0 ? 'Pekan Ini' : `${i} Pekan Lalu`;
        select.appendChild(opt);
    }
    select.addEventListener('change', loadRiwayatPekanan);
}

let cachedFullRiwayat = null;
async function loadRiwayatPekanan() {
    if (!currentUser) return;
    const container = document.getElementById('riwayatPekanContainer');
    document.getElementById('riwayatPekanGuru').textContent = currentUser;
    
    const offset = parseInt(document.getElementById('riwayatWeekSelect').value) || 0;
    const range = getWeekDateRange(offset);
    
    const formatTgl = (d) => `${String(d.getDate()).padStart(2,'0')} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][d.getMonth()]} ${d.getFullYear()}`;
    document.getElementById('riwayatNotice').innerHTML = `<div class="bg-purple-50 border border-purple-200 text-purple-800 p-2 rounded-lg text-xs mb-3 text-center"><i class="fa-solid fa-calendar-days"></i> Periode: <b>${formatTgl(range.start)} - ${formatTgl(range.end)}</b></div>`;
    
    container.innerHTML = '<div class="text-center py-6 font-bold text-gray-500"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Menarik data server...</div>';
    
    try {
        if (!cachedFullRiwayat) {
            const response = await fetch(GAS_URL + '?action=getAbsensi');
            const res = await response.json();
            if (res.success) cachedFullRiwayat = res.data;
            else throw new Error("Gagal load data");
        }
        renderRiwayatData(cachedFullRiwayat, range);
    } catch(e) {
        container.innerHTML = `<div class="text-center py-6 text-danger"><i class="fa-solid fa-triangle-exclamation"></i> Gagal memuat riwayat: Cek koneksi Anda.</div>`;
    }
}

function renderRiwayatData(allData, range) {
    const container = document.getElementById('riwayatPekanContainer');
    let html = '';
    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    let totalSesi = 0;
    
    const startStr = getLocalDateString(range.start);
    const endStr = getLocalDateString(range.end);
    // Konsisten menggunakan waktu WITA (UTC+8) pada Dashboard RIWAYAT.
    const witaNow = getCurrentWITA();
    const todayStr = getLocalDateString(witaNow);
    const now = witaNow;
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    // Filter data khusus guru ini dan di range pekan yang dipilih
    const userData = allData.filter(d => {
        if (d.teacher !== currentUser) return false;
        let dt = d.date; if (dt && dt.includes('T')) dt = dt.split('T')[0];
        return dt >= startStr && dt <= endStr;
    });
    
    for (let i = 0; i < days.length; i++) {
        let day = days[i];
        let currentDate = new Date(range.start);
        currentDate.setDate(currentDate.getDate() + i);
        let currentDateStr = getLocalDateString(currentDate);
        
        let blocks = getGroupedSchedule(currentUser, day, 0, currentDate);
        
        if (blocks.length > 0) {
            let dayName = day.charAt(0).toUpperCase() + day.slice(1);
            let dateDisplay = `${String(currentDate.getDate()).padStart(2,'0')}/${String(currentDate.getMonth()+1).padStart(2,'0')}`;
            
            // Cek apakah hari ini berada di masa depan
            let isFutureDay = currentDateStr > todayStr;
            let headerBg = isFutureDay ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-purple-50 text-purple-700 border-purple-200';
            
            html += `<div class="p-3 rounded-xl border border-gray-200" style="background: var(--input-bg);">
                <div class="font-bold mb-2 border-b pb-2 flex justify-between items-center px-2 rounded-t-lg ${headerBg}">
                    <span><i class="fa-regular fa-calendar-check"></i> ${dayName}, ${dateDisplay}</span>
                </div>
                <table class="w-full text-sm"><tbody>`;
            
            blocks.forEach(b => {
                let jpStr = b.jps.length > 1 ? `JP ${b.jps[0]}-${b.jps[b.jps.length-1]}` : `JP ${b.jps[0]}`;
                let hasIn = false, hasOut = false;
                
                // Variabel untuk menampung waktu scan aktual
                let actualMasuk = '--:--';
                let actualKeluar = '--:--';
                
                userData.forEach(h => {
                    let hDate = h.date.includes('T') ? h.date.split('T')[0] : h.date;
                    if (hDate === currentDateStr) {
                        let overlap = false;
                        if (h.jp) {
                            let hJps = h.jp.replace('JP ', '').split('-');
                            let hStart = parseInt(hJps[0]), hEnd = hJps.length > 1 ? parseInt(hJps[1]) : hStart;
                            b.jps.forEach(j => { if (j >= hStart && j <= hEnd) overlap = true; });
                        }
                        
                        let classMatch = false;
                        const cleanSchClass = b.class.replace(/[()]/g, '');
                        const cleanHClass = (h.class || '').replace(/[()]/g, '');
                        
                        if (cleanSchClass === cleanHClass) classMatch = true;
                        else if (b.mapel.toLowerCase().includes('tahfiz') && (h.subject||'').toLowerCase().includes('tahfiz')) {
                            const groups = [['7A','7B','7C'],['7D','7E','8A'],['8B','8C','8D','8E'],['9A','9B','9C','9D']];
                            for (let g of groups) { if (g.some(c => cleanSchClass.includes(c)) && g.some(c => cleanHClass.includes(c))) classMatch = true; }
                        }
                        
                        if (overlap && classMatch) {
                            if (h.action === 'masuk') {
                                hasIn = true;
                                actualMasuk = h.time ? h.time.substring(0, 5) : '--:--'; // Ambil format HH:mm
                            }
                            if (h.action === 'keluar') {
                                hasOut = true;
                                actualKeluar = h.time ? h.time.substring(0, 5) : '--:--'; // Ambil format HH:mm
                            }
                        }
                    }
                });
                
                let isPast = currentDateStr < todayStr || (currentDateStr === todayStr && b.kMins < currentMins);
                let statusIcon = '';
                
                if (hasIn && hasOut) {
                    statusIcon = `<span class="text-success text-xl" title="Selesai (In & Out)"><i class="fa-solid fa-check-double"></i></span>`;
                } else if (hasIn && !hasOut) {
                    statusIcon = `<span class="text-primary text-xl" title="Lupa Scan Out"><i class="fa-solid fa-check"></i></span>`;
                } else if (!hasIn && isPast) {
                    statusIcon = `<span class="text-danger text-xl opacity-75" title="Terlewat / Alpa"><i class="fa-solid fa-xmark"></i></span>`;
                } else {
                    statusIcon = `<span class="text-gray-300 text-xl" title="Belum Mulai">-</span>`;
                }
                
                html += `<tr class="border-b last:border-0 border-gray-100">
                            <td class="py-2 pr-2 font-bold text-gray-600 align-middle whitespace-nowrap" style="width: 25%; font-size: 0.75rem;">
                                ${jpStr}<br>
                                <!-- Bagian ini menampilkan waktu scan aktual alih-alih jadwal -->
                                <span class="text-xs font-bold ${hasIn || hasOut ? 'text-primary' : 'text-muted'}">${actualMasuk} - ${actualKeluar}</span>
                            </td>
                            <td class="py-2 pr-2 align-middle">
                                <div class="font-black text-gray-800">${b.class}</div>
                                <div class="text-purple-600 font-bold" style="font-size: 0.75rem;">${b.mapel}</div>
                            </td>
                            <td class="py-2 text-center align-middle" style="width: 20%;">${statusIcon}</td>
                         </tr>`;
                totalSesi++;
            });
            html += `</tbody></table></div>`;
        }
    }
    if (totalSesi === 0) { html = `<div class="text-center py-8 text-muted"><i class="fa-solid fa-calendar-xmark text-4xl mb-3 text-gray-300"></i><br>Tidak ada jadwal mengajar pada pekan ini.</div>`; }
    container.innerHTML = html;
}

    document.addEventListener('DOMContentLoaded', async () => {
        await openDB(); 
        renderTeacherList(); 
        
        document.getElementById('toleranceMasukInput').value = localStorage.getItem('tolMasuk') || 3;
        document.getElementById('toleranceKeluarInput').value = localStorage.getItem('tolKeluar') || 3;

        document.getElementById('loginDayInfo').textContent = 'Hari ini: ' + getDayNameID() + ', ' + new Date().toLocaleDateString('id-ID');
        document.getElementById('jpDisplay').textContent = getCurrentJPInfo(); 
        initAdminFilters();
                
                // --- TAMBAHKAN DUA BARIS INI AGAR KOTA MATARAM LANGSUNG DIMUAT OTOMATIS ---
        updateTanggalIslami();
        fetchJadwalSholat();
        // ------------------------------------------------------------------------
        
        const savedUser = localStorage.getItem('absensi_user'); 
        if (savedUser) { 
            const t = TEACHERS.find(x => x.name === savedUser); 
            if (t) {
                // Tarik kembali status admin agar langsung login saat browser me-reload halaman
                const isAdm = localStorage.getItem('absensi_admin') === 'true';
                const admType = localStorage.getItem('absensi_admin_type') || '';
                doLogin(savedUser, isAdm, admType);
            }
        }

        // VISIBILITY API: Mencegah timer mati saat guru pindah ke aplikasi lain (seperti WhatsApp)
        document.addEventListener('visibilitychange', () => {
            // Saat guru kembali membuka halaman absensi ini
            if (document.visibilityState === 'visible' && currentUser) {
                updateClock(); // Langsung perbarui Timer (mencegah lag)
                renderMySchedule(); // Segarkan jadwal
            }
        });
        updateOfflineStatus();
    });

        // ==========================================
    // FUNGSI GANTI SKIN (DENGAN DROPDOWN MENU)
    // ==========================================
    const savedSkin = localStorage.getItem('app_skin') || 'light';
    applySkin(savedSkin);

    const skinBtnToggle = document.getElementById('skinBtnToggle');
    const skinDropdown = document.getElementById('skinDropdown');

    if (skinBtnToggle) {
        skinBtnToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            skinDropdown.classList.toggle('hidden');
        });
    }

    // Event saat tema dipilih
    document.querySelectorAll('#skinDropdown .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const selectedSkin = e.target.closest('.dropdown-item').dataset.skin;
            applySkin(selectedSkin);
            localStorage.setItem('app_skin', selectedSkin);
            skinDropdown.classList.add('hidden');
            showToast('Tema aplikasi berhasil diubah', 'success');
        });
    });

    // Tutup menu jika klik di luar
    document.addEventListener('click', (e) => {
        if (skinDropdown && !skinDropdown.contains(e.target) && e.target !== skinBtnToggle) {
            skinDropdown.classList.add('hidden');
        }
    });

    // Fungsi utama penerapan warna class
    function applySkin(skinName) {
        // Hapus semua skin yang ada sebelumnya
        document.body.classList.remove('dark-skin', 'green-skin', 'purple-skin');
        if (skinName !== 'light') {
            document.body.classList.add(skinName + '-skin');
        }
    }


// Tambahkan di script JS index29.html
function copyRekapWA() {
    const tbody = document.getElementById('missedClassesBody');
    const rows = tbody.querySelectorAll('tr');
    
    // Format tanggal hari ini (Contoh: Selasa, 18 Agustus 2026)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tanggalSekarang = new Date().toLocaleDateString('id-ID', options);
    
    let textToCopy = "*REKAP GURU TIDAK SCAN MASUK HARI INI*\n";
    textToCopy += "*SMP Islam Terpadu Putra Abu Hurairah Mataram*\n";
    textToCopy += "Tanggal: " + tanggalSekarang + "\n\n";
    
    // Cek jika tabel kosong, tidak ada data, atau masih proses loading
    if (rows.length === 0 || (rows.length === 1 && (rows[0].innerText.includes('Menghitung') || rows[0].innerText.includes('Tidak ada')))) {
        textToCopy += "Alhamdulillah, tidak ada catatan guru yang tidak scan masuk hari ini.";
    } else {
        let index = 1;
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            // Pastikan baris tersebut adalah data valid (memiliki 5 kolom)
            if (cells.length >= 5) {
                let guru = cells[0].innerText.trim();
                let kls = cells[1].innerText.trim();
                let mapel = cells[2].innerText.trim();
                let jp = cells[3].innerText.trim();
                let waktu = cells[4].innerText.trim();
                
                // Susunan teks untuk dikirim ke WhatsApp
                textToCopy += `${index}. ${guru}\n`;
                textToCopy += `   📚 Kls: ${kls} | ${mapel} | ${jp}\n\n`;
                index++;
            }
        });
    }
    
    // Proses menyalin ke clipboard (papan klip HP/PC)
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Jika Anda menggunakan library notifikasi/toast di dalam index29.html
        if (typeof showToast === 'function') {
            showToast("Rekap berhasil disalin untuk WhatsApp!", "success");
        } else {
            alert("Rekap berhasil disalin untuk WhatsApp!");
        }
    }).catch(err => {
        console.error('Gagal menyalin teks', err);
        alert("Gagal menyalin teks. Silakan coba lagi.");
    });
}

function cekPembiasaanPagi(namaGuru) {
    const WALI_KELAS = ["Hairul Umam Insani, S. Pd.", "Hafiz Bagis, Lc.", "Salman, S. Pd. I.", "Haqikahurrahman, S. Pd.", "Zulkarnaen Teguh Wibowo, S. Pd. I.", "Firman, S. Pd.", "Syahrul Hasyim, Lc.", "Adiandri Suhaili, M. Pd.", "M. Tahir, M. Pd.", "Ahmad Mahsan Haikal, Lc.", "Saifuddin Hidayat, S. Pd.", "Syamsul Bahri, Lc.", "Ludfi Rusdiyono, S. Pd.", "Ahmad Arroiyan, Lc."];
    
    if (WALI_KELAS.includes(namaGuru)) {
        let now = new Date();
        // Hanya berlaku Senin-Sabtu (1-6)
        if (now.getDay() >= 1 && now.getDay() <= 6) {
            let jam = now.getHours();
            let menit = now.getMinutes();
            let waktuDesimal = jam + (menit / 60);
            
            // Waktu 07:15 (7.25) sampai 07:18 (7.30)
            if (waktuDesimal >= 7.25 && waktuDesimal <= 7.30) {
                return true; // Valid scan masuk pembiasaan pagi
            } else if (waktuDesimal > 7.30 && waktuDesimal <= 7.50) {
                // Di atas 07:18 berarti telat
                return "Telat Pembiasaan Pagi";
            }
        }
    }
    return false;
}

// Fungsi Monitor Live Posisi Seluruh Guru secara Abjad
function renderMasterAdminMonitor() {
    const tbody = document.getElementById('listMasterAdminBody');
    const totalBadge = document.getElementById('totalGuruMonitor');
    
    if (!tbody) return;

    // 1. Ambil data absensi hari ini yang ada di cache admin
    const todayStr = getLocalDateString(getCurrentWITA());
    
    // Filter semua aktivitas masuk maupun keluar untuk hari ini
    const serverDataToday = currentServerDataCacheAdmin.filter(d => d.date === todayStr);

    // 2. Urutkan daftar master guru (TEACHERS) berdasarkan abjad nama
    const sortedTeachers = [...TEACHERS].sort((a, b) => a.name.localeCompare(b.name));
    
    totalBadge.textContent = `${sortedTeachers.length} Guru`;
    let rowsHTML = '';

    // 3. Iterasi setiap guru untuk dicari posisi terakhirnya
    sortedTeachers.forEach(t => {
        // Cari urutan log aktivitas paling terakhir milik guru tersebut (paling atas/terbaru)
        // Kita reverse lognya agar aktivitas paling akhir yang ditemukan duluan
        const lastActivity = [...serverDataToday].reverse().find(d => d.teacher === t.name);
        
        let statusDisplay = '';
        let waktuDisplay = '-';

        if (lastActivity) {
            waktuDisplay = lastActivity.time || '-';
            
            if (lastActivity.action === 'masuk') {
                // Jika aksi terakhir adalah masuk, berarti sedang berada di dalam kelas tersebut
                statusDisplay = `
                    <span style="display: inline-flex; align-items: center; background-color: #ecfdf5; color: #065f46; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 500;">
                        <span style="width: 6px; height: 6px; background-color: #10b981; border-radius: 50%; margin-right: 6px; display: inline-block;"></span>
                        Mengajar Kelas ${lastActivity.class} (${lastActivity.subject || '-'})
                    </span>`;
            } else if (lastActivity.action === 'keluar') {
                // Jika aksi terakhir keluar, berarti sudah meninggalkan kelas terakhirnya
                statusDisplay = `
                    <span style="display: inline-flex; align-items: center; background-color: #f3f4f6; color: #374151; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 500;">
                        Selesai Mengajar Kelas ${lastActivity.class}
                    </span>`;
            }
        } else {
            // Jika tidak ditemukan record sama sekali hari ini
            statusDisplay = `
                <span style="display: inline-flex; align-items: center; background-color: #fef2f2; color: #991b1b; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 500;">
                    Belum Scan Masuk Hari Ini
                </span>`;
        }

        rowsHTML += `
            <style>
                .tr-monitor:hover { background-color: #f9fafb; }
            </style>
            <tr class="tr-monitor" style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px; font-size: 12px; font-weight: 600; color: #111827;">${t.name}</td>
                <td style="padding: 10px; font-size: 12px;">${statusDisplay}</td>
                <td style="padding: 10px; font-size: 12px; color: #4b5563; font-family: monospace;">${waktuDisplay}</td>
            </tr>
        `;
    });

    tbody.innerHTML = rowsHTML || '<tr><td colspan="3" style="text-align: center; padding: 10px;">Tidak ada data guru.</td></tr>';
}

function renderPembiasaanPagiAdmin() {
    const tbody = document.getElementById('bodyPembiasaan');
    if (!tbody || currentServerDataCacheAdmin.length === 0) return;
    
    const period = document.getElementById('filterPembiasaanPeriode').value;
    const todayStr = getLocalDateString(new Date());
    const now = new Date();
    
    // Tentukan hari aktif sekolah (mengecualikan minggu & hari libur nasional)
    let validDates = [];
    let startDate = new Date();
    if (period === 'day') startDate = new Date();
    if (period === 'week') startDate = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    if (period === 'month') startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    
    let tempDate = new Date(startDate);
    while (getLocalDateString(tempDate) <= todayStr) {
        // Cek bukan hari minggu (0) dan bukan hari libur kalender sekolah
        if (tempDate.getDay() !== 0 && !isLiburSekolah(tempDate)) {
            validDates.push(getLocalDateString(tempDate));
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }
    
    let totalHariAktif = validDates.length;
    let dataPembiasaan = currentServerDataCacheAdmin.filter(d => d.jp === 'Pembiasaan Pagi' && d.action === 'masuk' && validDates.includes(d.date));
    
    let html = '';
    for (let guru in WALI_KELAS_MAP) {
        let kelas = WALI_KELAS_MAP[guru];
        let records = dataPembiasaan.filter(d => d.teacher === guru);
        
        let totalHadir = records.length;
        let alfa = totalHariAktif - totalHadir;
        let telat = 0;
        
        records.forEach(r => {
            let m = parseTimeToMins('07:15'); // Jadwal fix
            let w = parseTimeToMins(r.time);
            if (w > (m + 3)) telat++; // Absen di atas pukul 07.18 dicatat telat
        });
        
        html += `<tr>
            <td class="font-bold text-xs">${guru}</td>
            <td class="font-bold text-xs">${kelas}</td>
            <td class="text-success font-bold text-center">${totalHadir}</td>
            <td class="${telat > 0 ? 'text-warning' : 'text-gray-400'} font-bold text-center">${telat}</td>
            <td class="${alfa > 0 ? 'text-danger' : 'text-gray-400'} font-bold text-center">${alfa > 0 ? alfa : 0}</td>
        </tr>`;
    }
    
    tbody.innerHTML = html;
}

// Fungsi Copy Rekap Pribadi ke WA
window.copyRekapPribadiWA = function() {
    const tbody = document.getElementById('rekapBody');
    const rows = tbody.querySelectorAll('tr');
    
    // Ambil nama user dan periode yang sedang aktif
    const userDisplay = document.getElementById('userNameDisplay').textContent;
    const periodeDisplay = document.getElementById('rekapPeriode').textContent;
    
    let textToCopy = `*REKAP ABSENSI PRIBADI*\n`;
    textToCopy += `👤 Guru: ${userDisplay}\n`;
    textToCopy += `📅 Periode: ${periodeDisplay}\n\n`;
    
    // Validasi ketersediaan data
    if (rows.length === 0 || (rows.length === 1 && rows[0].innerText.includes('Belum ada data'))) {
        textToCopy += "Belum ada data absensi pada periode ini.";
    } else {
        rows.forEach((row, index) => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 7) {
                let tgl = cells[0].innerText.trim();
                let kls = cells[1].innerText.trim();
                let mapel = cells[2].innerText.trim();
                let inTime = cells[3].innerText.trim();
                let outTime = cells[4].innerText.trim();
                let status = cells[5].innerText.replace(/\n/g, ' | ').trim();
                let ket = cells[6].innerText.trim();
                
                textToCopy += `${index + 1}. Tanggal: ${tgl}\n`;
                textToCopy += `   📚 Kls: ${kls} (${mapel})\n`;
                textToCopy += `   ⏰ In: ${inTime} | Out: ${outTime}\n`;
                textToCopy += `   📌 Status: ${status}\n`;
                if(ket && ket !== '-') textToCopy += `   📝 Ket: ${ket}\n`;
                textToCopy += `\n`;
            }
        });
        
        // Tambahkan ringkasan total
        let totSesi = document.getElementById('statTotal').textContent;
        let totTelat = document.getElementById('statLate').textContent;
        textToCopy += `*Ringkasan:*\nTotal Sesi: ${totSesi} | Total Telat: ${totTelat} Menit`;
    }
    
    // Salin ke Clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        if (typeof showToast === 'function') {
            showToast("Rekap pribadi berhasil disalin!", "success");
        } else {
            alert("Rekap berhasil disalin!");
        }
    }).catch(err => {
        console.error('Gagal menyalin teks', err);
    });
};

// ==========================================
// LOGIKA DASHBOARD NILAI
// ==========================================
let tempNilaiList = [];

// Variabel global untuk menyimpan data mapping kelas & mapel guru yang sedang login
let currentGuruScheduleData = null;

// Fungsi untuk mengekstrak Kelas dan Mapel yang diajarkan oleh guru dari data jadwal
function getGuruScheduleData(guruName) {
    let scheduleData = {}; 
    let allMapel = new Set();
    
    let teacherInfo = TEACHERS.find(t => t.name === guruName);
    let teacherSubjects = teacherInfo ? teacherInfo.subjects : [];
    
    // Deteksi mapel khusus yang penulisannya tidak standar atau sistem kopel
    const isGuruTahfizh = teacherSubjects.includes("Tahfizhul Qur'an");
    const isInformatika = guruName === 'Agus Sarkawi, S. T.';
    const isSBDP = guruName === 'Saifuddin Hidayat, S. Pd.';

    const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'ahad'];
    days.forEach(hari => {
        if (jadwalPelajaran[hari]) {
            Object.keys(jadwalPelajaran[hari]).forEach(jp => {
                Object.keys(jadwalPelajaran[hari][jp]).forEach(kelas => {
                    let jadwalRaw = jadwalPelajaran[hari][jp][kelas];
                    let mapelFound = null;

                    // 1. Deteksi nama guru langsung (Format: Mapel (Nama Guru))
                    if (jadwalRaw.includes(guruName)) {
                        mapelFound = jadwalRaw.split('(')[0].trim();
                    } 
                    // 2. Deteksi khusus untuk kelas tanpa nama guru (SBDP / Informatika)
                    else if (jadwalRaw.includes('SBDP / Informatika')) {
                        if (isInformatika) mapelFound = 'Informatika';
                        if (isSBDP) mapelFound = 'SBDP';
                    }

                    if (mapelFound) {
                        if (!scheduleData[kelas]) scheduleData[kelas] = new Set();
                        scheduleData[kelas].add(mapelFound);
                        allMapel.add(mapelFound);
                    }
                });
            });
        }
    });
    
    // 3. Khusus guru Tahfizh, berikan akses ke seluruh kelas (karena logika kopel jam terbangnya fleksibel)
    if (isGuruTahfizh) {
         CLASSES.forEach(c => {
             if (!scheduleData[c]) scheduleData[c] = new Set();
             scheduleData[c].add("Tahfizhul Qur'an");
             allMapel.add("Tahfizhul Qur'an");
         });
    }
    
    // Ubah Set ke Array
    for (let kls in scheduleData) {
        scheduleData[kls] = Array.from(scheduleData[kls]);
    }
    
    return {
        classesMapping: scheduleData,
        uniqueMapel: Array.from(allMapel)
    };
}

// Fungsi untuk Inisialisasi Tab Nilai
function initNilaiTab() {
    const classSelect = document.getElementById('nilaiKelasSelect');
    const mapelSelect = document.getElementById('nilaiMapelInput');
    const filterClassSelect = document.getElementById('filterRekapNilaiKelas');
    
    // Set Tanggal Default hari ini
    document.getElementById('nilaiTanggalInput').value = getLocalDateString(new Date());

    // Tarik data kelas dan mapel khusus guru yang sedang login
    currentGuruScheduleData = getGuruScheduleData(currentUser);

    // Reset dropdown (harus dibersihkan setiap tab dibuka agar menyesuaikan akun yang login)
    classSelect.innerHTML = '<option value="">-- Pilih Kelas --</option>';
    filterClassSelect.innerHTML = '<option value="ALL">-- Semua Kelas --</option>';
    mapelSelect.innerHTML = '<option value="">-- Pilih Mapel --</option>';

    // Isi Dropdown Kelas OTOMATIS SESUAI JADWAL
    const diajarKelas = Object.keys(currentGuruScheduleData.classesMapping).sort();
    
    if (diajarKelas.length > 0) {
        diajarKelas.forEach(cls => {
            classSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
            filterClassSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
        });
    } else {
        // Jika tidak punya jadwal (contoh: Admin/Master), tampilkan semua kelas
        CLASSES.forEach(cls => {
            classSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
            filterClassSelect.innerHTML += `<option value="${cls}">${cls}</option>`;
        });
    }

    // Isi Dropdown Mapel OTOMATIS
    if (currentGuruScheduleData.uniqueMapel.length > 0) {
        currentGuruScheduleData.uniqueMapel.forEach(mpl => {
             mapelSelect.innerHTML += `<option value="${mpl}">${mpl}</option>`;
        });
        // Pilih otomatis jika guru ini hanya mengajar 1 Mata Pelajaran secara total
        if (currentGuruScheduleData.uniqueMapel.length === 1) {
            mapelSelect.value = currentGuruScheduleData.uniqueMapel[0];
        }
    }

    // Cek Active Teaching (Apakah sedang ngajar kelas?)
    let activeTeaching = JSON.parse(localStorage.getItem('activeTeaching_' + currentUser) || "null");
    if (activeTeaching && !activeTeaching.keluarScanned) {
        document.getElementById('badgeStatusKelasNilai').innerHTML = '<i class="fa-solid fa-link"></i> Terhubung ke Kelas Aktif';
        document.getElementById('badgeStatusKelasNilai').style.background = '#ecfdf5';
        document.getElementById('badgeStatusKelasNilai').style.color = '#059669';
        
        let rawClass = activeTeaching.rawClass || activeTeaching.class.split(',')[0].replace(/[()]/g, '');
        
        // Auto-select kelas
        if([...classSelect.options].some(opt => opt.value === rawClass)) {
            classSelect.value = rawClass;
            classSelect.dispatchEvent(new Event('change')); // Trigger event agar mapel ikut tersaring
        }
        
        // Auto-select mapel
        setTimeout(() => {
            if([...mapelSelect.options].some(opt => opt.value === activeTeaching.subject)) {
                 mapelSelect.value = activeTeaching.subject;
            } else {
                 mapelSelect.innerHTML += `<option value="${activeTeaching.subject}">${activeTeaching.subject}</option>`;
                 mapelSelect.value = activeTeaching.subject;
            }
        }, 50);
        
    } else {
        document.getElementById('badgeStatusKelasNilai').innerHTML = 'Mode: Manual / Luar Jam';
        document.getElementById('badgeStatusKelasNilai').style.background = '#eff6ff';
        document.getElementById('badgeStatusKelasNilai').style.color = '#2563eb';
    }
}

// === TAMBAHKAN LISTENER AGAR MAPEL MENYESUAIKAN DENGAN KELAS YANG DIPILIH ===
document.getElementById('nilaiKelasSelect').addEventListener('change', function() {
    const selectedKls = this.value;
    const mapelSelect = document.getElementById('nilaiMapelInput');
    
    // Update mapel dropdown secara dinamis tergantung kelas yang di-klik
    if (selectedKls && currentGuruScheduleData && currentGuruScheduleData.classesMapping[selectedKls]) {
        const availableMapel = currentGuruScheduleData.classesMapping[selectedKls];
        mapelSelect.innerHTML = '<option value="">-- Pilih Mapel --</option>';
        availableMapel.forEach(mpl => {
            mapelSelect.innerHTML += `<option value="${mpl}">${mpl}</option>`;
        });
        
        // Jika guru hanya mengajar 1 Mapel di kelas tersebut, pilihkan otomatis!
        if (availableMapel.length === 1) {
            mapelSelect.value = availableMapel[0];
        }
    }
});

// Event saat tab nilai ditekan
document.querySelector('[data-tab="nilai"]').addEventListener('click', () => {
    initNilaiTab();
});

// Fitur Pencarian Nama Santri (Mirip Izin Keluar)
const searchSantriNilaiInput = document.getElementById('searchSantriNilaiInput');
const santriNilaiDropdown = document.getElementById('santriNilaiDropdown');

searchSantriNilaiInput.addEventListener('input', function() {
        let keyword = this.value.trim().toLowerCase();
        let selectedClass = document.getElementById('nilaiKelasSelect').value;
        let selectedMapel = document.getElementById('nilaiMapelInput').value; // Tambahkan ini
        
        santriNilaiDropdown.innerHTML = '';
        if (!keyword || !selectedClass) {
            santriNilaiDropdown.classList.add('hidden');
            if (!selectedClass && keyword) showToast('Silakan pilih kelas terlebih dahulu!', 'warning');
            return;
        }

        // Panggil fungsi kopel berdasarkan kelas dan mapel yang dipilih
        let listSantriKelas = getDaftarSantriKopel(selectedClass, selectedMapel);
    let matched = listSantriKelas.filter(nama => nama.toLowerCase().includes(keyword));

    if (matched.length > 0) {
        santriNilaiDropdown.classList.remove('hidden');
        matched.forEach(nama => {
            let div = document.createElement('div');
            div.className = 'dropdown-item';
            div.textContent = nama;
            div.onclick = () => {
                searchSantriNilaiInput.value = nama;
                santriNilaiDropdown.classList.add('hidden');
                document.getElementById('nilaiAngkaInput').focus(); // Otomatis pindah fokus ke input nilai
            };
            santriNilaiDropdown.appendChild(div);
        });
    } else {
        santriNilaiDropdown.classList.add('hidden');
    }
});

// Sembunyikan dropdown jika klik di luar
document.addEventListener('click', (e) => {
    if (!searchSantriNilaiInput.contains(e.target) && !santriNilaiDropdown.contains(e.target)) {
        santriNilaiDropdown.classList.add('hidden');
    }
});

// Tambah nilai ke daftar sementara
document.getElementById('tambahNilaiBtn').addEventListener('click', () => {
    const kls = document.getElementById('nilaiKelasSelect').value;
    const mapel = document.getElementById('nilaiMapelInput').value.trim();
    const tgl = document.getElementById('nilaiTanggalInput').value;
    const jenis = document.getElementById('nilaiJenisSelect').value;
    let namaUjian = document.getElementById('nilaiNamaPenilaianInput').value.trim();
    const namaSantri = searchSantriNilaiInput.value.trim();
    const nilaiAngka = document.getElementById('nilaiAngkaInput').value;

    if (!kls || !mapel) { showToast('Pilih Kelas dan isi Mapel!', 'error'); return; }
    if (!namaSantri) { showToast('Pilih nama santri terlebih dahulu!', 'error'); return; }
    if (nilaiAngka === '') { showToast('Masukkan angka nilai!', 'error'); return; }
    if (!namaUjian) namaUjian = jenis;

    tempNilaiList.push({
        tanggal_penilaian: tgl,
        jenis_nilai: jenis,
        nama_penilaian: namaUjian,
        nama_santri: namaSantri,
        nilai: nilaiAngka
    });

    renderTempNilaiTable();
    
    // Reset input santri dan nilai untuk entri berikutnya
    searchSantriNilaiInput.value = '';
    document.getElementById('nilaiAngkaInput').value = '';
    searchSantriNilaiInput.focus();
    showToast('Berhasil ditambahkan ke draf', 'success');
});

function renderTempNilaiTable() {
    const tbody = document.getElementById('tempNilaiBody');
    const kirimBtn = document.getElementById('kirimNilaiBtn');
    tbody.innerHTML = '';

    document.getElementById('countTempNilai').textContent = `${tempNilaiList.length} Santri`;

    if (tempNilaiList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Belum ada nilai ditambahkan</td></tr>';
        kirimBtn.classList.add('hidden'); 
        return;
    }

    kirimBtn.classList.remove('hidden');
    tempNilaiList.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="font-bold text-xs">${item.nama_santri}</td>
            <td class="text-center font-black text-blue-700">${item.nilai}</td>
            <td class="text-center"><button class="btn btn-sm btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="removeTempNilai(${index})"><i class="fa-solid fa-trash"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}

window.removeTempNilai = function(index) { 
    tempNilaiList.splice(index, 1); 
    renderTempNilaiTable(); 
};

// Kirim Data Nilai ke Server
document.getElementById('kirimNilaiBtn').addEventListener('click', async () => {
    if (tempNilaiList.length === 0) return;
    if (!navigator.onLine) { showToast('Offline, gagal mengirim data nilai', 'error'); return; }

    const kls = document.getElementById('nilaiKelasSelect').value;
    const mapel = document.getElementById('nilaiMapelInput').value.trim();
    const now = new Date();
    
    const payload = {
        api_action: 'addNilai', 
        teacher: currentUser, 
        class: kls, 
        subject: mapel,
        timestamp: now.toISOString(), 
        nilai_list: tempNilaiList
    };

    const btn = document.getElementById('kirimNilaiBtn'); 
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menyimpan ke Spreadsheet...';

    try {
        const response = await fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
        const res = await response.json();
        if (res.success) {
            showToast('✅ Data nilai berhasil disimpan ke Server!', 'success');
            tempNilaiList = []; 
            renderTempNilaiTable();
            document.getElementById('nilaiNamaPenilaianInput').value = '';
            loadRekapNilai(); // Auto refresh rekap
        } else { 
            throw new Error(res.error || 'Gagal menyimpan'); 
        }
    } catch (e) { 
        showToast('❌ Gagal kirim: ' + e.message, 'error'); 
    } finally { 
        btn.innerHTML = originalText; 
    }
});

// Fitur Load Rekap Nilai
document.getElementById('refreshRekapNilaiBtn').addEventListener('click', loadRekapNilai);
document.getElementById('filterRekapNilaiKelas').addEventListener('change', loadRekapNilai);
document.getElementById('filterRekapNilaiJenis').addEventListener('change', loadRekapNilai);

let serverDataNilai = [];

async function loadRekapNilai() {
    if (!currentUser) return;
    const tbody = document.getElementById('rekapNilaiBody');
    tbody.innerHTML = '<tr><td colspan="3" class="text-center py-6 text-muted"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Mengambil rekap nilai...</td></tr>';
    
    try {
        const response = await fetch(GAS_URL + '?action=getNilai&t=' + new Date().getTime());
        const res = await response.json();
        if (!res.success) throw new Error(res.error);
        
        serverDataNilai = res.data;
        renderRekapNilaiTable();
    } catch (e) {
        tbody.innerHTML = `<tr><td colspan="3" class="text-center text-danger">Gagal: ${e.message}</td></tr>`;
    }
}

function renderRekapNilaiTable() {
    const tbody = document.getElementById('rekapNilaiBody');
    const filterKelas = document.getElementById('filterRekapNilaiKelas').value;
    const filterJenis = document.getElementById('filterRekapNilaiJenis').value;
    
    // Filter Data
    let filtered = serverDataNilai.filter(d => d.guru === currentUser);
    if (filterKelas !== 'ALL') filtered = filtered.filter(d => d.kelas === filterKelas);
    if (filterJenis !== 'ALL') filtered = filtered.filter(d => d.jenis_nilai === filterJenis);
    
    // Sorting: Jenis Ujian -> Nama Ujian -> Nama Santri (Abjad)
    filtered.sort((a, b) => {
        if (a.jenis_nilai !== b.jenis_nilai) return (a.jenis_nilai || '').localeCompare(b.jenis_nilai || '');
        if (a.nama_penilaian !== b.nama_penilaian) return (a.nama_penilaian || '').localeCompare(b.nama_penilaian || '');
        return (a.nama_santri || '').localeCompare(b.nama_santri || '');
    });

    tbody.innerHTML = '';
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted py-4">Belum ada data nilai.</td></tr>';
        return;
    }

    filtered.forEach(d => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-xs">
                <span class="font-bold text-blue-700">${d.nama_penilaian}</span><br>
                <span class="text-muted" style="font-size: 0.7rem;">${d.jenis_nilai} | Kls ${d.kelas}</span>
            </td>
            <td class="font-bold text-xs">${d.nama_santri}</td>
            <td class="text-center font-black">${d.nilai}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Fitur Copy via WA
window.copyRekapNilaiWA = function() {
    const filterKelas = document.getElementById('filterRekapNilaiKelas').value;
    const filterJenis = document.getElementById('filterRekapNilaiJenis').value;
    const rows = document.getElementById('rekapNilaiBody').querySelectorAll('tr');
    
    let textToCopy = `*REKAP NILAI SANTRI*\n`;
    textToCopy += `👨‍🏫 Guru: ${currentUser}\n`;
    textToCopy += `🏫 Kelas: ${filterKelas === 'ALL' ? 'Semua Kelas' : filterKelas}\n`;
    textToCopy += `📝 Jenis: ${filterJenis === 'ALL' ? 'Semua Penilaian' : filterJenis}\n\n`;
    
    if (rows.length === 0 || rows[0].innerText.includes('Belum ada')) {
        textToCopy += "Belum ada data nilai.";
    } else {
        let currentUjian = "";
        rows.forEach((row) => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 3) {
                // Ekstrak data dari kolom
                let ujianRaw = cells[0].innerText.split('\n');
                let namaUjian = ujianRaw[0].trim();
                let namaSantri = cells[1].innerText.trim();
                let skor = cells[2].innerText.trim();
                
                // Grouping berdasarkan Nama Penilaian agar rapi di WA
                if (namaUjian !== currentUjian) {
                    textToCopy += `\n*=== ${namaUjian.toUpperCase()} ===*\n`;
                    currentUjian = namaUjian;
                }
                
                textToCopy += `• ${namaSantri} : *${skor}*\n`;
            }
        });
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Rekap Nilai disalin ke WhatsApp!", "success");
    }).catch(err => {
        alert("Gagal menyalin. Silakan coba lagi.");
    });
};

// ==========================================
// LOGIKA DASHBOARD WALI KELAS
// ==========================================

// Setup Tab Switching Wali Kelas
document.querySelectorAll('.tab-wali').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-wali').forEach(b => b.classList.replace('btn-primary', 'btn-outline'));
        btn.classList.replace('btn-outline', 'btn-primary');
        document.getElementById('waliAbsensiSantri').classList.add('hidden');
        document.getElementById('waliRekapPembiasaan').classList.add('hidden');
        document.getElementById(btn.dataset.target).classList.remove('hidden');
        
        if(btn.dataset.target === 'waliRekapPembiasaan') renderPembiasaanWali();
    });
});

// Listener untuk inisialisasi Wali Kelas saat login
const originalDoLogin = doLogin;
doLogin = async function(name, isAdminUser, adminType) {
    await originalDoLogin(name, isAdminUser, adminType);

    // Tampilkan tombol Tab Wali Kelas jika Guru adalah Wali Kelas ATAU Master Admin
    const klsWali = WALI_KELAS_MAP[name];
    if (klsWali || adminType === 'agus') { // Modifikasi di baris ini
        document.getElementById('waliTab').classList.remove('hidden');
        document.getElementById('waliKelasBadge').textContent = klsWali ? 'Kelas: ' + klsWali : 'Akses Pantauan Master';
        document.getElementById('tglAbsensiSantri').value = getLocalDateString(new Date());
    } else {
        document.getElementById('waliTab').classList.add('hidden');
    }
};

// Autocomplete Nama Santri Harian
const searchAbsensiSantri = document.getElementById('searchAbsensiSantri');
const dropdownAbsensiSantri = document.getElementById('dropdownAbsensiSantri');

searchAbsensiSantri.addEventListener('input', function() {
    let keyword = this.value.trim().toLowerCase();
    dropdownAbsensiSantri.innerHTML = '';
    let kls = WALI_KELAS_MAP[currentUser];
    if (!keyword || !kls) { dropdownAbsensiSantri.classList.add('hidden'); return; }
    
    let matched = (DATA_SANTRI[kls] || []).filter(n => n.toLowerCase().includes(keyword));
    if (matched.length > 0) {
        dropdownAbsensiSantri.classList.remove('hidden');
        matched.forEach(nama => {
            let div = document.createElement('div');
            div.className = 'dropdown-item'; div.textContent = nama;
            div.onclick = () => { searchAbsensiSantri.value = nama; dropdownAbsensiSantri.classList.add('hidden'); };
            dropdownAbsensiSantri.appendChild(div);
        });
    } else { dropdownAbsensiSantri.classList.add('hidden'); }
});

// Tombol Kirim Absensi Santri
document.getElementById('btnKirimAbsensiSantri').addEventListener('click', async () => {
    const tgl = document.getElementById('tglAbsensiSantri').value;
    const nama = searchAbsensiSantri.value.trim();
    const status = document.getElementById('statusAbsensiSantri').value;
    const kls = WALI_KELAS_MAP[currentUser];

    if (!kls) return showToast('Anda bukan wali kelas!', 'error');
    if (!tgl || !nama) return showToast('Pilih tanggal dan nama santri!', 'error');

    const btn = document.getElementById('btnKirimAbsensiSantri');
    const oriText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

    try {
        const payload = { api_action: 'addAbsensiSantriHarian', teacher: currentUser, class: kls, date: tgl, nama_santri: nama, status: status };
        const res = await fetch(GAS_URL, { method: 'POST', body: JSON.stringify(payload) });
        const j = await res.json();
        if(j.success) {
            showToast('Absensi santri berhasil dikirim ke server!', 'success');
            searchAbsensiSantri.value = '';
        } else { throw new Error(j.error); }
    } catch(e) {
        showToast('Gagal mengirim absensi santri.', 'error');
    } finally { btn.innerHTML = oriText; }
});

// Render Rekap Pembiasaan Wali Kelas
async function renderPembiasaanWali() {
    const tbody = document.getElementById('bodyPembiasaanWali');
    tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted"><i class="fa-solid fa-spinner fa-spin"></i> Menarik data...</td></tr>';
    
    try {
        const res = await (await fetch(GAS_URL + '?action=getAbsensi')).json();
        const period = document.getElementById('filterPembiasaanPeriodeWali').value;
        const now = new Date();
        
        let filtered = res.data.filter(d => d.teacher === currentUser && d.jp === 'Pembiasaan Pagi');
        
        // Logika Filter Tanggal
        filtered = filtered.filter(d => {
            let tglData = d.date.includes('T') ? d.date.split('T')[0] : d.date;
            if (period === 'week') return tglData >= getLocalDateString(new Date(now.setDate(now.getDate() - now.getDay() + 1)));
            if (period === 'month') return tglData >= getLocalDateString(new Date(now.getFullYear(), now.getMonth(), 1));
            return true;
        });

        // Grouping Data Masuk Keluar
        let mapPagi = {};
        filtered.forEach(d => {
            let tgl = d.date.includes('T') ? d.date.split('T')[0] : d.date;
            if(!mapPagi[tgl]) mapPagi[tgl] = { in: '-', out: '-', status: 'Hadir' };
            if(d.action === 'masuk') mapPagi[tgl].in = d.time ? d.time.substring(0,5) : '-';
            if(d.action === 'keluar') mapPagi[tgl].out = d.time ? d.time.substring(0,5) : '-';
        });

        tbody.innerHTML = '';
        Object.keys(mapPagi).sort().reverse().forEach(tgl => {
            let r = mapPagi[tgl];
            let telat = false;
            let mMins = parseTimeToMins('07:15');
            let wMins = parseTimeToMins(r.in);
            if (wMins > (mMins + 3)) telat = true;
            
            let statusBadge = telat ? `<span class="badge bg-amber-100 text-amber-700 font-bold px-2 py-1 text-xs">Telat</span>` : `<span class="badge bg-emerald-100 text-emerald-700 font-bold px-2 py-1 text-xs">Tepat</span>`;
            
            tbody.innerHTML += `<tr><td class="font-bold text-xs">${tgl}</td><td>${r.in}</td><td>${r.out}</td><td>${statusBadge}</td></tr>`;
        });
        if(Object.keys(mapPagi).length === 0) tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Belum ada data</td></tr>';
    } catch(e) { tbody.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Gagal terkoneksi.</td></tr>'; }
}

window.copyPembiasaanWaliWA = function() {
    let textToCopy = `*REKAP PEMBIASAAN PAGI*\n👤 Wali Kelas: ${currentUser} (${WALI_KELAS_MAP[currentUser]})\n\n`;
    const rows = document.getElementById('bodyPembiasaanWali').querySelectorAll('tr');
    
    if (rows.length === 0 || rows[0].innerText.includes('Belum ada')) {
        textToCopy += "Belum ada riwayat pembiasaan pagi.";
    } else {
        rows.forEach(r => {
            const c = r.querySelectorAll('td');
            if (c.length >= 4) textToCopy += `📅 ${c[0].innerText} | In: ${c[1].innerText} | Out: ${c[2].innerText} | St: ${c[3].innerText}\n`;
        });
    }
    navigator.clipboard.writeText(textToCopy).then(() => showToast('Berhasil dicopy ke WA', 'success'));
}

setInterval(updateNextClassTimer, 1000);

// Panggil saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        updateNextClassInfo(); // Muat info kelas berikutnya
        updateNextClassTimer(); // Mulai timer
    }, 100);//tunggu sebentar 0,1 detik
});

// Pastikan timer berjalan saat pukul 00:00 WITA
function checkMidnightReset() {
    const now = getCurrentWITA();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Jika pukul 00:00:00 WITA, reset dan panggil timer
    if (hour === 0 && minute === 0 && second === 0) {
        updateNextClassTimer();
    }
}

// Periksa setiap menit untuk reset pukul 00:00
setInterval(checkMidnightReset, 60000);

function updateNextClassTimer() {
    if (!currentUser) return;

    const now = getCurrentWITA();
    const hour = now.getHours();

    // Hilangkan timer jika jam >= 13:00
    if (hour >= 13) {
        document.getElementById('timerContainer').classList.add('hidden');
        return;
    }

    // Gunakan nextClassGlobal
    let nextClass = nextClassGlobal;
    if (!nextClass) {
        nextClass = getNextClass();
        if (nextClass) nextClassGlobal = nextClass;
    }

    if (!nextClass) {
        document.getElementById('timerContainer').classList.add('hidden');
        return;
    }

    // Hitung waktu tersisa
    const masukMins = parseTimeToMins(nextClass.masuk);
    const totalMins = now.getHours() * 60 + now.getMinutes();
    const diffMins = masukMins - totalMins;

    if (diffMins <= 0) {
        document.getElementById('timerContainer').classList.add('hidden');
        return;
    }

    // Hitung jam, menit, detik
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    const seconds = 60 - now.getSeconds();

    // Format HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('nextClassTimer').textContent = formattedTime;

    // Tampilkan timer
    document.getElementById('timerContainer').classList.remove('hidden');
}

        (function() {
            const userName = document.getElementById('userNameDisplay');
            
            // === SET NAMA USER (ganti sesuai keinginan) ===
            userName.textContent = 'Raka'; // <-- Ganti dengan nama user Anda

            // State untuk scroll offset
            let scrollOffset = 0;
            let lastScrollY = window.scrollY;
            let targetOffset = 0;

            // Fungsi update posisi float
            function updateFloat() {
                const currentScrollY = window.scrollY;
                const maxOffset = 80;  // batas maksimum pergerakan (px)
                
                // Hitung offset berdasarkan scroll: semakin scroll, semakin naik (negatif)
                // Tapi kita buat efek "mengikuti" dengan sedikit delay / smoothing
                // Pendekatan: offset = - (scrollY * 0.08) dengan batas max
                const rawOffset = -(currentScrollY * 0.08);
                targetOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));
                
                // Smoothing dengan lerp
                scrollOffset += (targetOffset - scrollOffset) * 0.1;
                
                // Terapkan ke CSS variable
                userName.style.setProperty('--scroll-offset', scrollOffset + 'px');
                
                // Tambahkan class floating
                userName.classList.add('floating');
                
                lastScrollY = currentScrollY;
                requestAnimationFrame(updateFloat);
            }

            // Mulai animasi float
            updateFloat();

            // Opsional: update nama user melalui input (bisa diaktifkan)
            // Contoh: ganti nama dengan prompt (bisa dihapus)
            // setTimeout(() => {
            //     const newName = prompt('Masukkan nama user:', 'Raka');
            //     if (newName && newName.trim()) {
            //         userName.textContent = newName.trim();
            //     }
            // }, 500);
        })();
                
// Fungsi untuk menghapus cache browser, unregister service worker, dan reload halaman
async function clearAppCacheAndReload() {
    try {
        // 1. Bersihkan Cache Storage
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(name => caches.delete(name)));
        }
        
        // 2. Unregister Service Worker
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.unregister();
            }
        }
        
        showToast('Memperbaiki error scanner. Memuat ulang aplikasi...', 'warning');
        
        // 3. Reload halaman paksa dari server setelah 1.5 detik
        setTimeout(() => {
            window.location.reload(true);
        }, 1500);
        
    } catch (e) {
        console.error('Gagal menghapus cache:', e);
        window.location.reload(true); // Fallback reload
    }
}

// ==========================================
// BLOK 9: TOMBOL DARURAT BERSIHKAN DATA & LOGOUT
// ==========================================
window.emergencyClearData = async function() {
    const konfirmasi = confirm('APAKAH ANDA YAKIN?\n\nIni akan menghapus seluruh data aplikasi, cache, dan MENGELUARKAN (LOGOUT) Anda dari akun saat ini ke halaman login.\n\nGunakan hanya dalam KEADAAN DARURAT!');
    
    if (konfirmasi) {
        try {
            // 1. Matikan kamera & reset variabel sesi saat ini
            currentUser = null; 
            currentUserData = null; 
            isAdmin = false; 
            isAgus = false;
            if (typeof stopScanner === 'function') stopScanner(); 
                        
                        // Kosongkan tampilan tabel riwayat dan jadwal agar langsung bersih di mata pengguna
            const historyBody = document.getElementById('historyBody');
            if (historyBody) historyBody.innerHTML = '';
            const historyCount = document.getElementById('historyCount');
            if (historyCount) historyCount.textContent = '0';
            
            // 2. Tutup koneksi database IndexedDB dengan aman
            try {
                if (typeof db !== 'undefined' && db && typeof db.close === 'function') {
                    db.close();
                }
            } catch (err) {
                console.warn("Catatan penutupan DB:", err);
            }

            // 3. Bersihkan Local Storage, Session Storage, & Kunci Login
            localStorage.clear();
            sessionStorage.clear();
            localStorage.removeItem('absensi_user');
            localStorage.removeItem('absensi_admin');
            localStorage.removeItem('absensi_admin_type');

            // 4. Hapus IndexedDB secara asinkronus
            if (window.indexedDB) {
                try {
                    window.indexedDB.deleteDatabase('AbsensiGuruDB');
                } catch (e) {}
            }

            // 5. Bersihkan Cache Storage
            if ('caches' in window) {
                try {
                    const cacheNames = await caches.keys();
                    await Promise.all(cacheNames.map(name => caches.delete(name)));
                } catch (e) {}
            }

            // 6. Lepaskan Service Worker secara aman
            if ('navigator' in window && 'serviceWorker' in navigator) {
                try {
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    for (let registration of registrations) {
                        await registration.unregister();
                    }
                } catch (e) {}
            }

            // 7. Bersihkan Cookies
            try {
                const cookies = document.cookie.split(";");
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i];
                    const eqPos = cookie.indexOf("=");
                    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                }
            } catch (e) {}

            // 8. Langsung lakukan reload bersih ke halaman utama (tanpa menimpa HTML tombol yang bikin nyangkut)
            window.location.replace(window.location.origin + window.location.pathname);
            
                        // 9. Panggil fungsi tombol Ganti User secara langsung agar UI tertutup
                        const switchUserBtn = document.getElementById('switchUserBtn');
            if (switchUserBtn) {
                switchUserBtn.click();
            }
                        
        } catch (e) {
            console.error('Error saat membersihkan data:', e);
            // Fallback darurat jika terjadi kendala
            localStorage.clear();
            window.location.reload(true);
        }
    }
};
