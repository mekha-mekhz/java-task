let str = "madams";
let reversed = "";
let i = str.length - 1;


while (i >= 0) {
    reversed += str[i];
    i--;
}


if (str === reversed) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}
