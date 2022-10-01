$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


// cursor
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}


// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15
      
    })
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

var header = document.querySelector("title")

$(".to-forte").click(function(){
  header.innerHTML = "VasishthG - Forté";
  $(".forte").show("slide", {direction: "up"}, 1000)
  $(".works").hide("slide", {direction: "left"}, 1000)
  closemobnav();
  $(".contact").hide("slide", {direction: "right"}, 1000)
})

$(".to-contact").click(function(){
  header.innerHTML = "VasishthG - Contact";
  $(".contact").show("slide", {direction: "up"}, 1000)
  $(".works").hide("slide", {direction: "left"}, 1000)
  closemobnav();
  $(".forte").hide("slide", {direction: "left"}, 1000)
})

$(".to-home").click(function(){
  header.innerHTML = "VasishthG";
  $(".contact").hide("slide", {direction: "up"}, 1000)
  $(".forte").hide("slide", {direction: "left"}, 1000)
  closemobnav();
  $(".works").hide("slide", {direction: "left"}, 1000)
})

$(".to-works").click(function(){
  alert("coming soon!")
  // header.innerHTML = "VasishthG- Works";
  $(".contact").hide("slide", {direction: "up"}, 1000)
  $(".forte").hide("slide", {direction: "left"}, 1000)
  closemobnav();
  $(".works").show("slide", {direction: "right"}, 1000)
})

var mentxt = document.getElementById('men')
$("#men").click(function(){
    if (mentxt.innerHTML === "Menu"){
      mentxt.innerHTML = "Close";
      $(".mobile-nav").slideDown(700);
    }
    else{
      closemobnav();
    }
})

function closemobnav(){
      mentxt.innerHTML = "Menu";
      $(".mobile-nav").slideUp(700);
}

$(".to-discord").click(function(){
  window.open("https://discord.com/users/915138167764549703")
})

$(".to-mail").click(function(){
  window.open("mailto:vasishthg.dev@gmail.com")
})

$(".to-github").click(function(){
  window.open("https://github.com/vasishthg")
})

(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) ;
      stat.innerHTML = perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());