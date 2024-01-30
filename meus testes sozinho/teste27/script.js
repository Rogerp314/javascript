function manual(){
    let esc = document.querySelector('#escolha')
    let res = document.querySelector('.result')
    let imagem = document.querySelector('.imagem')
    let img = document.createElement('img')
    let horas = Number(prompt('Que horas são a onde voce esta?'))
    esc.textContent=''
    if (horas>=0 && horas<11){
        res.innerHTML=`<p>Bom Dia! Agora são ${horas}h.</p>`
        img.setAttribute('src', 'imagens/manha-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#BF9B8E'
    } else if (horas<19){
        res.innerHTML=`<p>Boa Tarde! Agora são ${horas}h.</p>`
        img.setAttribute('src', 'imagens/tarde-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#D9731A'
    } else if (horas<=23){
        res.innerHTML=`<p>Boa Noite! Agora são ${horas}h.</p>`
        img.setAttribute('src', 'imagens/noite-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#1A2B33'
    } else if (horas<0 || horas>=24){
        alert('[ERROR] Preencha os dados corretamente.')
    }
}

function auto(){
    let escolha = document.querySelector('#escolha')
    let res = document.querySelector('.result')
    let imagem = document.querySelector('.imagem')
    let img = document.createElement('img')
    let data = new Date()
    let horas = data.getHours()
    escolha.textContent=''
    if (horas>=0 && horas<11) {
        res.innerHTML=`<p>Bom Dia! Agora sao ${horas}h.</p>`
        img.setAttribute('src', 'imagens/manha-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#BF9B8E'
    } else if (horas<19){
        res.innerHTML=`<p>Boa Tarde! Agora sao ${horas}h.</p>`
        img.setAttribute('src', 'imagens/tarde-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#D9731A'
    } else if (horas<=23){
        res.innerHTML=`<p>Boa Noite! Agora sao ${horas}h.</p>`
        img.setAttribute('src', 'imagens/noite-borda.png')
        imagem.appendChild(img)
        document.body.style.background='#1A2B33'
    }
}