/*
  Wow.js
------------------------------------------------*/
new WOW().init();

/*
  objedt-fit IE
------------------------------------------------*/
objectFitImages();

$(function () {
  /*
    drawer Menu
  ------------------------------------------------*/
  $('.js-drawer').click(function () {
    $('body').toggleClass('is-active-drawer');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }

  });

  $('.js-drawer').click(function () {
    // 要素に「.overlayクラスの要素」があるかどうか？
    // ある時：フェードアウトして要素を削除
    if ($('.overlay').length) {
      $('.overlay').fadeOut(300, function () {
        $(this).remove();
      });
      // ない時：「.overlayクラスの要素」をbodyの末尾にフェードインで追加
    } else {
      $('header').append('<div class="overlay"></div>');
      $('.overlay').fadeIn(300);
    }

  });

  // 非表示用のクリックイベント
  $('body').on('click', '.overlay', function () {
    // オーバーレイをクリックしたら自身をフェードアウトで非表示にし、コールバック関数発動
    $('body').removeClass('is-active-drawer');
    $('.js-drawer').attr('aria-expanded', false);
    // プライバシーポリシーページをフェードアウト
    $(this).fadeOut(300, function () {
      // オーバーレイをフェードアウト完了後、削除
      $(this).remove();
    });
  });




  /*
    Swipper
  ------------------------------------------------*/
  var swiper = new Swiper('.swiper-container', {
    breakpoints: {
      // ウィンドウサイズが768px以下
      767: {
        slidesPerView: 1.3,
        spaceBetween: 24
      },
    },
    slidesPerView: 2.56,
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });


  /*
    スムーススクロール
  ------------------------------------------------*/
  $('.js-menu a').click(
    function () {
      var id = $(this).attr('href');
      var headerHight = $('.l-header').height();
      var position = $(id).offset().top - headerHight;

      if ($('.is-active-drawer').length) {
        $('body').removeClass('is-active-drawer');
        $('.js-drawer').attr('aria-expanded', false);
        $('.overlay').remove()
      }

      $('html, body').animate({
        'scrollTop': position
      }, 'slow');
      return false;
    });

  var pagetop = $('.js-pagetop');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
    return false;
  });

  /*
    PageTop Button
  ------------------------------------------------*/
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  // メニューをクリックしたら下線を引く
  $('.js-menu a').click(
    function () {
      $('.js-menu a').removeClass('border');
      $(this).addClass('border');
    });

  /*
    Accordion
  ------------------------------------------------*/
  $('.js-accordion dt').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
  });




});
