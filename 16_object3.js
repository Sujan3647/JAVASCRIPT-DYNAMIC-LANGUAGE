const course = {                                        // ekta object create korsi
    coursename : 'javaScript node basics',
    price : 5000,                               // object er values disi
    courseteacher : 'raviSir'

}

console.log(course.courseteacher);                     // normal print course er courseteacher re

const {courseteacher} = course                          // const {key er name} = object er name dole directly console a direct key name lekle oi print hoiya jai

 console.log(courseteacher);                           // jda koilam


// edi re  de-structure

const {courseteacher: teacher} = course                      //const {key er name : new nam} = object jodi kori object er key new nam diya print korle o print hoiya jaibo
console.log(teacher);                                    // jda koilam



