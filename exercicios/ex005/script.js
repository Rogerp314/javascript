function clicar() {
    let v = document.getElementById ('volume')
    v.innerText = 'Clicou!'
}
function entrar(){
    let v = document.getElementById('volume')
    v.innerText = 'Entrou'
}
function sair() {
    let v = document.getElementById('volume')
    v.innerText = 'Saiu'
}

let a = document.getElementById ('area')
a.addEventListener ('click' , clique)
a.addEventListener ('mouseenter', entrou)
a.addEventListener ('mouseout' , saiu)

function clique(){
    a.innerText = 'Clicou!'
    a.style.background= 'red'
}
function entrou(){
    a.innerText = 'Entrou!'
    a.style.background= 'green'
}
function saiu(){
    a.innerText = 'Saiu!'
    a.style.background='pink'
    a.style.color='black'
}