let obj = {nome:'Gaby', sexo:'Feminino', idade:17, peso:50,engordar(p=0){
    this.peso+=p
}}
obj.engordar(10)
console.log(`O nome dela e ${obj.nome}, e ela tem ${obj.idade} anos, ela pesa ${obj.peso}kg. `)
obj+={fome: 'Carne'}
console.log(`Eu quero comer ${obj.fome}`)
