function parimp(n){
    if (n%2==0){
        return 'par!'
    } else {
        return 'impar!'
    }
} let re = parimp(dados)


function botao(){
    let dado = document.getElementById('botao')
    let dados = Number(dado.value)
    let res = document.getElementById('resposta')
    res.innerHTML=`O numero ${dados} e ${re}`
}
