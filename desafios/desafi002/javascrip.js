var t = new Date()
var h = t.getHours()
var m = document.getElementById('msg')
var tem = document.getElementById('tempo')
var img = document.getElementById('imagem')
tem.innerHTML = `são ${h} horas`
if (h <= 12){
        img.src = 'imagens/manhacirculo.png'
        m.innerHTML = `<h2>Bom dia</h2>`

}
else if (h > 12 && h<=18){
        document.body.style.backgroundColor = '#b9846f'
        img.src = 'imagens/tardecirculo.png'
        m.innerHTML = `<h2>Boa tarde</h2>`
}
else{
        document.body.style.backgroundColor = '#515154'
        img.src = 'imagens/noitecirculo.png'
        m.innerHTML = `<h2>Boa noite</h2>`
}