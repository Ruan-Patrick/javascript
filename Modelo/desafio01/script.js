function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById ('imagem')
var data = new date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.`}
if (hora >= 0 && hora < 12) {
    //Bom dia

} else if (hora >=12 && hora <18) {
//Boa tarde
} else {
   //boa noite
}