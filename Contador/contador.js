var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var res = document.getElementById('res')
var ffim = Number(fim)
var iinicio = Number(inicio)
var num = new Array(ffim)

    








function conf(){
    for(var i=iinicio ;i<ffim;i++){
        num[i]=i+1
        res.innerHTML = `${num[i]}, ` 
    }
}

