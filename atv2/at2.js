
//** 1)      Criar uma função anônima que recebe duas notas de um aluno do ensino médio:

//**a) Calcular a média do aluno. **//
//**b) Se a média for maior ou igual a 7, retornar "Aprovado!"; **//
//**c) Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";**//
//** d) Se a média for menor que 5, retornar "Reprovado!".**//
//** e) Chamar a função e exibir no console o resultad**//**//


var medias = function(nota1,nota2) {

var soma = (nota1 + nota2) /2

 if (soma >=7 ){
     return "Aprovado!"
 } else if (soma >= 5 && soma < 7){
     return "Recuperação!"
 } else if (soma <5){
     return "Reprovado!"
 }



}

console.log(medias (7,7))



//**2) Criar uma função anônima que calcula a tabuada de 3. **//
//**a) Chamar a função e exibir no console o resultado. **//

var tabuada = function (){

    var valor = 3

    for (let i=0; i <=10; i++){
        console.log((`${valor} x ${i} = ${valor * i} `))
    }
} 

console.log(tabuada())





//** 3) Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.**//
//** a) Chamar a função e exibir no console o resultado. **//


var nascimneto = (ano) => {
    
    if (ano < 2003){
        return "Você é de Menor!"
    } else if (ano >= 2003){
        return "Você é de maior!"
    }
}

console.log(nascimneto(2000))