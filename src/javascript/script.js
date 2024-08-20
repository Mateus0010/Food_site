$(document).ready(function() {
  // Menu móvel
  $('#mobile_btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navitems = $('.nav-item');

  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();
    
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navitems.removeClass('active');
    $(navitems[activeSectionIndex]).addClass('active');
  });

  // Submenu para o desktop
  $('#nav_list .nav-item:has(ul)').on('click', function(e) {
    e.preventDefault();
    $(this).find('ul').toggle();
  });

  // Submenu para o mobile
  $('#mobile_cardapio').on('click', function() {
    $('#mobile_cardapio_options').slideToggle();
  });

  // ScrollReveal
  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
  });

  ScrollReveal().reveal('#testimonial_chef', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
  });

  ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%'
  });
});
