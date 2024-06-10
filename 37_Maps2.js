const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (nums) =>{
    return    nums + 10                                      // Map automatic oi return kore  value but lekle practise bhalo
} )

console.log(newNums);



const myValue = [1, 2, 3, 4, 5, 6, 7, 8., 9, 10]

const newValue = myValue
                        .map( (val1) => val1 * 10 )              // ektar pore ekta method o lagaite parmu
                        .map ( (val1) => val1 + 1 )                   // 10 plus , 1 + map diya koira... filter a condition lagai disi
                        .filter( (num) => num >= 40 )

console.log(newValue);                           // print
