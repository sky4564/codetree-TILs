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
    console.log(sol())
})


// 하나씩 올라가면서 조건에 만족하는건 엔서에 푸쉬

function sol() {
    let ans = ""
    const [a,b] = input[0].split(' ').map(Number)    
    for(let i  = a ; i <= b; i++){        
        if(i == a) ans += `${i} `        
        if(i%2 == 0) {
            if(i+3 <= b){
                ans += `${i+3} `
                i += 2
            }            
        }
        else if ( i % 2 !== 0){
            if(i*2 <= b){
                ans += `${2*i} `
                i = 2*i - 1     
            }else {
                break
            }
        }
    }
    return ans
}