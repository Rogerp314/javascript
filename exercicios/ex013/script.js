/*
let sig = ['Eu te amo','Gaby <3']

console.log(`Meu primeiro vetor: ${sig}`)*/
/*let sig = [4,3,7,6,2,8]
console.log(`Temos aqui o vetor original ${sig}`)
sig[0]= 69
sig[1]=666
console.log(`Agora temos o mesmo vetor com um elemento acrescentado ${sig}`)
sig.push(88)
console.log(`O vetor com um elemento atribuido no final ${sig}`)
console.log(`Aqui temos o comprimento do vetor sendo ${sig.length} elementos`)
console.log(`Aqui temos um elemento isolado de indice 1; ${sig[1]}`)
sig.sort()
console.log(`Aqui temos o vetor em ordem crescente ${sig}`)
//Essa e a maneira tradicional de se fazer isso, existe outra
let com = [2,4,5,7,8,10]
console.log(`Em seguida temos todos os elementos de um vetor de ${com.length} elementos, para mostrar todos os elementos sem precisar montar uma linha de codigo para cada um, eu faz uma estrutura de repetiçao o for:`)
for (let pos = 0; pos<=com.length; pos++){
    console.log(`${com[pos]}`)
} */
/*let vetor = [1,5,7,8,0,3]
for(let pos in vetor){
   // console.log(`A posiçao do elemento ${vetor[pos]} e ${pos}`)
    vetor.indexOf(10)
    if (pos == -1){
        console.log(`O indice escolhido nao existe no vetor`)
    } else {
        console.log(`O indice do valor 0 e ${vetor.indexOf(pos)}`)
    }
} */
/*
let veto = [2,5,7,9]

let vet = veto.indexOf(5)
if (vet==-1){
    console.log('O elemento escolhido nao existe no vetor')
} else {
    console.log(`O elemento escolhido esta na posiçao ${vet}`)
} */

let num = [2,5,6,3,9]
console.log(num)
num.sort()
console.log(num)
num.push(69)
console.log(num)
console.log(num.length)
for(pos in num){
    console.log(`Temos o valor ${num[pos]} temos os indices ${pos}`)
}