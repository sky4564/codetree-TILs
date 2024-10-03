const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const input = []

rl.on('line', function(line){
    input.push(line)
})
rl.on('close', function(){
    console.log(solve())
})


function solve() {
    let a = +input[0]
    let ans = ""
    for(let i = a; i<=100; i++){
        if(i >= 90) ans += `A `
        else if(i >= 80) ans += `B `
        else if(i >= 70) ans += `C `
        else if(i >= 60) ans += `D `
        else ans += `F `
    }
    return ans
}