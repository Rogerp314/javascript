function conta(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let res = document.querySelector('#resposta')
    if (dado.value.length==0 || dados<0){
        res.innerHTML='[ERROR] Digite um numero valido.'
        res.style.color='red'
    } else{
        res.innerHTML=`O fatorial do numero ${dados} e igual a ${fatorial(dados)}!`
        res.style.color='black'
    }
}

function fatorial(x){
    if(x==0){
        return 1
    } else{
        return x* (fatorial(x-1))
    }
}