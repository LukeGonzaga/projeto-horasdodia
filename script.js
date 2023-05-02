function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  

    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    

    if (hora >= 0 && hora < 12) {
         img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#f1c474'
        boa.innerHTML = '<stong>BOM DIA</stong>'
    }
    
    else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#ac852b'
        boa.innerHTML = '<strong>BOA TARDE.</strong>'
    }
    
    else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#43334e'
        boa.innerHTML = '<strong>BOA NOITE</strong>'
    } 
}
