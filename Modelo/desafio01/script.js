function carregar() {
var data = new Date()
var hora = data.getHours()
var msg = document.getElementById('msg')
var img = document.createElement('img')
msg.innerHTML = `agora são ${hora} horas.`
img.setAttribute('id', 'foto')
if (hora>=0 && hora<12) {
    img.setAttribute('src', 'manhãpronta.png')
    document.body.style.background = '#d7e4f2'
} else if (hora>=12 && hora<=18) {
    img.setAttribute('src', 'tardepronta.png')
    img.style.textAlign = 'center'
    document.body.style.background = '#d48506'
} else {
    img.setAttribute('src', 'noitepronta.png')
    document.body.style.background = '#021f55'
}
res.appendChild(img)
}