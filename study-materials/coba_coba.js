// Variable global
// var nama = "Budi";
// var umur = "25";
// let skor = 0;
// skor = 10; // Bisa diubah
// const PI = 3.14;
// Tidak bisa diubah valuenya

// function sapaan(nama) {
//     return `Halo ${nama}!`;
// }
// console.log(sapaan("Budi"));

// Operator Aritamtika dasar
// let a = 5;
// let b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // modulus
// console.log(a ** b); // Pangkat

// let counter = 6;
// Increment (menambah 1)
// counter++;
// console.log(counter);
// Decrement (menambah 1)
// counter--;
// console.log(counter);

// console.log(Math.round(2,8)); //pembulatan keatas
// console.log(Math.floor(2,8)); // pembulatan kebawah
// console.log(Math.ceil(2,8));  // nilai absolut
// console.log(Math.sqrt(2,8)); // akar 
// console.log(Math.min(2,8));
// console.log(Math.max(2,8));

// Js sering salah pada presisinya
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 + 0.2).toFixed(2)); // bisa diakali dengan .toFixed dan dikalikan dengan 100

// Looping
// for loop
// for (let i = 0; i < 3; i++){
//     console.log(i);
// }
// let i = 0 => inisialisasi
// i < 3 => kondisi
// i++ => update 
// while loop
// let sandi = "";
// while (sandi !== "1234") {
//     sandi = prompt("Masukkan sandi: ");
// }
// cuma bisa di browser ngga bisa di node.js bakalan infinite loop
// intinya infinite loop sampai kondisi sandi = "1234" terpenuhi
// Do ... while loop
// let angka;
// do {
//     angka = prompt("Masukkan angka > 10:"); 
// } while (angka <= 10);
// Program akan terus berjalan selama angka yang dimasukkan kurang dari atau sama dengan 10
// for ... of loop
// const buah = ["🍎", "🍌", "🍊"];
// for (const b of buah) {
//   console.log(b); // Output: 🍎, 🍌, 🍊
// }
// Ngga terlalu paham, intinya programa akan mengeluarkan item secara berurutan
// for ... in loop
// const mobil = {merek: "Toyota", tahun: 2020};
// for (const key in mobil) {
//     console.log(key, ":", mobil[key]);
// }
// Anggap aja lemari dimana kita harus pake kunci untuk membuka lemari sesuai dengan namanya
// kontrol loop: Break dan Continue
// Break: menghentikan loop sepenuhnya
// Continue: melompati iterasi saat ini
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }
// Pada kode diatas pada perulangan ke-3  loop akan dihentikan sehingga output hanya 1, 2
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }
// Pada kode diatas pada perulangan ke-3  loop akan dilompati sehingga outputnya 1, 2, 4, 5
// Waktu untuk menggunakan loop
// for untuk Iterasi terprediksi / kita tahu sampai kapan loopnya berjalan contoh i < 5(array, angka)
// while untuk iterasi dengan kondisi kompleks / tidak pasti
// do...while untuk validasi input (min 1 x eksekusi)
// for...of untuk iterasi dengan nilai array/String
// for...in untuk properti objek


// ### **Tips Visualisasi**  
// 1. **Gunakan console.log**: Jalankan kode langkah-per-langkah di terminal, selalu pasang console.log untuk melihat perubahan pada variabel didalam loop.
// 2. **Gambar Flowchart**: Sketsa alur loop di kertas.  
// 3. **Analoginya**: Bayangkan loop seperti playlist musik yang diulang sampai lagu habis.  

// Contoh soal:
// Buatlah perulangan 1-100 dengan pertambahan counter 1. Di dalam perulangan:  
// - Jika angka **kelipatan 4**, tampilkan "FOUR"  
// - Jika angka **kelipatan 7**, tampilkan "SEVEN"  
// - Jika angka **kelipatan 4 dan 7**, tampilkan "FOURSEVEN"  
// - Jika tidak memenuhi kondisi di atas, tampilkan angka itu sendiri  
// Contoh Output:
// 1  
// 2  
// 3  
// FOUR  
// 5  
// 6  
// SEVEN  
// FOUR  
// code:
// for (let i = 1; i <= 100; i++) {
//     if (i % 28 === 0) {
//         console.log("FOURSEVEN");
//     } else if(i % 4 === 0) {
//         console.log("FOUR");
//     } else if(i % 7 === 0) {
//         console.log("SEVEN");
//     } else {
//         console.log(i);
//     }
// }
// Pastikan kondisi dengan prioritas yang tepat, jika ada kondisi yang lebih rumit taruh diatas/prioritaskan

// Nested loop (loop dalam loop)
// for (let i = 0; i < 3; i++) {
//     console.log(`Outer: ${i}`);
//     for (let j = 0; j < 2; j++) {
//         console.log(` Inner: ${j}`);
//     }
// }
// Loop i/luar berjalan 3x (0,1,2) dan loop j/dalam berjalan 2x (0,1) sehingga akan terjadi 6x iterasi

// 2) Use Case Nested Loop
// a) Matriks / Grid: mengakses elemen dalam array multidimensi 3 x 3
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//         console.log(matrix[row][col]);
//     }
// }
// Program akan mengakses setiap elemen dalam matriks dengan contoh elemen baris 1 kolom 1 adalah 1, baris 1 kolom 2 adalah 2 dst
// b) Pola Bintang
// Pola Segitiga
// let pattern = "";
// for (let i = 0; i <= 5; i++){   // loop baris
//     for (let j = 0; j < i; j++){    // loop kolom (bintang per baris)
//         pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);
// Kode diatas akan membentuk pattern segitiga karena iterasi dilakukan dengan jika j < i maka semakin banyak i maka akan semakin banyak juga j
// Segitiga terbalik akan terjadi jika iterasi dibalikan menjadi seperti ini i = 5; i > 0; i--;
// Buble sort
// const arr = [5, 3, 8, 2];
// for (let i = 0; i < arr.length; i++) {  // loop utama
//     for (let j = 0; j < arr.length - 1; j++) {  // loop perbandingan
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j +1]] = [arr[j + 1], arr[j]]; // tukar nilai
//         }
//     }
// }
// console.log(arr);
// Program diatas berfungsi dengan arr.length = 4, maka i akan diiterasi sampai 4x
// kemudian iterasi j dilakukan sebanyak 3x saja karean arr.length = 4 - 1 = 3
// iterasi dibawah j adalah iterasi utama dimana jika arr[j] lebih besar dari arr{j + 1} maka nilai akan dibalikan

// Jenis jenis nested loop
// for dalam for (paling umum)
// while dalam for (untuk kondisi dinamis di inner loop)
// Do-while dalam while (jarang, tapi mungkin)
// contoh while dalam for
// for (let i = 1; i <= 3; i++){
//     console.log(`iterasi ke-${i}`);
//     let j = 1;
//     while (j <= 2) {
//         console.log(`   Sub iterasi ke-${j}`);
//         j++;
//     }
// }
// Program diatas dibaca: i akan diiterasi selama 3x (1,2,3) kemudian kita inisiasi j dengan 1
// selama j kurang atau sama dengan 2 maka akan tampil sub iterasi ke-${j}, jika j sudah mencapai 2 maka iterasi akan berhenti
// maka outputnya akan menjadi iterasi ke-1 Sub iterasi ke-1, iterasi ke-1 Sub iterasi ke-2 dst.

// Visualisasi kompleksitas 
// Nested loop memiliki kompleksitas waktu O(n²) jika kedua loop bergantung pada input yang sama
// for (let i = 0; i < n; i++) {   // O(n)
//     for (let j = 0; j < n; j++) { // O(n)
//         // Operasi 0(1)
//     }
// }
// Total: O(n x n) = O(n²)

// Tips & Best Practice
// 1) hindari nested loop dalam: lebih dari 2 level untuk mencegah kompleksitas tinggi
// 2) gunakan fungsi terpisah: untuk inner loop jika logika terlalu rumit
// 3) Break / Continue bisa digunkana untuk mengontrol aliran, tetapi hati hati dengan scope
// 4) Optimasi dengan cache nilai yang sering diakses (misal `array.length`)

// Kesalahan Kesalahan umum
// Variabel i dipanggil 2x
// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 2; i++) { // ❌ Variabel i ter-shadow
//       console.log(i);
//     }
//   }
// Infinite loop
// for (let i = 0; i < 5; i++) {
//     while (true) { // ❌ Tidak ada kondisi berhenti
//       console.log(i);
//     }
//   }

// Latihan Soal
// Disini kita akan belajar menggunakan nested loop dalam coding problems, mungkin keliatan susah banget untuk mempelajarinya. 
// Tapi, kalau kalian fokus ikutin step by step dan mencobanya langsung di terminal kalian, Nested Loop ini tidak terlalu rumit.
// Kuncinnya adalah latihan menggunakan indexing dan fokus pada perubahan variable dari inner loop sama outer loop.

// SOAL :  
// Buat program untuk menampilkan semua bilangan prima dari 1 hingga 100.  
// **Bilangan prima** adalah bilangan yang hanya bisa dibagi oleh 1 dan dirinya sendiri (contoh: 2, 3, 5, 7, 11, dst.).
// code:
// for (let i = 2; i <= 100; i++) {    // loop utama (angka yang dicek)
//     let isPrime = true;     // Flag untuk mengkaliani bil Prima
//     for (let j = 2; j < i; j++) {    // loop pembagi (2 hingga i - 1)
//         if ( i % j === 0) {     // jika i habis dibagi j (prima hanya bisa dibagi dengan 1 dan dirinya)
//             isPrime = false;    // bukan prima
//             break;              // keluar dari loop dalam
//         }
//     }
//     if (isPrime) {          // jika isPrime tetap True
//         console.log(i)      // tampilkan bilangan prima
//     }
// }
// ### **Penjelasan Detail:**

// 1. **Loop Utama (`i`):**  
//    - Loop ini mengiterasi angka dari 2 hingga 100 (`i = 2 → i <= 100`).  
//    - Angka 1 **bukan** bilangan prima, jadi kita mulai dari 2.  

// 2. **Flag `isPrime`:**  
//    - Variabel ini digunakan untuk menKaliani apakah angka `i` adalah bilangan prima.  
//    - Awalnya di-set `true` (asumsi `i` adalah prima).  

// 3. **Loop Dalam (`j`):**  
//    - Loop ini mengiterasi pembagi dari 2 hingga `i-1` (`j = 2 → j < i`).  
//    - Jika `i` habis dibagi `j` (`i % j === 0`), maka `i` **bukan** bilangan prima.  
//    - Set `isPrime = false` dan hentikan loop dalam dengan `break`.  

// 4. **Cek `isPrime`:**  
//    - Jika `isPrime` tetap `true` setelah loop dalam selesai, berarti `i` adalah bilangan prima.  
//    - Tampilkan `i` menggunakan `console.log`.

// ### **Visualisasi Proses:**

// #### **Contoh: Mengecek Apakah 5 adalah Bilangan Prima**
// ```
// Loop Utama (i = 5):  
//    │  
//    ├── Loop Dalam (j = 2):  
//    │     5 % 2 = 1 → Tidak habis dibagi  
//    │  
//    ├── Loop Dalam (j = 3):  
//    │     5 % 3 = 2 → Tidak habis dibagi  
//    │  
//    └── Loop Dalam (j = 4):  
//          5 % 4 = 1 → Tidak habis dibagi  

//    Setelah loop dalam selesai:  
//    isPrime = true → 5 adalah bilangan prima  
// ```

// #### **Contoh: Mengecek Apakah 6 adalah Bilangan Prima**
// ```
// Loop Utama (i = 6):  
//    │  
//    ├── Loop Dalam (j = 2):  
//    │     6 % 2 = 0 → Habis dibagi  
//    │     isPrime = false  
//    │     break (hentikan loop dalam)  

//    Setelah loop dalam selesai:  
//    isPrime = false → 6 bukan bilangan prima  

// Optimasi
// Untuk meningkatkan efisiensi, kita bisa membatasi loop dalam hingga `√i` (akar kuadrat dari `i`), karena jika `i` tidak habis dibagi oleh bilangan hingga `√i`, maka `i` pasti bilangan prima.  
// Kode Optimasi
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {       // hanya cek hingga akar i, cotoh i = 16 maka j akan mengecek akar 16 yaitu 4
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }

// Latihan Tambahan
// 1. Modifikasi program untuk menampilkan **bukan bilangan prima** dari 1 hingga 100.
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {       // hanya cek hingga akar i, cotoh i = 16 maka j akan mengecek akar 16 yaitu 4
//         if (i % j === 0) {
//             isPrime = false;
//             break
//         }
//     } if (!isPrime) {
//         console.log(i);
//     }
// }

// 2. Hitung **jumlah bilangan prima** dari 1 hingga 100. 
// let arr = []
//     for (let i = 2; i <= 100; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {       // hanya cek hingga akar i, cotoh i = 16 maka j akan mengecek akar 16 yaitu 4
//             if (i % j === 0) {
//                 isPrime = false;
//                 break
//             }
//         }
//         if (isPrime) {
//             arr.push(i);
//         }
//     }
// console.log(arr.length);

// 3. Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.  
// Code bilangan prima
// function Prima(angka) {
//     if (angka <= 1) {
//         return "Bukan Prima";
//     } else {
//         for (let i = 2; i <= Math.sqrt(angka); i++) {
//             if (angka % i === 0) {
//                 return "Bukan Prima";
//             }
//         }
//         return "Prima";
//     }
// }
// console.log(Prima(21));

// Function deep dive: parameter, return, dan secret superpower // dia mau njelasin sifat sifat fungsi dan kelebihannya
// Parameter: bahan mentah var / value yang akan dimasukkan ke fungsi berada dalam tanda  kurung ()
// function buatJus(apel,gula) {
//     return ` Jus ${apel} apel + ${gula} sendok gula 🍎!`;
// }
// console.log(buatJus(5, 2));     // Ouputnya Jus 5 apel + 2 sendok gula  🍎!
// Parameter diatas adalah 5 dan 2
// Note : 
// Parameter bisa berbagai tipe data (number, string, arrray, bahkan fungsi lainnya)
// Jika argumen kurang atau lebih, Javascript  tidak akan eror 
// buatJus(3) karena parameter kurang 1, maka output untuk parameter gula akan jadi undefined
// Return: fungsi yang mengembalikan nilai dan menghentikan eksekusi fungsi 
// function cekApelSegar(jumlah) {
//     if (jumlah > 0) {
//         return true; // 🍎 Segar!
//     }
//     return false; // 🍏 Busuk...
// } 
// console.log(cekApelSegar(5));
    // Contoh fungsi tanpa return (tapi tetap berguna)
    // function logApel() {
    //     console.log("Apel sedang diproses... 🍎");
    // }
    // logApel();   // Output: "Apel sedang diproses... 🍎"
    // Tapi nilai baliknya `undefined`!
// Sifat unik dan fungsi lainnya
// a) first-class citizens: fungsi sebagai var
    // const potongApel = function(jumlah) {       // function jumlah dinisialisai sebagai var potongApel
    //     return jumlah * 4;
    // }
    // function prosesApel (apel, action) {    // Fungsi sebagai parameter (higher-order function)
    //     return action(apel)
    // }
    // console.log(prosesApel(3, potongApel)); // penjabaran prosesApel(3, potongApel) dengan return potongApel(3), potongApel(3) punya return 3 * 4 sehingga returnnya jadi 12
// b) Default parameter: memberikan nilai default jika tidak ada argumen
    // function buatPieApel(apel = 5) {
    //     return `Pie dengan ${apel} apel 🍎`;
    // }
    // console.log(buatPieApel()); // "Pie dengan 5 apel 🍎"
// c) Arrow function (ES6): syntax lebih singkat untuk fungsi sederhana
    // Bentuk biasa
    // const hitungApel = function(n) {return n + 1; };    // kalo argumen n = 5 maka outputnya 6
    // Arrow function
    // const hitungApel = n => n + 1;
    // console.log(hitungApel(2)); // 3
// d) Scope: Aturan zona variabel
    // Variabel di dalam fungsi (*local scope*) tidak bisa diakses dari luar. Tapi variabel di *global scope* bisa diakses dari dalam fungsi:  
    // let totalApel = 10; // Global scope
    // function kurangiApel() {
    //     let apelDikurangi = 2; // Local scope
    //     totalApel -= apelDikurangi; // global scope bisa diakses di dalam fungsi
    //     console.log(totalApel);
    // }
    // console.log(appelDikurangi);    // Erorr, Variabelnya tidak bisa diakses dari luar fungsi

// Tips Penting
// nama fungsi dan parameter harus jelas
    // Buruk
    // function x (a, b){ ... };
    // Baik
    // function hitungTotalApel(jumlahAwal, tambahan) { ... };
// Gunakan return untuk fungsi yang perlu menghasilkan nilai (perhitungan, validasi)
// Hindari side effect (ubah data global) di fungsi sebisa mungkin, kecuali memang diperlukan.
// Teliti dalam menentukan parameter, mau tipe data apa saja
// jangan lupa (), buat jalanin fungsi

