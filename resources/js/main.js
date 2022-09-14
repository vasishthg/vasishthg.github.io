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
    scale: 3
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
  $(".contact").hide("slide", {direction: "right"}, 1000)
})

$(".to-contact").click(function(){
  header.innerHTML = "VasishthG - Forté";
  $(".contact").show("slide", {direction: "up"}, 1000)
  $(".forte").hide("slide", {direction: "left"}, 1000)
})
