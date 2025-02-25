function prossesSentence(nama,kota, alamat){
  return `Halo ${nama}, kamu dari kota ${kota} yang beralamat ${alamat} ya...`
}

let nama = "Ujank", kota= "palembang", alamat = "Kp. Durian runtuh RT RW 01/02"
let FinalSentence = prossesSentence(nama,kota,alamat)

console.log(FinalSentence)
