function populate(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "aceh"){
        var optionArray = [
            "Langsa|Langsa",
            "Lhokseumawe|Lhokseumawe",
            "Sabang|Sabang",
            "Banda Aceh|Banda Aceh",
            "Bener Meriah|Bener Meriah",
            "Aceh Tamiang|Aceh Tamiang",
            "Nagan Jaya|Nagan Jaya",
            "Aceh Jaya|Aceh Jaya",
            "Gayo Lues|Gayo Lues",
            "Aceh Barat Daya|Aceh Barat Daya",
            "Bireun|Bireun",
            "Aceh Singkil|Aceh Singkil",
            "Simeulue|Simeulue",
            "Aceh Utara|Aceh Utara",
            "Pidie|Pidie",
            "Aceh Besar|Aceh Besar",
            "Aceh Barat|Aceh Barat",
            "Tengah|Tengah",
            "Aceh Timur|Aceh Timur",
            "Aceh Tenggara|Aceh Tenggara",
            "Aceh Selatan|Aceh Selatan"
        ];
    }

    else if (s1.value == "bali"){
        var optionArray = [
            'Denpasar|Denpasar', 
            'Badung|Badung', 
            'Bangli|Bangli',
            'Buleleng|Buleleng', 
            'Gianyar|Gianyar', 
            'Jembrana|Jembrana', 
            'Karangasem|Karangasem', 
            'Klungkung|Klungkung', 
            'Tabanan|Tabanan'
        ];
    }

    else if (s1.value == "sumut"){
        var optionArray = [
            "Padang Sidempuan|Padang Sidempuan",
            "Tebing Tinggi|Tebing Tinggi",
            "Binjai|Binjai",
            "Tanjung Balai|Tanjung Balai",
            "Sibolga|Sibolga",
            "Pematang Siantar|Pematang Siantar",
            "Medan|Medan",
            "Serdang Bedagai |Serdang Bedagai ",
            "Samosir |Samosir ",
            "Humbang Hasundutan|Humbang Hasundutan",
            "Pakpak Barat|Pakpak Barat",
            "Nias Selatan|Nias Selatan",
            "Mandailing Natal|Mandailing Natal",
            "Toba Samosir|Toba Samosir",
            "Dairi|Dairi",
            "Labuhan Batu|Labuhan Batu",
            "Asahan|Asahan",
            "Simalungun|Simalungun",
            "Deli Serdang|Deli Serdang",
            "Karo|Karo",
            "Langkat|Langkat",
            "Nias|Nias",
            "Tapanuli Selatan|Tapanuli Selatan",
            "Tapanuli Utara|Tapanuli Utara",
            "Tapanuli Tengah|Tapanuli Tengah"
         ]
    }

    else if (s1.value == "sumbar"){
        var optionArray = [
            "Pariaman|Pariaman",
            "Payakumbuh|Payakumbuh",
            "Bukittinggi|Bukittinggi",
            "Padang Panjang|Padang Panjang",
            "Sawhlunto|Sawhlunto",
            "Solok|Solok",
            "Padang|Padang",
            "Pasaman Barat |Pasaman Barat ",
            "Solok Selatan |Solok Selatan ",
            "Dharmasraya|Dharmasraya",
            "Kepulauan Mentawai|Kepulauan Mentawai",
            "Pasaman |Pasaman ",
            "Lima Puluh Kota|Lima Puluh Kota",
            "Agam|Agam",
            "Padang Pariaman|Padang Pariaman",
            "Tanah Datar|Tanah Datar",
            "Sw.lunto|Sw.lunto",
            "Solok|Solok",
            "Pesisir Selatan|Pesisir Selatan"
         ]
    }

    else if (s1.value == "riau"){
        var optionArray = [
            "Dumai|Dumai",
            "Pekan Baru|Pekan Baru",
            "Kuantan Singingi|Kuantan Singingi",
            "Siak|Siak",
            "Rokan Hilir|Rokan Hilir",
            "Rokan Hulu|Rokan Hulu",
            "Pelalawan|Pelalawan",
            "Indragiri Hilir|Indragiri Hilir",
            "Bengkalis|Bengkalis",
            "Indragiri Hulu|Indragiri Hulu",
            "Kampar|Kampar"
         ]
    }

    else if (s1.value == "riau"){
        var optionArray = [
            "Dumai|Dumai",
            "Pekan Baru|Pekan Baru",
            "Kuantan Singingi|Kuantan Singingi",
            "Siak|Siak",
            "Rokan Hilir|Rokan Hilir",
            "Rokan Hulu|Rokan Hulu",
            "Pelalawan|Pelalawan",
            "Indragiri Hilir|Indragiri Hilir",
            "Bengkalis|Bengkalis",
            "Indragiri Hulu|Indragiri Hulu",
            "Kampar|Kampar"
         ]
    }

    else if (s1.value == "jambi"){
        var optionArray = [
            "Kerinci|Kerinci",
            "Tebo|Tebo",
            "Bungo|Bungo",
            "Tanjung Jabung Timur|Tanjung Jabung Timur",
            "Tanjung Jabung Barat|Tanjung Jabung Barat",
            "Muaro Jambi|Muaro Jambi",
            "Batanghari|Batanghari",
            "Sarolangun|Sarolangun",
            "Merangin|Merangin",
            "Kota Jambi|Kota Jambi"
         ]
    }

    else if (s1.value == "sumsel"){
        var optionArray = [
            "Prabumulih|Prabumulih",
            "Lubuk Linggau|Lubuk Linggau",
            "Pagar Alam|Pagar Alam",
            "Palembang|Palembang",
            "Ogan Ilir |Ogan Ilir ",
            "Oku Selatan |Oku Selatan ",
            "Oku Timur |Oku Timur ",
            "Banyuasin|Banyuasin",
            "Musi Banyuasin|Musi Banyuasin",
            "Musi Rawas|Musi Rawas",
            "Lahat|Lahat",
            "Muara Enim|Muara Enim",
            "Ogan Komering Ilir |Ogan Komering Ilir ",
            "Ogan Komering Ulu|Ogan Komering Ulu "
         ]
    }

    else if (s1.value == "bengkulu"){
        var optionArray = [
            "Kota Bengkulu|Kota Bengkulu",
            "Kepahiang |Kepahiang ",
            "Lebong |Lebong ",
            "Muko Muko|Muko Muko",
            "Seluma|Seluma",
            "Kaur|Kaur",
            "Bengkulu Utara|Bengkulu Utara",
            "Rejang Lebong|Rejang Lebong ",
            "Bengkulu Selatan|Bengkulu Selatan"
         ]
    }

    else if (s1.value == "bengkulu"){
        var optionArray = [
            "Kota Bengkulu|Kota Bengkulu",
            "Kepahiang |Kepahiang ",
            "Lebong |Lebong ",
            "Muko Muko|Muko Muko",
            "Seluma|Seluma",
            "Kaur|Kaur",
            "Bengkulu Utara|Bengkulu Utara",
            "Rejang Lebong|Rejang Lebong ",
            "Bengkulu Selatan|Bengkulu Selatan"
         ]
    }

    else if (s1.value == "lampung"){
        var optionArray = [
            "Metro|Metro",
            "Bandar Lampung|Bandar Lampung",
            "Way Kanan|Way Kanan",
            "Lampung Timur|Lampung Timur",
            "Tanggamus|Tanggamus",
            "Tulang Bawang|Tulang Bawang",
            "Lampung Barat|Lampung Barat",
            "Lampung Utara|Lampung Utara",
            "Lampung Tengah|Lampung Tengah",
            "Lampung Selatan|Lampung Selatan"
         ]
    }

    else if (s1.value == "bangka"){
        var optionArray = [
            "Pangkal Pinang|Pangkal Pinang",
            "Bangka Timur|Bangka Timur",
            "Bangka Barat|Bangka Barat",
            "Bangka Tengah|Bangka Tengah",
            "Bangka Selatan|Bangka Selatan",
            "Belitung|Belitung",
            "Kota Bangka|Kota Bangka"
         ]
    }

    else if (s1.value == "kepri"){
        var optionArray = [
            "Tanjung Pinang|Tanjung Pinang",
            "Batam|Batam",
            "Lingga |Lingga ",
            "Natuna|Natuna",
            "Karimun|Karimun",
            "Kepulauan Riau|Kepulauan Riau "
         ]
    }

    else if (s1.value == "jakarta"){
        var optionArray = [
            "Jakarta Timur|Jakarta Timur",
            "Jakarta Selatan|Jakarta Selatan",
            "Jakarta Barat|Jakarta Barat",
            "Jakarta Utara|Jakarta Utara",
            "Jakarta Pusat|Jakarta Pusat",
            "Kep. Seribu|Kep. Seribu"
         ]
    }

    else if (s1.value == "jabar"){
        var optionArray = [
            "Banjar|Banjar",
            "Tasikmalaya|Tasikmalaya",
            "Cimahi|Cimahi",
            "Depok|Depok",
            "Bekasi|Bekasi",
            "Cirebon|Cirebon",
            "Bandung|Bandung",
            "Sukabumi|Sukabumi",
            "Bogor|Bogor",
            "Bekasi|Bekasi",
            "Karawang|Karawang",
            "Purwakarta|Purwakarta",
            "Subang|Subang",
            "Indramayu|Indramayu",
            "Sumedang|Sumedang",
            "Majalengka|Majalengka",
            "Cirebon|Cirebon",
            "Kuningan|Kuningan",
            "Ciamis|Ciamis",
            "Tasikmalaya|Tasikmalaya",
            "Garut|Garut",
            "Bandung|Bandung",
            "Cianjur|Cianjur",
            "Sukabumi|Sukabumi",
            "Bogor|Bogor"
         ]
    }

    else if (s1.value == "jateng"){
        var optionArray = [
            "Tegal|Tegal",
            "Pekalongan|Pekalongan",
            "Semarang|Semarang",
            "Salatiga|Salatiga",
            "Surakarta|Surakarta",
            "Magelang|Magelang",
            "Brebes|Brebes",
            "Tegal|Tegal",
            "Pemalang|Pemalang",
            "Pekalongan|Pekalongan",
            "Batang|Batang",
            "Kendal|Kendal",
            "Temanggung|Temanggung",
            "Semarang|Semarang",
            "Demak|Demak",
            "Jepara|Jepara",
            "Kudus|Kudus",
            "Pati|Pati",
            "Rembang|Rembang",
            "Blora|Blora",
            "Grobogan|Grobogan",
            "Sragen|Sragen",
            "Karanganyar|Karanganyar",
            "Wonogiri|Wonogiri",
            "Sukoharjo|Sukoharjo",
            "Klaten|Klaten",
            "Boyolali|Boyolali",
            "Magelang|Magelang",
            "Wonosobo|Wonosobo",
            "Purworejo|Purworejo",
            "Kebumen|Kebumen",
            "Banjarnegara|Banjarnegara",
            "Purbalingga|Purbalingga",
            "Banyumas|Banyumas",
            "Cilacap|Cilacap"
         ]
    }

    else if (s1.value == "yogya"){
        var optionArray = [
            "Kota Yogyakarta|Kota Yogyakarta",
            "Sleman|Sleman",
            "Gunung Kidul|Gunung Kidul",
            "Bantul|Bantul",
            "Kulon Progo|Kulon Progo"
         ]
    }

    else if (s1.value == "jatim"){
        var optionArray = [
            "Batu|Batu",
            "Surabaya|Surabaya",
            "Madiun|Madiun",
            "Mojokerto|Mojokerto",
            "Pasuruan|Pasuruan",
            "Probolinggo|Probolinggo",
            "Malang|Malang",
            "Blitar|Blitar",
            "Kediri|Kediri",
            "Sumenep|Sumenep",
            "Pamekasan|Pamekasan",
            "Sampang|Sampang",
            "Bangkalan|Bangkalan",
            "Gresik|Gresik",
            "Lamongan|Lamongan",
            "Tuban|Tuban",
            "Bojonegoro|Bojonegoro",
            "Ngawi|Ngawi",
            "Magetan|Magetan",
            "Madiun|Madiun",
            "Nganjuk|Nganjuk",
            "Jombang|Jombang",
            "Mojokerto|Mojokerto",
            "Sidoarjo|Sidoarjo",
            "Pasuruan|Pasuruan",
            "Probolinggo|Probolinggo",
            "Situbondo|Situbondo",
            "Bondowoso|Bondowoso",
            "Banyuwangi|Banyuwangi",
            "Jember|Jember",
            "Lumajang|Lumajang",
            "Malang|Malang",
            "Kediri|Kediri",
            "Blitar|Blitar",
            "Tulungagung|Tulungagung",
            "Trenggalek|Trenggalek",
            "Ponorogo|Ponorogo",
            "Pacitan|Pacitan"
         ]
    }

    else if (s1.value == "banten"){
        var optionArray = [
            "Cilegon|Cilegon",
            "Tangerang|Tangerang",
            "Serang|Serang",
            "Tangerang|Tangerang",
            "Lebak|Lebak",
            "Pandeglang|Pandeglang"
         ]
    }

    else if (s1.value == "ntb"){
        var optionArray = [
            "Kota Bima|Kota Bima",
            "Mataram|Mataram",
            "Sumbawa Barat|Sumbawa Barat",
            "Kab. Bima",
            "Dompu| Dompu",
            "Sumbawa |Sumbawa ",
            "Lombok Timur|Lombok Timur",
            "Lombok Tengah|Lombok Tengah",
            "Lombok Barat|Lombok Barat"
         ]
    }

    else if (s1.value == "ntt"){
        var optionArray = [
            "Kota Kupang|Kota Kupang",
            "Manggarai Barat|Manggarai Barat",
            "Rote Ndao|Rote Ndao",
            "Lembata|Lembata",
            "Sumba Barat|Sumba Barat",
            "Sumba Timur|Sumba Timur",
            "Manggarai|Manggarai",
            "Ngada|Ngada",
            "Ende|Ende",
            "Sikka|Sikka",
            "Flores Timur|Flores Timur",
            "Alor|Alor",
            "Belu|Belu",
            "Timor Tengah Utara|Timor Tengah Utara",
            "Timor Tengah Selatan|Timor Tengah Selatan",
            "Kab. Kupang|Kab. Kupang"
         ]
    }

    else if (s1.value == "kalbar"){
        var optionArray = [
            "Kota Singkawang|Kota Singkawang",
            "Kota Pontianak|Kota Pontianak",
            "Kab. Sekadau|Kab. Sekadau ",
            "Kab. Melawi|Kab. Melawi ",
            "Kab. Landak|Kab. Landak",
            "Kab. Bengkayang|Kab. Bengkayang",
            "Kab. Kapuas Hulu|Kab. Kapuas Hulu",
            "Kab. Sintang|Kab. Sintang ",
            "Kab. Ketapang|Kab. Ketapang",
            "Kab. Sanggau|Kab. Sanggau ",
            "Kab. Pontianak|Kab. Pontianak",
            "Kab. Sambas|Kab. Sambas"
         ]
    }

    else if (s1.value == "kalteng"){
        var optionArray = [
            "Kota Palangkaraya|Kota Palangkaraya",
            "Kab. Barito Timur|Kab. Barito Timur",
            "Kab. Murung Raya|Kab. Murung Raya",
            "Kab. Pulang Pisau|Kab. Pulang Pisau",
            "Kab. Gunung Mas|Kab. Gunung Mas",
            "Kab. Lamandau|Kab. Lamandau",
            "Kab. Sukamara|Kab. Sukamara",
            "Kab. Seruyan|Kab. Seruyan",
            "Kab. Katingin|Kab. Katingin",
            "Kab. Barito Utara|Kab. Barito Utara",
            "Kab. Barito Selatan|Kab. Barito Selatan",
            "Kab. Kapuas|Kab. Kapuas",
            "Kab. Kotawaringin Timur|Kab. Kotawaringin Timur",
            "Kab. Kotawaringin Barat|Kab. Kotawaringin Barat"
         ]
    }
    else if (s1.value == "kalut"){
        var optionArray = [
            "Kota Tarakan|Kota Tarakan",
            "Kab. Tana Tidung|Kab. Tana Tidung",
            "Kab. Malinau|Kab. Malinau",
            "Kab. Nunukan|Kab. Nunukan",
            "Kab. Gunung Mas|Kab. Gunung Mas",
         ]
    }

    else if (s1.value == "kalsel"){
        var optionArray = [
            "Kota Banjarbaru|Kota Banjarbaru",
            "Kota Banjarmasin|Kota Banjarmasin",
            "Kab. Balangan|Kab. Balangan",
            "Kab. Tanah Bambu|Kab. Tanah Bambu",
            "Kab. Tabalong|Kab. Tabalong",
            "Kab. Hulu Sungai Utara|Kab. Hulu Sungai Utara",
            "Kab. Hulu Sungai Tengah|Kab. Hulu Sungai Tengah",
            "Kab. Hulu Sungai Selatan|Kab. Hulu Sungai Selatan",
            "Kab. Tapin|Kab. Tapin",
            "Kab. Barito Kuala|Kab. Barito Kuala",
            "Kab. Banjar|Kab. Banjar",
            "Kab. Kotabaru|Kab. Kotabaru",
            "Kab. Tanah Laut|Kab. Tanah Laut"
         ]
    }

    else if (s1.value == "kaltim"){
        var optionArray = [
            "Kota Bontang|Kota Bontang",
            "Kota Tarakan|Kota Tarakan",
            "Kota Samarinda|Kota Samarinda",
            "Kota Balikpapan|Kota Balikpapan",
            "Kab. Penajam Paser Utara|Kab. Penajam Paser Utara",
            "Kab. Kutai Timur|Kab. Kutai Timur",
            "Kab. Kutai Barat|Kab. Kutai Barat",
            "Kab. Malinau|Kab. Malinau",
            "Kab. Nunukan|Kab. Nunukan",
            "Kab. Bulungan|Kab. Bulungan",
            "Kab. Berau|Kab. Berau",
            "Kab. Kutai Kertanegara|Kab. Kutai Kertanegara",
            "Kab. Pasir|Kab. Pasir"
         ]
    }

    else if (s1.value == "sulut"){
        var optionArray = [
            "Kota Tomohon|Kota Tomohon",
            "Kota Bitung|Kota Bitung",
            "Kota Manado|Kota Manado",
            "Kab. Minahasa Utara|Kab. Minahasa Utara",
            "Kab. Minahasa Selatan|Kab. Minahasa Selatan",
            "Kab. Kepulauan Talaud|Kab. Kepulauan Talaud",
            "Kab. Kepulauan Sangihe|Kab. Kepulauan Sangihe",
            "Kab. Minahasa|Kab. Minahasa ",
            "Kab. Bolaang Mangondow|Kab. Bolaang Mangondow"
         ]
    }

    else if (s1.value == "sulteng"){
        var optionArray = [
            "Kota Palu|Kota Palu",
            "Kab. Tojo Una UnaKab. Tojo Una Una",
            "Kab. Parigi Moutong|Kab. Parigi Moutong",
            "Kab. Banggai Kepulauan|Kab. Banggai Kepulauan",
            "Kab. Morowali|Kab. Morowali",
            "Kab. Buol|Kab. Buol",
            "Kab. Toloi Toli|Kab. Toloi Toli",
            "Kab. Donggala|Kab. Donggala",
            "Kab. Poso|Kab. Poso ",
            "Kab. Banggai|Kab. Banggai"
         ]
    }

    else if (s1.value == "sulsel"){
        var optionArray = [
            "Kota Palopo|Kota Palopo",
            "Kota Pare Pare|Kota Pare Pare",
            "Kota Makasar|Kota Makasar",
            "Kab. Luwu Timur|Kab. Luwu Timur",
            "Kab. Luwu Utara|Kab. Luwu Utara",
            "Kab. Tana Toraja|Kab. Tana Toraja",
            "Kab. Luwu|Kab. Luwu",
            "Kab. Enrekang|Kab. Enrekang",
            "Kab. Pinrang|Kab. Pinrang",
            "Kab. Sidenreng Rapang|Kab. Sidenreng Rapang",
            "Kab. Wajo|Kab. Wajo",
            "Kab. Soppeng|Kab. Soppeng",
            "Kab. Barru|Kab. Barru",
            "Kab. Pangkajene Kep|Kab. Pangkajene Kep",
            "Kab. Maros|Kab. Maros",
            "Kab. Bone|Kab. Bone",
            "Kab. Sinjai|Kab. Sinjai",
            "Kab. Gowa|Kab. Gowa",
            "Kab. Takalar|Kab. Takalar",
            "Kab. Jeneponto|Kab. Jeneponto",
            "Kab. Bantaeng|Kab. Bantaeng",
            "Kab. Bulukumba|Kab. Bulukumba",
            "Kab. Selayar|Kab. Selayar"
         ]
    }

    else if (s1.value == "sultenggara"){
        var optionArray = [
            "Kota Bau Bau|Kota Bau Bau",
            "Kota Kendari|Kota Kendari",
            "Kab. Kolaka Utara|Kab. Kolaka Utara",
            "Kab. Wakatobi|Kab. Wakatobi",
            "Kab. Bombana|Kab. Bombana",
            "Kab. Konawe Selatan|Kab. Konawe Selatan",
            "Kab. Buton|Kab. Buton",
            "Kab. Muna|Kab. Muna",
            "Kab. Konawe|Kab. Konawe",
            "Kab. Kolaka|Kab. Kolaka"
         ]
    }

    else if (s1.value == "gorontalo"){
        var optionArray = [
            "Kota Gorontalo|Kota Gorontalo",
            "Kab. Pohuwato|Kab. Pohuwato",
            "Kab. Bone Bolango|Kab. Bone Bolango",
            "Kab. Boalemo|Kab. Boalemo",
            "Kab. Gorontalo|Kab. Gorontalo",
            "Kab. Gorontalo Utara|Kab. Gorontalo Utara" 
         ]
    }

    else if (s1.value == "sulbar"){
        var optionArray = [
            "Kab. Majene|Kab. Majene",
            "Kab. Polowali Mamasa|Kab. Polowali Mamasa",
            "Kab. Mamasa|Kab. Mamasa",
            "Kab. Mamuju|Kab. Mamuju",
            "Kab. Mamuju Utara|Kab. Mamuju Utara"
         ]
    }

    else if (s1.value == "maluku"){
        var optionArray = [
            "Kota Ambon|Kota Ambon",
            "Kab. Kepulauan Aru|Kab. Kepulauan Aru",
            "Kab. Seram Bagian Barat|Kab. Seram Bagian Barat",
            "Kab. Seram Bagian Timur|Kab. Seram Bagian Timur",
            "Kab. Buru|Kab. Buru",
            "Kab. Maluku Tenggara Brt|Kab. Maluku Tenggara Brt",
            "Kab. Maluku Tenggara|Kab. Maluku Tenggara",
            "Kab. Maluku Tengah|Kab. Maluku Tengah"
         ]
    }

    else if (s1.value == "malut"){
        var optionArray = [
            "Kota Tidore Kepulauan|Kota Tidore Kepulauan",
            "Kota Ternate|Kota Ternate",
            "Kab. Halmahera Timur|Kab. Halmahera Timur",
            "Kab. Kepulauan Sula|Kab. Kepulauan Sula",
            "Kab. Halmahera Selatan|Kab. Halmahera Selatan",
            "Kab. Halmahera Utara|Kab. Halmahera Utara",
            "Kab. Halmahera Tengah|Kab. Halmahera Tengah",
            "Kab. Halmahera Barat|Kab. Halmahera Barat"
         ]
    }

    else if (s1.value == "papua"){
        var optionArray = [
            "Kota Jayapura|Kota Jayapura",
            "Kab. Supiori|Kab. Supiori",
            "Kab. Asmat|Kab. Asmat",
            "Kab. Mappi|Kab. Mappi",
            "Kab. Boven Digoel|Kab. Boven Digoel",
            "Kab. Waropen|Kab. Waropen",
            "Kab. Tolikara|Kab. Tolikara",
            "Kab. Yahukimo|Kab. Yahukimo",
            "Kab. Pegunungan Bintang|Kab. Pegunungan Bintang",
            "Kab. Keerom|Kab. Keerom",
            "Kab. Sarmi|Kab. Sarmi",
            "Kab. Mimika|Kab. Mimika",
            "Kab. Paniai|Kab. Paniai",
            "Kab. Puncak Jaya|Kab. Puncak Jaya",
            "Kab. Biak Numfor|Kab. Biak Numfor",
            "Kab. Yapen Waropen|Kab. Yapen Waropen",
            "Kab. Nabire|Kab. Nabire",
            "Kab. Jayapura|Kab. Jayapura",
            "Kab. Jayawijaya|Kab. Jayawijaya",
            "Kab. Merauke|Kab. Merauke"
         ]
    }

    else if (s1.value == "papuaBarat"){
        var optionArray = [
            "Kota Sorong|Kota Sorong",
            "Kab. Kaima|Kab. Kaima",
            "Kab. Teluk Wondama|Kab. Teluk Wondama",
            "Kab. Teluk Bentuni|Kab. Teluk Bentuni",
            "Kab. Raja Ampat|Kab. Raja Ampat",
            "Kab. Sorong Selatan|Kab. Sorong Selatan",
            "Kab. Fak Fak|ab. Fak Fak",
            "Kab. Manokwari|Kab. Manokwari",
            "Kab. Sorong|Kab. Sorong"
         ]
    }

    for (var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option"); 

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
}