
//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//Division by zero should return NaN.

function remainder(n, m){
  if(n>m){
    return n%m// Divide the larger argument by the smaller argument and return the remainder 
}else if(m>n){
  return m%n
  }else if(m===0 || n===0 ){
    return NaN
  }}
