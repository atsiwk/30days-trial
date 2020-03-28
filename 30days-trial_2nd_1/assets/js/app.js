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


  /*
    Swipper
  ------------------------------------------------*/
  var swiper = new Swiper('.swiper-container', {
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

      if ('is-active-drawer') {
        $('body').removeClass('is-active-drawer');
        $('.js-drawer').attr('aria-expanded', false);
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

  /*
    Modal
  ------------------------------------------------*/
  $('.js-modal-open').click(function () {
    // body要素内の末尾にdiv要素を追加
    $('body').append('<div class="overlay js-modal-close"></div>');

    // .overlay をフェードイン
    $('.overlay').fadeIn(300);

    $('.p-privacy').fadeIn(300);

    // リンク機能を無効化
    return false;
  });

  // 非表示用のクリックイベント
  $('body').on('click', '.overlay', function () {
    // オーバーレイをクリックしたら自身をフェードアウトで非表示にし、コールバック関数発動
    $('.p-privacy').fadeOut(300);
    // プライバシーポリシーページをフェードアウト
    $(this).fadeOut(300, function () {
      // オーバーレイをフェードアウト完了後、削除
      $(this).remove();
    });
  });

  // 閉じるボタンをクリックしたらオーバーレイ、ページをフェードアウト
  $('.js-modal-close').click(function () {
    $('.p-privacy').fadeOut(300);
    $('.overlay').fadeOut(300, function () {
      // オーバーレイをフェードアウト完了後、削除
      $('.overlay').remove();
    });
    // リンク機能を無効化
    return false;
  });



});
