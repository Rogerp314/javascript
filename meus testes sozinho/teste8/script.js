function fatia(){
    let fat = document.querySelector('#fatia')
    let res = document.querySelector('.res')
    res.innerHTML=(`<p>Temos ${fat.value} fatias de pizza</p>`)
}
function Comer(){
    let fat = document.getElementById('fatia')
    let fan = Number(fat.value)
    /*while (fan>=2){
        fan--
        alert(`Agora temos ${fan} fatias`)
        if (fan>=0){
            alert('Cabo pizza porra!')
        }
    }*/
    for (let fa = fan; fa>=2; fa--){
        alert(`Agora temos ${fa} fatias!`)
        if (fa==0){
            alert('CABO!')
        }
    }
}