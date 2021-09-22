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
            //apresentando os valores no select
            banco.push(valor.value)
            var item = document.createElement('option')
            item.text=valor.value
            exibir.appendChild(item)
            analize.innerHTML=banco
                //maior, menor
                var maior=0, cont, menor=9999999
                for(var i=0;i<banco.length;i++){
                    if(banco[i]>maior){
                       cont= maior 
                       maior=banco[i]
                       banco[i]=cont
                    }
                    if(banco[i]<menor){
                        cont= menor 
                        menor=banco[i]
                        banco[i]=cont
                     }
                }
        }
}

function fim(){
    if(banco.length==0){
        alert("[ERRO] Verifique se os valores foram digitados!")
    }else{

    }
}