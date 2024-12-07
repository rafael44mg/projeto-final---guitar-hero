$(document).ready(function() {

  // Menu Responsivo: Alternar visibilidade do menu em telas pequenas
  $('.navbar-toggler').on('click', function() {
    // Alterna a classe para dar feedback visual no botão (abre/fecha o ícone do hambúrguer)
    $(this).toggleClass('open');
    
    // Alterna a classe 'show' no menu, exibindo ou ocultando o menu
    $('#navbarNav').toggleClass('show');
    
    // Adiciona ou remove a classe 'menu-open' do body para controle de fundo
    $('body').toggleClass('menu-open');
  });

  // Fechar o menu quando um link do menu for clicado em telas pequenas
  $('.navbar-nav .nav-link').on('click', function() {
    // Fecha o menu se ele estiver aberto
    if ($(window).width() <= 992) {
      $('#navbarNav').removeClass('show');
      $('body').removeClass('menu-open');
      $('.navbar-toggler').removeClass('open');
    }
  });

  // Menu Responsivo: Exibir ou ocultar o menu conforme o tamanho da tela
  $(window).on('resize', function() {
    if ($(window).width() > 992) {
      // Exibe o menu em telas grandes e remove quaisquer classes adicionais
      $('#navbarNav').addClass('show');
      $('.navbar-toggler').hide();
      $('body').removeClass('menu-open');
      $('.navbar-toggler').removeClass('open'); // Garante que o ícone hambúrguer volte ao estado fechado
    } else {
      // Oculta o menu em telas pequenas, a menos que ele já esteja aberto
      if (!$('#navbarNav').hasClass('show')) {
        $('#navbarNav').removeClass('show');
      }
      $('.navbar-toggler').show();
    }
  }).trigger('resize'); // Aplica a lógica ao carregar a página

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

});

$(document).ready(function() {

  // Menu Responsivo: Alternar visibilidade do menu em telas pequenas
  $('.navbar-toggler').on('click', function() {
    // Alterna a classe para dar feedback visual no botão (abre/fecha o ícone do hambúrguer)
    $(this).toggleClass('open');
    
    // Alterna a classe 'show' no menu, exibindo ou ocultando o menu
    $('#navbarNav').toggleClass('show');
    
    // Adiciona ou remove a classe 'menu-open' do body para controle de fundo
    $('body').toggleClass('menu-open');
  });

  // Menu Responsivo: Exibir ou ocultar o menu conforme o tamanho da tela
  $(window).on('resize', function() {
    if ($(window).width() > 992) {
      // Exibe o menu em telas grandes e remove quaisquer classes adicionais
      $('#navbarNav').addClass('show');
      $('.navbar-toggler').hide();
      $('body').removeClass('menu-open');
      $('.navbar-toggler').removeClass('open'); // Garante que o ícone hambúrguer volte ao estado fechado
    } else {
      // Oculta o menu em telas pequenas, a menos que ele já esteja aberto
      if (!$('#navbarNav').hasClass('show')) {
        $('#navbarNav').removeClass('show');
      }
      $('.navbar-toggler').show();
    }
  }).trigger('resize'); // Aplica a lógica ao carregar a página

});

$(document).ready(function() {
  // Alternar visibilidade do menu
  $('.navbar-toggler').on('click', function() {
    // Alterna a classe 'show' no menu
    $('.js--main-nav').toggleClass('show');
    
    // Alterna a classe 'open' no botão hambúrguer
    $(this).toggleClass('open');
    
    // Fecha o menu se ele estiver aberto
    if ($('.js--main-nav').hasClass('show')) {
      $('body').addClass('menu-open');
    } else {
      $('body').removeClass('menu-open');
    }
  });

  // Fechar o menu se a tela for redimensionada
  $(window).on('resize', function() {
    if ($(window).width() > 992) {
      $('.js--main-nav').addClass('show');  // Exibe o menu em telas grandes
      $('.navbar-toggler').hide();  // Esconde o ícone do hambúrguer
    } else {
      $('.js--main-nav').removeClass('show');  // Oculta o menu em telas pequenas
      $('.navbar-toggler').show();  // Exibe o ícone do hambúrguer
    }
  }).trigger('resize');  // Aplica a lógica ao carregar a página
});
