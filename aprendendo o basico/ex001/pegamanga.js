const header = document.getElementById('cabecalho');

const fruta = 'manga';

const imageHeader = document.createElement('img');
imageHeader.setAttribute('id','itanhaem');
if(fruta === 'manga'){
    imageHeader.src = 'imagens/manga.jpg';
}
else if(fruta === 'abacaxi'){
imageHeader.src = 'imagens/abacaxi.jpg';
}
else{
    header.style.backgroundColor = 'black';
}
imageHeader.alt = 'varias mangas';
imageHeader.style.width = '500px';

header.appendChild(imageHeader);

const p = document.createElement ('p');
p.setAttribute('id','jamais');
p.innerText = 'eae pega manga muleke doido';
header.appendChild(p);

const h1 = document.createElement ('h1');
h1.setAttribute('id','estefany');
h1.style.padding = '20px';
h1.innerText = 'o talento dos muleke da minha quebrada';
header.appendChild(h1);

h1.addEventListener('click', () =>{
    h1.style.backgroundColor = 'black';
    h1.style.color = 'white';
});/* a parte */

