function sexto(){
    let ano = prompt('Qual ano voce deseja verificar?')
    let res = document.getElementById('resultado')
    let num = ano /4
    let int = Number.isInteger(num)
    if (ano.valueOf().length==0){
        res.innerHTML='[ERROR] Preencha corretamente os dados'
        res.style.color='red'
    } else {
        if (int){
            res.innerHTML=`O ano ${ano} e <strong style='color:green;'> Bissexto</strong>.`
            res.style.color='black'
        } else {
            res.innerHTML=`O ano ${ano} <strong style='color:red;'>nao e Bissexto</strong>.`
            res.style.color='black'
        }
    }
}