const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 여기에 메인 로직을 작성합니다.
  console.log(solve())
});

function solve() {
  let ans  = ""
  const a = input[0]
  for(let i = 1; i <= a; i++){
    if(!(i%2)||!(i%3)) ans += ` 1`    
    else ans += ` 0`
  }
  return ans.slice(1)
}