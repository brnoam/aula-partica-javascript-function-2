//**1) Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles. **//
//** a) Chamar a função e exibir o resultado no console.**//

var mult = (valor1,valor2) => {

    let vlr = valor1 * valor2
    return vlr
}

console.log(mult(2,3))




//**2)      Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores. **//
//** a)       Chamar a função e exibir o resultado no console.**//


var maior = (valor1,valor2,valor3) =>{
    var mai = Math.max(valor1,valor2,valor3)
    return mai
    
}

console.log(maior(1,2,3))




//**3) Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido. **//
//** a) Chamar a função e exibir no console o resultado**//

var nmr = (valor) =>{

    if (valor % 2 == 0 ){
        return "Par"
    } else if (valor % 1 ==0){
        return "impar"
    }

}

console.log(nmr(7))