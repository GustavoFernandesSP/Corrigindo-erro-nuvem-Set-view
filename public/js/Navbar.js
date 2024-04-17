
function TrocarIMG(){

    var imagem =  document.getElementById('imgH');
    var cardMenu = document.getElementById('ListaHambuerguer');

    if (imagem.src.endsWith('hamburger-button.png')) {
        imagem.src = './assets/icon/Hamburguer-close.png';
        cardMenu.style.display = 'block'
        

    } else {
        imagem.src = './assets/icon/hamburger-button.png';
        cardMenu.style.display = 'none'
    }

}