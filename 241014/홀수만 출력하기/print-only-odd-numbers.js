const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function sol(input) {
    // 첫 번째 줄(N)은 무시하고 두 번째 줄의 숫자들만 처리
    input.splice(0,1)    
    let arr = input.map(x => Number(x))
    arr.map(x => {
        if((x % 2 !== 0) && (x % 3 === 0)){
            console.log(x)
        }
    })
}

sol(input);