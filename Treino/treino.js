var valor=document.getElementById("num")
var exibir=document.getElementById("sel")
var analize= document.getElementById("analise")
var banco=[]

function tem_numero(n){
    if(n.length==0){
        return true
    }else{
        return false
    }
}
function  tem_lista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
function confirmar(){
      
    if(tem_numero(valor.value) || tem_lista(valor.value, banco)){
            alert("[ERRO] Verifique se você digitou um valor, ou se o valor digitado está sendo repetido! ")
        }else{
            banco.push(valor.value)
            var item = document.createElement('option')
            item.text=valor.value
            exibir.appendChild(item)
            analize.innerHTML=banco
        }
}
