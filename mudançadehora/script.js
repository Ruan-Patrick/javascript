function carregar() {
var img = document.createElement("img")
var msg = document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = "./manhãpronta.png"
    document.body.style.background = '#afaca7'
} else if (hora >= 12 && hora <= 18) {
    img.src = "./tardepronta.png"
    document.body.style.background = '#f55104'
} else {
    img.src = "./noitepronta.png"
    document.body.style.background = '#001c2d'
}
document.getElementById("seção").appendChild(img)
}