console.log('forEach')

const numeros = [1,2,3,4,5,6,7,8,9,10]

console.log('Logando o valor dos numeros')
numeros.forEach(valorAtual => {
    if (valorAtual % 2 == 0){
        console.log(valorAtual)
    }
});