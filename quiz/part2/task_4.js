let sentence = 'WOW JavaScript is so cool';
sentence = sentence.trim();

word_index_list = []
first_word_index = 0
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        word_index_list.push([first_word_index, i]);
        first_word_index = i + 1;
    }
}
word_index_list.push([first_word_index, sentence.length]);

for (let i = 0; i < word_index_list.length; i++) {
    word = sentence.substring(word_index_list[i][0], word_index_list[i][1])
    word_length = word_index_list[i][1] - word_index_list[i][0]
    console.log(`Kata ke-${i + 1}: ${word}, dengan panjang: ${word_length}`);
}