//sum all the input
const num = process.argv.slice(2)
let sum =0;
num.forEach(element => {
    return sum += parseInt(element)
});
console.log("la somma dei numeri inseriti è: " + sum)


//dynamic hello
//const name = process.argv[2]
//console.log("hello " + arg)