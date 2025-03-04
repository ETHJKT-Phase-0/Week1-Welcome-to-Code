let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (tanggal && bulan && tahun) {
    case 12:
    case 2:
    case 2001:     {
        console.log('12 Februari 2001');
        break;
    }     
    default: {
        console.log('salah penanggalan');
    }
}