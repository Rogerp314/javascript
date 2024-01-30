function tabu(){
    let dado = document.getElementById('dados')
    let dados = Number(dado.value)
    let res = document.getElementById('resposta')
    let lista = document.getElementById('list')
    let item = document.createElement('option')
    if (dado.value.length==0){
        res.innerHTML='[ERROR] Preencha corretamente o formulario.'
        res.style.color='red'
    } else {
        res.style.color='black'
        let matriz =[1,2,3,4,5,6,7,8,9,10]
        for (let pos in matriz){
            lista.innerHTML=''
            let cal = dados*matriz[pos]
            item.text +=`${dados}x${matriz[pos]}= ${cal}`
            lista.appendChild(item)
        }
    }
}