function cal(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let res = document.querySelector('#resposta')
    res.style.color='black'
    if (dado.value.length==0){
        res.innerHTML='<p>[ERROR] Preencha os dados corretamente.</p>'
        res.style.color='#D92525'
        dado.focus()
    } else if (dados==0){
        res.innerHTML=`<p>O valor de 0! e igual a ${fatorial(dados)}.</p>`
    } else if (dados<0){
        res.innerHTML='<p>[ERROR] Nao existe fatorial de numero negativo ou com virgula, tente um numero inteiro e positivo.</p>'
        res.style.color='#d92525'
        dado.value=''
        dado.focus()
    } else {
        res.innerHTML=`<p>O fatorial do numero ${dados} vale: <br> ${amostra(dados)} = ${fatorial(dados)}.</p>`
        dado.focus()
        dado.value=''
    }
}

function fatorial(x){
    if (x==0){
        return 1
    } else {
        return x* (fatorial(x-1))
    }
}

function amostra(n){
    if (n!=1){
        return `${n}x${amostra(n-1)}`
    } else {
        return '1'
    }
}