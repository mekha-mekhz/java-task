let sentence = "JavaScript is fun";
let i = 0;
let length = 0;


while (sentence[length] !== undefined) {
    length++;
}

let result = "";
i = length - 1;

while (i >= 0) {
    
    while (i >= 0 && sentence[i] === ' ') {
        i--;
    }

   
    let end = i;

    while (i >= 0 && sentence[i] !== ' ') {
        i--;
    }

    let j = i + 1;
    if (j <= end) {
        if (result !== "") {
            result += ' ';
        }
        while (j <= end) {
            result += sentence[j];
            j++;
        }
    }
}


console.log(result);  
