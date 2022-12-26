// const num1 = 5;
// const num2 = 5;
// const resultado = num1 + num2

// function soma(num1, num2) {
//     return num1 + num2
// }

// console.log(soma(5, 5))

//Arrow function

const soma = (numero1, numero2) => numero1 + numero2 
console.log(soma(1, 1))

const apresentacao = nome => `Olá, meu nome é ${nome}`
console.log(apresentacao('Ligia'))

const multiplica = (num1, num2) => {

    if (num1 > 0 && num2 > 0) {
        return num1 * num2
    } else {
        return 'Não se aplica'
    }
}
console.log(multiplica(2, 2))
console.log(multiplica(0, 3))