const num1 = [1, 2, 3]
const num2 =num1.reduce(function (acc, curval){
    return acc + curval
}, 0)

console.log(num2);
                                                          

///////////
const num3 = [1, 2, 3, 4, 5]

const num4 = num3.reduce(function (acc, curval){
    console.log(` acc : ${acc} and curval : ${curval}`);
    return acc + curval
}, 0)

console.log(num4);
//   acc first a deon lage , 0    -- amer echa kita diya start kormu , 3 o dite pari
//   acc value ase0 -- r curval er value hoilo array di
// to 0 + array 1 then... ans hoilo  1
// 1 hoilo acc then array 2 + 1 .... ans hoilo 3
//3 hoilo acc then array 3 + 3 .... ans hoilo 6
//6 hoilo acc then array 4 + 6 .... ans hoilo 10
//10 hoilo acc then array 5 + 10 .... ans hoilo 15




// arrow function diya koira dekhi

const val1 = [1, 2, 3]

const val2 = val1.reduce( (acc, curval) => acc + curval , 0)                      // arrow pore direct koira disi

console.log(val2);

//////////////////////////// array te koira dekhi

const shopping = [
    {
        iteamName : 'Js course',
        price : 299
    },
    {
        iteamName : 'Data science course',
        price : 399
    },
    {
        iteamName : 'python course',
        price : 499
    },
    {
        iteamName : 'Ruby course',
        price : 599
    },
    {
        iteamName : 'java course',
        price : 699
    }
]

// Q. sob pricing re add kortam

const priceToPay = shopping.reduce( (acc,iteam) => acc + iteam.price  , 0 )


console.log(priceToPay);

// filter


const userBooks = shopping.filter( (iteam) => iteam.price == '399' )    
console.log(userBooks);   