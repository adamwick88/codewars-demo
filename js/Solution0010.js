//Create a new function that returns a new array with only even numbers.//
function onlyEvensFinder(arr){
    let onlyEvens=[]
    arr.forEach((e) => {
        if(e %2 ===0){
            onlyEvens.push(e)
        }

    })
    return onlyEvens
}
