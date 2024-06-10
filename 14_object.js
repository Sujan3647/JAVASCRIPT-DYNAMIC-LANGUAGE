                                 // interview question
                     // singleton  //
// -- literals   diya object create hoile ai object da singleton hoito na XXXXXXXXXXX
// constructor diya object create hoile ai object da singleton
// object.create    .... eda oi constructor diya hoi  sigleton


const JsUser ={
     name: "sujan",          // key o define korte parbo array moto 0, 1 index predefine thake na .. apni marzi
     age: 21,
     location: "tripura",
     email: "sujanali9812@gmail.com",
     isLoggedIn : false,
     lastloginDays: ['Monday', 'Friday']
    
}

console.log(JsUser.email);    // eda hoi but eda good programmer a kore na onnek kichu hoi na

const PyUser = {
    name: 'nargish',
    age: 16,
    "location" : "Tripura",
    isLoggedIn: true
}
// console.log(pyUser.email)                 // eda koron jaito na kre key ta te string mention ase
//  good programmer anme lekhe
console.log(PyUser["location"]);            // object[""]   PyUser["location"]


const Mysym =("key1")     // Symbol("")    ai bhabe symbol datatype decleared kore

const SwiftUser = {
    name: 'Sujan',
    mySymbol: Symbol('mySymbol')   ,          // decleared korsi symbol
    age: 21,
    email: 'sujanali9812@gmail.com'
}
 console.log(SwiftUser.mySymbol);       // object.name

 console.log( typeof SwiftUser.mySymbol);      //   type kita deksi
 
SwiftUser.email = "sujanali3647@gmail.com"    // object.value dile object er value change korte parmu
 
console.log(SwiftUser.email );
console.log(SwiftUser['email'] );


Object.freeze(SwiftUser)   // object.freeze() use korle oi object ta change hoito na .. freeze hoiya jaibo....  r argument a object er  name dite hoibo 
SwiftUser.email = "freelancersujan@gmail.com"   // change hoito na object,freeze jonno.. but change decleared korle error o dito na
                                                 // propagate hoito na
console.log(SwiftUser);



golangUser={                                  // new object created
    name: 'sujan',
    email: 'sonali@gmail.com'
}


// javascript er bitore functiion re discrimination hoi na 
// variable babhe o  decleared korte parmu
//getting just ekta variable er nam
//scope of variable
golangUser.getting = function(){            // object.getting eda normal er pore function() define kormu jamne kore
    console.log("hello golang  user");          // function er bitore print lagai dise
} 
console.log(golangUser.getting());     // printing er somoi getting re method banaiya dio... naile run hoito na



golangUser.gettingTwo = function(){
    console.log(`hello bhailog, ${this.name}`);  // dollar symbol { this. variable name leksi} this kare karon tar eda {this.variableName31e`jh}
}

console.log(golangUser.gettingTwo());
// object litterals edi