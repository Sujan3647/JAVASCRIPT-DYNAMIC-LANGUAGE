const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function sujan () {} )

// call back reference

// --- function er name thake na


 coding.forEach(function (iteam) {            // coding ---array er name. forEach() - loop - function - jar nam nai 
                                                 // function (iteam) - ().. argument er bitore jsa kichu lekte parbo..
   console.log(iteam);                                           // jda oi lekhmu eda decleared korbo array re    

  } )




  const array = [1, 2, 4, 5, 7]

  array.forEach(function (val){
    console.log(val);
  })




// arrow function diya

const num1 = [1, 2, 3, 4]            //  array decleared

num1.forEach( (nums) =>{                   // array name . for each loop().. bitore arrow function ()=>{}  
 console.log(nums);                          // print 
} )




const doc = [4, 5, 6, 7, 8, 9]                            // array declared

doc.forEach( (iteam, index, arr) =>{                            // array name. for each loop ()    .. arrow function (iteam - kita ase)
             console.log(iteam, index, arr);              // index, arr
})                      // print




// array bitore object


const myCoding = [   
    {
        languageName : 'Javascript',
        languageFileName : " js"
    },
    
    {
         languageName : 'Java',
        languageFileName : " java"
    },

    {
         languageName : 'Python',
        languageFileName : " Py"
    }
]

myCoding.forEach( (iteam) =>{                     
console.log(iteam.languageName);                    // iteam er kita lage . dot diya lekte o parmuk

})