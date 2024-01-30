function verifica(){
    let data = new Date()
    let ano = data.getFullYear()
    let forano = document.getElementById('texidade')
    let res = document.getElementById('resposta')
    let img= document.createElement('img')
    img.setAttribute('id', 'foto')
    if(forano.value == 0 || forano.value >ano){
       alert('Verifique os dados colocados')
    } else {
        let sex = document.getElementsByName('sexo')
        let idade = ano - Number(forano.value)
        let genero= ''
        if (sex[0].checked){
            genero='Voce e um homem'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'homem-criança.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if (sex[1].checked){
            genero='Voce e uma mulher'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'mulher-criança.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade<50){
                //adulto
                img.setAttribute('src', 'mulher-adulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'mulher-idoso.png')
            }

        }
        res.innerHTML=`${genero} de ${idade} anos`
        res.appendChild(img)
    }
}
//Para criar uma tag em geral dinamicamente usa-se o comando 'let (nome da variavel)=document.createElement(nome da tag) ' alem de para dar um id ou class para a tag e assim: (nome da tag).setAttribute('class ou id', '(nome da id ou class)')entre aspas simples
//Para linkar um objeto no HTML com o 'name' deve-se usar o ".getElementByName"
//Para adicionar um elemento em alguma variavel usa-se o comando '.appendChild(nome do que eu quero adicionar)