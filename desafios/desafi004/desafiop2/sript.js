function tabuada(){
    var n = document.getElementById ('base')
    var nv = Number(n.value)
    var p = 1
    var t = document.getElementById('texto')
    var v = p *nv
    for(var p ;p < 11 ; p++ ){
        var v = p *nv
        var cax = document.createElement('div')
        cax.innerHTML += `${nv} x ${p} = ${v}<br>`
    }
    cax.innerHTML += `----------------- <br>`
    body.appendChild(cax)
}