// Soal 1

// js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

function eksekusi ()
{
    let hitung = 1;
    let cetak = '';
    // Hitung maju
    console.log('LOOPING PERTAMA');
    while (hitung < 11)
    {
        if (hitung < 10)
        {
            cetak += (hitung + ' ');
        }
        else
        {
            cetak += hitung;
        }

        hitung++;
    }

    console.log(cetak);

    // Hitung mundur
    hitung = 10;
    cetak = '';

    console.log('LOOPING KEDUA');
    while (hitung > 0)
    {
        if (hitung > 1)
        {
            cetak += (hitung + ' ');
        }
        else
        {
            cetak += hitung;
        }

        hitung--;
    }

    console.log(cetak);
}

eksekusi();