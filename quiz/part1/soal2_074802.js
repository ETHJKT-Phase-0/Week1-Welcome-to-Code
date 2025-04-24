//variabel
let tanggal = 10;
let bulan = 3;
let tahun = 2012;

//note
//urutan tanggal setiap bulan dalam kalender itu seperti ini
//31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
//jadi tanggal itu tidak bisa melebihi batasnya
//code
switch (true) {
    case bulan === 1 && tanggal <= 31:
        bulan = 'januari';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 2 && tanggal <= 29:
        bulan = 'februari';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 3 && tanggal <= 31:
        bulan = 'maret';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 4 && tanggal <= 30:
        bulan = 'mei';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 6 && tanggal <= 30:
        bulan = 'juni';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 7 && tanggal <= 31:
        bulan = 'juli';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 8 && tanggal <= 31:
        bulan = 'agustus';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 9 && tanggal <= 30:
        bulan = 'september';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 10 && tanggal <= 31:
        bulan = 'oktober';
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 11 && tanggal <= 30:
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    case bulan === 12 && tanggal <= 31:
        console.log (tanggal + ' ' + bulan + ' ' + tahun);
        break;
    default :
    alert ('tanggal ' + tanggal + ' dan bulan ' + bulan + ' tidak ada');
}
//code

//done bang