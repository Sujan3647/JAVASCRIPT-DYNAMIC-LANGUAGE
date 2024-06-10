const marvel_heros = ['spiderman', 'ironman', 'Thor']    // basic array created
const dc_heros = ['batman', 'flash', 'superman']      // new array created
// 2 array created complete
 
marvel_heros.push(dc_heros)    // 1st array loge second array push korsi

console.log(marvel_heros);   // ekloge aibo but merge hoito na
                          
// array bitore r ekta array     
// output  [ 'spiderman', 'ironman', 'Thor', [ 'batman', 'flash', 'superman' ] ]    

// js er bitore array bitore same data type na hoilo o hoibo... 
// string  + array that i show here.
// array re o data nise   3rd index
// array o ekta data type   hahahah

console.log(marvel_heros[3]);  // index 3 te array store hoise

console.log(marvel_heros[3][2]);  // 3 nmnr index  element er 2 nmbr element ta [3][2] diya decleared korsi


arr1 = [1, 2, 3, 4, 5]    // array created
arr2 = [6, 7, 8, 9, 10]    // array created

console.log(arr1);
console.log(arr2);       // normal printing

arr3 = arr1.concat(arr2)   // concat() use korle 2 ta array merge hoiya jaibo
console.log(arr3);         // ekta new oi array create hoibo ..



// alternative of concat that is spread ...arrayname, ...arrayname
//... use korle tara akhon array na ek ek element hoiya gayse
myarr1 = [11, 12, 13, 14, 15]
myarr2 = [16, 17, 18, 19, 20]
myarr3 = [21, 22, 23, 24, 25]

myarr4 = [...myarr1, ...myarr2, ...myarr3]     // ... ai spread use korle joto khusi oto array merge koron jaibo
console.log(myarr4); 


const sujan = [1, 2, 3, [4, 5,], 6, 7, [8, 9, [10, 11], 12]];
 
const nargish = sujan.flat(2);  // flat() use korle array re same of concat moto kore but flat(2) means koto tuk depth jaibo eda mentioned korle parmu

console.log(nargish);



const iut = [1, 2, 3, [4, 5,], 6, 7, [8, 9, [10, 11, [12, 13, [14, 15, 16]] ] ]];   // infinity argument() a lekle koto depth jaito lekhon lakto na
const tu = iut.flat(Infinity)
console.log(tu);




const newArray = Array.isArray('sujan')  //  Array.isArray()   check korte parmu eda array ni
 console.log(newArray);

const newArray2 = Array.from('sujan')    // array te convert koira dibo
console.log(newArray2);


console.log(Array.from({name: 'sujan'}));    // interesting its blank karon object a mentioned korte hoi.. key re... na...value  re array banito.


let score1 = 100
let score2 = 200                                  // Array.of() use korte parmu
let score3 = 300

console.log(Array.of(score1, score2, score3));