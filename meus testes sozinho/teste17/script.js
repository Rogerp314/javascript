let valores = []
let res = document.getElementById('resposta')
function adi(){
    let dado = document.getElementById('dados')
    let dados = Number(dado.value)
    let lista= document.getElementById('lista')
    let item = document.createElement('option')
    if (dado.value.length==0){
        alert('[ERROR] Preencha os dados corretamente.')
        dado.focus()
    } else if (dados<1 || dados>100){
        alert('[ERROR] Numero fora do intervalo permitido')
        dado.focus()
        dado.value=''
    } else if (valores.indexOf(dados)!=-1){
        alert('[ERROR] Esse valor ja esta na lista, tente outro.')
        dado.value=''
        dado.focus()
    } else {
        item.text= dados
        lista.appendChild(item)
        valores.push(dados)
        dado.value=''
        dado.focus()
    }
    res.innerHTML=''
}
function final(){
    if (valores.length==0){
        res.innerHTML='[ERROR] Os valores da lista estao vazios.'
        res.style.color='red'
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma =0
        let media = 0
     for (let pos in valores){
        soma += valores[pos]
        media = soma/valores.length
        if (valores[pos]> maior){
            maior=valores[pos]
        }
        if (valores[pos]< menor){
            menor=valores[pos]
        }
        res.innerHTML=`<p>A quantidade de numeros na lista e de ${valores.length}.</p>`
        res.innerHTML+=`<p>O primeiro numero da lista e ${valores[0]}.</p>`
        res.innerHTML+= `<p>O ultimo numero da lista e ${valores[pos]} </p>`
        res.innerHTML+= `<p>O maior numeros da lista e ${maior}.</p>`
        res.innerHTML+=`<p>O menor numeros da lista e ${menor}</p>`
        res.innerHTML+=`<p>A soma de todos os numeros da lista e ${soma}.</p>`
        res.innerHTML+=`<p>A media de todos os valores da lista e igual A ${media}.</p>`
        res.style.color='black'
        }
    }
}