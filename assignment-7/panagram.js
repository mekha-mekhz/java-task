let sentence = "The quick brown fox jumps over the lazy dog";  // Try changing this to test
let found = "";
let i = 0;

while (i < sentence.length) {
    let ch = sentence[i];

    // Convert uppercase A–Z to lowercase a–z
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        code = code + 32; // Convert to lowercase
        ch = String.fromCharCode(code);
    }

    // Only check a-z
    if (ch >= 'a' && ch <= 'z') {
        let exists = false;
        let j = 0;

        // Check if already in 'found'
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

// ✅ Final check
if (found.length === 26) {
    console.log("It is a pangram");
} else {
    console.log("It is not a pangram");
}



