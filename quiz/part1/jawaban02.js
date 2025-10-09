// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// tanggal ultah calon bini gue wkwk
let tanggal = 20; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 9; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2004; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

function monthConverter(month) {
  switch (month) {
    case 1:
      return "Januari";
    case 2:
      return "Februari";
    case 3:
      return "Maret";
    case 4:
      return "April";
    case 5:
      return "Mei";
    case 6:
      return "Juni";
    case 7:
      return "Juli";
    case 8:
      return "Agustus";
    case 9:
      return "September";
    case 10:
      return "Oktober";
    case 11:
      return "November";
    case 12:
      return "Desember";
  }
}

function ultahAyank(date, month, year) {
  if (!date && !month && !year) {
    return "diisi dulu datanya pak!";
  }
  if (!date) {
    return "diisi tanggalnye boss!";
  }
  if (!month) {
    return "bulan berapa nih? diisi donk!";
  }
  if (!year) {
    return "mana tahunnya wowkwowk";
  }

  let correctDate;
  if (date < 1 || date > 31) {
    return "tanggalnya invalid bang, assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)";
  } else {
    correctDate = date;
  }

  let correctMonth;
  if (month < 1 || month > 12) {
    return "bulannya invalid bang, assign nilai variabel bulan disini! (dengan angka antara 1 - 12)";
  } else {
    correctMonth = monthConverter(month);
  }

  let correctYear;
  if (year > 2200) {
    return "jauh amat sir!";
  } else if (year < 1900) {
    return "udah mati sir!";
  } else {
    correctYear = year;
  }

  return `ini dia tanggalnye -> ${correctDate} ${correctMonth} ${correctYear}`;
}

console.log(ultahAyank(tanggal, bulan, tahun));
console.log(ultahAyank(12, 12, 1899));
