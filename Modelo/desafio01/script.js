function carregar() {
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.`}
if (hora >= 0 && hora <12) {
    Img.src = 'imagens/manhã pronta.png'
} else if (hora >=12 && hora <18) {

} else {
    img.src = 'imagens/noite pronta.png'
}