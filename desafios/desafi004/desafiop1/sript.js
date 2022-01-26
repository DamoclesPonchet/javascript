function montar(){
    var i = document.getElementById('inicio') 
    var f = document.getElementById('ultimo')
    var s = document.getElementById('saltos')
    var t = document.getElementById('texto')
    
    if (p==0){
        window.alert('não a como dar saltos no valor de 0, lle sera considerado 1.')
        s = 1
    }else{
        if (i.value.length == 0||f.value.length == 0||s.value.length == 0){
            window.alert('ERRO algum valor não foi definido')
        }else{
            t.innerHTML = `Contando:`
            var iv = Number(i.value) 
            var fv = Number(f.value)
            var sv = Number(s.value)

            if (iv > fv){
                for (var iv ; iv >= fv; iv += sv){
                    t.innerHTML += `${iv} &#x1F449`
                }
            }else{    
                for (var iv ; iv <= fv; iv += sv){
                    t.innerHTML += `${iv} &#x1F449`
                }
            }    
                t.innerHTML += `&#x1F3C1`
        }
    }
}