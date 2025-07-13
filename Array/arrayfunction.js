//Write a program to convert an array of names to uppercase

const names=["tovino","nivin","fahad","dulquer","lal"]
const nameupper=names.map(name=>name.toUpperCase())
console.log(nameupper)

//Write a program to filter out names that are shorter than 5 characters.

const namefilt=names.filter(five=>five.length<5)
console.log(namefilt)

//Find the product of all elements in an array.

const  numbers=[4,5,6,7,-2,-4]
const product = numbers.reduce((pro, num) => pro * num, 1);
console.log("Product:", product); 


//Create a program to print a message like “Hello, [name]!” for each name in the array.
for (let name of names) {
  console.log(`Hello, ${name}!`);
}
//From an array of numbers, filter only the positive ones.

const positive=numbers.filter(pos=>pos>0)
console.log("postive numbers are:",positive)







