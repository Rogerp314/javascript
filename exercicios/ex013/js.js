function teste(){
    let vetor = [2,5,7,3,6,1]
    let dado = document.getElementById('dados')
    let res = document.getElementById('res')
    let dados = Number(dado.value)
    let chave = vetor.indexOf(dados)
    if (chave==-1 || dado.value.length==0){
        res.innerHTML='[ERROR] O velor escolhido nao existe no vetor.'
        res.style.color='red'
    } else {
        res.innerHTML=`<p>O valor escolhido ${dados} tem o indice igual a ${chave}.</p>`
        for(pos in vetor){
            res.innerHTML+=`<p>O valor ${vetor[pos]} tem o indice igual a ${pos}</p>`
        }
    }
}