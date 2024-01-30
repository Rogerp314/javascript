function Contar(){
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let passo = document.getElementById('contagem')
    let res = document.getElementById('resposta')
    if (inicio.value.length==0 || final.value.length==0 || passo.value.length==0 ) {
        res.innerHTML='[ERROR] Preencha os dados corretamente'
        res.style.color='red'
    }else {
        let ini = Number(inicio.value)
        let fim = Number(final.value)
        let pass = Number(passo.value)
        res.innerHTML='Contando: <br>'
        res.style.color='black'
        if (fim>ini){
            for (let conta = ini; conta<=fim; conta+=pass) {
                res.innerHTML += `${conta} &#x1F449`
            }
        } else if (fim<ini) {
            for(let conta = ini; conta>=fim; conta-=pass){
                res.innerHTML+= `${conta} &#x1F449`
            }
        } 
        res.innerHTML+='penes'
    }
}