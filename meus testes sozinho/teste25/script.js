let valores = []
let lista = document.querySelector('#lista')
let res = document.querySelector('.resposta')
function ins(){
    let dado = document.querySelector('#dados')
    let dados= Number(dado.value)
    let item = document.createElement('option')
    if (dado.value.length==0){
        alert('[ERROR] Preencha os dados corretamente.')
        dado.focus()
    } else if (valores.indexOf(dados)!=-1){
        alert('[ERROR] Esse numero ja esta na lista.')
    } else{
        valores.push(dados)
        item.text= dados
        lista.appendChild(item)
    }
    dado.focus()
    dado.value=''
    res.innerHTML='<p>As propriedades da lista sao...</p>'
}

function result(){
    let dado = document.querySelector('#dados')
    if (valores.length==0){
        res.innerHTML='[ERROR] O dados nao exitem, insira para proseguir.'
        res.style.color='red'
        dado.value=''
        dado.focus()
    } else {
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media = soma/valores.length
            res.innerHTML='<p>As propriedades da lista sao:</p>'
            res.innerHTML+=`<p>-O primeiro numero da lista e ${valores[0]};</p>`
            res.innerHTML+=`<p>-O ultimo numero da lista e ${valores[pos]};</p>`
            res.innerHTML+=`<p>-A soma de todos os numeros da lista e ${soma};</p>`
            res.innerHTML+=`<p>-A media da lista e ${media} </p>`
        }
    }
}