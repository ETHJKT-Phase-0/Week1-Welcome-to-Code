// Soal 2. Melakukan Looping Menggunakan For
// js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

function eksekusi ()
{
    let cetak = '';

    // Hitung Maju
    console.log('LOOPING PERTAMA');
    for (let i = 1; i < 11; i++)
    {
        if (i < 10)
        {
            cetak += (i + ' ');
        }
        else
        {
            cetak += i;
        }
    }

    console.log(cetak);

    // Hitung Mundur
    cetak = '';

    console.log('LOOPING KEDUA');
    for (let i = 10; i > 0; i--)
    {
        if (i > 1)
        {
            cetak += (i + ' ');
        }
        else
        {
            cetak += i;
        }
    }

    console.log(cetak);
}

eksekusi();