function verificar(){
    let nome = document.querySelector('#nome')
    let res = document.querySelector('#resposta')
    res.style.color='black'
    if (nome.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente!'
        res.style.color='red'
        nome.focus()
    } else{
        res.innerHTML=`${verifique(nome)}`
    }
}

function verifique(x){
    let acesso = {Nome: 'Gaby', Usuario: 'Bruno'}
    if(x.value == acesso.Nome || x.value==acesso.Usuario){
        return 'Acesso livre!'
    } else{
        return 'Acesso Negado'
    }
}