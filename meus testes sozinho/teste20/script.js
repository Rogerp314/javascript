function botton(){
    let name = document.querySelector('#nome')
    let sen = document.querySelector('#senha')
    let res = document.querySelector('.resposta')
    let nome = name.value
    let senha = sen.value
    if (name.value.length==0 || sen.value.length==0){
        res.innerHTML='[ERROR] Preencha os dados corretamente.'
        res.style.color='red'

    } else if(senha !='asdf1238' || nome!='Pedro') {
        res.innerHTML='[ERROR] Senha ou usuario incorretos, tente novamente.'
        res.style.color='red'
    } else {
        res.innerHTML=`O nome ${nome} e a senha estao corretos, pode passar.`
        res.style.color='black'
    }
}