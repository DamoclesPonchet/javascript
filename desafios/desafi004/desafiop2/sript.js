function tabuada(){
    var n = document.getElementById ('base')
    if (n.value.length == 0 ){
        window.alert  ('ERRO a base não foi definida, escreva algum valor no campo abixo.')
    }else{
        var nv = Number(n.value)
        var p = 1
        var t = document.getElementById('texto')
        t.innerHTML = ''
        for(var p ;p < 11 ; p++ ){
            var l = document.createElement('option')
            var v = p *nv
            l.text += `${nv} x ${p} = ${nv*p}`
            l.value = `tab${p}`
            t.appendChild(l)
        }
    }
}