
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

