let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let namaBulan = ""; // var untuk menampung nama bulan

//Validating the assign var
if (tanggal < 0 || tanggal > 31) {
    console.log("Tanggal tidak valid")
} else {
    if (tahun < 1900 || tahun > 2200) {
        console.log("Tahun tidak valid")
    } else {
        if (bulan < 0 || bulan > 12){
            console.log("Bulan tidak vlaid")
        }
        else {
            switch(bulan) {
                case 1:
                    namaBulan = "January";
                    break;
                case 2:
                    namaBulan = "February";
                    break;
                case 3:
                    namaBulan = "Maret";
                    break;
                case 4:
                    namaBulan = "April";
                    break;
                case 5:
                    namaBulan = "May";
                    break;
                case 6:
                    namaBulan = "June";
                    break;
                case 7:
                    namaBulan = "July";
                    break;
                case 8:
                    namaBulan = "August";
                    break;
                case 9:
                    namaBulan = "September";
                    break;
                case 10:
                    namaBulan = "October"
                    break;
                case 11:
                    namaBulan = "November";
                    break;
                case 12:
                    namaBulan = "December";
                    break;
            }
        }
    }
}

console.log(`${tanggal} ${namaBulan} ${tahun}`);