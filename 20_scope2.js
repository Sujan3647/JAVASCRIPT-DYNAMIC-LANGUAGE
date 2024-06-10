const user ={
    username : "sujan",
    price: 100,

    welcome: function(){
        console.log(`${this.username}, wellcome to my website`);             // this dile.. ai {} er value da depent koira oi output dibo

    }
}

user.welcome()    // value kintu return deon lakbo oi

user.username = "sam"

user.welcome()    // sam print hoibo sam da content er baire


// global object kintu window object


function chai(){
    console.log(this);

}
chai()


