const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];
function lower(w){
    return w.toLowerCase()
}

function lowerCaseWords(arr){
    return new Promise( (res, rej) =>{
        words=arr.filter((w)=> typeof(w)==="string")
        lowers=words.map(lower)
        if(lowers.length!=null)
            res(lowers)
        else    
        rej("something went wrong in the process")
       
    })
}
const r= lowerCaseWords(mixedArray)
r.then(function (result){
    console.log(result)
}, function (err){
    console.log(err)
})

