function clique(){
    let nome = prompt('Qual o seu nome?')
    let res = document.getElementById('resposta')
    if (nome.length==0 || Number(nome)){
        alert('[ERROR] Preencha os dados corretamente.')
    } else {
        res.innerHTML=`<p>Ola <strong>${nome}</strong>, e bom te conhecer 🖖</p>`
    }
}