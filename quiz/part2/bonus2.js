let word = 'wow JavaScript is so cool';

let kata = word.split(" ");

for (let i = 0; i < kata.length; i++) {
    console.log(`Kata ${i + 1}: ${kata[i]}`);
}