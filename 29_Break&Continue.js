
// Break & Continue



//break
for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log("DETECTED 5");
        break;
    }
   console.log(`value of i is ${index}`);
    
}



//continue

for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log("DETECTED 5");
        continue;
    }
   console.log(`value of i is ${index}`);
    
}

