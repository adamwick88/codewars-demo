function sumMix(x){
    return x.map(a=>+a).reduce((a,b)=>a+b)
}

function search(budget,prices){
    return prices.filter(p=>p<=budget).sort((a,b)=>a-b).toString("")
}

