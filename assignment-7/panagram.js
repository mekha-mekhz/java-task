let sentence = "The quick brown fox jumps over the lazy dog"; 
let found = "";
let i = 0;

while (i < sentence.length) {
    let ch = sentence[i];

    
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        code = code + 32; 
        ch = String.fromCharCode(code);
    }

    
    if (ch >= 'a' && ch <= 'z') {
        let exists = false;
        let j = 0;

        
        while (j < found.length) {
            if (found[j] === ch) {
                exists = true;
                break;
            }
            j++;
        }

        if (!exists) {
            found += ch;
        }
    }

    i++;
}


if (found.length === 26) {
    console.log("It is a pangram");
} else {
    console.log("It is not a pangram");
}



