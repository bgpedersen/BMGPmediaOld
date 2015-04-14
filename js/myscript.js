$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height

  var wheight = $(window).height(); //get the height of the window

  $('.fullheight').css('height', wheight); //set to window tallness  


  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });



  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#home') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#home') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('header a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-topoffset+2
      }, 500);
      return false;
      } //target.length
    } //click function
  }); //smooth scrolling


  $("#dynamicText").typed({
    strings: ["Web Developer...", "Teamplayer...", "Coder {}...", "UI interested..", "Frontend explorer..."],
    typeSpeed: 70,
    loop: true,
    showCursor: true
  });

  /*Animate projects*/
  $('.project_content_left').addClass("hiddenClass").viewportChecker({
    classToAdd: 'visibleClass animated fadeInLeft',
    offset: 50
  });
  $('.project_content_right').addClass("hiddenClass").viewportChecker({
      classToAdd: 'visibleClass animated fadeInRight',
      offset: 50
    });

/*Animate Skills*/
$('.progress-bar').addClass("hiddenClass").viewportChecker({
      classToAdd: 'visibleClass animated fadeInLeft',
      offset: 50,
      repeat: true
    });

$('.karokee p').addClass("hiddenClass").viewportChecker({
      classToAdd: 'visibleClass animated rubberBand',
      offset: 50,
      repeat: true
    });
$('.facebook').addClass("hiddenClass").viewportChecker({
      classToAdd: 'visibleClass animated bounce',
      offset: 50,
      repeat: true
    });





});/*ready*/