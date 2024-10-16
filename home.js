// Script para interações futuras (galeria, busca, etc.)
document.addEventListener('DOMContentLoaded', function() {
    console.log("Plataforma carregada com sucesso!");
});


document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-bar').value;
    if (searchTerm) {
        alert('Você pesquisou por: ' + searchTerm);
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
});




document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('#epicGamesCarousel');
    var carouselItems = document.querySelectorAll('.carousel-item');
    var gameCards = document.querySelectorAll('.game-image');

    function updateActiveCard() {
        var activeIndex = Array.from(carouselItems).findIndex(item => item.classList.contains('active'));
        
        gameCards.forEach((card, index) => {
            if (index === activeIndex) {
                card.classList.add('active-game'); // Adiciona preto e branco na imagem ativa
            } else {
                card.classList.remove('active-game'); // As outras imagens ficam coloridas
            }
        });
    }

    // Atualizar o card ativo ao mudar o slide no carrossel
    carousel.addEventListener('slid.bs.carousel', updateActiveCard);

    // Atualizar o card ativo ao carregar a página
    updateActiveCard();
});





