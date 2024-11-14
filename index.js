const {sum} = require('./sumFunction')

console.log(sum(1,2))

//dynamic hello
const name = process.argv[2]
console.log("hello " + name)