// Soal 3
// js

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) 
{
    // you can only write your code here!
    let waktu = '';

    if (menit > -1)
    {

        if (menit > 59)
        {
            let waktuJam = Math.floor(menit / 60);

            waktu += (waktuJam + ':');

            if (menit % 60 === 0)
            {
                waktu += '00';
            }
            else
            {
                let sisaMenit = menit % 60;

                if (sisaMenit < 10)
                {
                    waktu += ('0' + sisaMenit);
                }
                else
                {
                    waktu += sisaMenit;
                }
            }
        }
        else
        {
            waktu += ('0:' + menit);
        }
    }

    return waktu;
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00