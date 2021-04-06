// 1)Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos
let textFuture = document.getElementsByTagName('p')

for(let index = 0; index < textFuture.length; index += 1) {
 textFuture[index].innerText ="daqui há dois anos, espero estar conquistando meus objetivos,traçando novas metas metas";
}

// 2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe
document.getElementsByClassName('main-content')[0].style.backgroundColor="rgb(76,164,109)"


// 3 Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName('center-content')[0].style.backgroundColor="white"

// 4 Crie uma função que corrija o texto da tag <h1>.

let textTitle = document.getElementsByTagName('h1')

for(let index = 0; index < textTitle.length; index += 1) {
 textTitle[index].innerText=" Meu futuro brilhante"
}

// 5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let textSize = document.getElementsByTagName('p')

for(let index = 0; index < textSize.length; index += 1) {
    textSize[index].innerText = textSize[index].innerText.toUpperCase()
}



// 6 Crie uma função que exiba o conteúdo de todas as tags <p> no console. -->


for(let index = 0; index < textSize.length; index += 1) {
    console.log(textSize[index].innerText)
}