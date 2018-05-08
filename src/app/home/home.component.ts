import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var windowWidth = $(window).width();
      var windowHeight =  $(window).height();

      // magicline
      function magicLinePositionChangeMainmenu() {
          $magicLineMainMenu.stop().animate({
              left: $magicLineMainMenu.data('origLeft'),
              width: $magicLineMainMenu.data('origWidth')
          });
      }
      function magicLinePositionChangeSubmenu() {
          $magicLineSubMenu.stop().animate({
              top: $magicLineSubMenu.data('origTop'),
              height: $magicLineSubMenu.data('origHeight')
          });
      }

      if (windowWidth >= 768){
          var $el, leftPos, newWidth,topPos,newHeight;

          if($('.navbar-nav').hasClass('magic_menu')){
              /* Add Magic Line markup via JavaScript, because it ain't gonna work without */
              $('.navbar-nav').append("<li class='magic-line'></li>");

              /* Cache it */
              var $magicLineMainMenu = $('.navbar-nav>.magic-line,.navbar-nav>.magic-line2');
              var $magicLineSubMenu = $('.drop_down_list>.magic-line,.drop_down_list>.magic-line2');

              $magicLineMainMenu
                  .stop().animate({
                      left: $('.navbar-nav .active').position().left + 20,
                      width: $('.navbar-nav .active').width() - 40
                  }, 100, 'swing')
                  .data('origLeft', $('.navbar-nav .active').position().left + 20)
                  .data('origWidth', $('.navbar-nav .active').width() - 40);

              $('.navbar-nav>li').hover(function() {
                  $el = $(this);
                  leftPos = $el.position().left + 20;
                  newWidth = $el.width() - 40;

                  $magicLineMainMenu.stop().animate({
                      left: leftPos,
                      width: newWidth
                  });
              }, magicLinePositionChangeMainmenu);
          }
      }

      /* mobile menu */
      $('.navbar-toggle').on('click',function(){
        $(this).toggleClass('open');
      });

      function mobileMenu(selector,dropdown){
          $(selector + '> a').on('click', function(){
              $(this).parent().toggleClass('open').siblings('li').removeClass('open');
              $(this).siblings(dropdown).slideToggle();
              $(dropdown).not($(this).siblings(dropdown)).slideUp();
              $('.dropdwon').not($(this).siblings('.dropdwon')).slideUp();
              $('.megamenu').not($(this).siblings('.megamenu')).slideUp();
          }).removeAttr('href');
      }
      if (windowWidth < 768) {
          $('.dropdwon,.megamenu').hide();
          mobileMenu('.has_dropdown','.dropdwon');
          mobileMenu('.has_megamenu','.megamenu');
      }

      $('.scroll_top').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });


      /* Login modal js*/
      $('.login_modal_wrapper').hide();
      $('.login_modal > a').on('click',function(){
          $('.login_modal_wrapper').fadeToggle(500);
      });

      /* accordion jquery */
      $('.panel-title > a').on('click',function(){
          $(this).parents('.panel-heading').toggleClass('active');
          $('.panel-heading').not($(this).parents('.panel-heading')).removeClass('active');
          $(this).children('span.fa').toggleClass('fa-minus fa-plus');
          $('.panel-title span.fa').not($(this).children('span.fa')).removeClass('fa-minus').addClass('fa-plus');
      });

      // function foe custom trigger
      function customOwlTrigger(slider){
          /* custom trigger */
          $('.prev').on('click', function() {
              slider.trigger('next.owl.carousel');
          });
          $('.next').on('click', function() {
              slider.trigger('prev.owl.carousel');
          });
      }
      /*========= all sliders js =========*/

      // hero slider
      var $heroSlider = $('.hero_sliders');

          if ($heroSlider.length) {
              /*camera slider*/
              var heroSliderHeight = windowHeight < 600 ? 500 : windowHeight;
              $('.hero_sliders').camera({
                  height: heroSliderHeight + 'px',
                  pagination: false,
                  thumbnails: false,
                  hover: false,
                  loader: false,
                  time: 7000,
                  playPause: false,
                  fx: 'random',
                  onEndTransition: function() {
                      $('.cameraSlide img').addClass('grow');
                  }
              });
              var cameraContent = document.querySelector('.cameraContents');
              heroSliderHeight < 600 ? cameraContent.classList.add('down') : cameraContent.classList.remove('down');
          }

      $('.counter').counterUp({
          delay: 100,
          time: 2000
      });

      $('.testimonial_slider').owlCarousel({
          loop: true,
          margin: 25,
          nav: false,
          autoplay: true,
          dots: false,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2,
                  margin: 50
              },
              1000: {
                  items: 2
              }
          }
      });

      /* preloader js */
      $(window).on('load', function() {
          $('.preloader-container').fadeOut(1000);
          $('.preloader-bg').delay('500').fadeOut(1000);

          /*isotope and packery*/
          $('.portfolio_wrapper').isotope({
              layoutMode: 'packery',
              itemSelector: '.grid_item'
          });
      });

      $('.panel-title > a').on('click', function() {
        $(this).parents('.single_acco_title').toggleClass('active');
        $('.single_acco_title').not($(this).parents('.single_acco_title')).removeClass('active');
        $(this).children('span.icofont').toggleClass('icofont-caret-down icofont-caret-up');
        $('.panel-title span.icofont').not($(this).children('span.icofont')).removeClass('icofont-caret-up').addClass('icofont-caret-down');
      });
  }
}
