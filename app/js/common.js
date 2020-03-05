$(function() {
  $("#my-menu").mmenu({
    extensions: [
      "effect-menu-slide",
      "pagedim-black",
      "position-right",
      "theme-dark"
    ],
    navbar: {
      title: '<img src="img/logo.png" alt="Фотограф Есения Белоусова">'
    }
  });

  var api = $("#my-menu").data("mmenu");
  api.bind("open:before", function() {
    $(".hamburger").addClass("is-active");
  });
  api.bind("close:before", function() {
    $(".hamburger").removeClass("is-active");
  });

  $(".carousel-services").on("initialized.owl.carousel", function() {
    setTimeout(function() {
      carouselService();
    }, 100);
  });

  $(function() {
    $(".carousel-items").owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 700,
      navText: [
        '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
      ],
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        800: {
          items: 2
        },
        1100: {
          items: 3
        }
      }
    });

    function carouselService() {
		$('.carousel-text').equalHeights(); 
      $('.carousel-item').each(function() {
        var t = $(this);
        var h = t.find('.carousel-text').outerHeight();
        t.find('.carousel-pic').css('min-height', h);
      });
    }
    carouselService();
  });

  $('.carousel-text .h2').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });

  $('.s-king .h2').each(function () {
  	var ths = $(this);
  	ths.html(ths.html().replace(/^(\S+\s*)/, '<span>$1</span>'));
  });

  //Resize Windows
//   function onResize() {
//   	$('.carousel-text').equalHeights();
//   }
//   onResize();
//   $(window).bind('resize', function () {
//   	equalize();
//   });

  // $('.carousel-text').equalHeights()
  // $(window).resize(function()
  // {$('.carousel-text').equalHeights();});

  $(document).ready(function() {
    $(".carousel-text").equalHeights();
  });


  /* Selectize */
	// $("select").selectize();

  $(".reviews").owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

  $(".top").click(function() {
    $("html,body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

  $(document).ready(function() {
    //E-mail Ajax Send
    $("form.callback").submit(function() {
      //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        $(th)
          .find(".success")
          .addClass("active")
          .css("display", "flex")
          .hide()
          .fadeIn();
        setTimeout(function() {
          $(th)
            .find(".success")
            .removeClass("active")
            .fadeOut();
          th.trigger("reset");
        }, 3000);
      });
      return false;
    });
  });
});

$(window).on("load", function() {
  $(".preloader")
    .delay(500)
    .fadeOut('slow');
});
