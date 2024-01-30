function clicar(){
    let vel = document.getElementById('velocidade')
    let res = document.getElementById('resposta')
    let v = Number(vel.value)
    res.innerHTML = `<p>A velocidade do seu carro e de ${v}km/h;</p> <br>`
    res.innerHTML += '<p>Use sempre cinto de segurança</p><br>'
    if (v>100){
        res.innerHTML+=`<p>Voce ultrapassou a velocidade limite, sera MULTADO!</p>`
    }
}