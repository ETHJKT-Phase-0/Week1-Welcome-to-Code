// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 28; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2025; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

function kalenderFormatIndo(_tgl, _bln, _thn) {
    switch(true) {
        case _tgl >= 1 && _tgl <= 31:
            switch(true) {
                case _thn >= 1900 && _thn <= 2200:
                    switch(true) {
                        case _bln === 1:
                            console.log(`Kalender: ${_tgl} Januari ${_thn}`);
                            break;
                        case _bln === 2 && _tgl <= 28:
                            console.log(`Kalender: ${_tgl} February ${_thn}`);
                            break;
                        case _bln === 3:
                            console.log(`Kalender: ${_tgl} Maret ${_thn}`);
                            break;
                        case _bln === 4 && _tgl <= 30:
                            console.log(`Kalender: ${_tgl} April ${_thn}`);
                            break;
                        case _bln === 5:
                            console.log(`Kalender: ${_tgl} Mei ${_thn}`);
                            break;
                        case _bln === 6 && _tgl <= 30:
                            console.log(`Kalender: ${_tgl} Juni ${_thn}`);
                            break;
                        case _bln === 7:
                            console.log(`Kalender: ${_tgl} July ${_thn}`);
                            break;
                        case _bln === 8 && _tgl <= 30:
                            console.log(`Kalender: ${_tgl} Agustus ${_thn}`);
                            break;
                        case _bln === 9:
                            console.log(`Kalender: ${_tgl} September ${_thn}`);
                            break;
                        case _bln === 10 && _tgl <= 30:
                            console.log(`Kalender: ${_tgl} Oktober ${_thn}`);
                            break;
                        case _bln === 11:
                            console.log(`Kalender: ${_tgl} November ${_thn}`);
                            break;
                        case _bln === 12 && _tgl <= 30:
                            console.log(`Kalender: ${_tgl} December ${_thn}`);
                            break;
                        case _bln > 12 || _bln < 0:
                            console.log(`Bulan tidak valid! bulan ke ${_bln} bulan apa ya?`);
                            break;
                        default:
                            console.log(`Tanggal tidak valid! Bulan ${_bln} ngga sampe tanggal ${_tgl}`)
                    }
                    break;
                default:
                    console.log(`Maaf ya tahun ${_thn} tidak tersedia di kalender ini.`)
            }
            break;
        default:
            console.log(`Tanggal ${_tgl} tidak Valid!`);

    }
}

kalenderFormatIndo(tanggal, bulan, tahun);