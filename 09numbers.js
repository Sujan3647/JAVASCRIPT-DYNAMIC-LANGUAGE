const score = 400
console.log(score);


const balance = new Number(100)


console.log(balance);

console.log(typeof balance);

console.log(balance.__proto__)

console.log(balance.toString());  // string convert koira output dekhaibo




console.log(balance.toString().length);      // string a length 3  reason...... 100 BITORE... 3 character    


console.log(balance.toFixed(2));            //fixed er bitore value dite hoibo  .....2 means . point er pore 2ta zero  like  100.00

console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));  // value 3 number er oi hoibo


const hundreds = 1000000
console.log(hundreds.toLocaleString());    // 100000 onnek zero porte muskil.. so .. to localString() use korle koma ,,, aibo US fomat a


console.log(hundreds.toLocaleString('en-IN'));   // indian format a aibo