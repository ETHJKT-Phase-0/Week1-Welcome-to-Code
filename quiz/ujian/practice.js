// mencoba ingin membuat function yang bisa menghitung jumlah karakter tertentu dalam string
// dengan tidak harus karakter tertentu saja , jadi bisa secara fleksibel
// function ini akan menghitung jumlah karakter tertentu dalam string
// function ini akan menerima 3 parameter yaitu string, karakter1 dan karakter2
// jika karakter1 dan karakter2 berjumlah sama maka return true
// jika karakter1 dan karakter2 tidak berjumlah sama maka return false
// contoh jika kita punya string 'xaxaxa' dan kita ingin menghitung jumlah x dan a
// maka kita bisa memanggil function ini dengan parameter 'xaxaxa','x','a'
// maka kita akan mendapatkan hasil true
// jika kita punya string 'xaxaaa' dan kita ingin menghitung jumlah x dan o
// maka kita bisa memanggil function ini dengan parameter 'xaxaaa','x','o'
// maka kita akan mendapatkan hasil false
function xa(str, char1 , char2) {
    let count1 = 0;
    let count2 = 0;
    for(i = 0 ; i < str.length; i++) {
        if (str[i] === char1) {
            count1++;
        } else if ( str[i] === char2) {
            count2++;
        }
    }
    return count1 === count2;
}
console.log(xa('xaxaxa','x','a'));
console.log(xa('xaxaaa','x','o'));
console.log(xa('aabbabab','a','b'));
//membanding angka
// function bandingAngka
// function ini akan membandingkan angka1 dengan angka2 dan angka3
// jika angka1 lebih besar dari angka2 maka return true
// jika angka1 lebih kecil dari angka3 maka return false
// jika angka1 lebih besar dari angka2 dan angka3 maka return true
function bandingAngka(angka1,angka2,angka3) {
    if (angka1 > angka2){
        return true;
    } else if (angka1 < angka3) {
        return false;
    }
}
console.log(bandingAngka(1,2,3)); 
console.log(bandingAngka(2,1,3)); 
console.log(bandingAngka(3,2,1));

// Membalikkan kata
// membalikan kata kenapa menggunakan -1 dan i--
// karena kita ingin membalikkan kata dari belakang ke depan
// jadi kita mulai dari index terakhir yaitu kata.length -1
//length adalah panjang dari string
// jadi kita ambil panjang dari string tersebut
// dan kita kurangi 1 setiap kali perulangan
// misal kata = hello
// maka kata.length = 5
// maka index terakhir adalah 4
// jadi kita mulai dari index 4 dan mengurangi 1 setiap kali perulangan
// H E L L O
// 0 1 2 3 4 << index
// 4 3 2 1 0 << index dibalik
function membalikanKata(kata){
    balik="";
    for (let i = kata.length -1;i >= 0; i--) {
        balik += kata[i];
    }
    return balik;
}
console.log(membalikanKata('hello'));
console.log(membalikanKata('world'));

//menghitung menit
//cara menghitung modulus adalah hasil dari sisa bagi misal 63:60 = 1 maka sisanya 3
// 63 % 60 = 3
//misal saya punya kue 63 pcs , dan membagikannya ke 60 orang , maka sisa kuenya adalah 3
// 3 ini adalah modulusnya 
function jamMenit(menit) {
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60; 
    if (sisaMenit < 10) {
        sisaMenit = '0' + sisaMenit;
    }
    return jam + ':' + sisaMenit ;
}
console.log(jamMenit(63)); // 1:03