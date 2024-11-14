const num = process.argv.slice(2)
let sum =0;
num.forEach(element => {
    return sum += parseInt(element)
});
console.log("la somma dei numeri inseriti è: " + sum)
