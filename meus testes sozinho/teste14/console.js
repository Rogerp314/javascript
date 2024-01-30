let obj = {peso: 50, engordar(p){
    this.peso += p
    console.log(`Engordou ${p} kg`)
}}
obj.engordar(10)
console.log(`Ele tem o peso igual a ${obj.peso}kg`)