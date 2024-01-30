let valores = []
let res = document.getElementById('resposta')
function adicionar(){
    let dado = document.getElementById('dado')
    let dados = Number(dado.value)
    let lista = document.getElementById('lista')
    let item = document.createElement('option')
    res.innerHTML=''
    if (dado.value.length==0){
        alert('[ERROR] Preencha o formulario corretamente.')
    } else if(dados<1 || dados>100){
        alert('[ERROR] O numero escolhido esta fora do intervalo permitido.')
    } else if (valores.indexOf(dados) != -1){
        alert('Esse valor ja existe na lista.')
    } else {
        valores.push(dados)
        item.text=dados
        lista.appendChild(item)
    }
    dado.focus()
    dado.value=''
}
function final(){
    if (valores.length==0){
        res.innerHTML='[ERROR] A lista esta fazia, preenchea corretamente.'
        res.style.color='red'
    } else{
        let maior=valores[0]
        let menor=valores[0]
        let soma =0
        let media = 0
        for(let pos in valores){
            
            if(valores[pos]>maior){
                maior= valores[pos]
            }
            if(valores[pos]<menor){
                menor=valores[pos]
            }
            soma += valores[pos]
            media = soma/valores.length
            res.innerHTML=`<p>O numero de elementos na lista e igual a ${valores.length}</p>`
            res.innerHTML+=`<p>O primeiro numero da lista e ${valores[0]}.</p>`
            res.innerHTML+=`<p>O ultimo numero da lista e ${valores[pos]}.</p>`
            res.innerHTML+=`<p>O maior numero da lista e ${maior}.</p>`
            res.innerHTML+=`<p> O menor numero da lista e ${menor}.</p>`
            res.innerHTML+=`<p> A soma dos numeros da lista e ${soma}.</p>`
            res.innerHTML+=`<p> A media do numeros da lista e de ${media}.</p>`
            res.style.color='black'
        }
        
        
    }
}