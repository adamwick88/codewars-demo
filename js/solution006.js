//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]
//0 => [0]
function digitize(n){
    return String().split('').map(Number).reverse()
}
//never saw the .map number before, interesting way of converting this from a string. Didn't solve this one adding to anki for future studying.