const fn = (son) => {
    let raqam = Array.from(String(son), Number).reduce((a, b) => a + b)
    return raqam  
}
console.log(fn(prompt('sonni kirit')));


const fn2 = (...son1) => {
    let total1 = (son1).reduce((a, b) => a + b)
    let total = Array.from(String(total1), Number)
    return total
}
console.log(fn2(1, 21, 3));


const fn3 = (num2) => {
    let result = Math.pow(num2, 2)
    let num3 = +Array.from(String(num2), Number).join('')
    if (result == num3) {
        console.log('palindrome')
    }else{
        console.log('palindrome emas');
    }

}
fn3(prompt(' 2-sonni kirit'));

const fn5 = (rand) => {
    let random = parseInt(Math.random() * 50)
    console.log(`random: ${random}`);
    let total = Array.from(String(random), Number).reduce((a,b) => a + b)
    return total
}
const fn6 = (callback) => {
    callback
}
fn6(console.log(fn5()));



const fn4 = (soz) => {
    let soz2 = Array.from(soz).reverse().join('')
    if (soz == soz2) {
        console.log('palindrome')

    }else{
        console.log('palindrome emas');
    }
}
fn4(prompt('sozni kirit'))



let obj = { a: 2, b: 22 }

let value = Object.values(obj)
let total = value.reduce((a, b) => a + b)
let result = Array.from(String(total), Number).reduce((a, b) => a + b)
console.log(`totalning raqamlar yigindisi ${result}`);







