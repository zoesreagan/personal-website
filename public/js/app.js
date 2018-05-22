console.log("connected");


$(window).scroll(function(){

  const windowTop = $(window).scrollTop();

  $('#intro').css({'bottom': windowTop * 1, "opacity": 1 - (windowTop/200)
});

  $('.header-bg').css('background-position-y', windowTop / 3);
    console.log(windowTop);
});
