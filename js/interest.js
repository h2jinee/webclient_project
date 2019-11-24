$(".btn").click(function(){
  $(".menu").toggleClass("active");
});

// $( document ).ready(function() {
//     $('.trigger').click(function(){
//      $('#popup_layer, #overlay_t').show();
//      $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px");
//      // $('#popup_layer').css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
//  });
//  $('#overlay_t, .close').click(function(e){
//      e.preventDefault();
//      $('#popup_layer, #overlay_t').hide();
//  });
// });

// $(".btn1").click(function(){
//   $(".white_content").stop().fadeToggle(500);
// return false; //중요
// });

// $('.btn-example').click(function(){
//   var $href = $(this).attr('href');
//   layer_popup($href);
// });
// function layer_popup(el){

//   var $el = $(el);		//레이어의 id를 $el 변수에 저장
//   var isDim = $el.prev().hasClass('dimBg');	//dimmed 레이어를 감지하기 위한 boolean 변수

//   isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

//   var $elWidth = ~~($el.outerWidth()),
//       $elHeight = ~~($el.outerHeight()),
//       docWidth = $(document).width(),
//       docHeight = $(document).height();

//   // 화면의 중앙에 레이어를 띄운다.
//   if ($elHeight < docHeight || $elWidth < docWidth) {
//       $el.css({
//           marginTop: -$elHeight /2,
//           marginLeft: -$elWidth/2
//       })
//   } else {
//       $el.css({top: 0, left: 0});
//   }

//   $el.find('a.btn-layerClose').click(function(){
//       isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
//       return false;
//   });

//   $('.layer .dimBg').click(function(){
//       $('.dim-layer').fadeOut();
//       return false;
//   });

// }

// $(document).click(function(e){ //문서 body를 클릭했을때
//   if(e.target.className =="pop-layer"){return false} //내가 클릭한 요소(target)를 기준으로 상위요소에 .share-pop이 없으면 (갯수가 0이라면)
//   $(".dim-layer").stop().fadeOut(500);
// });

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
var num = 0;
var hiddenPlayer = $('#hidden-player');
var player = $('#player');
var title = $('.title');
var artist = $('.artist');
var cover = $('.list-music');

function secondsTimeSpanToHMS(s) {
	var h = Math.floor(s / 3600); //Get whole hours
	s -= h * 3600;
	var m = Math.floor(s / 60); //Get remaining minutes
	s -= m * 60;
	return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
};

songs = [{
		src: "./mp3/Lauv-I Like Me Better.mp3",
		title: "I Like Me Better",
		artist: "Lauv",
		coverart: "https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png"
	},

	{
		src: "./mp3/Troye Sivan-HEAVEN.mp3",
		title: "Heaven",
		artist: "TROYE SIVAN",
		coverart: "https://images-na.ssl-images-amazon.com/images/I/513VUhBNJzL._SY355_.jpg"
	},

	{
		src: "./mp3/THE1975-I Always Wanna Die (Sometimes).mp3",
		title: "I Always Wanna Die",
		artist: "THE1975",
		coverart: "data:image/jpeg;base64,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"
	},

	{
		src: "./mp3/DAY6 - 예뻤어.mp3",
		title: "You Were Beautiful",
		artist: "DAY6",
		coverart: "http://www.akbobada.cn/home/akbobada/archive/akbo/img/20170215095134.jpg"
	}
];

var initSongSrc = songs[0].src;
var initSongTitle = songs[0].title;
var initSongArtist = songs[0].artist;
var initSongCover = songs[0].coverart;

hiddenPlayer.attr("src", initSongSrc);
title.html(initSongTitle);
artist.html(initSongArtist);
cover.attr('src', initSongCover);

hiddenPlayer.attr('order', '0');
hiddenPlayer[0].onloadedmetadata = function() {
	var dur = hiddenPlayer[0].duration;
	var songLength = secondsTimeSpanToHMS(dur)
	var songLengthParse = songLength.split(".")[0];
	$('.end-time').html(songLengthParse);
};

var items = songs.length - 1;

$('._next').on('click', function() {
	var songOrder = hiddenPlayer.attr('order');

	if (items == songOrder) {
		num = 0;
		var songSrc = songs[0].src;
		var songTitle = songs[0].title;
		var songArtist = songs[0].artist;
		var songCover = songs[0].coverart;
		hiddenPlayer.attr('order', '0');
		hiddenPlayer.attr('src', songSrc).trigger('play');
		title.html(songTitle);
		artist.html(songArtist);
		cover.attr('src', songCover);
	} else {
		console.log(songOrder);
		num += 1;
		var songSrc = songs[num].src;
		var songTitle = songs[num].title;
		var songArtist = songs[num].artist;
		var songCover = songs[num].coverart;
		hiddenPlayer.attr('src', songSrc).trigger('play');
		title.html(songTitle);
		artist.html(songArtist);
		cover.attr('src', songCover);
    hiddenPlayer.attr('order', num);
    // updateCurrentTime();
    
	}
});

$('._previous').on('click', function() {
	var songOrder = hiddenPlayer.attr('order');

	if (songOrder == 0) {
		num = items;
		var songSrc = songs[items].src;
		var songTitle = songs[items].title;
    var songArtist = songs[items].artist;
		var songCover = songs[items].coverart;
		hiddenPlayer.attr('order', items);
		hiddenPlayer.attr('src', songSrc).trigger('play');
		title.html(songTitle);
    artist.html(songArtist);
		cover.attr('src', songCover);
	} else {
		num -= 1;
		var songSrc = songs[num].src;
		var songTitle = songs[num].title;
    var songArtist = songs[num].artist;
		var songCover = songs[num].coverart;
		hiddenPlayer.attr('src', songSrc).trigger('play');
		title.html(songTitle);
    artist.html(songArtist);
		cover.attr('src', songCover);
    hiddenPlayer.attr('order', num);
    // updateCurrentTime();
	}
});

$(".play-button").click(function() {
	$(this).toggleClass("paused");
	if ($(this).hasClass("paused")) {
		hiddenPlayer[0].pause();
	} else {
		hiddenPlayer[0].play();
	}
});


hiddenPlayer.on('timeupdate', function() {
	var songLength = secondsTimeSpanToHMS(this.duration)
	var songLengthParse = songLength.split(".")[0];
	$('.end-time').html(songLengthParse);

	var songCurrent = secondsTimeSpanToHMS(this.currentTime)
	var songCurrentParse = songCurrent.split(".")[0];
  $('.current-time').html(songCurrentParse);
	$('progress').attr("value", this.currentTime / this.duration);

	if (!hiddenPlayer[0]._pause) {
		$("._play-button").removeClass('paused');
		$('progress').css('cursor', 'pointer');
		
		
		$('progress').on('click', function(e) {
			var parentOffset = $(this).parent().offset(); 
			var relX = e.pageX - parentOffset.left;
			var percPos = relX * 100 / 355;
			var second = hiddenPlayer[0].duration * parseInt(percPos) / 100;
			console.log(second);
			hiddenPlayer[0].currentTime = second;
		})
	}
	
	if (this.currentTime == this.duration) {
		$('._next').trigger('click');
	}
});