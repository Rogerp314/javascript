let tempo = document.querySelector('#fundo')

function horas(){
    let horas = new Date()
    let hora = horas.getHours()
    tempo.innerHTML=`${hora}h`
}

function minutos(){
    let horas = new Date()
    let minutos = new Date()
    let hora = horas.getHours()
    let min = minutos.getMinutes()
    tempo.innerHTML=`${hora}h ${min}min`
}

function segundos(){
    let horas = new Date()
    let minutos = new Date()
    let segundos = new Date()
    let hora = horas.getHours()
    let min = minutos.getMinutes()
    let seg = segundos.getSeconds()
    tempo.innerHTML=`${hora}h ${min}min ${seg}s`
}