console.log(Math);      //  its a function

console.log(Math.abs(-4));     //eda negative re positive bania dei

console.log(Math.round(4.3));   // round a loiya ai.. point ane na..

console.log(Math.round(4.6));   // 4.6 to taile 4.5 er thik ka beshi to 5+5 to 10 .. to beshi dom 5 .. thats why 5 answer 


console.log(Math.ceil(4.2));    // ceil mane  4 ta ektu boro hoile oi eda 5 koira dibo means barai dibo

console.log(Math.floor(4.9));   // point a aito na .. point porer ti loito na 

console.log(Math.min(4,3,5,9,1));  // min hoile array bitore kunta choto eda koibo

console.log(Math.max(7,3,0,5,8,1)); // max hoile arraay bitore kunta boro eda koibo




console.log(Math.random())     // random nmbr aibo but condition ase j 0 thika 1 pojonto number oi aibo 
                               // mostly decimal oi aiye

console.log(Math.random()*10);    // akhon 0 thika 10 bitore random number aibo

console.log((Math.random()*10) + 1 );   // eda mane 0 aito na kre +1 ..zero jodi aito chai +1 ... 1 hoiya jaibo .. hahahaha

console.log(Math.floor(Math.random()*10) + 1 );  // practise


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // practise


//************** OTP GENERATOR*************************/

const large = 9999
const small = 1111

console.log(Math.floor(Math.random() * (large - small + 1 )) + min);