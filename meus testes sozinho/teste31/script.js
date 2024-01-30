function cal(){
    let dados = document.querySelector('#vel')
    let vel = Number(dados.value)
    let res = document.querySelector('#resposta')
    res.style.color='black'
    if (dados.value.length==0 || vel<0){
        res.innerHTML='[ERROR] Digite valores validos!'
        res.style.color='red'
        dados.value=''
        dados.focus()
    } else if (vel<100){
        res.innerHTML=`Voce esta a <strong>${vel}</strong>km/h`
        res.innerHTML+='<p>Meus parabens!!!</p>'
        res.innerHTML+='<p>Pode seguir em paz</p>'
        dados.value=''
    } else {
        res.innerHTML=`Voce esta a <strong>${vel}</strong>km/h`
        res.innerHTML+=`<p>Esta multado em $${leite(vel)},00</p>`
        res.innerHTML+='<p>Pode ficar quieto ai na sua, meu parça!</p>'
        res.style.color='red'
        dados.value=''
    }
}
function leite(x){
    if (x==101){
        return 1000
    } else if(x>101){
        return x*100
    }
}