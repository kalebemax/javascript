function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('.img')
    var data = new Date()
    var hora = data.getHours()
    hora = 17
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<p>Bom Dia!</p>Agora são <strong>${hora}</strong> horas.`
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `<p>Boa Tarde!</p> Agora são <strong>${hora}</strong> horas.`
    } else (hora >= 19) 
        msg.innerHTML = `<p>Boa Noite!</p> Agora são <strong>${hora}</strong> horas.`
        
}
