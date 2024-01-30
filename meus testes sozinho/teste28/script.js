function certo(){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let idades = Number(idade.value)
    let sala = document.querySelector('#sal')
    let sal = Number(sala.value)
    let sexo = document.getElementsByName('sexo')
    let dados = document.querySelector('#dados')
    let res = document.querySelector('.result')
    if (nome.value.length==0 || idade.value.length==0 || sala.value.length==0){
        alert('[ERROR] Preencha os dados corretamente')
        nome.value=''
        idade.value=''
        sala.value=''
        nome.focus()
    } else {
        let genero =''
        dados.textContent=''
        if (sexo[0].checked){
            genero = 'masculino'
            res.innerHTML=`<p>Bem vindo(a) ${nome}, voce tem ${idades} anos e é do sexo ${genero}, ganha R$${sal}.</p>`
        }
    }
}