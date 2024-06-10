// Immediately Involved Function expression [IIFE]

// name IIFE
(function chai(){                                      // function created name chai
    console.log(` DB connected`);                           // print 
  })() ;                                                     // () add
             // function re rap koira laisi.. ( ) diya.. 


            //  ; semicolon na dile stop koi hoito janto na.. to dit hoi ai khane


            // unnamed iiFE
 ( ()  =>{

    console.log(`DB connected 2`);

}) ()  ;  


// parameter IIFE

( (name) => {                                            // variable o deon jai
    console.log(`DB connected 3 ${name}`);
})("sujan")                                               // pass oi koira dissi


