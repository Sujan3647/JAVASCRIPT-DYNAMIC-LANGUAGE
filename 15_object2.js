const JsUser = new Object()  // ai bhabe o amra object create korte parmu

const PyUser = {}              // ai bhabe to korsi oi

//print koira dekhi
console.log(JsUser);     // 2ta khali array ailo
console.log(PyUser);


// new object create kori new bhabe j korsu

const IUT = new Object()
IUT.id = "22IUT0040011"
IUT.name = "Sujan Ali"
IUT.CGPA = 9.22

console.log(IUT);

console.log(IUT.name);


// nested object koron jai js er bitore

const regularUser = {                           // first object
    fullName : {                                // 1st nested object
        userName : {                        // 2nd nested object
            FirstName : 'Sujan',
            LastName : 'Ali'
        }
    }
}

console.log(regularUser)                                  // first object print
console.log(regularUser.fullName);                          // first object er 1st nested object print
console.log(regularUser.fullName.userName);                   // first object er 1st nested ... bitore j r ekta nested object j ase take print



const obj1 = {1: 'a', 2: 'b' }                        //first object create
const obj2 =  {3: 'c', 4: 'd' }      // second object create
const obj3 = {5: 'e', 6: 'f'}          // third object create

const obj4 = {obj1, obj2}              // merge korsi.. but 2 ta alada alada print hoise
console.log(obj4)

const obj5 = Object.assign(obj1, obj2, obj3)           // Object.assign() use korle objects ti ekta object a create  hoiya jai
console.log(obj5);

const obj6 = Object.assign({}, obj1, obj2, obj3)           // good programming a ekta {} blank carly brackets use korle bhalo
console.log(obj6)


const obj7 ={...obj1, ...obj2, ...obj3}                    // spared method ta easy and  bhalo j ta array te o korsi... programmer friendly
console.log(obj7);


const tinder = new Object()                        // new Object lekha tinder name a object create korsi
tinder.id = '1'                                        // object er bitorer data disi
tinder.email = 'sujanali9812@gmail.com'                 // object er name dot ki key r value dimu edi leksi
tinder.isLoggedIn = true

console.log(tinder);                            // tinder a ki ki ase deksi

console.log(Object.keys(tinder));              // Object.keys() korle ()-- arguments er bitore object er nam lekle (tinder) keys ti show kore as a array

console.log(Object.values(tinder))               // only values ti array format  a aibo

// length edi o use koron jai

console.log(Object.entries(tinder));   // Object.entries() dile object er sob key r value individually ekta ekta array a show hoibo.. first ta key second one value

 
console.log(tinder.hasOwnProperty('email'));    // object er name tinder.hasOwnProperty() dile -- argument j lekmu edi object a ase ni eda koibo boolean a
                                                  

