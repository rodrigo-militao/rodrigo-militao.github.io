let cards = ["cinco-de-ouros.png", "nove-de-espadas.png", "sete-de-espadas.png", "tres-de-ouros.png", "sete-de-paus.png", "seis-de-copas.png", "quatro-de-paus.png"];
const imgfolder = 'img/cards/';
const gridcartas = document.getElementById('grid-cards');


function addcard() {

    let newtd = document.createElement('td');
    document.querySelector('tr:last-child').appendChild(newtd);
    let newimg = document.createElement('img');
    
    let index = Math.floor(Math.random() * cards.length);
    newimg.src = 'img/cartas/' + cards[index];
    
    document.querySelector('tr:last-child').querySelector('td:last-child').appendChild(newimg);

}

const versecard = document.getElementById('cartaverso');


versecard.addEventListener('click', addcard);