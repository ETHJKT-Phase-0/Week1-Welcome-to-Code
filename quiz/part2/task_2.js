let sentence = ' WOW JavaScript is so cool';
sentence = sentence.trim();

word_list = []
let tmp_word = '';
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        word_list.push(tmp_word);
        tmp_word = '';
    } else {
        tmp_word += sentence[i];
    }
}
word_list.push(tmp_word);

for (let i = 0; i < word_list.length; i++) {
    console.log(`Kata ke-${i + 1}: ${word_list[i]}`);
}
