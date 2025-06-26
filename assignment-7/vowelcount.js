let str = "mekha";
let vowels = 0;
let consonants = 0;
let i = 0;

while (i < str.length) {
    let ch = str[i].toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }

    i++;
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
