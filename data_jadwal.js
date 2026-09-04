    let jadwalPelajaran = JSON.parse(localStorage.getItem('jadwal_cache')) || {};
    const allDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'ahad'];
    
    const allJPs = ['Pembiasaan Pagi']; // Tambahkan ini di array awal
    for (let i = 1; i <= 8; i++) {
        allJPs.push('JP ' + i);
        for (let j = i + 1; j <= 8; j++) {
            allJPs.push('JP ' + i + '-' + j);
        }
    }

    allDays.forEach(d => {
        if (!jadwalPelajaran[d]) jadwalPelajaran[d] = {};
        allJPs.forEach(jp => {
            if (!jadwalPelajaran[d][jp]) jadwalPelajaran[d][jp] = {};
        });
    });

	// KELAS 7A
	jadwalPelajaran['senin']['JP 2']['7A'] = 'IPS / Pancasila (Jumadil Awal, SE.)';
	jadwalPelajaran['senin']['JP 5-6']['7A'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['senin']['JP 7-8']['7A'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['selasa']['JP 1-2']['7A'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['selasa']['JP 5-6']['7A'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7']['7A'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 8']['7A'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['rabu']['JP 1-2']['7A'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['rabu']['JP 3-4']['7A'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['7A'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['kamis']['JP 1-2']['7A'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['kamis']['JP 5']['7A'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['kamis']['JP 6']['7A'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 7-8']['7A'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['jumat']['JP 3-4']['7A'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['7A'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['sabtu']['JP 1-2']['7A'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3']['7A'] = 'SBDP / Informatika';
	jadwalPelajaran['sabtu']['JP 4']['7A'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['sabtu']['JP 5-6']['7A'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 7-8']['7A'] = 'Kitabah & Khat (Hafizh Bagis, Lc.)';

	// KELAS 7B
	jadwalPelajaran['senin']['JP 2']['7B'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['7B'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['senin']['JP 7-8']['7B'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['selasa']['JP 1-2']['7B'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 5-6']['7B'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['selasa']['JP 7']['7B'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['selasa']['JP 8']['7B'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 1-2']['7B'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['rabu']['JP 3-4']['7B'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['7B'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['kamis']['JP 1-2']['7B'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['kamis']['JP 5']['7B'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 6']['7B'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['kamis']['JP 7-8']['7B'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['jumat']['JP 3-4']['7B'] = 'Bahasa Arab (Hafizh Bagis, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['7B'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 1-2']['7B'] = 'Kitabah & Khat (Hafizh Bagis, Lc.)';
	jadwalPelajaran['sabtu']['JP 3-4']['7B'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['sabtu']['JP 5-6']['7B'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['sabtu']['JP 7']['7B'] = 'SBDP / Informatika';
	jadwalPelajaran['sabtu']['JP 8']['7B'] = 'IPS / Pancasila (Jumadil Awal, SE.)';

	// KELAS 7C
	jadwalPelajaran['senin']['JP 2']['7C'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['7C'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['senin']['JP 7-8']['7C'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['selasa']['JP 1-2']['7C'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['selasa']['JP 5-6']['7C'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['7C'] = 'Kitabah & Khat (Taufiqurrahman, Lc.)';
	jadwalPelajaran['rabu']['JP 1']['7C'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 2']['7C'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 3-4']['7C'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['rabu']['JP 5-6']['7C'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['kamis']['JP 1-2']['7C'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 5-6']['7C'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['kamis']['JP 7-8']['7C'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['jumat']['JP 1']['7C'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['jumat']['JP 2']['7C'] = 'SBDP / Informatika';
	jadwalPelajaran['jumat']['JP 5-6']['7C'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['sabtu']['JP 1-2']['7C'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['sabtu']['JP 3']['7C'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['sabtu']['JP 4']['7C'] = 'IPS / Pancasila (Jumadil Awal, SE.)';
	jadwalPelajaran['sabtu']['JP 5-6']['7C'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['sabtu']['JP 7-8']['7C'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';

	// KELAS 7D
	jadwalPelajaran['senin']['JP 2-3']['7D'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['senin']['JP 4']['7D'] = 'IPS / Pancasila (Jumadil Awal, SE.)';
	jadwalPelajaran['senin']['JP 5-6']['7D'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['senin']['JP 7-8']['7D'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['selasa']['JP 3-4']['7D'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['selasa']['JP 5-6']['7D'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['selasa']['JP 7']['7D'] = 'SBDP / Informatika';
	jadwalPelajaran['selasa']['JP 8']['7D'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['rabu']['JP 1-2']['7D'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['7D'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['rabu']['JP 7-8']['7D'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['kamis']['JP 3-4']['7D'] = 'Bahasa Arab (Taufiqurrahman, Lc.)';
	jadwalPelajaran['kamis']['JP 5-6']['7D'] = 'Kitabah & Khat (Taufiqurrahman, Lc.)';
	jadwalPelajaran['jumat']['JP 1']['7D'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['jumat']['JP 2']['7D'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['7D'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 1']['7D'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 2']['7D'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3-4']['7D'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['sabtu']['JP 5-6']['7D'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['sabtu']['JP 7-8']['7D'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';

	// KELAS 7E
	jadwalPelajaran['senin']['JP 2-3']['7E'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['senin']['JP 4']['7E'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['7E'] = 'Bahasa Arab (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['senin']['JP 7']['7E'] = 'IPS / Pancasila (Jumadil Awal, SE.)';
	jadwalPelajaran['senin']['JP 8']['7E'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 3-4']['7E'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['selasa']['JP 5-6']['7E'] = 'Bahasa Arab (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['selasa']['JP 7']['7E'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 8']['7E'] = 'SBDP / Informatika';
	jadwalPelajaran['rabu']['JP 1-2']['7E'] = 'Bahasa Arab (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['rabu']['JP 5-6']['7E'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 7-8']['7E'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 3-4']['7E'] = 'IPA Terpadu (L. Muh. Baidui, M. Pd.)';
	jadwalPelajaran['kamis']['JP 5-6']['7E'] = 'Bahasa Arab (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['jumat']['JP 1-2']['7E'] = 'Bahasa Arab (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['7E'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['sabtu']['JP 1-2']['7E'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['sabtu']['JP 3-4']['7E'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 5-6']['7E'] = 'Kitabah & Khat (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['sabtu']['JP 7']['7E'] = 'Aqidah (Abdul Hafizh Hizam, Lc.)';
	jadwalPelajaran['sabtu']['JP 8']['7E'] = 'IPA Terpadu (L. Muh. Baidui, M. Pd.)';

	// KELAS 8A
	jadwalPelajaran['senin']['JP 2-3']['8A'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['senin']['JP 4']['8A'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['8A'] = 'Kitabah & Khat (Syamsul Bahri, Lc.)';
	jadwalPelajaran['senin']['JP 7-8']['8A'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['selasa']['JP 3-4']['8A'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['selasa']['JP 5-6']['8A'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['8A'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['rabu']['JP 1-2']['8A'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['rabu']['JP 5-6']['8A'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['rabu']['JP 7-8']['8A'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 1-2']['8A'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['kamis']['JP 5']['8A'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['kamis']['JP 6']['8A'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['jumat']['JP 1-2']['8A'] = 'Qowaidul Lughoh (Syamsul Bahri, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['8A'] = "Ta'bir (Zulfi Farid, Lc.)";
	jadwalPelajaran['sabtu']['JP 1-2']['8A'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['sabtu']['JP 3']['8A'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 4']['8A'] = 'SBDP / Informatika';
	jadwalPelajaran['sabtu']['JP 5-6']['8A'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['sabtu']['JP 7']['8A'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 8']['8A'] = 'IPS / Pancasila (Junaidi, S. Pd.)';

	// KELAS 8B
	jadwalPelajaran['senin']['JP 2']['8B'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['senin']['JP 3-4']['8B'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['senin']['JP 5-6']['8B'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['selasa']['JP 1-2']['8B'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['selasa']['JP 3-4']['8B'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['8B'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['rabu']['JP 1']['8B'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['rabu']['JP 2']['8B'] = 'SBDP / Informatika';
	jadwalPelajaran['rabu']['JP 3-4']['8B'] = 'Qowaidul Lughoh (Syamsul Bahri, Lc.)';
	jadwalPelajaran['rabu']['JP 5-6']['8B'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['rabu']['JP 7-8']['8B'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['kamis']['JP 5-6']['8B'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['kamis']['JP 7-8']['8B'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['jumat']['JP 1-2']['8B'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['jumat']['JP 3-4']['8B'] = "Ta'bir (Zulfi Farid, Lc.)";
	jadwalPelajaran['sabtu']['JP 1-2']['8B'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['sabtu']['JP 3-4']['8B'] = 'Kitabah & Khat (Syamsul Bahri, Lc.)';
	jadwalPelajaran['sabtu']['JP 5']['8B'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 6']['8B'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 7']['8B'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['sabtu']['JP 8']['8B'] = 'Bahasa Indonesia (Firman, S. Pd.)';

	// KELAS 8C
	jadwalPelajaran['senin']['JP 2']['8C'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['senin']['JP 3-4']['8C'] = 'PJOK (M. Tahir, M. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['8C'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['selasa']['JP 1-2']['8C'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['selasa']['JP 3-4']['8C'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['selasa']['JP 7-8']['8C'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['rabu']['JP 1']['8C'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['rabu']['JP 2']['8C'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['rabu']['JP 3-4']['8C'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['8C'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['rabu']['JP 7']['8C'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['rabu']['JP 8']['8C'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['kamis']['JP 3-4']['8C'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['kamis']['JP 5']['8C'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['kamis']['JP 6']['8C'] = 'SBDP / Informatika';
	jadwalPelajaran['kamis']['JP 7-8']['8C'] = 'Bahasa Arab (Zulfi Farid, Lc.)';
	jadwalPelajaran['jumat']['JP 1-2']['8C'] = "Ta'bir (Zulfi Farid, Lc.)";
	jadwalPelajaran['jumat']['JP 3-4']['8C'] = 'Qowaidul Lughoh (Syamsul Bahri, Lc.)';
	jadwalPelajaran['sabtu']['JP 1-2']['8C'] = 'Bahasa Inggris (Hairul Umam Insani, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3-4']['8C'] = 'Bahasa Indonesia (Firman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 5-6']['8C'] = 'Kitabah & Khat (Andri Jaelani, Lc., M. H.)';
	jadwalPelajaran['sabtu']['JP 7-8']['8C'] = 'Matematika (Haqikahurrahman, S. Pd.)';

	// KELAS 8D
	jadwalPelajaran['senin']['JP 2']['8D'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['senin']['JP 3']['8D'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['senin']['JP 4']['8D'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['senin']['JP 5-6']['8D'] = 'Kitabah & Khat (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['selasa']['JP 1-2']['8D'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['selasa']['JP 3-4']['8D'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['selasa']['JP 7-8']['8D'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['rabu']['JP 1-2']['8D'] = 'PJOK (M. Tahir, M. Pd.)';
	jadwalPelajaran['rabu']['JP 3-4']['8D'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['8D'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['rabu']['JP 7-8']['8D'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['kamis']['JP 3-4']['8D'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['kamis']['JP 5']['8D'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['kamis']['JP 6']['8D'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['kamis']['JP 7-8']['8D'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['jumat']['JP 1']['8D'] = 'SBDP / Informatika';
	jadwalPelajaran['jumat']['JP 2']['8D'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['jumat']['JP 3-4']['8D'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['sabtu']['JP 1-2']['8D'] = 'Qowaidul Lughoh (Syamsul Bahri, Lc.)';
	jadwalPelajaran['sabtu']['JP 3-4']['8D'] = "Ta'bir (Andri Jaelani, Lc., M. H.)";
	jadwalPelajaran['sabtu']['JP 5-6']['8D'] = 'Matematika (Haqikahurrahman, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 7-8']['8D'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';

	// KELAS 8E
	jadwalPelajaran['senin']['JP 2']['8E'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['senin']['JP 3-4']['8E'] = 'Kitabah & Khat (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['senin']['JP 5-6']['8E'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['selasa']['JP 1']['8E'] = 'IPA Terpadu (Adiandri Suhaili, M. Pd.)';
	jadwalPelajaran['selasa']['JP 2']['8E'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['selasa']['JP 3-4']['8E'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['8E'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['rabu']['JP 1-2']['8E'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['rabu']['JP 3-4']['8E'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['rabu']['JP 5-6']['8E'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['rabu']['JP 7']['8E'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['rabu']['JP 8']['8E'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['kamis']['JP 3-4']['8E'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['kamis']['JP 5-6']['8E'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['kamis']['JP 7']['8E'] = 'SBDP / Informatika';
	jadwalPelajaran['kamis']['JP 8']['8E'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['jumat']['JP 1-2']['8E'] = 'Bahasa Arab (Ahmad Mahsan Haikal, Lc.)';
	jadwalPelajaran['sabtu']['JP 1-2']['8E'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3-4']['8E'] = 'Fiqih (Lalu M. Sulistiono, SP.)';
	jadwalPelajaran['sabtu']['JP 5-6']['8E'] = 'Qowaidul Lughoh (Syamsul Bahri, Lc.)';
	jadwalPelajaran['sabtu']['JP 7-8']['8E'] = "Ta'bir (Andri Jaelani, Lc., M. H.)";

	// KELAS 9A
	jadwalPelajaran['senin']['JP 2-3']['9A'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['senin']['JP 4']['9A'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['senin']['JP 7-8']['9A'] = 'Fiqih (Jamaluddin, Lc.)';
	jadwalPelajaran['selasa']['JP 3-4']['9A'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['selasa']['JP 5-6']['9A'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['9A'] = 'Qowaidul Lughoh (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['rabu']['JP 3-4']['9A'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['9A'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['rabu']['JP 7-8']['9A'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['kamis']['JP 1-2']['9A'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['kamis']['JP 3']['9A'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['kamis']['JP 4']['9A'] = 'SBDP / Informatika';
	jadwalPelajaran['kamis']['JP 5-6']['9A'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['kamis']['JP 7-8']['9A'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['jumat']['JP 3-4']['9A'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['jumat']['JP 5-6']['9A'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 1-2']['9A'] = "Ta'bir (Ahmad Mahsan Haikal, Lc.)";
	jadwalPelajaran['sabtu']['JP 3-4']['9A'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['sabtu']['JP 5-6']['9A'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 7-8']['9A'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';

	// KELAS 9B
	jadwalPelajaran['senin']['JP 2-3']['9B'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['senin']['JP 4']['9B'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['senin']['JP 7-8']['9B'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['selasa']['JP 3-4']['9B'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['selasa']['JP 5-6']['9B'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['9B'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['rabu']['JP 3-4']['9B'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['rabu']['JP 5-6']['9B'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['rabu']['JP 7-8']['9B'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['kamis']['JP 1-2']['9B'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['kamis']['JP 3-4']['9B'] = 'Bahasa Arab (Syamsul Bahri, Lc.)';
	jadwalPelajaran['kamis']['JP 5-6']['9B'] = 'Fiqih (Jamaluddin, Lc.)';
	jadwalPelajaran['kamis']['JP 7-8']['9B'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['jumat']['JP 3-4']['9B'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['jumat']['JP 5-6']['9B'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 1-2']['9B'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3-4']['9B'] = 'Qowaidul Lughoh (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['sabtu']['JP 5-6']['9B'] = "Ta'bir (Ahmad Mahsan Haikal, Lc.)";
	jadwalPelajaran['sabtu']['JP 7']['9B'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 8']['9B'] = 'SBDP / Informatika';

	// KELAS 9C
	jadwalPelajaran['senin']['JP 2']['9C'] = 'SBDP / Informatika';
	jadwalPelajaran['senin']['JP 3-4']['9C'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['senin']['JP 7-8']['9C'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['selasa']['JP 1-2']['9C'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['selasa']['JP 5']['9C'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['selasa']['JP 6']['9C'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['selasa']['JP 7-8']['9C'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';
	jadwalPelajaran['rabu']['JP 3-4']['9C'] = 'Qowaidul Lughoh (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['rabu']['JP 5-6']['9C'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';
	jadwalPelajaran['rabu']['JP 7-8']['9C'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['kamis']['JP 1-2']['9C'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['kamis']['JP 3-4']['9C'] = 'Fiqih (Jamaluddin, Lc.)';
	jadwalPelajaran['kamis']['JP 5-6']['9C'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['kamis']['JP 7-8']['9C'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['jumat']['JP 3-4']['9C'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['jumat']['JP 5-6']['9C'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 1-2']['9C'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['sabtu']['JP 3-4']['9C'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 5-6']['9C'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';
	jadwalPelajaran['sabtu']['JP 7-8']['9C'] = "Ta'bir (Ahmad Mahsan Haikal, Lc.)";

	// KELAS 9D
	jadwalPelajaran['senin']['JP 2-3']['9D'] = 'Hadits (Zulkarnaen Teguh W, S. Pd.)';
	jadwalPelajaran['senin']['JP 4']['9D'] = 'SBDP / Informatika';
	jadwalPelajaran['senin']['JP 7-8']['9D'] = 'Adab Akhlak (Salman, S. Pd. I.)';
	jadwalPelajaran['selasa']['JP 1-2']['9D'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['selasa']['JP 5']['9D'] = 'IPS / Pancasila (Junaidi, S. Pd.)';
	jadwalPelajaran['selasa']['JP 6']['9D'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['selasa']['JP 7-8']['9D'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['rabu']['JP 3-4']['9D'] = 'IPA Terpadu (Adi Hardiyansyah, M. Pd.)';
	jadwalPelajaran['rabu']['JP 5-6']['9D'] = 'Aqidah (Syahrul Hasyim, Lc.)';
	jadwalPelajaran['rabu']['JP 7-8']['9D'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';
	jadwalPelajaran['kamis']['JP 1-2']['9D'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['kamis']['JP 3-4']['9D'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['kamis']['JP 5-6']['9D'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';
	jadwalPelajaran['kamis']['JP 7-8']['9D'] = 'Fiqih (Jamaluddin, Lc.)';
	jadwalPelajaran['jumat']['JP 3-4']['9D'] = 'Qowaidul Lughoh (Ahmad Arroiyan, Lc.)';
	jadwalPelajaran['jumat']['JP 5-6']['9D'] = "Ta'bir (Ahmad Mahsan Haikal, Lc.)";
	jadwalPelajaran['sabtu']['JP 1-2']['9D'] = 'Bahasa Indonesia (Arsyad, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 3-4']['9D'] = 'Bahasa Inggris (Ludfi Rusdiyono, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 5-6']['9D'] = 'Matematika (Saifuddin Hidayat, S. Pd.)';
	jadwalPelajaran['sabtu']['JP 7-8']['9D'] = 'Bahasa Arab (Muhammad Al Huraibi, Lc.)';

    allDays.forEach(d => {
        Object.keys(jadwalPelajaran[d]).forEach(jpKey => {
            if (jpKey.includes('-')) {
                let parts = jpKey.replace('JP ', '').split('-');
                let start = parseInt(parts[0]);
                let end = parseInt(parts[1]);
                if (!isNaN(start) && !isNaN(end)) {
                    Object.keys(jadwalPelajaran[d][jpKey]).forEach(kelas => {
                        for(let i = start; i <= end; i++) {
                            jadwalPelajaran[d]['JP ' + i][kelas] = jadwalPelajaran[d][jpKey][kelas];
                        }
                    });
                }
            }
        });
    });

// Pecah 'JP x-y' menjadi 'JP x', 'JP x+1', ... agar terbaca mesin scan
Object.keys(jadwalPelajaran).forEach(hari => {
  Object.keys(jadwalPelajaran[hari]).forEach(jpKey => {
    const m = jpKey.match(/^JP (\d+)-(\d+)$/);
    if (m) {
      const mapel = jadwalPelajaran[hari][jpKey];
      for (let i = +m[1]; i <= +m[2]; i++) {
        const single = 'JP ' + i;
        if (!jadwalPelajaran[hari][single] || !Object.keys(jadwalPelajaran[hari][single]).length)
          jadwalPelajaran[hari][single] = {};
        // jangan timpa yang sudah ada (hardcode tunggal lebih spesifik)
        Object.keys(mapel).forEach(kelas => {
          if (!jadwalPelajaran[hari][single][kelas]) jadwalPelajaran[hari][single][kelas] = mapel[kelas];
        });
      }
    }
  });
});