// Soal 5. Bintang asteriks
// js
// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

function eksekusi ()
{
    let cetak = '';
    for (let i = 0; i < input; i++)
    {
        for (let j = 0; j <= i; j++)
        {
            cetak += '*';
        }

        if (i < (input - 1))
        {
            cetak += '\n';
        }
    }

    console.log(cetak);
}

eksekusi();