// parâmetros de funcao

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(3, 3))
console.log(soma(-500, 60))
console.log(soma(920, 24))

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(40, 'Ligia'))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5)))