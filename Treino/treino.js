var valor=document.getElementById("num")
var exibir=document.getElementById("sel")
var analize= document.getElementById("analise")
var banco=[]

function confirmar(){
    if(valor.value.length==0){
        alert("[ERRO] Você não digitou nenhum valor!")
    }else{
        banco.push(valor.value)
        var item=document.createElement('option')
        var aux=banco.length
            if(aux>1){
                for(var i=0;i<aux-1;i++){
                    if(banco[i]==valor.value){
                        alert("[ERRO] Você ja digitou esse valor!")
                    }else{
                        item.text=valor.value
                        exibir.appendChild(item)
                    }
                }
            }else{
                item.text=valor.value
                exibir.appendChild(item)
            }
            

        
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
            analize.innerHTML+=`O maior número é ${aux}<p>`
            aux=9999999
            for(var i=0 in banco){
                if(banco[i]<aux){
                    aux=banco[i]
                }
            }
            analize.innerHTML+=`O menor número é ${aux}<p>`
            
    }
}
