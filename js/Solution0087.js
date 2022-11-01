function mixNumber(array,index){
    return array.map((n,i) => n%2===0).slice(-index)
}