var valor=document.getElementById("num")
var exibir=document.getElementById("sel")
var analize= document.getElementById("analise")
var banco=[]
function confirmar(){
    if(valor.value.length==0){
        alert("[ERRO] Você não digitou nenhum valor!")
    }else{
       
        var item=document.createElement('option')
        var aux=banco.length
        
        for(var i=0 in banco){
            if(banco[i]==banco[aux-1]){
                alert("[ERRO] Você ja digitou esse valor!!")
            }
        }
        banco.push(valor.value)
        item.text=valor.value
        exibir.appendChild(item)
    }
}

function fim(){
    if(valor.value.length==0){
        alert("[ERRO] Você não digitou nenhum valor!")
    }else{
        var aux
        aux=banco.length
        analize.innerHTML+=`Ao todo temos ${aux} valores<p>`
        aux=0
            for(var i=0 in banco){
                if(banco[i]>aux){
                    aux=banco[i]
                }
            }
            analize.innerHTML+=`O maior número é ${banco}<p>`
            aux=9999999
            for(var i=0 in banco){
                if(banco[i]<aux){
                    aux=banco[i]
                }
            }
            analize.innerHTML+=`O menor número é ${banco}<p>`
            
    }
}
