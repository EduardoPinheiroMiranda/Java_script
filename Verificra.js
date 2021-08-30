var ano_nasc = document.getElementById("idade")
var anoatual = new Date()
var ano_atual = anoatual.getFullYear()
var resposta = document.getElementById('res')
var sex = document.getElementsByName('sexy')


function calcular() {
    if(ano_nasc.value.length == 0 || ano_nasc.value > ano_atual){
        window.alert("[ERRO] O valor é invalido ")
    }else{
        var genero =''
        var idade = ano_atual - Number(ano_nasc.value)
        var img = document.createElement('img')
        img.setAttribute('id','img')
        if(sex[0].checked){
            genero = "Homem"
            if(idade < 11){
                img.setAttribute('src', 'homem.criança.jpg')
            }else if(idade<22){
                img.setAttribute('src','homem.adolescente.jpg')
            }else if(idade<61){
                img.setAttribute('src', 'homem.adulto.jpg')
            }else{
                img.setAttribute('src', 'homem.idoso.jpg')
            }
        }else if(sex[1].checked){
            genero = "Mulher"
            if(idade < 11){
                img.setAttribute('src', 'mulher.criança.jpg')
            }else if(idade<22){
                img.setAttribute('src','mulher.adolescente.jpg')
            }else if(idade<61){
                img.setAttribute('src', 'mulher.adulta.jpg')
            }else{
                img.setAttribute('src', 'mulher.idosa.jpg')
            }
        }
        resposta.innerHTML = `Você é ${genero}, e tem ${idade} anos de idade </br><p>`
        resposta.appendChild(img)
    }
    
}