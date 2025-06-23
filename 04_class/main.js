// let prompt = require('async-prompt')



// process.stdout.write('Hello ')
// process.stdout.write('World')  //?  it is node environment process not run in a brower
//? for printing a rectangle pattern
// n = 5
// for (let i = 0; i <= n ; i++){
//     for(let j = 0; j <= n; j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }
n = 100
//? print like A, AB, ABC, ABCD
for(let i = 1; i<= n; i++){
    let assci = 65
    for(j = 1; j<= i; j++){
        process.stdout.write(String.fromCharCode(assci)+'')
        assci++
    }
    console.log()
}
