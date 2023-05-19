$(document).ready(function() {
    $('header button').click(function() { 
        $('form').slideDown(); // animação
    }) // $('header button'); -- forma de selecionar qualquer documento do html pelo jQuery

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); // animação
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // val se usa para pegar o valor do documento, diferente do js que usa value
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blanc" tittle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })

})