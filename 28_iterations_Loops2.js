// For LOOPS

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}






for(i = 0; i<=10; i++)
    {
        const element = i;
if(element == 5){
    console.log("5 is best number");
}

        console.log(element);
    }


for(let i =0; i<=10; i++)
{
    console.log(`Outer loop value : ${i}`);
    for(j=0; j<=10; j++){
        console.log(`Inner loop value is ${j} and inner is ${i}`);
    }
}



for (let i = 1; i <= 10; i++) {
    for(j=1; j<=10; j++)
        {
            console.log(i + '*' + j + '=' + i *j);
        }
    
}

for (let i = 1; i <= 10; i++) {
    for(j=1; j<=10; j++)
        {
            console.log(`${i} * ${j}  = ${i*j}`);
        }

        
    
}









let myArray = [1, 2, 3, 4]

console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
