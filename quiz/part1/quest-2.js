
let day = 1;
let year = 2025;
let detail;
function getMonth(num) {
    switch(num) {
        case 1:
            detail = "Januari";
            break;
        case 2:
            detail = "Februari";
            break;
        case 3:
            detail = "Maret";
            break;
        case 4:
            detail = "April";
            break;
        case 5:
            detail = "Mei";
            break;
        case 6:
            detail = "Juni";
            break;
        case 7:
            detail = "Juli";
            break;
        case 8:
            detail = "Agustus";
            break;
        case 9:
            detail = "September";
            break;
        case 10:
            detail = "Oktober";
            break;
        case 11:
            detail = "November";
            break;
        case 12:
            detail = "Desember";
            break;
    }
    console.log(day, detail, year)
}

getMonth(3);