let alerta = document.getElementById("mensagen")
let tabuleiro = document.getElementById("tabuleiro")
let jogador1 = document.getElementById("p1")
let jogador2 = document.getElementById("p2")
let jogador = document.getElementById("players")
let cor = document.querySelectorAll(".CordosBlocos")

function start() {
  if (jogador1.value.length == 0 || jogador2.value.length == 0) {
      alerta.setAttribute("style", "color:red");
      alerta.innerHTML = `<strong>Ainda está faltando o nome de jogadores</strong>`;
  } else {
      jogador.innerHTML = " ";
      jogador.setAttribute("style", "background-color:transparent");
      tabuleiro.setAttribute("style", "background-color: rgba(0,0,0,0.7)");
        
            for(let i=0;i<9;i++){
              cor[i].setAttribute('style', 'background-color:white')
            }
  }
}

function pos1(){
  
  
}