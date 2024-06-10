const name = "sujan"

const repoCount = 4

// console.log(name + repoCount);  //outdated  use kortam na amon


// use backticks   ``
// string interpolation   means placeholder
// ****************************************************************************
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);  //******** Eda most important for string variable
//****************************************************************************
const gameName = new String('sujanign-hc-com')
console.log(gameName[0])      //  0 position kita ase

console.log(gameName.__proto__);  // .....datatype kita

console.log(gameName.length)        // .....length koto boro


console.log(gameName.toUpperCase());  // .....toUpperCase boro hater koira dei

console.log(gameName.charAt(2));      //....... 2 number  position kun alphabet ase

console.log(gameName.indexOf('n'));   // position number koto bair kore .indexOf



const newString = gameName.substring(0, 4)   // string re sub string a convert korsi  0--- start ,,,,,, 4 hoilo end
console.log(newString);
  
const anotherString = gameName.slice(-8)    //slice a negative diya o koron jai ulta hoi na 
console.log(anotherString);                    




const newStringOne  = "  Sujan   "
console.log(newStringOne);
console.log(newStringOne.trim());            // .trim() space count korto na eda onnek bhalo




const url = "https://sujan.com/sujan%20ali"  

console.log(url.replace('%20', '-'));           // .replace('jjda change kortam',   'jda set hoibo')

console.log(url.includes('sujan'));           // .include (sujan)  mane (sddhjgdjsh) eda ase ni

console.log(gameName.split('-'));  //  . split j ase eda split('jda da thabo) eda re  array te convert koira dibo part part a