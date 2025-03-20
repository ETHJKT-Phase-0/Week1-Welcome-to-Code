// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Code disini

for (let i = 1; i <= 100; i += 2) {
  console.log(i)
  if (i % 3 === 0) {
    console.log(i + " Adalah Kelipatan Tiga")
  }
}

for (let j = 5; j <= 100; j += 2) {
  console.log(j)
  if (j % 5 === 0) {
    console.log(j + " Adalah Kelipatan Lima")
  }
}

for (let k = 0; k <= 100; k += 2) {
  console.log(k)
  if (k % 9 === 0) {
    console.log(k + " Adalah Kelipatan Sembilan")
  }
}