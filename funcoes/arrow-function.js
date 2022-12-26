function apresentar(nome){
    return `meu nome é ${nome}`
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

// Arrow function com + de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'somente números de 1 a 9'
    } else {
        return num1 + num2
    }
}

console.log(apresentar('Maria'))
console.log(apresentarArrow('Caio'))
console.log(soma(2, 3))
console.log(somaNumerosPequenos(2, 2))
