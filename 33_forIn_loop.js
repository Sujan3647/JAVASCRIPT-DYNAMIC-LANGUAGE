// for in

const myObject =
{
    js : 'javascript',
    cpp: 'c++',
    rb : 'Ruby',
    swift : 'swift'
}

for (const key in myObject) {
   
        console.log(`${key} shortcut is for ${myObject[key]}`);             // eda to noraml key aiya porse
    }


 
    
    //array

    const programming = ["js", "cpp", "java", "python"]

    for (const key in programming) {
       console.log(key);                                         // for in only key oi loi
    }
//////////////////////////////////////////////


    const pro = ["js", "cpp", "java", "python"]

    for (const i in pro) {
       console.log(`${i} shortcut is for ${pro[i]}`);
    }
    