function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `<p>Bom Dia!</p>Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#585206'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `<p>Boa Tarde!</p> Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`
        img.src = 'fototarde.jpg'
        document.body.style.background = '#EBA05C'
    } else {
        msg.innerHTML = `<p>Boa Noite!</p> Agora são <strong>${hora}</strong> horas e <strong>${min}</strong> minutos.`
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#694161'
    }
}
