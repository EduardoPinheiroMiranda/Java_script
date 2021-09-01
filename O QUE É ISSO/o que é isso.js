var res = window.document.getElementById('res')
var res2 = window.document.getElementById("res2")
var img = document.createElement("img")
var resposta = document.getElementById("escolha")
var a = ''

function opção1(){
    a = "carro"
    img.setAttribute("id", "img")
            img.setAttribute('src', 'carro.jpg')
            res.appendChild(img)
}  function opção2(){
    a = "moto"
    img.setAttribute("id", "img")
            img.setAttribute('src', 'moto.jpg')
            res.appendChild(img)
}   
function opção3(){
    a = "bike"
    img.setAttribute("id", "img")
            img.setAttribute('src', 'bike.jpg')
            res.appendChild(img)
}  
function opção4(){
    a = "caminhão"
    img.setAttribute("id", "img")
            img.setAttribute('src', 'caminhão.jpg')
            res.appendChild(img)
}  

function conf() {
        if(resposta.value == a){
        res2.innerHTML = 'A resposta está correta'
        }else{
            res2.innerHTML = '<strong>Resposta errada</strong>'
            
        }                       
}
