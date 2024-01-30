let V = Number(prompt('Qual e a velocidade do seu carro?'))
document.write(`A velocidade do seu carro e de ${V}km/h <br>`)
if (V>80){
    document.write(`Voce ultrapassou a velocidade limite da pista, sera MULTADO! <br>`)
} else{
    document.write('Voce respeitou o limite de 80km/h, meus parabens! <br>')
}
document.write('Sempre dirija usando cinto de segurança.')