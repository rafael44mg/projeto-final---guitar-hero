$(document).ready(function() {
  // Função para alternar o menu
  function toggleMenu() {
    $('.navbar-toggler').toggleClass('open');  // Alterna o ícone do hambúrguer
    $('#navbarNav').toggleClass('show');  // Alterna a visibilidade do menu
    $('body').toggleClass('menu-open');  // Alterna o fundo escurecido
  }

  // Quando o botão do menu (hambúrguer) é clicado
  $('.navbar-toggler').on('click', function() {
    toggleMenu();
  });

  // Quando um link do menu é clicado em telas pequenas, fecha o menu
  $('.navbar-nav .nav-link').on('click', function() {
    if ($(window).width() <= 992) {  // Verifica se está em uma tela pequena
      $('#navbarNav').removeClass('show');  // Remove a classe 'show' do menu (oculta)
      $('body').removeClass('menu-open');   // Remove o fundo escurecido
      $('.navbar-toggler').removeClass('open'); // Garante que o ícone do hambúrguer volte ao estado fechado
    }
  });

  // Quando a tela é redimensionada
  $(window).on('resize', function() {
    if ($(window).width() > 992) {  // Em telas grandes, mostra o menu
      $('#navbarNav').addClass('show');
      $('.navbar-toggler').hide();  // Esconde o ícone de hambúrguer
      $('body').removeClass('menu-open');  // Remove o fundo escurecido
      $('.navbar-toggler').removeClass('open');  // Garante que o ícone do hambúrguer volte ao estado fechado
    } else {  // Em telas pequenas, exibe o botão de hambúrguer
      $('#navbarNav').removeClass('show');  // Esconde o menu
      $('.navbar-toggler').show();  // Mostra o ícone do hambúrguer
    }
  }).trigger('resize');  // Aplica a lógica de redimensionamento ao carregar a página
});

  // Vitrine de Produtos - Animação no Hover
  $('.produto').hover(
    function() {
      // Aumenta a imagem ao passar o mouse
      $(this).find('img').css('transform', 'scale(1.1)');
      // Muda a cor do nome do produto para amarelo
      $(this).find('h3').css('color', '#F1C40F');
    },
    function() {
      // Reverte o aumento da imagem
      $(this).find('img').css('transform', 'scale(1)');
      // Reverte a cor do nome para cinza escuro
      $(this).find('h3').css('color', '#333');
    }
  );

  // Função de Inscrição na Newsletter
  $('#newsletter form').on('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var email = $('#newsletter input[type="email"]').val().trim(); // Valida o e-mail sem espaços extras
    if (email) {
      // Exibe mensagem de sucesso
      alert("Obrigado por se inscrever, " + email + "!");
      // Limpa o campo de e-mail
      $('#newsletter input[type="email"]').val('');
    } else {
      // Alerta se o e-mail não for válido
      alert("Por favor, insira um e-mail válido.");
    }
  });
