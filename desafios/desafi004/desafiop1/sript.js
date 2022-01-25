function montar(){
    var i = document.getElementById('inicio') 
    var f = document.getElementById('ultimo')
    var s = document.getElementById('saltos')
    
    var iv = Number(i.value) 
    var fv = Number(f.value)
    var sv = Number(s.value)

    var t = document.getElementById('texto')
    if  (i =="")  {
        window.alert ('ERRO não a dado na caixa de inicio.')
    }else if (f == ''){
        window.alert ('ERRO não a dado na caixa de fim.')
    }else if (s == ''&& s == 0) {
        window.alert ('ERRO não a dado na caixa de salto.')
    }    
    else{    
        while (iv <= fv){
            t.innerHTML += `${iv} &#x1F449`
            iv +=sv
        }
    }    
    t.innerHTML += `&#x1F3C1`
}