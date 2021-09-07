var jogador1 = document.getElementById("play1")
var jogador2 = document.getElementById("play2")
var men = document.getElementById("velha")
var res1 = document.getElementById("prim")
var res2 = document.getElementById("segu")
var res3 = document.getElementById("terc")
var res4 = document.getElementById("quar")
var res5 = document.getElementById("quin")
var res6 = document.getElementById("sest")
var res7 = document.getElementById("sete")
var res8 = document.getElementById("oito")
var res9 = document.getElementById("nono")
var jogadas = new Array(9)

//window.alert("O jogador 1 sera o primeiro, os quadrados preenchidos de vermelho serão dele. Em seguida será a vez do jogador 2, ele ficar com o azul")
for(var i=0;i<9;i++){
    if(i%2==0){
        function start(){
            if(jogador1.value.length ==0||jogador2.value.length==" 0"){
                alert("[ERRO] Falta jogadores")
            }else{
                window.alert(`${jogador1.value} e ${jogador2.value} se preparem (°__°)`)
            }
        }
        function prim(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[0]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res1.style.background = "red"
                    jogadas[0]='red'
                }
            }
        }
        function segu(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[1]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res2.style.background = "red"
                    jogadas[1]='red'
                }
            }
        }
        function terc(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[2]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res3.style.background = "red"
                    jogadas[2]='red'
                }
            }
        }
        function quar(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[3]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res4.style.background = "red"
                    jogadas[3]='red'
                }
            }
        }
        function quin(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[4]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res5.style.background = "red"
                    jogadas[4]='red'
                }
            }
        }
        function sest(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[5]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res6.style.background = "red"
                    jogadas[5]='red'
                }
            }
        }
        function seti(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[6]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res7.style.background = "red"
                    jogadas[6]='red'
                }
            }
        }
        function oita(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[7]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res8.style.background = "red"
                    jogadas[7]='red'
                }
            }
        }
        function nono(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[8]=='blue'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res9.style.background = "red"
                    jogadas[8]='red'
                }
            }
        }
    }
    if(i%2!=0){
        function prim(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[0]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res1.style.background = "blue"
                    jogadas[0]='blue'
                }
            }
        }
        function segu(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[1]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res2.style.background = "bleu"
                    jogadas[1]='blue'
                }
            }
        }
        function terc(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[2]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res3.style.background = "blue"
                    jogadas[2]='blue'
                }
            }
        }
        function quar(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[3]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res4.style.background = "blue"
                    jogadas[3]='blue'
                }
            }
        }
        function quin(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[4]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res5.style.background = "blue"
                    jogadas[4]='blue'
                }
            }
        }
        function sest(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[5]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res6.style.background = "blue"
                    jogadas[5]='blue'
                }
            }
        }
        function seti(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[6]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res7.style.background = "blue"
                    jogadas[6]='blue'
                }
            }
        }
        function oita(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[7]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res8.style.background = "blue"
                    jogadas[7]='blue'
                }
            }
        }
        function nono(){
            if(jogador1.value.length == 0 || jogador2.value.length == 0){
                alert("[ERRO] Diga quem são os jogadores")
            }else{
                if(jogadas[8]=='red'){//compara o quadrado para saber se já foi marcado
                    window.alert("Aqui já foi marcado pelo adversario")
                }else{
                    res9.style.background = "blue"
                    jogadas[8]='blue'
                }
            }
        }
    }
}
