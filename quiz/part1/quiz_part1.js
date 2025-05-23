// soal l
const game_data = [
    ['Ksatria', 'Kamu dapat menyerang dengan senjatamu!'],
    ['Tabib', 'Kamu akan membantu temanmu yang terluka'],
    ['Penyihir', 'Ciptakan keajaiban yang membantu kemenanganmu!!'],
    ['Pemanah', 'Kamu dapat menyerang dari jarak jauh!'],
];

let name = 'Hidup_Blonde', role = 'Tabib';

if(!(name || role)) {
    console.error('Tolong yah diisi nama dan peran nya :> ');
} else {
    for(let i in game_data) {
        if(game_data[i][0] === role) {
            console.log(`Halo ${game_data[i][0]} ${name}, ${game_data[i][1]}`);
        } 
    }
}


// soal 2
const getMonthName = (month) => {
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    return months[month - 1];
}


let tanggal = 10;
let bulan = 2;
let tahun = 2002;

console.log(`${tanggal} ${getMonthName(bulan)} ${tahun}`);


// kalau OUTPUT nya sama gpp kan bang
