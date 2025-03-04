let nama = "Riyuu", peran = "Ksatria";

if (nama == "" && peran == "") {
    console.log('nama wajib diisi');
    console.log('pilih peranmu untuk memulai game');
} else {
    console.log('lanjutkan')
}

if (peran == "Ksatria") {
    console.log('Halo Ksatria' ,nama, 'kamu dapat menyerang dengan senjatamu')
} else if (peran == "Tabib") {
    console.log('halo Tabib' ,nama, 'kamu akan membantu temanmu yang terluka')
} else if (peran == "Penyihir") {
    console.log('halo Penyihir' ,nama , 'ciptakan keajaiban yang membantu kemenanganmu!')
}
