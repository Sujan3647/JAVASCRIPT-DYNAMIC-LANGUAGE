// Maps

// map a duplicate value loi na

const map = new Map()                   // const variable er nam  = new Map()
                                           // map created
map.set('IN', 'INDIA');
map.set('USA', 'United States of America');                  // map.set () kita set kortam
map.set('Fr', 'France');



map.set('IN', 'INDIA');              // eda nito na it duplicated


console.log(map);


for (const [key, value] of map) {                          // normal for of o lagan jai but key loge value o neon jaibo
                                                        //  just [kita lakbo mention koro     key, value] diya dimu
    console.log(key, ':-', value);
}





//object a kormu


