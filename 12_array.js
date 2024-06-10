// array
// javascript er array te same datatype na hoile to hoibo
// size mention na koira jodi new array add kori ..... eda o accept korboi


const myArr = [1, 2, 3, 4, 5]        // normal array // array starts from index 0
console.log(myArr[0]);    // number a try koira deksi




const Heros = ['spiderman', 'ironman', 'hulk']     // string a try koira deksi
console.log(Heros[2]); 



//js a variable banaiya o array create korte parmu
const myArr2 =  new Array(1, 2, 3, 4, 5)
console.log(myArr2[1]);

// array bitore o array  create korte parmu


// Array Methods

myArr.push(6)          // push() method er kaj hoilo .... array te new element add koron
// myArr.push(6,7)
console.log(myArr);   // size na mentioned korle joto array ase element ti print hoibo


myArr.pop()                 // pop() method mane last er j element acha array te... eda delete hoiya jaibo... pop a argrument lage na (argument)
console.log(myArr); 


const sujanArr = [4, 5, 6, 7, 8]   //  new array create korsi jate bujte problem na hoi
sujanArr.unshift(9)                //  unshift() use korle argument.. j element dimu oi element ta first a add hoiya jaibo.. index 0 te
console.log(sujanArr)


const sujanArr2 = [9, 8, 7, 6, 5]     //  new array create korsi jate bujte problem na hoi
sujanArr2.shift()                     // shift() use korle first elment ta delete hoiya jai.. argrument a kichu lekhon lakto na
console.log(sujanArr2);

/// eda question answer js edi

console.log(sujanArr2.includes(8));   // .includes() use korle argument a j element ase .. eda ase ni eda ... boolean a answer dibo
console.log(sujanArr2.includes(2));   // bhul o lekha deklam false aise .. element na thakle false dibo


const sujanArr3 = [11, 12, 13, 14, 100]  //new array create korsi jate bujte problem na hoi
console.log(sujanArr3.indexOf(12))      // indexOf() use korle argument a j element dimu ... oi element er  index ta koibo
console.log(sujanArr3.indexOf(100))      // r ekta koira deksi..
console.log(sujanArr3.indexOf(1))        // na thakle -1 output aibo

const newArr = sujanArr3.join()     /// join() use korle array number datatype thika.. string a convert koira dibo  
console.log(sujanArr3);             // eda to normal nmbr print
console.log(newArr);                  // eda string print

console.log(typeof newArr)              // type o check koira laisi



// slice, splice  



const nargishArr = [1,2, 3, 4, 5]    //new array create korsi jate bujte problem na hoi
console.log("A", nargishArr);         // array print
const newNargish = nargishArr.slice(1, 3)  // slice() er kaj hoibo argrument j (1, 3)- index lekmu... 
                                           //index 1 thik ka 3 index er age ja ase sob print hoibo.. but 3 index the print hoito na 
console.log(newNargish);

console.log(nargishArr.slice(1, 4));  // same print koira deklam kam hoi ni



const newNargish2 = nargishArr.splice(1, 3)   // splice() hoilo argument (1, 3) j leksi index 1 thika 3 pojonto print hoibo
console.log(newNargish2)                    // print korlam
console.log("B", nargishArr)
// difference hoilo slice r splice
// slice a main array change hoina 
// splice a main array ta change hoiya jai./