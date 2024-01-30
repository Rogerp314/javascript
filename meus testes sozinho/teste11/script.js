function confir(){
    let Email = document.getElementById('email')
    let Senha = document.getElementById('senha')
    let res = document.getElementById('resposta')
    let E = Email.value
    let S = Senha.value
    let email = 'isabelrogerio925@gmail.com'
    let senha = 'asdf123'
    if (Email.value.length==0 || Senha.value.length==0){
        res.innerHTML='[ERROR] Dados nao completados. Tente novamente'
        res.style.color='red'
    } else if (E== email && S == senha) {
        res.innerHTML='Voce passou!'
        res.style.color='black'
    } else{
        res.innerHTML='Senha ou E-mail do usuario icorretos.'
        res.style.color='red'
    }
}