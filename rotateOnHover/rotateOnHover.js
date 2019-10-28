const cards = document.querySelectorAll('.card');

cards.forEach( (card) => {
    card.addEventListener('mousemove', rotateCard);
    card.addEventListener('mouseleave', stopCardRotation);
} )

function rotateCard(e) {
    const cardItem = this.querySelector('.cardItem');
    const cardWidth = parseInt(getComputedStyle(cardItem).width)/2;
    const cardHeight = parseInt(getComputedStyle(cardItem).height)/2;
   
    cardItem.style.transform=`rotateY(${(e.offsetX - cardWidth)/10}deg) rotateX(${-(e.offsetY - cardHeight)/10}deg)`;     
}

function stopCardRotation(e) {
    
    const cardItem = this.querySelector('.cardItem');    
    cardItem.style.transform='rotate(0deg)';
}