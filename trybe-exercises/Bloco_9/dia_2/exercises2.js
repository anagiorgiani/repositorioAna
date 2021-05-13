const promise = new Promise((resolve, reject) => {
    function numRandom () {
        return Math.floor(Math.random()* 50) + 1;
    }

    let arrayNum = [];
    for (let index = 0; index < 10; index += 1){
        arrayNum.push(numRandom());    
    }
    const newArray = arrayNum.map((value) => value **2);

const somaArray = newArray.reduce((acc, curr) => acc + curr);

if (somaArray < 8000) {
    return resolve(somaArray);
}
 reject (somaArray); {
         
 }
})
promise
 .then(somaArray => console.log([2,3,5,10].map((newArray => somaArray/ newArray))))
 .catch(somaArray => console.log(`É mais de 8000 essa promise está quebrada ${somaArray}`)) 