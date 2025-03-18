"use strict"
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let date = 0; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let month = ""; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let year = 0; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

// input date, month and year with checking process
do {
    // input date
    date = prompt("Input the current date");
    // date checker
    if (!date) {
        // if date are empty, alert will be show-up
        alert("Please enter the date");
    } else if (isNaN(date)) {
        // if date filled with string or NaN, alert will be show-up
        alert("Please enter a valid date with number");
    } else if (date > 32) {
        // if date more than 32, alert will be show-up
        alert("Please enter a valid date");
    } else {
        // if date are valid, go to next process
        // input month and checking process
        do {
            // input month
            month = prompt("Input the current month using number");
            // month checker
            if (!month) {
                // if month are empty, alert will be show-up
                alert("Please enter the month");
            } else if (month < 1 || month > 12) {
                // if month more than 12, alert will be show-up
                alert("Please enter a valid month range");
            } else {
                // if month filled with valid input, go to next step
                // change value month
                switch (month) {
                    case "1":
                        // if month filled with 1, value will be changed to January
                        month = "January";
                        break;
                    case "2":
                        // if month filled with 2, value will be changed to February
                        month = "February";
                        break;
                    case "3":
                        // if month filled with 3, value will be changed to March
                        month = "March";
                        break;
                    case "4":
                        // if month filled with 4, value will be changed to April
                        month = "April";
                        break;
                    case "5":
                        // if month filled with 5, value will be changed to May
                        month = "May";
                        break;
                    case "6":
                        // if month filled with 6, value will be changed to June
                        month = "June";
                        break;
                    case "7":
                        // if month filled with 7, value will be changed to July
                        month = "July";
                        break;
                    case "8":
                        // if month filled with 8, value will be changed to August
                        month = "August";
                        break;
                    case "9":
                        // if month filled with 9, value will be changed to September
                        month = "September";
                        break;
                    case "10":
                        // if month filled with 10, value will be changed to October
                        month = "October";
                        break;
                    case "11":
                        // if month filled with 11, value will be changed to November
                        month = "November";
                        break;
                    case "12":
                        // if month filled with 12, value will be changed to December
                        month = "December";
                        break;
                    default:
                }
                // input year and checking process
                do {
                    // input year
                    year = prompt("Input the current year");
                    // year checking
                    if (!year) {
                        // if year are empty, alert will be show-up
                        alert("Please enter the year");
                    } else if (year < 1900 || year > 2200) {
                        // if year are not in valid range, alert will be show-up
                        alert("Please enter the valid year range");
                    } else {
                        // if year filled with valid input, console log
                        console.log(`${date} ${month} ${year}`);
                    }
                    // while year aren't meet with valid condition, users must input with valid year range
                } while (!year || (year < 1900 || year > 2200));
            }
            // while month aren't meet with valid condition, users must fill with valid month range
        } while (!month || month > 12);
    }
    // while date aren't meet with valid condition, users must fill with valid date
} while (!date || isNaN(date));