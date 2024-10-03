
function resolvedPromise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("{message: 'delayed success!'}")
        }, 500)
    })
}

const success=resolvedPromise().then( function (result) {console.log(result)})

 function rejectedPromise(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            rej("{error: 'delayed exception!'}")
        }, 500)
    })
}
const rejected=rejectedPromise().then( function (result) {console.log(result)},function (err){console.log(err)})
