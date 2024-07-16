let valores = []

function inLista(n, l) {
    return l.indexOf(n) != -1
}

function add() {
    var numb = document.querySelector('#num')
    var adn = document.querySelector('#adn')
    var value = Number(numb.value)
    
    if(numb.value.length == 0 || numb.value > 100 || numb.value < 1) {
        alert('Por favor, digite um valor entre 1 e 100!')
    } else if (inLista(value, valores)) {
        alert('Esse número já foi adicionado!')
    } else {
        valores.push(value)
        var option = document.createElement('option')
        option.innerHTML = `Valor ${value} adicionado`
        adn.add(option)
       
    } 

    numb.value = ''
} 

function final() {
    var txt = document.querySelector('.text')
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    for(var pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior) 
           maior = valores[pos] 
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot
    txt.innerHTML = ''
    txt.innerHTML += `No total, foram adicionados ${valores.length} 
    valores.`
    txt.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    txt.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    txt.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    txt.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
}
    