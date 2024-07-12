function contar() {
    var start = document.querySelector('#num')
    var end = document.querySelector('#fnum')
    var pass = document.querySelector('#pnum')
    var txt = document.querySelector('.cont') 
    var res = Number(end.value)
    var res1 = Number(start.value)
    var res2 = Number(pass.value)

    if (res2 <= 0) {
        alert('Passo inválido! Considerando Passo 1')
        res2 = 1
    }

    if (start.value.length == 0, end.value.length == 0, pass.value.length == 0) {
       txt.innerHTML = 'Impossível contar!'
    } else {
        txt.innerHTML = '<p>Contando...</p>'
      if (res1 < res) {
        for(var c = res1; c <= res; c += res2) {
            txt.innerHTML += `${c} \u{1F449}`
        } 
           
    } 
        if (res > res1) {
        for(var c = res1; c >= res; c -= res2) {
            txt.innerHTML += `${c}`
       } 
    }  
} 
        txt.innerHTML += `\u{1F3C1}`
} 

   
     

    



 
