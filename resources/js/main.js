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

var audonload = new Audio("/resources/audio/onload.wav")
var audtransition = new Audio("/resources/audio/transition.wav")
var audhover = new Audio("/resources/audio/hover.mp3")

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15

    })
    $(".cursor").css("display", "block")
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

// Hover an element
function onMouseHover() {
  // audhover.play()
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
  $(".forte").show("slide", {direction: "up"}, 2000)
  $(".works").hide("slide", {direction: "left"}, 2000)
  closemobnav();
  $(".contact").hide("slide", {direction: "right"}, 2000)
  audtransition.play()
})

$(".to-contact").click(function(){
  header.innerHTML = "VasishthG - Contact";
  $(".contact").show("slide", {direction: "up"}, 2000)
  $(".works").hide("slide", {direction: "left"}, 2000)
  closemobnav();
  $(".forte").hide("slide", {direction: "left"}, 2000)
  audtransition.play()
})

$(".to-home").click(function(){
  header.innerHTML = "VasishthG";
  $(".contact").hide("slide", {direction: "up"}, 2000)
  $(".forte").hide("slide", {direction: "left"}, 2000)
  closemobnav();
  $(".works").hide("slide", {direction: "left"}, 2000)
  audtransition.play()
})

$(".to-works").click(function(){
  header.innerHTML = "VasishthG- Works";
  $(".contact").hide("slide", {direction: "up"}, 2000)
  $(".forte").hide("slide", {direction: "left"}, 2000)
  closemobnav();
  $(".works").show("slide", {direction: "right"}, 2000)
  audtransition.play()
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

;(function(){
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
        audonload.play()
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
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  console.log(check)
  if (check === true){
    $(".cursor").css("display", "none")
  }
};

window.mobileAndTabletCheck()


$("#audiocntrl").click(function(){
  if (document.getElementById("audiocntrl").innerHTML === '<svg class="controlbtn-vector" width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.0196 17.3184H14.8767L26.3053 5.88983V42.4613L14.8767 31.0327H8.0196C6.75724 31.0327 5.73389 30.0093 5.73389 28.747V19.6041C5.73389 18.3418 6.75724 17.3184 8.0196 17.3184Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.877 19.6041L40.0198 28.747" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.8767 28.747L40.0195 19.6041L30.8767 28.747Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'){
    console.log("noted")
    audonload = new Audio("/resources/audio/onload.wav")
    audtransition = new Audio("/resources/audio/transition.wav")
    audhover = new Audio("/resources/audio/hover.mp3")
    document.getElementById("audiocntrl").innerHTML = '<svg class="controlbtn-vector" width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.9314 35.9475C36.979 33.6618 38.5029 29.8523 38.5029 24.5189C38.5029 19.1856 36.979 15.3761 33.9314 13.0904M11.0743 17.6618H17.9314L29.36 6.23322V42.8046L17.9314 31.3761H11.0743C9.81192 31.3761 8.78857 30.3527 8.78857 29.0904V19.9475C8.78857 18.6851 9.81192 17.6618 11.0743 17.6618Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.9316 19.9475V29.0904" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  }
  else{
    document.getElementById("audiocntrl").innerHTML = '<svg class="controlbtn-vector" width="30" height="30" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.0196 17.3184H14.8767L26.3053 5.88983V42.4613L14.8767 31.0327H8.0196C6.75724 31.0327 5.73389 30.0093 5.73389 28.747V19.6041C5.73389 18.3418 6.75724 17.3184 8.0196 17.3184Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.877 19.6041L40.0198 28.747" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.8767 28.747L40.0195 19.6041L30.8767 28.747Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    audonload = ""
    audtransition = ""
    audhover = ""
    console.log(document.getElementById("audiocntrl").innerHTML)
  }
})

var darkMode = function darkMode(){
  $('head').append('<link rel="stylesheet" type="text/css" href="/resources/css/darkmode.css">');
  document.querySelector(".logo-nav").src = "resources/nav-logo2.svg"
  document.querySelector("#contactbtn-discord").innerHTML = '<svg class="contactbtn-svg" style="vertical-align: middle;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0417 6C19.7938 6.43516 19.573 6.88457 19.3803 7.34578C17.487 7.05222 15.5585 7.05222 13.6652 7.34578C13.4725 6.88457 13.2517 6.43516 13.0039 6C11.2204 6.29876 9.4867 6.83382 7.85028 7.59047C4.92403 11.7309 3.59695 16.7576 4.10677 21.7701C6.01376 23.1757 8.15408 24.2477 10.4333 24.9388C10.9523 24.2667 11.4155 23.5548 11.8184 22.81C11.0748 22.5412 10.3601 22.2011 9.6846 21.7946C9.86986 21.6737 10.0451 21.5387 10.2087 21.3909C12.1784 22.3211 14.3365 22.8041 16.5228 22.8041C18.709 22.8041 20.8672 22.3211 22.8368 21.3909C23.0115 21.5377 23.1862 21.6722 23.3609 21.7946C22.6818 22.1979 21.9678 22.5418 21.2271 22.8223C21.6133 23.5839 22.0641 24.3124 22.5748 25C24.8512 24.3112 26.9878 23.239 28.8888 21.8313C29.4109 16.8179 28.0827 11.7871 25.1453 7.65164C23.5273 6.87933 21.8107 6.32381 20.0417 6ZM12.3799 18.9073C11.7555 18.8633 11.1727 18.5839 10.7539 18.1277C10.3351 17.6714 10.1129 17.0739 10.1338 16.4604C10.1097 15.8461 10.3308 15.2468 10.7503 14.7899C11.1697 14.333 11.7543 14.0545 12.3799 14.0135C13.0055 14.0545 13.5902 14.333 14.0096 14.7899C14.429 15.2468 14.6502 15.8461 14.626 16.4604C14.6502 17.0747 14.429 17.6739 14.0096 18.1309C13.5902 18.5878 13.0055 18.8663 12.3799 18.9073ZM20.6656 18.9073C20.0411 18.8633 19.4583 18.5839 19.0395 18.1277C18.6207 17.6714 18.3985 17.0739 18.4195 16.4604C18.3953 15.8461 18.6165 15.2468 19.0359 14.7899C19.4553 14.333 20.04 14.0545 20.6656 14.0135C21.2923 14.0514 21.8789 14.329 22.2989 14.7867C22.719 15.2443 22.939 15.8453 22.9117 16.4604C22.939 17.0755 22.719 17.6765 22.2989 18.1341C21.8789 18.5917 21.2923 18.8694 20.6656 18.9073Z" fill="white"/></svg>'
  document.querySelector("#contactbtn-mail").innerHTML = '<svg class="contactbtn-svg" style="vertical-align: middle;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.911 6.62829L22.3116 7.88749L15.5016 12.9872L8.6915 7.83712L7.09207 6.57793C6.71528 6.26381 6.25531 6.068 5.76916 6.01475C5.28301 5.9615 4.79203 6.05315 4.35707 6.27834C3.9221 6.50354 3.56225 6.85238 3.3221 7.28166C3.08196 7.71094 2.97206 8.20178 3.00604 8.69338V23.2875C3.00604 23.7417 3.18508 24.1773 3.50378 24.4984C3.82248 24.8196 4.25472 25 4.70543 25H8.6915V15.279L15.5016 20.4291L22.3116 15.279V25H26.2977C26.7484 25 27.1806 24.8196 27.4993 24.4984C27.818 24.1773 27.9971 23.7417 27.9971 23.2875V8.69338C28.0205 8.20602 27.903 7.72229 27.6587 7.30099C27.4145 6.87968 27.0541 6.53895 26.6213 6.32021C26.1884 6.10146 25.7019 6.01413 25.2208 6.06882C24.7396 6.12352 24.2846 6.31788 23.911 6.62829V6.62829Z" fill="white"/></svg>'
  document.querySelector("#contactbtn-github").innerHTML = '<svg class="contactbtn-svg" style="vertical-align: middle;" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4C8.5958 4 3 9.59548 3 16.4993C3 22.0208 6.58056 26.7065 11.5485 28.3607C12.1739 28.4735 12.3994 28.0888 12.3994 27.7579C12.3994 27.4609 12.3894 26.6739 12.3857 25.6325C8.90786 26.3869 8.17345 23.9558 8.17345 23.9558C7.60698 22.5121 6.78609 22.1274 6.78609 22.1274C5.65189 21.3516 6.87257 21.3692 6.87257 21.3692C8.12833 21.4569 8.78629 22.6575 8.78629 22.6575C9.90169 24.5673 11.7139 24.0159 12.4233 23.6963C12.5373 22.888 12.8631 22.3366 13.2191 22.0246C10.4444 21.71 7.52677 20.6373 7.52677 15.8464C7.52677 14.4842 8.01429 13.3663 8.81011 12.4941C8.68353 12.177 8.25115 10.9051 8.93418 9.18569C8.93418 9.18569 9.98316 8.84858 12.3706 10.4652C13.3903 10.1878 14.442 10.0462 15.4987 10.0441C16.5555 10.0458 17.6073 10.1874 18.6269 10.4652C21.0156 8.84733 22.0633 9.18569 22.0633 9.18569C22.7463 10.9051 22.3177 12.177 22.1874 12.4941C22.9895 13.3663 23.4707 14.4829 23.4707 15.8464C23.4707 20.6499 20.5506 21.705 17.7659 22.0146C18.2108 22.4006 18.6118 23.1625 18.6118 24.328C18.6118 25.9997 18.5968 27.3481 18.5968 27.7579C18.5968 28.0925 18.8199 28.481 19.4578 28.3582C24.4232 26.7015 28 22.0196 28 16.4993C28 9.59548 22.4042 4 15.5 4Z" fill="white"/></svg>'
  document.querySelector(".no12-vector").innerHTML = '<path d="M2.0412 154.527C61.5411 187.527 41.186 99.9106 41 1.5" stroke="#c1c1c1" stroke-width="3" stroke-linecap="round"/>'
  document.querySelector("#heycircle").innerHTML = '<circle cx="25" cy="25" r="23" stroke="white" stroke-width="2.5"/>'
}

darkMode();