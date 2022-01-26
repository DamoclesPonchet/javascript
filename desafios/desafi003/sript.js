function analise(){
    var tm = new Date()
    var a = tm.getFullYear()

    var i = document.getElementById('idade')
    var iv = Number(i.value)

    var t = document.getElementById('texto')

    var h = a - iv

    if (iv == 0 || iv > a){
        window.alert('ERRO numero digitado invalido')
    }
    else{
        var sex = document.getElementsByName('rsex')
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')    
        if (sex[0].checked){
            gênero = 'homem'
            if (h > 0 && h<17){
                img.setAttribute('src','imagens/bebehomen.png')
            }else if (h < 21){
                img.setAttribute('src','imagens/jovemhomen.png')
            }else if (h < 50){
                img.setAttribute('src','imagens/adultohomen.png')
            }else{
                img.setAttribute('src','imagens/idosohomen.png')
            }
        }else if (sex[1].checked){
            gênero = 'mulher'
            if (h > 0 && h<17){
                img.setAttribute('src','imagens/bebemulher.png')
            }else if (h < 21){
                img.setAttribute('src','imagens/jovemmulher.png')
            }else if (h < 50){
                img.setAttribute('src','imagens/adultomulher.png')
            }else{
                img.setAttribute('src','imagens/idosamulher.png')
            }
        }
        t.innerHTML = `voce é um/a ${gênero} e possui ${h} anos`
        t.style.textAlign = 'center'
        t.appendChild(img)
    }
    
    
}