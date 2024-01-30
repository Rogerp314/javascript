function horario(){
    let hora = document.getElementById('horas')
    let horas = Number(hora.value)
    let fotos = document.getElementById('foto')
    let res = document.getElementById('resposta')
    if (hora.value.length==0 || horas>23){
        alert('[ERROR] Preencha os dados corretamente.')
        hora.value=''
        hora.focus()
    } else if (horas>= 0 && horas<=12){
        res.innerHTML=`<p>Agora sao ${horas}h na sua cidade.<br>Bom Dia!</p>`
        fotos.src='manha-borda.png'
        document.body.style.background='#FDBE2E'
    } else if (horas>12 && horas<=18){
        res.innerHTML=`Agora sao ${horas}h na sua cidade.<br>Boa Tarde!</p>`
        fotos.src='tarde-borda.png'
        document.body.style.background='#ACBECC'
    } else {
        res.innerHTML=`<p>Agora sao ${horas}h na sua cidade <br>Boa Noite!</p>`
        fotos.src='noite-borda.png'
        document.body.style.background='#061126'
    }
}
function ok(){
    alert('OK!')
}