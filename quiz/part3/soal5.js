let input = 5;

for (let i = 1 ; i <= input ; i++) {
    bintang=' ';
    for (let n = 1; n <= i ; n++) {
        bintang += '*';
    }

    console.log(bintang);
}

for (let i = 1 ; i <= input ; i++) {
    let spasi = ' ' .repeat(input - i);
    let bintang = '*' .repeat(2*i - 1);
    console.log(spasi + bintang);
}

for (let i = 1 ; i <= input ; i++) {
    let spasi = ' ' .repeat(i - 1);
    let bintang = '*' .repeat(2*(input - i) + 1);
    console.log(spasi + bintang);
}