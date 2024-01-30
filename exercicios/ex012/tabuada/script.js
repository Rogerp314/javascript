function conta(){
    let num = document.getElementById('numero')
    let selc = document.getElementById('tabuada')
    if (num.value.length==0){
        alert('[ERROR] Digite um numero.')
    } else {
        let n = Number(num.value)
        selc.innerHTML=''
        for (let m = 1; m<=10; m++){
            let item = document.createElement('option')
            //item.value=selc ${m} //este codigo serve para ajudar na linguagem PhP
            item.text=`${n}x${m}= ${n*m}`
            selc.appendChild(item)
        }
    }

    
}