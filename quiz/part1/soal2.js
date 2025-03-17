// Soal 2

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 32; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 8; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2005; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

function cekTanggalBulanTahun ()
{
    if (bulan === 1 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 2 && (tahun % 4 === 0) && (tanggal > 0 && tanggal < 30))
    {
        return true;
    }
    else if (bulan === 2 && (tanggal > 0 && tanggal < 29))
    {
        return true;
    }
    else if (bulan === 3 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 4 && (tanggal > 0 && tanggal < 31))
    {
        return true;
    }
    else if (bulan === 5 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 6 && (tanggal > 0 && tanggal < 31))
    {
        return true;
    }
    else if (bulan === 7 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 8 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 9 && (tanggal > 0 && tanggal < 31))
    {
        return true;
    }
    else if (bulan === 10 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    else if (bulan === 11 && (tanggal > 0 && tanggal < 31))
    {
        return true;
    }
    else if (bulan === 12 && (tanggal > 0 && tanggal < 32))
    {
        return true;
    }
    
    return false;
}

function eksekusi ()
{
    switch (bulan)
    {
        case 1:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Januari ${tahun}`);
            }
            break;
            
        case 2:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Februari ${tahun}`);
            }
            break;
    
        case 3:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Maret ${tahun}`);
            }
            break;
    
        case 4:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} April ${tahun}`);
            }
            break;
    
        case 5:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Mei ${tahun}`);
            }
            break;
        
        case 6:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Juni ${tahun}`);
            }
            break;
        
        case 7:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Juli ${tahun}`);
            }
            break;
        
        case 8:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Agustus ${tahun}`);
            }
            break;
        
        case 9:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} September ${tahun}`);
            }
            break;
        
        case 10:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Oktober ${tahun}`);
            }
            break;
        
        case 11:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} November ${tahun}`);
            }
            break;
        
        case 12:
            if (cekTanggalBulanTahun())
            {
                console.log(`${tanggal} Desember ${tahun}`);
            }
            break;
        
        default:
            console.log('Pilihan bulan tidak tersedia');
    }
}

eksekusi();
