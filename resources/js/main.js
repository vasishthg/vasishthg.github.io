$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


// cursor
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
  
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($smallBall, .5, {
    scale: 5
  })
}
function onMouseHoverOut() {
  TweenMax.to($smallBall, .3, {
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
  header.innerHTML = "VasishthG- Works";
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