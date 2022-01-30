var num = document.getElementById("numero")
var lista = document.getElementById("lista")
var caixa = document.getElementById("res")
var valores = []


function cabe(n){
    if (Number(n) >0 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlista(n,l){
    if (l.indexOf (Number(n)) != -1) { 
        return true
    }else{
        return false
    }
}
function adicionar(){
    if (cabe(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `${num.value} adicionado`
        lista.appendChild(item)
        caixa.innerHTML = ``
    }else{
        window.alert('ERRO seu valor passou do intervalo ou ele já foi escrito')
    }
    num.value = ''
    num.focus()
}
function final(){
    if (valores.length == 0){
        window.alert('ERRO não ha nenhum valor cadastrado.')
    }else{
        var tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0
        for (var i in valores){
            soma += valores[i]
            if (valores[i] >maior){
                maior = valores[i]
            }else if (valores[i] <menor) {
                menor = valores[i]
            }
        }
        media = soma / tot
        caixa.innerHTML = ``
        caixa.innerHTML += `<p>tem ${tot} números cadastrados</p>`
        caixa.innerHTML += `<p>o maior número é ${maior}</p>`
        caixa.innerHTML += `<p>o menor número é ${menor}</p>`
        caixa.innerHTML += `<p>a soma dos valores é ${soma}</p>`
        caixa.innerHTML += `<p>a media dos valore é ${media}</p>`
    }
}