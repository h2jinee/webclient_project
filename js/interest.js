
const btnOpen = document.querySelector('.btnOpen');
const btnClose = document.querySelector('.btnClose');


// ---------------


const tl = new TimelineMax({paused: true});

tl.timeScale(1);

tl.to('nav h1', 0.3, { opacity: 0 })

  .to(btnOpen, 0.5, {
    x: -300,
    opacity: 0,
    ease: Power2.easeInOut,
  }, '-=0.5')

  .to('nav ul', 0.5, {
    x: 0,
    ease: Power2.easeInOut,
  }, '-=0.5')

  .to(btnClose, 0.5, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: Power1.easeInOut,
  }, '-=0.5')


  .staggerFrom('nav li', 0.2, {
    opacity: 0,
    x: 70,
    ease: Back.easeOut,
  }, 0.06, '-=0.18');


// ---------------


openMenu = () => tl.play();
closeMenu = () => tl.reverse();

btnOpen.addEventListener('click', openMenu, false);
btnClose.addEventListener('click', closeMenu, false);

$( document ).ready(function() {
    $('.trigger').click(function(){
     $('#popup_layer, #overlay_t').show();
     $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px");
     // $('#popup_layer').css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
 });
 $('#overlay_t, .close').click(function(e){
     e.preventDefault();
     $('#popup_layer, #overlay_t').hide();
 });
});

//tab전환
$(function () {

  $(".tab_content").hide();
  $(".tab_content:first").show();

  $("ul.tabs li").click(function () {
      $("ul.tabs li").removeClass("active").css("color", "#333");
      //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
      $(this).addClass("active").css("color", "darkred");
      $(".tab_content").hide()
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn()
  });
});

// travel
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

// music
