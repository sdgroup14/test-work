  var Gallery = new Swiper('.swiper-container', {
      paginationClickable: true,
      slidesPerView: 1,
      nextButton: '.gallery-btn_next',
      prevButton: '.gallery-btn_prev'
  });

  $('.b-up-navigation-menu_item a[href^="#"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.close').removeClass('mobile-active');
      $('.open').addClass('mobile-active');
      $('.b-up-navigation-menu').removeClass('b-up-navigation-menu-active');
      setTimeout(function() {
        $('.b-up-navigation_logo').removeClass('b-up-navigation_logo-active');
      }, 450)
      setTimeout(function() {
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - $('.b-up-navigation').height()
        }, 350, 'swing', function() {
            window.location.hash = target;
        });
      }, 451)
    } else {
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - $('.b-up-navigation').height()
      }, 350, 'swing', function() {
          window.location.hash = target;
      });
    }
  });


  $(document).scroll(function() {
      $top = $(document).scrollTop();
      if ($top >= 1) {
          $('.b-up-navigation').addClass('b-up-navigation-active');
          $('.open svg, .close svg').css('stroke', '#ffffff');
      } else {
          $('.b-up-navigation').removeClass('b-up-navigation-active');
          $('.open svg, .close svg').css('stroke', '');
      }
  });


  $('.open').on('click', function() {
      $(this).removeClass('mobile-active');
      $('.close').addClass('mobile-active');
      $('.b-up-navigation_logo').addClass('b-up-navigation_logo-active');
      setTimeout(function() {
          $('.b-up-navigation-menu').addClass('b-up-navigation-menu-active');
      }, 450)
  });

  $('.close').on('click', function() {
      $(this).removeClass('mobile-active');
      $('.open').addClass('mobile-active');

      $('.b-up-navigation-menu').removeClass('b-up-navigation-menu-active');
      setTimeout(function() {
          $('.b-up-navigation_logo').removeClass('b-up-navigation_logo-active');
      }, 450)
  });