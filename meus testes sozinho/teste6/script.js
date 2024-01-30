function load(){
    let boa = document.getElementById('boa')
    let msg = document.getElementById('mensagem')
    let data = new Date()
    let horas = data.getHours()
    let img = document.getElementById('img')
    if (horas>=0 && horas<6){
        img.src='fotomadrugada.png'
        boa.innerHTML= 'Boa Madrugas!'
        msg.innerHTML=`Agora sao ${horas}h`
        document.body.style.background='#632D38'
    } else if (horas<12){
        img.src='fotomanha.png'
        boa.innerHTML='Bom Dia!'
        msg.innerHTML=`Agora sao ${horas}h`
        document.body.style.background='#F2BA52'
    } else if (horas<18){
        img.src='fototarde.png'
        boa.innerHTML='Boa Tarde!'
        msg.innerHTML=`Agora sao ${horas}h`
        document.body.style.background='#F25D07'
    } else {
        img.src='fotonoite.png'
        boa.innerHTML='Boa Noite'
        msg.innerHTML=`Agora sao ${horas}h`
        document.body.style.background='#033473'
    }
}
function clique(){
    let manual = document.getElementById('manual')
    let valor = document.createElement('input')
    let res=document.getElementById('res')
    res.appendChild(input)
}