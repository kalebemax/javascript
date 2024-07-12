function contar() {
    var start = document.querySelector('#num')
    var end = document.querySelector('#fnum')
    var pass = document.querySelector('#pnum')
    var txt = document.querySelector('.cont')
    var res = Number(start.value) 
    var res1 = Number(end.value)
    
    for(start.value;start >= 0;start++) {
        txt.innerHTML = `${res}`
    }

    for(end.value;end > 0;end++) {
        txt.innerHTML = `${res1}`
    }

    if (start.value == 0) {
        alert('[Erro] Insira um valor inicial!')
    }
} 
 
