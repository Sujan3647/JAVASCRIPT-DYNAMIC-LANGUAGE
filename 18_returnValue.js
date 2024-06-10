function calculateCartPrice(...num1)    // rest operator... parameter pass
{
    return num1            // return koira disi
}

console.log(calculateCartPrice(200, 400, 500)); // taile sob print hoibo array te



function sujan(val1, val2, ...num1)   // ai bhabe o kora jai
{                                      // argument/ parameter na dile sob ti print hoito na first nmbr ta oi print hoibo
    return num1                                         // data di array te print hoiya jaibo ... dile
}

console.log(sujan(10, 20, 30, 40, 50, 60, 70, 80));





const user = {
    username: "sujan",
    price: 100
}

function handleObject(anyObject)              // function a argument a anyObject disi
{
    console.log(`username is ${anyObject.username}, and price is ${anyObject.price}`);            // ` batricts diya print kortam.. ${}
}
handleObject(user)   // function er name r tar bitore object er name pass korlam... kun object thika data dibo koon lakbob to



handleObject({
    username: "sam",
    price: 399
})


const myArray = [200, 300, 400]                    // array create

function returnSecondValue(getArray)            // function a new arugument
{
    return getArray                             // return value argument
}

console.log(returnSecondValue(myArray));            // print function er bitore array


