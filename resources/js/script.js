$(document).ready(function() {

  // Menu Responsivo (Hambúrguer)
  $('.js--mobile-nav-icon').on('click', function() {
    var nav = $('.js--main-nav');
    nav.stop(true, true).slideToggle(200); // Melhor performance com stop()
  });

  // Vitrine de Produtos - Animação no Hover
  $('.produto').hover(
    function() {
      $(this).find('img').css('transform', 'scale(1.1)');  // Aumenta a imagem
      $(this).find('h3').css('color', '#F1C40F');  // Muda a cor do nome para amarelo (#F1C40F)
    },
    function() {
      $(this).find('img').css('transform', 'scale(1)');  // Reverte o aumento
      $(this).find('h3').css('color', '#333');  // Reverte a cor para cinza escuro (#333)
    }
  );

  // Função de Inscrição na Newsletter
  $('#newsletter form').on('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = $('#newsletter input[type="email"]').val().trim(); // Valida o e-mail sem espaços extras
    if (email) {
      alert("Obrigado por se inscrever, " + email + "!");
      $('#newsletter input[type="email"]').val(''); // Limpa o campo de e-mail
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });

  // Menu Responsivo: Alternar visibilidade do menu em telas pequenas
  $(window).on('resize', function() {
    if ($(window).width() > 992) {
      $('.navbar-nav').show();  // Exibe o menu em telas grandes
      $('.navbar-toggler').hide();  // Esconde o ícone do hambúrguer em telas grandes
    } else {
      $('.navbar-nav').hide();  // Oculta o menu em telas pequenas
      $('.navbar-toggler').show();  // Exibe o ícone do hambúrguer em telas pequenas
    }
  }).trigger('resize'); // Aplica a lógica ao carregar a página

  // Alternar o menu no click do ícone do hambúrguer
  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('open');  // Alterna a classe para dar feedback visual no botão
    $('.navbar-nav').toggleClass('show');  // Alterna a visibilidade do menu
  });

});
