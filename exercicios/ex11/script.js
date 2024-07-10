function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var text = document.querySelector('#num')
    var img = document.querySelector('.res')
    if (text.value.length == 0 || Number(text.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
        var sex = document.getElementsByName('sx')
        var idade = ano - Number(text.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
        gênero = 'Homem' 
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'criança-homem.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'homem.jpg')

            }  else {
                img.setAttribute('src', 'idoso.jpg')
            }
              
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'criança-mulher.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.jpg')

            } else {
                img.setAttribute('src', 'idosa.jpg')
            } 
        }
     }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Dectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
        
    }
