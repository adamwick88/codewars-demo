
function onlyEvensFinder(arr){
    let onlyEvens=[]
    arr.forEach((e) => {
        if(e %2 ===0){
            onlyEvens.push(e)
        }

    })
    return onlyEvens
}

console.log(onlyEvensFinder([1,2,3,4,5,6,]))