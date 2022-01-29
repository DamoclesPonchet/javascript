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

        res
    }
}