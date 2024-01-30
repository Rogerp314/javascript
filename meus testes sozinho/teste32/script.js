function picas(){
    let nome = document.querySelector('#nome')
    let nom = nome.value
    let ida = document.querySelector("#idade")
    let idade = Number(ida.value)
    let res = document.querySelector('#resposta')
    let date = new Date()
    let ano = date.getFullYear()
    let nasci = ano - idade
    res.style.color='black'
    if (nome.value.length==0 || ida.value.length==0 || idade<0){
        res.innerHTML=`[ERROR] Preencha os dados corretamente!`
        res.style.color='red'
    } else {
        res.innerHTML=`Ola!`
        res.innerHTML+=`<p>Seu nome e <strong>${nom}</strong>, tem <strong>${idade}</strong> anos e por tanto nasceu em <strong>${nasci}</strong>!</p>`
    }
}