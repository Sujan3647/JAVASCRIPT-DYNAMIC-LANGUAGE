let a = 10
const b = 20
var c = 30



// {}  eda hoilo scope4




console.log(a);
console.log(b);
console.log(c);















function one(){
    const username = "SUJAN"


    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    two()

}
one()





if(true){
    const username = "sujan"
    if(username === "sujan")
        {
            const website = "google"
            console.log(username + website);
        }
}






console.log(addone(5));

function addone(num)
{
    return num + 1
}


const addtwo = function(num){
    return num + 2
}
addtwo(5)



