let botao = document.querySelector('#botao')

function clique(){
    botao.textContent='Clicou!'
    botao.style.backgroundColor='red'
    botao.style.color='black'
}

function enter(){
    botao.textContent='Entrou!'
    botao.style.backgroundColor='green'
    botao.style.color='white'
}

function sair(){
    botao.textContent='Saiu!'
    botao.style.backgroundColor='black'
    botao.style.color='white'
}

function duplo(){
    botao.textContent='Duplo Click!'
    botao.style.backgroundColor='yellow'
    botao.style.color='red'
}