let num = [5,8,2,9,3]
num.push(1) /*se colocado antes do sort, ele vai colocar o 1 depois ordenar */
num.sort() /*ordernar os vetores */
console.log(`O vetor tem ${num.length} posições`) /*tamanho do vetor */
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos ==-1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`o valor está na posição ${pos}`)}

/*for (let pos=0;pos<num.length;pos++ ) {
console.log(num[pos])
}*/
