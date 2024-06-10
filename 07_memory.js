// Stack  (primitive), Heap (non-premetive)--refrence hoi heap a

let myGameName = "Nexus"

let anotherName = myGameName

anotherName = "sujan"

console.log(myGameName);
console.log(anotherName);


let UserOne = {
    email:  "sujanali9812@gmail.com",
    upi: "user@pnb"
}

let UserTwo =UserOne

UserTwo.email = "sujan@iut.com"

console.log(UserOne.email);

console.log(UserTwo.email);