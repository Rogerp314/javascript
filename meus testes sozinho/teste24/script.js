function numeros(){
    let num1 = prompt('Escolha um numero qualquer')
    let num2 = prompt('Escolha outro numero qualquer')
    let res = document.querySelector('.resposta')
    if (num1.length==0 || num2.length==0){
        res.innerHTML=`<p>Como nao foi possivel achar os numeros, ambos sao 0</p>`
    } else {
        if (num1>num2){
            res.innerHTML=`<p>${num1} e maior que ${num2}</p>`
        } else {
            res.innerHTML=`<p>Entre ${num1} e ${num2}, o ${num2} e maior que ${num1}</p>`
        }
    }
}