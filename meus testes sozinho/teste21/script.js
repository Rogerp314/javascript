function contar(){
    let dado = document.querySelector('#dados')
    let dados = Number(dado.value)
    let res = document.querySelector('.resposta')
    res.innerHTML=''
    res.style.color='black'
    if(dado.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente.'
        res.style.color='red'
    } else if (dados==0){
        res.innerHTML=`O valor do fatorial de 0 por definiçao e 1.`
    } else if (dados==1){
        res.innerHTML=`<p>O fatorial de ${dados} e:`
        res.innerHTML+=`<p>${fatorial(dados)}`
    } else{
        res.innerHTML=`<p>O fatorial de ${dados} e igual a:</p>`
        for (let num = dados; num>=2; num--){
            res.innerHTML+=`${num}x`
        }
        res.innerHTML+=`x1=${fatorial(dados)}`
    }
}

function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n* (fatorial(n-1))
    }
}
console.log(`${fatorial(5)}`)