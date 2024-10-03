const fs = require('fs')
const path = require('path')
function createLogs(){
    fs.mkdir(path.join(__dirname,"Logs"),function (err) {
           if(err) throw err;})

    for(let i =0; i<10;i++){
        fs.writeFileSync(`${path.join(__dirname,"Logs")}/log${i}.txt`, "filler content", function (err) {
            if(err) throw err;
        })
        console.log(`log${i}.txt`)

    }
}

function removeLogs(){
    for(let i =0; i<10;i++){
        fs.unlinkSync(`${path.join(__dirname,"Logs")}/log${i}.txt`, function (err) {
            if(err) throw err;
        })
        console.log(`delete files...log${i}.txt`)

    }

    fs.rmdir(path.join(__dirname,"Logs"),function (err) {
        if(err) throw err;})

}


createLogs()
removeLogs()