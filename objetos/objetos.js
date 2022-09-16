let amigo = {nome:'josé' ,
Sexo:'M' ,
peso:85.4 ,
engordar(p=0) {
    console.log('engordar')
    this.peso +=p
}}
amigo.engordar(2)
//for (amigo.peso=85.4; amigo.peso<=90; amigo.peso++)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)