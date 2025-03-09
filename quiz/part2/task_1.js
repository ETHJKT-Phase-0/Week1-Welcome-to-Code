let first_word = 'JavaScript';
let second_word = 'is';
let third_word = 'awesome';
let fourth_word = 'and';
let fifth_word = 'I';
let sixth_word = 'love';
let seventh_word = 'it!';

word_list = [first_word, second_word, third_word, fourth_word, fifth_word, sixth_word, seventh_word]

sentence = ""
for (let i = 0; i < 7; i++) {
    sentence += word_list[i] + " "
}

console.log(sentence)