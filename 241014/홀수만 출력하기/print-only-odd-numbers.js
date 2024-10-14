const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function sol (input) {
    let arr = input.map( x=> Number(x))    
    arr.map(x => {        
        if(x%2 !== 0 && x%3 == 0 && x !==0){
            console.log(x)
        }
    })
}

sol(input)