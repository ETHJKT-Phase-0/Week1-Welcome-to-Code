// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// Output yang diharapkan adalah sebagai berikut:

import inquirer from 'inquirer';

function firstLoop() {
    console.log('LOOPING PERTAMA');
    let i = 1;
    while (i <= 20) {
        console.log(i);
        i++;
    }
    showMenu(); // Display the menu again after completion
}


function secondLoop() {
    console.log('LOOPING KEDUA');
    let j = 20;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

// function tampilan menu
function showMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Choose an option:',
                choices: [
                    { name: '1. First Loop', value: '1' },
                    { name: '2. Second Loop', value: '2' },
                ],
            },
        ])
        .then((answers) => {
            if (answers.choice === '1') {
                firstLoop();
            } else if (answers.choice === '2') {
                secondLoop();
            }
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Display the menu for the first time
showMenu();



