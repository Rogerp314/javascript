function carregar(){
    let img = document.getElementById('imagem')
    let mensa = document.getElementById('hora')
    let data = new Date()
    //let horas = data.getHours()
    let horas = 22
    mensa.innerHTML= `Agora sao ${horas}h`
    if (horas>= 0 && horas <12) {
        img.src='manha-borda.png'
        document.body.style.background='#F2911B'
        
    } else if (horas>=12 && horas < 18){
        img.src='tarde-borda.png'
        document.body.style.background='#93ABBF'
    } else {
        img.src='noite-borda.png'
        document.body.style.background='#061126'
    }
}