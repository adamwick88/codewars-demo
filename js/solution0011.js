
function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Paper delivered to house')
        },1000)
    })
}

function houseTwo(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Paper delivered to house')
        }, 10000)
    })
}

function houseThree(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Paper delivered to house 3')
        }, 20000)
    })
}
async function getPaid(){
    const  houseOneWait = await houseOne()
    const houseTwoWait=await houseTwo()
    const houseThreeWait=await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}
getPaid()